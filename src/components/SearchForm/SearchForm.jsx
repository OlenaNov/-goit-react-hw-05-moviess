import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptionsFailure } from "constants/notifyOptions";
import { Input, Form, Submit } from "./SearchForm.styled";

const SearchForm = ({ onSubmitForm }) => {
    const [valueInput, setValueInput] = useState('');
    const options = notifyOptionsFailure();

    const makeSubmit = e => {
        e.preventDefault();
        if(!valueInput) {
            Notify.failure('Please, write the name of the movie!', options);
            return;
        };

        onSubmitForm(valueInput);
        setValueInput('');
    };

    return (
        <Form
            onSubmit={makeSubmit}
        >
            <Input 
                type='text'
                value={valueInput}
                placeholder="Enter movie title..."
                onChange={e => setValueInput(e.target.value)}
            />
            <Submit 
                type='submit'
            >Search</Submit>
        </Form>
    )
};

export default SearchForm;
