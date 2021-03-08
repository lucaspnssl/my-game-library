import styled, { css } from 'styled-components';

interface ContainerProps  {
    touchable: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #1a1a1a;
    border: 5px solid #660000;
    padding: 13px 15px 8px 15px; 
    border-radius: 8px;
    color: #f2f2f2;

    cursor: ${props => props.touchable ? 'pointer' : 'auto'};

    ${props => props.touchable && 
    css`
        transition: opacity 0.2s;
        
        &:hover {
            opacity: 0.9;
        }
    `}
`;

export const Title = styled.h1`
    font-size: 55px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Bebas Neue', 'Roboto Slab', serif;
    letter-spacing: 3px;
`;