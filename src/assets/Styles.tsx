import styled, { css } from "styled-components";
import Bg from "./Imagens/bg.png";

export const ViewPort = styled.main`
  ${() => css`
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #141c1e;
  `}
`;
export const MainContainer = styled.main`
  ${() => css`
    display: flex;
    width: 30rem;
    padding: 5rem;
    border: 0.3rem #20dce7 solid;
    border-radius: 1rem;
    height: auto;
    flex-direction: column;
    gap: 1rem;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
  `}
`;
export const CommentsDiv = styled.div`
  ${() => css`
    display: flex;
    width: 27rem;
    gap: 0.8rem;
    align-items: center;
    place-content: space-between;
  `}
`;
export const CommentInfoDiv = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;
