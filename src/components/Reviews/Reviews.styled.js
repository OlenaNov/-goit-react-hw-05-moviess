import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

export const Item = styled.li`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;
    border-radius: 8px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .9));
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: transform 0.3s ease;
    overflow: hidden;
    position: relative;

    :hover, :focus {
        tansform: scale(1.5);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transform: scale(1.05);
    }

    @media screen and (max-width: 1024px) {
        padding: 18px;
      }
`;

export const SubTitle = styled.h2`
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 12px;
    font-size: 24px;
    color: ${p => p.theme.colors.textStatic};

    @media screen and (max-width: 1024px) {
        font-size: 20px;
      }
`;

export const Text = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 12px;
    font-size: 20px;
    color: ${p => p.theme.colors.textStatic};

    @media screen and (max-width: 1024px) {
        font-size: 16px;
      }
`;