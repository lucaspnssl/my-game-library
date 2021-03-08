import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const Header = styled.div`
    background: #1a1a1a;
    width: 100%;
    height: 90px;

    display: flex;
    justify-content: space-between;
    padding: 10px 45px;
    align-items: center;
`;

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    height: 70px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Action = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #000000;
    border: 1px solid #660000;
    border-radius: 8px;

    width: 45px;
    height: 45px;
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
    }

    transition: opacity 0.2s;
    transition: box-shadow 0.2s;

    &:first-child {
        margin-right: 45px;
    }

    &:hover {
        opacity: 0.6;
        box-shadow: 0 0 8px 1px #808080;
    }
`;
