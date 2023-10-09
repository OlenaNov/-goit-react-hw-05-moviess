import styled from "styled-components";


export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 36px;
 padding: 28px;
`;

export const Svg = styled.svg`
margin-left: auto;
margin-right: auto;
fill: ${p => p.theme.colors.textStaticHover};
fill-opacity: 0.95;
stroke: none;
`;

export const Span = styled.span`
text-decoration: none;
font-size: 32px;
padding: 8px;
color: ${p => p.theme.colors.textStatic};
`;