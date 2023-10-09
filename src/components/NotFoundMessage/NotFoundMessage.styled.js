import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiCameraMovie } from 'react-icons/bi';

export const Wrapper = styled.div`
    margin-top: 24px;
    padding: 16px;
`;

export const Message = styled.p`
    font-size: ${p => p.theme.fontSizes[5]};
    color: ${p => p.theme.colors.textStatic};
`;

export const StyledLink = styled(Link)`
    padding: 8px;
    font-size: ${p => p.theme.fontSizes[6]};
    color: ${p => p.theme.colors.textStatic};
`;

export const Logo = styled(BiCameraMovie)`
    width: 32px;
    height: 32px;
    margin-left: 16px;
    margin-right: 8px;
    color: ${p => p.theme.colors.textStatic};
`;