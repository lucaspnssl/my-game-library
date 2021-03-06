import styled from "styled-components";

export const Container = styled.section `
    background: transparent;
    border-bottom: 1px solid #bfbfbf;
    width: 80%;
    display: flex;
    align-items: center;

    & + & {
        margin-top: 8px;
    }

    input {
        background: transparent;
        color: #d9d9d9;
        flex: 1;
        border: 0;
        height: 90%;
        font-size: 1rem;

        &::placeholder {
            color: #d9d9d9;
            opacity: 0.6;
        }
    }

    svg {
        margin-right: 16px;
    }
`;
