import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

export const Item = styled.li`
    width: 200px;
    height: 280px;
    background-color: ${p => p.theme.colors.itemBackground};
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
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Details = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 8px;
    width: 100%;
    height: 25%;
    overflow: auto;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    `;

export const SubTitle = styled.h2`
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 12px;
    font-size: 20px;
    color: ${p => p.theme.colors.textStatic};
`;

export const Text = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 12px;
    font-size: 18px;
    color: ${p => p.theme.colors.textStatic};
`;