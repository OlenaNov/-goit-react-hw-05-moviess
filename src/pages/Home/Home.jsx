import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchMovies from '../../utilites/api';
import ListTrendingMovies from "components/ListTrendingMovies";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchTrand = async controller => {
        try {
            setIsLoading(true);
            const response = await fetchMovies('/3/trending/movie/day', controller);
            setTrendingMovies([...response.results]);

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
            {isLoading && <SyncLoader color="rgb(204, 0, 0, .7)" />}
            {trendingMovies.length 
            ? <ListTrendingMovies items={trendingMovies} />
            : null}
        </>
    );
};

export default Home;