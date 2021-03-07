import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    margin: 80px 260px 0 260px;
    display: flex;
    justify-content: center;
`;

export const GameList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const GameCard = styled.div`
    width: 220px;
    height: 250px;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    text-align: center;
    flex-shrink: 0;
    margin-right: 26px;
    margin-bottom: 21px;

    img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
    }
`;
