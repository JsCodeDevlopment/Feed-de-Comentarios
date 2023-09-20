import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-decoration: none;
  }
  html {
    font-size: 62.5%;
  }

  html, #root{
    width: 100%;
    height: 100%;
  }

  img{
    width: 1.5rem;
    height: 1.7rem;
    cursor: pointer;
  }
`;