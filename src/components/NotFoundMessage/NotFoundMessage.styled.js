import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiCameraMovie } from 'react-icons/bi';

export const Wrapper = styled.div`
    margin-top: 24px;
    padding: 16px;
`;

export const Message = styled.p`
    font-size: 26px;
    color: rgb(255, 245, 238, 0.8);
`;

export const StyledLink = styled(Link)`
    padding: 8px;
    font-size: 30px;
    color: rgb(255, 245, 238, 0.8);
`;

export const Logo = styled(BiCameraMovie)`
    width: 32px;
    height: 32px;
    margin-left: 16px;
    margin-right: 8px;
    color: rgb(255, 245, 238, 0.8);
`;