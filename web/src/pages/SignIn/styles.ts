import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

import BackgroundImg from '../../assets/background-sign-in.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35rem;
    min-width: 35rem;
    padding: 5rem;

    box-shadow: inset -2px 0 7px #000000;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
  opacity: 0.9;
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

export const LoginContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${appearFromLeft} 1s;
    
    > button {
        margin-top: 2.5rem;
        width: 80%;
    }

    > div {
        margin-bottom: 3.5rem;
    }

    > section  {
        margin-bottom: 1.875rem;       
        height: 2.5rem;
    }

    > a {
        color: #d9d9d9;
        display: block;
        margin-top: 2rem;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 1rem;
        }

        &:hover {
            color: ${shade(0.2, "#d9d9d9")};
        }
    }
`;