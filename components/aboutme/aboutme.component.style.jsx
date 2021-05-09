import styled from "styled-components"

export const AboutMe = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 5px solid ${(props) => props.theme.colors.salmon};
    border-top: 5px solid ${(props) => props.theme.colors.salmon};
    & p, div {
        margin: 20px 0;
        & section {
            margin-bottom: 20px;
        }
    }
    @media (min-width: 768px) {
        flex-direction: row;
        & img {
            width: 30px;
        }
        & p {
        margin: 40px;
    }
}
`
export const Description = styled.section`
    line-height: 30px;
    margin: 20px;
    width: 80%;
    font-size: ${(props) => props.theme.fontSizes.pM};
    @media (min-width: 768px){
        line-height: 40px;
        width: 40%;
        font-size: ${(props) => props.theme.fontSizes.p};
    }
`

export const ContentCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PetsIcons = styled.section`
    @media (min-width: 768px) {
        height: 300px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    & img {
        width: 40px;
        margin: 8px;
        @media (min-width: 768px) {
            width: 50px;
            margin: 8px;
        }
    }
`