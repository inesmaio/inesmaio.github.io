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
    justify-content: space-around;
    align-items: center;

    width: 400px;
    height: 600px;
    padding: 20px;
    margin: 50px;
    
    background-color: ${(props) => props.theme.colors.lightGreen};
    border: 1px solid ${(props) => props.theme.colors.salmon};
    border-radius: 30px;
    box-shadow: 2px 2px 10px 0px grey;
    
    flex: 0 0 auto;
    
`
export const Description = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;    
    font-size: ${(props) => props.theme.fontSizes.pT};
    padding: 20px;
    line-height: 30px;
    text-align: left;
    font-weight: bold;
    width: 350px;
    height: 300px;
    overflow: hidden;
    margin-bottom: 30px;
`

export const Title = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.h1T}
`

export const CardsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: flex-start;
`