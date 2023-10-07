import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptionsFailure } from "constants/notifyOptions";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "utilites/api";
import { Details, Image, Item, List, SubTitle, Text } from "./Cast.styled";
import defaultImage from '../../images/empty-photo.png';
import Loader from "components/Loader/Loader";

const Cast = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [infoCast, setInfoCast] = useState(null);

    const openCast = async (controller, movieId) => {
        const options = notifyOptionsFailure();
        try {
            setIsLoading(true);
            const response = await fetchMovies(`/3/movie/${movieId}/credits`, controller);
            setInfoCast(response);
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
        openCast(controller, movieId);
        return () => controller.abort();
    }, [movieId]);

    return (
        <>
        {isLoading && <Loader color="rgb(204, 0, 0, .7)" />}
        {infoCast && (
            <List>
                {infoCast.cast.map(item => (
                    <Item key={item.id}>
                        {item.profile_path
                        ? (<Image src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.name} />)
                        : <Image src={defaultImage} alt={item.name} />
                    }
                    <Details>
                        <SubTitle>{item.name}</SubTitle>
                        {item.character 
                        && <Text>Character: {item.character}</Text>}
                    </Details>
                    </Item>
                )) }
            </List>
        )}
        </>
    );
};

export default Cast;