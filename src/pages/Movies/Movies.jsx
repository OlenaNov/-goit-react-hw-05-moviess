import { useState, useEffect, useRef } from "react";
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
    const isFirstMount = useRef(true);

    useEffect(() => async () => {
        if(!isFirstMount.current) {
            return;
        };

        isFirstMount.current = false;

        if(valueSearch === '') {
            return;
        };
        const controller = new AbortController();
        try {
            setIsLoading(true);
            const response = await fetchFilms('/3/search/movie', controller, valueSearch);
            setSearchFilms([...response.results]);
        } catch(error) {
            Notify.failure('OOps! Error loading information. Please, try again!');
        } finally {
            setIsLoading(false);
        };

        return () => controller.abort();

    }, [valueSearch]);

    
    const handleSubmit = async value => {
        setSearchValue({ value });
                const controller = new AbortController();

        try {
            setIsLoading(true);
            const response = await fetchFilms('/3/search/movie', controller, value);
            setSearchFilms([...response.results]);
        } catch(error) {
            Notify.failure('OOps! Error loading information. Please, try again!');
        } finally {
            setIsLoading(false);
        };
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
