import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiCameraMovie } from 'react-icons/bi';

export const Wrapper = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 28px 40px 24px;
    background-color: ${p => p.theme.colors.headerBackground};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    @media screen and (min-width: 768px) {
        padding: 36px 40px 32px;
      }

`;

export const Box = styled.div`
    display: flex;
    gap: 20px;
`;

export const Logo = styled(BiCameraMovie)`
    width: 28px;
    height: 28px;
    margin-right: 12px;
    color: inherit;

    @media screen and (min-width: 768px) {
        width: 36px;
        height: 36px;
        margin-right: 16px;
      }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 28px;
  padding: 8px;
  color: ${p => p.theme.colors.textStatic};

    @media screen and (min-width: 768px) {
        font-size: 36px;
      }

    &:not(:last-child) {
        margin-right: 20px;
      }

    &:hover, &:focus {
      color: ${p => p.theme.colors.textStaticHover};
    }

    &.active {
        color: ${p => p.theme.colors.textActive};

        &:hover, &:focus {
          color: ${p => p.theme.colors.textActiveHover};
        }
    }
`;