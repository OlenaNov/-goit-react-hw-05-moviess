import SyncLoader from "react-spinners/SyncLoader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchFilms from "utilites/api";

const Cast = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [infoCast, setInfoCast] = useState(null);

    useEffect(() => async () => {

        const controller = new AbortController();
        try {
            setIsLoading(true);
            const response = await fetchFilms(`/3/movie/${movieId}/credits`, controller);
            setInfoCast(response);
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
        {infoCast && (
            <ul>
                {infoCast.cast.map(item => (
                    <li key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.name}  width='100px' min-height='150px' />
                        <h3>{item.name}</h3>
                        {item.character && <p>Character: {item.character}</p>}
                    </li>
                )) }
            </ul>
        )}
        </>
    );
};

export default Cast;