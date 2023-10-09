import styled from "styled-components";

export const Form = styled.form`

`;

export const Input = styled.input`
    padding: 12px;
    border: 1px solid rgb(255, 245, 238, 0.2);
    border-radius: 5px;
    background-color: ${p => p.theme.colors.inputBackgroundStatic};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 20px;
    color: ${p => p.theme.colors.textStatic};

    &:hover, :focus {
        border: 1px solid ${p => p.theme.colors.textStatic};
    }

    @media screen and (max-width: 767px) {
        max-width: 200px;
      }

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
        width: 500px;
      }

      @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
        width: 600px;
      }

`;

export const Submit = styled.button`
    padding: 12px;
    border: 1px solid rgb(255, 245, 238, 0.2);
    border-radius: 5px;
    background-color: ${p => p.theme.colors.inputBackgroundStatic};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 20px;
    color: ${p => p.theme.colors.textStatic};

    &:hover, :focus {
        border: 1px solid ${p => p.theme.colors.textStatic};
        color: ${p => p.theme.colors.textStatic};
    }
`;