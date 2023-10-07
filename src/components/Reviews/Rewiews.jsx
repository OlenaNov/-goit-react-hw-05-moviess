import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptionsFailure } from "constants/notifyOptions";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "utilites/api";
import { Item, List, SubTitle, Text } from "./Reviews.styled";
import Loader from "components/Loader";

const Reviews = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [infoReviews, setInfoReviews] = useState([]);

    const openReviews = async (controller, movieId) => {
        const options = notifyOptionsFailure();
        try {
            setIsLoading(true);
            const response = await fetchMovies(`/3/movie/${movieId}/reviews`, controller);
            setInfoReviews([...response.results]);
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
        openReviews(controller, movieId);
        return () => controller.abort();
    }, [movieId]);
   
    return (
        <>
        {isLoading && <Loader />}
        {infoReviews.length && !isLoading
        ? (<div>
            <List>
                {infoReviews.map(item => (
                    <Item key={item.id}>
                        <SubTitle>{item.author}</SubTitle>
                        <Text>{item.content}</Text>
                    </Item>
                )) }
            </List>
        </div>)
            : (<div>
                <SubTitle>We don`t have any reviews for this movie</SubTitle>
            </div>)}
        </>
    );
};

export default Reviews;
