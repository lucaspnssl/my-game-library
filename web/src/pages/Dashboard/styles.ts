import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  },
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  },
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Introduction = styled.div`
    margin-left: 12.5rem;
    width: 25rem;

    animation: ${appearFromLeft} 1s;

    p {
        margin-top: 0.75rem;
        font-size: 1.25rem;
        font-family: "Roboto Slab", serif;
        font-weight: 500;
        line-height: 1.625rem;
        color: #1a1a1a;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const IntroTitle = styled.h1`
    font-size: 3.875rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Bebas Neue", "Roboto Slab", serif;
    letter-spacing: 4px;
    line-height: 3.25rem;
`;

export const Actions = styled.div`
    margin-right: 17.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Action = styled.div`
    &:first-child {
        margin-right: 7.5rem;
    }

    cursor: pointer;
    animation: ${appearFromRight} 1s;

    text-transform: uppercase;
    font-family: "Bebas Neue", "Roboto Slab", serif;
    letter-spacing: 2px;

    width: 8.75rem;
    height: 8.75rem;

    background: #1a1a1a;
    border: 1px solid #000000;
    border-radius: 8px;
    box-shadow: 0 0 8px 1px #000000;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.375rem 0.5rem;
    align-items: center;

    strong {
        font-size: 25px;
        text-align: center;
    }

    svg {
        width: 2.5rem;
        height: 2.5rem;
    }

    transition: opacity 0.2s;
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0 0 8px 1px #ffffff;
        opacity: 0.9;
    }
`;
