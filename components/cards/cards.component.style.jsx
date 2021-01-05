import styled from "styled-components"


export const CardsContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: background-color 1s ease;
    flex-flow: wrap;
    &:hover{
        background-color: ${(props) => props.theme.colors.green};
    }
`

export const FlipCard = styled.div`
    height: 400px;
    width: 250px;
    background-color: transparent;
    flex-direction: row;
    margin: 50px;
    transition: transform 1s;
    transform-style: preserve-3d;
    flex: 0 0 auto;
    
    @media (min-width: 768px){
        perspective: 1000px;
        height: 450px;
        width: 350px;
    }
    @media (min-width: 1024px){
        perspective: 1000px;
        height: 500px;
        width: 350px;
    }
`

export const Titles = styled.div`
    padding: 10px;
    align-items: center;
    flex-direction: column;
`

export const Logo = styled.div`
    align-self: center;
    justify-content: center;
    display: flex;
    padding: 10px;
    width: 150px;
    height: auto;
    & img{
        height: 100%;
        width: 100%;
    }
`

export const Front = styled.div`
    height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 5px 2px 22px 0px grey;
    position: absolute;
    background-color: ${(props) => props.theme.colors.lightGreen};
    border: 1px solid ${(props) => props.theme.colors.salmon};
    justify-content: space-around;
    @media (min-width: 1024px){
        backface-visibility: hidden;
    }
`

export const Back = styled.div`
    display: none;
    @media (min-width: 1024px){
        display: flex; 
        flex-direction: column;
        border-radius: 30px;
        background-color: ${(props) => props.theme.colors.lightGreen};
        border: 1px solid ${(props) => props.theme.colors.salmon};
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        justify-content: space-around;
        box-shadow: 5px 2px 22px 0px grey;
        transform: rotateY(180deg);
        transform-style: preserve-3d;
        perspective: 1000px;
    }
`

export const CardImg = styled.div`
    width: 90% !important;
`

export const Description = styled.div`
    font-size: ${(props) => props.theme.fontSizes.pCard};
    padding: 20px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
`

export const Inner = styled.div`
        width: 100%;
        height: 100%;
        justify-content: space-around;
        transition: transform 2s;
        transform-style: preserve-3d;
        perspective: 1000px;
  `
  export const Flip = styled.div`
        width: 100%;
        height: 100%;
        justify-content: space-around;
        transition: transform 2s;
        transform-style: preserve-3d;
        perspective: 1000px;
        transform: rotateY(180deg);
  `