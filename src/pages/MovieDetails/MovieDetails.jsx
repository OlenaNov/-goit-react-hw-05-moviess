import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchFilms from "utilites/api";
import { StyledLink } from "components/Reviews/Reviews.styled";
import Movie from "components/Movie";

const MovieDetails = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    const [isLoading, setIsLoading] = useState(false);
    const [infoFilm, setInfoFilm] = useState(null);
    const { movieId } = useParams();

    const seeMovieDetails = async (controller, movieId) => {
        try {
            setIsLoading(true);
            const response = await fetchFilms(`/3/movie/${movieId}`, controller);
            setInfoFilm(response);
        } catch (error) {
            if(error.code !== 'ERR_CANCELED') {
                Notify.failure('OOps! Error loading information. Please, try again!');
            };

        } finally {
            setIsLoading(false);
        };
    };

    useEffect(() => {
        const controller = new AbortController();
        seeMovieDetails(controller, movieId);
            return () => controller.abort();
    }, [movieId]);


    return (
    <>
        {isLoading && <SyncLoader color="rgb(204, 0, 0, .7)" />}
        {infoFilm && (
            <>
            <Movie item={infoFilm} link={backLinkLocationRef.current} />
            <ul>
                <h3>Additional information</h3>
                <li>
                    <StyledLink to='cast'>Cast</StyledLink>
                </li>
                <li>
                    <StyledLink to='reviews'>Reviews</StyledLink>
                </li>
            </ul>
                <Suspense fallback={<SyncLoader color="#eb1736" />}>
                    <Outlet />
                </Suspense>
            </>
    )}
    </>
    );
};
export default MovieDetails;