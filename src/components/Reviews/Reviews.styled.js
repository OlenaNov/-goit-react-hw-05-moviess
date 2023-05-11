import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
text-decoration: none;
color: #5252d4;

&.active {
    color: #eb1736;
}
`;