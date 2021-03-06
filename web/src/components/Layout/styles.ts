import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const Header = styled.div`
    position: absolute;
    background: #1a1a1a;
    width: 100%;
    height: 5.625rem;

    display: flex;
    justify-content: space-between;
    padding: 0.625rem 2.8125rem;
    align-items: center;
`;

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    height: 4.375rem;
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

    width: 2.8rem;
    height: 2.8rem;
    cursor: pointer;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    transition: opacity 0.2s;
    transition: box-shadow 0.2s;

    &:first-child {
        margin-right: 2.8rem;
    }

    &:hover {
        opacity: 0.6;
        box-shadow: 0 0 8px 1px #808080;
    }
`;

export const Profile = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 5rem;
`;

export const ProfileInfos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }

    img {
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 50%;
        border: 2px solid #ffffff;
        margin-right: 1.25rem;
    }

    p {
        font-size: 1.125rem;
        color: #b3b3b3;
    }
`;
