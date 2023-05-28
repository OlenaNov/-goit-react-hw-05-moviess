import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: no-wrap;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;
    border-radius: 8px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .9));
    box-shadow: rgba(0, 0, 0, .07) 0px 1px 2px, rgba(0, 0, 0, .07) 0px 2px 4px, rgba(0, 0, 0, .07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, .07) 0px 16px 32px, rgba(0, 0, 0, .07) 0px 32px 64px;
    
    @media screen and (max-width: 1024px) {
        flex-wrap: wrap;
      }

`;

export const Box = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

export const Poster = styled.img`
    display: block;
    width: 360px;
    height: auto;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, .4) 0px 2px 4px, rgba(0, 0, 0, .3) 0px 7px 13px -3px, rgba(0, 0, 0, .2) 0px -3px 0px inset;

    @media screen and (max-width: 1024px) {
        width: 200px;
      }
`;

export const Title = styled.h1`
    color: rgb(255, 245, 238, .9);
    font-size: 20px;

    @media screen and (min-width: 1024px) {
        font-size: 36px;
      }
`;

export const Text = styled.p`
    color: rgb(255, 245, 238, .9);
    font-size: 16px;

    @media screen and (min-width: 1024px) {
        font-size: 24px;
      }
`;

export const Subtitle = styled.h2`
    color: rgb(255, 245, 238, .9);
    font-size: 18px;

    @media screen and (min-width: 768px) {
        font-size: 28px;
      }
`;

export const Genres = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`;

export const Genre = styled.span`
    padding: 4px;
    border-radius: 8px;
    border: 1px solid rgba(80, 20, 20, .3);
    background: rgba(80, 20, 20, .8);
    color: rgb(255, 245, 238);
    font-size: 18px;

    
    @media screen and (min-width: 1024px) {
        font-size: 24px;
      }
`;

export const LinkBack = styled(Link)`
    display: inline-block;
    margin-right: auto;
    margin-bottom: 24px;
    padding: 8px;
    font-size: 18px;
    color: rgb(204, 0, 0, .9);
`;