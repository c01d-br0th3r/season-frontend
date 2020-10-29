import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        &:hover {
            color: inherit;
        }
    }
`;

export default GlobalStyles;
