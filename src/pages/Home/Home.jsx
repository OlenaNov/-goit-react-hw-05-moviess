import { useEffect, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptionsFailure } from "constants/notifyOptions";
import fetchMovies from '../../utilites/api';
import ListTrendingMovies from "components/ListTrendingMovies";
import Loader from "components/Loader/Loader";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchTrends = async controller => {
        const options = notifyOptionsFailure();

        try {
            setIsLoading(true);
            const response = await fetchMovies('/3/trending/movie/day', controller);
            setTrendingMovies([...response.results]);

        } catch (error) {
            if(error.code !== 'ERR_CANCELED') {
                Notify.failure('OOps! Error loading information. Please, try again!', options);
            };
        } 
        finally {
            setIsLoading(false);
        };
    };

    useEffect(() => {
            const controller = new AbortController();
            searchTrends(controller);

             return () => controller.abort();
        }, []);

    return (
        <>
            {isLoading && <Loader color="rgb(204, 0, 0, .7)" />}
            {trendingMovies.length 
            ? <ListTrendingMovies items={trendingMovies} />
            : null}
        </>
    );
};

export default Home;