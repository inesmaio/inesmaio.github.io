import react from'react';
import { createGlobalStyle } from "styled-components";
import { LoadingContainer, Title, Gif } from "./loading.component.style"

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "AmaticSC";
    src: url("../font/AmaticSC-Bold.ttf");
  }

  @font-face {
    font-family: "JosefinSlab";
    src: url("../font/JosefinSlab-Regular.ttf");
  }
    body {
        margin: 0;
        background-color: ${(props) => props.theme.colors.lightGreen};
        font-family: "JosefinSlab";
        background-size: cover;
        background-attachment: fixed;
        overflow-x: hidden;
        color: ${(props) => props.theme.colors.salmon};
        font-family: ${(props) => props.theme.fontFamily.title};
        @media (min-width: 768px){
        font-size: ${(props) => props.theme.fontSizes.h1};
        }
    }
  `

const Loading = () => {
    return (
        <LoadingContainer>
            <GlobalStyle />
            <Title>Loading</Title>
            <Gif src="/loading.gif"></Gif>
        </LoadingContainer>
    )
}

export default Loading