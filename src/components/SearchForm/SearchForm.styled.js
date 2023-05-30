import styled from "styled-components";

export const Form = styled.form`

`;

export const Input = styled.input`
    width: 280px;
    padding: 12px;
    border: 1px solid rgb(255, 245, 238, 0.2);
    border-radius: 5px;
    background-color: rgb(33, 7, 5, 0.3);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 20px;
    color: rgb(255, 245, 238, 0.8);

    &:hover, :focus {
        border: 1px solid rgb(255, 245, 238, 0.8);
    }

    @media screen and (min-width: 768px) {
        width: 600px;
      }

`;

export const Submit = styled.button`
    padding: 12px;
    border: 1px solid rgb(255, 245, 238, 0.2);
    border-radius: 5px;
    background-color: rgb(33, 7, 5, 0.3);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 20px;
    color: rgb(255, 245, 238, 0.8);

    &:hover, :focus {
        border: 1px solid rgb(255, 245, 238, 0.8);
        color: rgb(255, 245, 238, 0.8);
    }
`;