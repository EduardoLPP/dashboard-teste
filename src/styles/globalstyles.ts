import { createGlobalStyle } from "styled-components";
import { pixelToRem } from "../utils/functions";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        @media(max-width: 1440px){
            /* font-size: 93.75%; */
        }

        @media(max-width: 375px){
            /* font-size: 87.5%; */
        }
    }

    body{
        -webkit-font-smoothing: antialised;
        background-color: var(--dark-purple);
    }
    
    body, input, textarea, button{
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
    }

    :root{
        --gray: #e2e8f0;
        --white: #ffffff;
        --dark-purple: #2e1d6a;
        --purple: #805ad5;

        --heading: 700 ${pixelToRem(18)}/${pixelToRem(65)} "Ubuntu", sans-serif;
        --sub-heading: 600 ${pixelToRem(27)}/${pixelToRem(25)} "Ubuntu", sans-serif;
        --main-heading: 800 ${pixelToRem(45)}/${pixelToRem(65)}"Ubuntu", sans-serif;
        --base-font: 500 ${pixelToRem(16)}/${pixelToRem(18)} "Ubuntu", sans-serif;
        --warning: 500 ${pixelToRem(40)}/${pixelToRem(18)} "Ubuntu", sans-serif;
    }
`;