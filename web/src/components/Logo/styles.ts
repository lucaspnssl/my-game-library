import styled, { css } from "styled-components";

interface ContainerProps {
    touchable: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #1a1a1a;
    border: 5px solid #660000;
    padding: 0.8125rem 0.9375rem 0.5rem 0.9375rem;
    border-radius: 8px;
    color: #f2f2f2;

    cursor: ${(props) => (props.touchable ? "pointer" : "auto")};

    ${(props) =>
        props.touchable &&
        css`
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.9;
            }
        `}
`;

export const Title = styled.h1`
    font-size: 3.5rem;

    font-weight: bold;
    text-transform: uppercase;
    font-family: "Bebas Neue", "Roboto Slab", serif;
    letter-spacing: 3px;
`;
