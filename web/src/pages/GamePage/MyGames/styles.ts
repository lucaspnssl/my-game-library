import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    margin: 5rem 16.25rem 0 260px;
    display: flex;
    justify-content: center;
`;

export const GameList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const GameCard = styled.div`
    width: 13.75rem;
    height: 15.625rem;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 0.625rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 0.625rem;
    text-align: center;
    flex-shrink: 0;
    margin-right: 1.625rem;
    margin-bottom: 1.32rem;

    img {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 0.625rem;
    }
`;
