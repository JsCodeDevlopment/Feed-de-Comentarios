import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: Space Grotesk;
    text-decoration: none;
  }
  html {
    font-size: 62.5%;
  }

  html, #root{
    width: 100%;
    height: 100%;
  }
`;