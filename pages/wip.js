import React from "react";
import { createGlobalStyle } from "styled-components";

import styled from "styled-components";
import { Header } from "../components";

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
    color: ${(props) => props.theme.colors.blue};
    font-size: ${(props) => props.theme.fontSizes.pM};
    @media (min-width: 768px){
      font-size: ${(props) => props.theme.fontSizes.p};
  }

  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.h1M};
    color: ${(props) => props.theme.colors.red};
    font-family: ${(props) => props.theme.fontFamily.title};
    letter-spacing: 5px;
    margin: 30px 0;
    text-shadow: 5px 5px white;
    @media (min-width: 768px){
        font-size: ${(props) => props.theme.fontSizes.h1};
    }
  } 
`;


const Ups = () => {
  return (
    <div>
      <GlobalStyle />
      <Header
        title="Inês Maio's Blog"
        description="Work in Progress"
        path="/"
        img="/icons/home.png"
      />
    </div>
  )
}




export default Ups