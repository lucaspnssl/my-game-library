import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 4rem;

    > p {
        text-align: left;
    }
`;

interface ContentProps {
    isFocused: boolean;
}

export const Content = styled.div<ContentProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.2rem;
    width: 18rem;
    padding: 0.95rem 1rem;
    background: #e6e6e6;
    border: 1px solid #000000;
    border-radius: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 1;

    transition: all 400ms;

    ${(props) =>
        props.isFocused &&
        css`
            width: 38rem;
            box-shadow: 0 0 5px 0.4px #ffffff;
        `}

    input {
        background: transparent;
        flex: 1;
        border: 0;
        outline: none;
        font-size: 0.9rem;
        color: #000000;

        &::placeholder {
            opacity: 0.6;
            color: #b3b3b3;
        }
    }
`;

const appearFromTop = keyframes`
  from {
    transform: scaleY(0);
  },
  to {
    transform: scaleY(1);
  }
`;

export const GameList = styled.div`
    animation: ${appearFromTop} 200ms ease-in-out forwards;
    transform-origin: top center;
    position: absolute;
    top: 2rem;
    background: #e6e6e6;
    width: 38rem;
    box-shadow: 0 0 5px 0.4px #ffffff;

    border-radius: 0 0 0.8rem 0.8rem;
`;

export const GameElement = styled.div`
    color: #000000;
    padding: 0.5rem 0.8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;

    transition: opacity 200ms;

    &:hover {
        opacity: 0.7;
    }

    & + & {
        border-top: 1px solid #000000;
    }

    &:first-child {
        margin-top: 0.6rem;
    }

    > img {
        height: 3rem;
        width: 3rem;
        border-radius: 0.6rem;
        margin-right: 2rem;
    }
`;

export const GameInfo = styled.div`
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 0.8rem;
    }

    > p {
        font-size: 0.6rem;
        color: #595959;
        margin-top: 0.3rem;
    }
`;
