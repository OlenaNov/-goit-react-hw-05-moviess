import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import fetchFilms from '../../utilites/api';
import ListTrendingFilms from "components/ListTrendingFilms";

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => async () => {
            const controller = new AbortController();
            try {
                
                setIsLoading(true);
                const response = await fetchFilms('/3/trending/movie/day', controller);
                setTrendingFilms([...response.results]);

            } catch (error) {
                console.log('OOps! Error loading information. Please, try again!');
            } 
            finally {
                setIsLoading(false);
            };

            
            return () => {
                controller.abort();
            };
        }, []);

    return (
        <>
            {isLoading && <SyncLoader color="#eb1736" />}
            {trendingFilms.length 
            ? <ListTrendingFilms items={trendingFilms} />
            : null}
        </>
    );
};

export default Home;