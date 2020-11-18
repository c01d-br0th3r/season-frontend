import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
    a {
        color: inherit;
        &:hover {
            color: inherit;
        }
    }

    .red1 {
        color: #dc143c
    }
    .red2 {
        color: #d43958
    }
    .red3 {
        color: #cc4e67
    }
    .red4 {
        color: #d66b81
    }
    .red5 {
        color: #de8a9a
    }
    .red6 {
        color: #e0adb7
    }
    .red7 {
        color: #f5d7dd
    }
    .gray {
        color: #f0f0f0
    }
    .green1 {
        color: #a6f6f1
    }
    .green2 {
        color: #e8ffff
    }
    .b_red1 {
        background-color: #dc143c
    }
    .b_red2 {
        background-color: #d43958
    }
    .b_red3 {
        background-color: #cc4e67
    }
    .b_red4 {
        background-color: #d66b81
    }
    .b_red5 {
        background-color: #de8a9a
    }
    .b_red6 {
        background-color: #e0adb7
    }
    .b_red7 {
        background-color: #f5d7dd
    }
    .b_gray {
        background-color: #f0f0f0
    }
    .b_green1 {
        background-color: #a6f6f1
    }
    .b_green2 {
        background-color: #e8ffff
    }
    .white {
        color: #f2f2f2;
    }
    .black {
        color: #121212;
    }
`;

export default GlobalStyles;
