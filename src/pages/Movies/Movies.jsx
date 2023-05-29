import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptionsFailure } from "constants/notifyOptions";
import fetchFilms from '../../utilites/api';
import SearchForm from 'components/SearchForm';
import ListSearchFilms from 'components/ListSearchMovies';

const Movies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchFilms, setSearchFilms] = useState([]);
    const [searchValue, setSearchValue] = useSearchParams();
    const valueSearch = searchValue.get('value');

    const searchMovies = async (controller, valueSearch) => {
        const options = notifyOptionsFailure();
        try {
            setIsLoading(true);
            const response = await fetchFilms('/3/search/movie', controller, valueSearch);
            if(!response.results.length) {
                Notify.failure('Sorry, your query did not find anything. Try changing your query!', options);
                return;
            };
            setSearchFilms([...response.results]);
        } catch(error) {
            if(error.code !== 'ERR_CANCELED') {
                Notify.failure('OOps! Error loading information. Please, try again!', options);
            };
        } finally {
            setIsLoading(false);
        };
    };

    useEffect(() => {
        if(valueSearch) {
            const controller = new AbortController();
            searchMovies(controller, valueSearch);
            return () => controller.abort();
        };
    }, [valueSearch]);

    
    const handleSubmit = async value => {
        setSearchValue({ value });
};

    return (
        <>
        {isLoading && <SyncLoader color="rgb(204, 0, 0, .7)" />}
        <SearchForm 
            onSubmitForm={handleSubmit} 
        />
        {searchFilms 
        ? <ListSearchFilms items={searchFilms} />
        : null}
    </>
    );
};

export default Movies;
