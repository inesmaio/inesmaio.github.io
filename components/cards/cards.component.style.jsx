import styled from "styled-components"


export const CardsContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.green};
    flex-flow: wrap;
`

export const FlipCard = styled.div`
    height: 330px;
    width: 250px;
    background-color: transparent;
    flex-direction: row;
    margin: 50px;
    flex: 0 0 auto;
    perspective: 1000px;
    @media (min-width: 768px){
        perspective: 1000px;
    }
    @media (min-width: 1024px){
        perspective: 1000px;
        height: 500px;
        width: 350px;
        transition: transform 1s;
        :hover {
            transform: scale(1.05)
        }
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
    & .portfolio{
        width: 300px;
    }
    
`

export const Front = styled.a`
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
    text-decoration: none;
    perspective: 1000px;
 
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


        
  export const Content = styled.div`
        box-sizing: border-box;
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: none;
        border-radius: 30px;
        border: 1px solid #C75959;
        opacity: 0;
        transition: 1s;
        
        & h3 {
            color: ${(props) => props.theme.colors.blue};
        }
`

export const PortCard = styled.div`
        display: flex;
        position:absolute;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        border: 1px solid #C75959;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 1;
        transition: 1s;
        background-image: ${props => props.backgroundImage};
`

export const PortCardContainer = styled.a`
    width: 258px;
    height: 163px;
    margin: 50px;
    position:relative;
    top:0px;
    left:0px;
    border-radius: 30px;
    box-shadow: 5px 2px 22px 0px grey;
    background-color: ${(props) => props.theme.colors.lightGreen};
    border: 1px solid ${(props) => props.theme.colors.salmon};
    cursor: pointer;
    text-decoration: none;
    &:hover ${Content} {
        opacity: 1;
        background-color: ${(props) => props.theme.colors.lightGreen};
    }
    &:hover ${PortCard} {
        opacity: 0;
    }
    @media (min-width: 768px){
        width: 349px;
        height: 220px;
    }
`;
