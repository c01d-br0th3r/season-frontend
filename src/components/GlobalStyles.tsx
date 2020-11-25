import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box !important;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
    a {
        color: inherit;
        &:hover {
            color: inherit;
        }
    }

    #root {
        width: 100%;
        display: flex;
    }
    body {
        background-color: #f2f2f2;
    }
    .red1 {
        color: #dc143c !important;
    }
    .red2 {
        color: #d43958 !important;
    }
    .red3 {
        color: #cc4e67 !important;
    }
    .red4 {
        color: #d66b81 !important;
    }
    .red5 {
        color: #de8a9a !important;
    }
    .red6 {
        color: #e0adb7 !important;
    }
    .red7 {
        color: #f5d7dd !important;
    }
    .gray {
        color: #f0f0f0 !important;
    }
    .green1 {
        color: #a6f6f1 !important;
    }
    .green2 {
        color: #e8ffff !important;
    }
    .b_red1 {
        background-color: #dc143c !important;
    }
    .b_red2 {
        background-color: #d43958 !important;
    }
    .b_red3 {
        background-color: #cc4e67 !important;
    }
    .b_red4 {
        background-color: #d66b81 !important;
    }
    .b_red5 {
        background-color: #de8a9a !important;
    }
    .b_red6 {
        background-color: #e0adb7 !important;
    }
    .b_red7 {
        background-color: #f5d7dd !important;
    }
    .b_gray {
        background-color: #f0f0f0 !important;
    }
    .b_green1 {
        background-color: #a6f6f1 !important;
    }
    .b_green2 {
        background-color: #e8ffff !important;
    }
    .white {
        color: #f2f2f2 !important;;
    }
    .black {
        color: #121212 !important;;
    }

    .hide {
        display: none !important;
    }
`;

export default GlobalStyles;
