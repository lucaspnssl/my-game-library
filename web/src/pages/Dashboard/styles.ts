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
    margin-left: 200px;
    width: 400px;

    animation: ${appearFromLeft} 1s;

    p {
        margin-top: 12px;
        font-size: 20px;
        font-family: "Roboto Slab", serif;
        font-weight: 500;
        line-height: 26px;
        color: #1a1a1a;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const IntroTitle = styled.h1`
    font-size: 62px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Bebas Neue", "Roboto Slab", serif;
    letter-spacing: 4px;
    line-height: 52px;
`;

export const Actions = styled.div`
    margin-right: 280px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Action = styled.div`
    &:first-child {
        margin-right: 120px;
    }

    cursor: pointer;
    animation: ${appearFromRight} 1s;

    text-transform: uppercase;
    font-family: "Bebas Neue", "Roboto Slab", serif;
    letter-spacing: 2px;

    width: 140px;
    height: 140px;

    background: #1a1a1a;
    border: 1px solid #000000;
    border-radius: 8px;
    box-shadow: 0 0 8px 1px #000000;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 22px 8px;
    align-items: center;

    strong {
        font-size: 25px;
        text-align: center;
    }

    svg {
        width: 40px;
        height: 40px;
    }

    transition: opacity 0.2s;
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0 0 8px 1px #ffffff;
        opacity: 0.9;
    }
`;
