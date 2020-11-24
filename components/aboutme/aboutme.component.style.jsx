import styled from "styled-components"

export const AboutMe = styled.section`
    height: 55vh;
    line-height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 5px solid ${(props) => props.theme.colors.salmon};
    border-top: 5px solid ${(props) => props.theme.colors.salmon};
    & img {
        width: 40px;
        padding: 5px;
    }
    & p, div {
        margin: 20px 0;
        & section {
            margin-bottom: 20px;
        }
    }
}
@media (min-width: 1024px) {
    & p {
    margin: 40px;
}
}
`
export const Description = styled.section`
    margin: 20px 0;
    width: 35vw;
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
`