import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchFilms from '../../utilites/api';
import ListTrendingFilms from "components/ListTrendingFilms";

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchTrand = async controller => {
        try {
            setIsLoading(true);
            const response = await fetchFilms('/3/trending/movie/day', controller);
            setTrendingFilms([...response.results]);

        } catch (error) {
            if(error.code !== 'ERR_CANCELED') {
                Notify.failure('OOps! Error loading information. Please, try again!');
            };
        } 
        finally {
            setIsLoading(false);
        };
    };

    useEffect(() => {
            const controller = new AbortController();
            searchTrand(controller);

             return () => controller.abort();
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