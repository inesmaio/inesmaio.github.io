import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
    colors: {
        red: '#7c1d1d',
        blue: '#283451',
        lightGreen: '#dbf1ee',
        lightGreenSec: '#ebf8f6',
        green: '#acd8d6',
        salmon: '#C75959'
    },
    fontSizes: {
        h1: "150px",
        h1M: "80px",
        h1T: "40px",
        h2: "30px",
        h2M: "20px",
        h2T: "25px",
        h3: "20px",
        h3M: "18px",
        h3T: "20px",
        p: "30px",
        pT: "21px",
        pM: "18px",
        pCard: "20px",
        small: "25px",
        smallM: "18px",
    },
    fontFamily: {
        title: "AmaticSC",
        p: "JosefinSlab"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  export default Theme;