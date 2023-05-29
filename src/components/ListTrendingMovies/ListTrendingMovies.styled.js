import styled from "styled-components";

export const Title = styled.h1`

    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
`;
