import styled, { css } from "styled-components";

export const ViewPort = styled.main`
${()=> css`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #fcf7d3;
`}
`
export const MainContainer = styled.main`
${()=> css`
    display: flex;
    width: 30rem;
    padding: 5rem;
    border: 0.3rem #b5485f solid;
    border-radius: 1rem;
    height: auto;
    flex-direction: column;
    gap: 1rem;
    background-color: #eecfc4;
    align-items: center;
    justify-content: center;
`}
`