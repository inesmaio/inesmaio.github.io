import React, { useEffect } from "react";
import { AboutMeSec, Header, Banner, Cards, Footer, PortfolioCards } from "../components";
import { experience, education, portfolio } from "../public/data";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


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

  h2 {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h2M};
    color: ${(props) => props.theme.colors.red};
    font-family: ${(props) => props.theme.fontFamily.title};
    letter-spacing: 1px;
    margin: 10px 0px 0px;
    font-weight: normal;
    @media (min-width: 768px){
      font-size: ${(props) => props.theme.fontSizes.h2};
    }
  }
  h3 {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h3M};
    color: ${(props) => props.theme.colors.red};
    font-family: ${(props) => props.theme.fontFamily.title};
    letter-spacing: 1px;
    margin: 10px 0px 0px;
    font-weight: bold;
    @media (min-width: 768px){
      font-size: ${(props) => props.theme.fontSizes.h3};
    }
  } 
`;

const AppContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
`;

const Index = () => {

  const scroll = () => {
    const element = document.getElementById("menuBar");
    if (element && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
      element.style.top = "0";
      element.classList.remove("hide")
      element.classList.add("drop")
    } else if (element) {
      element.style.top = "-150px";
      element.classList.remove("drop")
      element.classList.add("hide")

    }
  }

  useEffect(() => {
    addEventListener("scroll", scroll);

    return () => {
      removeEventListener("scroll", scroll);
    }
  }, [])

  return (
    <AppContainer>
      <GlobalStyle />
      <Header
        title="Inês Maio"
        path="/blog"
        img="/icons/blog.png"
      />
      <Banner img_src="/aboutme-banner-low.jpg" title="About Me" />
      <AboutMeSec />
      <Banner img_src="/exp-low.jpg" title="Portfolio" />
      <section>
        <PortfolioCards data={portfolio} />
      </section>
      <Banner img_src="/education-banner-low.jpg" title="Education" />
      <section>
        <Cards data={education} />
      </section>
      <Banner img_src="/exp-low.jpg" title="Experience" />
      <section>
        <Cards data={experience} />
      </section>
      <Footer
        path="/blog"
        img="/icons/blog.png"
      />
    </AppContainer>
  )
};

export default Index;