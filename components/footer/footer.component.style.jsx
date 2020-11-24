import styled from "styled-components"


export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
    padding-bottom: 60px;
    background-color: ${(props) => props.theme.colors.lightGreenSec};
    border-top: 5px solid ${(props) => props.theme.colors.salmon};
`

export const Creator = styled.section`
    display: flex;
`

export const Heart = styled.img`
    width: 40px;
    margin: 10px;
    color: ${(props) => props.theme.colors.blue};
`

export const Icons = styled.div`
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 30px;
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
            width: 50px;
        }
      }
`