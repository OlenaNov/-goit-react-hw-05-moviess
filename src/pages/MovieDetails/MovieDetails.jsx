import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchFilms from "utilites/api";
import { StyledLink } from "components/Reviews/Reviews.styled";
import ItemMovie from "components/ItemMovie";

const MovieDetails = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    const [isLoading, setIsLoading] = useState(false);
    const [infoFilm, setInfoFilm] = useState(null);
    const { movieId } = useParams();

    useEffect(() => async () => {
        const controller = new AbortController();
            try {
                setIsLoading(true);
                const response = await fetchFilms(`/3/movie/${movieId}`, controller);
                setInfoFilm(response);
            } catch (error) {
                Notify.failure('OOps! Error loading information. Please, try again!');
            } finally {
                setIsLoading(false);
            };

            return () => controller.abort();
    }, [movieId]);


    return (
    <>
        {isLoading && <SyncLoader color="#eb1736" />}
        {infoFilm && (
            <>
            <ItemMovie item={infoFilm} link={backLinkLocationRef.current} />
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