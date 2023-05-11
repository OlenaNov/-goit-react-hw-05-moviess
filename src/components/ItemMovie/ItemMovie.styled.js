import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div``;

export const Poster = styled.img`
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const StyledLink = styled(NavLink)`
text-decoration: none;
color: #5252d4;

&.active {
    color: #eb1736;
}
`;