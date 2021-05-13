import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { Header, PostCard } from "../components"
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

const BlogContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
`;

const Blog = () => {
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
        <BlogContainer>
            <GlobalStyle />
            <Header
                title="Inês Maio's Blog"
                description={<div><p>Hi there, <br /><br />My name is Inês Maio, was born on the 80's, survived my teen years with Pearl Jam, Nirvana, Jeff Buckley by my side on 90's.</p>
                    <p>Got my first job and graduate from Information Technologies on 00's. </p><p>Met my other half and got to be a mom of four cats, two dogs and one little girl. On the 10's</p>
                    <p>On the 20's I'm sharing one of the most challenging projects of my life: <i>Becoming a Frontend Developer</i>.<br /> My main topics will be about JavaScript and React. Enjoy it :)</p></div>}
                path="/"
                img="/icons/home.png"
            />
            <PostCard />
        </BlogContainer>
    )
}




export default Blog