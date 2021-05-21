import styled from "styled-components"


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 250px;
    height: 500px;
    padding: 20px;
    margin: 10px;
    
    
    background-color: ${(props) => props.theme.colors.lightGreen};
    border: 1px solid ${(props) => props.theme.colors.salmon};
    border-radius: 30px;
    box-shadow: 2px 2px 10px 0px grey;
    
    flex: 0 0 auto;
    @media (min-width: 768px) {
        width: 400px;
        height: 600px;
        margin: 50px;
        justify-content: space-around;
    }
    
`
export const Description = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;    
    font-size: ${(props) => props.theme.fontSizes.pM};
    padding: 20px;
    line-height: 30px;
    text-align: left;
    font-weight: bold;
    width: auto;
    height: 300px;
    overflow: hidden;
    margin-bottom: 30px;
`

export const TitleSec = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.h2}
`

export const Title = styled.h2`
    display: none;
    font-size: ${(props) => props.theme.fontSizes.h1M};
    text-shadow: 4px 4px white;
    @media (min-width: 768px){
        display: flex;
        font-size: ${(props) => props.theme.fontSizes.h1};
        text-shadow: 5px 5px white;
    }
`

export const CardsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
`