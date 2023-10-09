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
    padding: ${p => p.theme.space[5]} ${p => p.theme.space[8]} ${p => p.theme.space[5]};
    background-color: ${p => p.theme.colors.headerBackground};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
        padding: ${p => p.theme.space[6]} ${p => p.theme.space[9]} ${p => p.theme.space[6]};
      }

`;

export const Box = styled.div`
    display: flex;
    gap: 20px;
`;

export const Logo = styled(BiCameraMovie)`
    width: ${p => p.theme.fontSizes[4]};
    height: ${p => p.theme.fontSizes[4]};
    margin-right: ${p => p.theme.space[3]};
    color: inherit;

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
        width: ${p => p.theme.fontSizes[5]};
        height: ${p => p.theme.fontSizes[5]};
        margin-right: ${p => p.theme.space[4]};
      }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[4]};
  padding: 8px;
  color: ${p => p.theme.colors.textStatic};

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
        font-size: ${p => p.theme.fontSizes[5]};
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