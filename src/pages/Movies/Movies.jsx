import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchFilms from '../../utilites/api';
import SearchForm from 'components/SearchForm';
import ListSearchFilms from 'components/ListSearchFilms';

const Movies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchFilms, setSearchFilms] = useState([]);
    const [searchValue, setSearchValue] = useSearchParams();
    const valueSearch = searchValue.get('value');

    const searchMovies = async (controller, valueSearch) => {
        try {
            setIsLoading(true);
            const response = await fetchFilms('/3/search/movie', controller, valueSearch);
            setSearchFilms([...response.results]);
        } catch(error) {
            if(error.code !== 'ERR_CANCELED') {
                Notify.failure('OOps! Error loading information. Please, try again!');
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
        {isLoading && <SyncLoader color="#eb1736" />}
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
