import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptionsFailure } from "constants/notifyOptions";
import fetchMovies from "utilites/api";
import Movie from "components/Movie";

const MovieDetails = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    const [isLoading, setIsLoading] = useState(false);
    const [infoFilm, setInfoFilm] = useState(null);
    const { movieId } = useParams();

    const openMovieDetails = async (controller, movieId) => {
        const options = notifyOptionsFailure();
        try {
            setIsLoading(true);
            const response = await fetchMovies(`/3/movie/${movieId}`, controller);
            setInfoFilm(response);
        } catch (error) {
            if(error.code !== 'ERR_CANCELED') {
                Notify.failure('OOps! Error loading information. Please, try again!', options);
            };
        } finally {
            setIsLoading(false);
        };
    };

    useEffect(() => {
        const controller = new AbortController();
        openMovieDetails(controller, movieId);
            return () => controller.abort();
    }, [movieId]);


    return (
    <>
        {isLoading && <SyncLoader color="rgb(204, 0, 0, .7)" />}
        {infoFilm && (
            <>
            <Movie item={infoFilm} link={backLinkLocationRef.current} />
                <Suspense fallback={<SyncLoader color="rgb(204, 0, 0, .7)" />}>
                    <Outlet />
                </Suspense>
            </>
    )}
    </>
    );
};
export default MovieDetails;