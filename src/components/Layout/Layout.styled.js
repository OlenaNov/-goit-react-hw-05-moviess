import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    background-color: #5252d4;
    width: 100%;
    height: 60px;
    padding: 16px;
    padding-top: 32px;
    margin-bottom: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const Main = styled.main`
    padding: 24px;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-size: 36px;
    padding: 8px;
    color: #fff;

    &:not(:last-child) {
        margin-right: 16px;
      }

    &.active {
        color: #eb1736;
    }
`;