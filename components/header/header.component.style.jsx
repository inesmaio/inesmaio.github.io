
import styled from "styled-components"

export const HeaderStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/mobile-header.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    border-bottom: 5px solid ${(props) => props.theme.colors.salmon};
    height: 100vh;
    width: 100vw;
    @media (min-width: 1024px) {
        align-items: flex-end;
        flex-direction: column;
        background-image: url(/header-banner-shorter.jpg);
        background-size: cover;
        background-position: inherit;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 50vh;
    width: 60vw;
    @media (min-width: 1024px) {
        padding: 60px;
    }
`

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 30px;
    @media (min-width: 768px) {
        justify-content: space-evenly;
        & img {
            width: 70px;
           }
    }
    @media (min-width: 1024px) {
        justify-content: center;
        margin: 0 30px 90px;
            padding: 40px;
        margin: 0;
    }
    & a {
        transition: transform .8s;
        &:hover {
          transform: scale(1.2);
        }
    & img {
        box-shadow: 1px 1px 2px ${(props) => props.theme.colors.blue};
        border-radius: 10%;
        padding: 0;
        margin: 15px;
        width: 50px;
        @media (min-width: 768px) {
            width: 70px;
        }
      }
`

export const Title = styled.h1`
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h1M};
    font-family: ${(props) => props.theme.fontFamily.title};
    color: ${(props) => props.theme.colors.red};
    letter-spacing: 5px;
    margin: 30px 0;
    text-shadow: 5px 5px white;
        @media (min-width: 1024px) {
            font-size: ${(props) => props.theme.fontSizes.h1};
            align-content: center;
        }

`