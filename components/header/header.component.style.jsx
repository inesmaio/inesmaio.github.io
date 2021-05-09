import styled from "styled-components"

export const HeaderStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/mobile-header.jpg);
    background-attachment: fixed;
    background-size: cover; 
    background-position: center;
    border-bottom: 5px solid ${(props) => props.theme.colors.salmon};
    height: 100vh;
    width: 100vw;
    @media (min-width: 1024px) {
        align-items: flex-end;
        flex-direction: column;
        background-image: url(/header-banner-shorter.jpg);
        background-position: fixed;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    @media (min-width: 1024px) {
        padding: 60px;
        height: 50vh;
        width: 60vw;

    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-bottom: 30px;
    @media (min-width: 768px) {
        & img {
            width: 70px;
           }
    }
    @media (min-width: 1024px) {
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
        margin: 8px;
        width: 30px;
        @media (min-width: 768px) {
            width: 50px;
            margin: 15;
        }
      }
`;

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

`;

export const LogoContainer = styled.section`
  margin-left: 20px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.img`
  height: 50px;
  with: 100%;
`;

export const LogoTitle = styled.h4`
  color: ${(props) => props.theme.colors.oldWhite};
  font-family: ${(props) => props.theme.fontFamily.title};
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.h2};
`;

export const HeaderBarContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  z-index: 1;
  flex-direction: row;
  padding: 10px;
  top: -150px;
  left: 0;
  background-color: ${(props) => props.theme.colors.green};
  box-shadow: inset 7px 7px 14px #92b8b6, 
              inset -7px -7px 14px #c6f8f6;
  border-bottom: 5px solid ${(props) => props.theme.colors.salmon};
  width: 100%;
  height: 90px;
  justify-content: space-between;

  &.drop {
  animation-name: drop;
  animation-duration: 0.5s;
}
  @keyframes drop {
    from {top: -150px}
    to {top: 0px}
  }
  &.hide {
  animation-name: hide;
  animation-duration: 1s;
}
  @keyframes hide {
    from {top: 0px}
    to {top: -150px}
  }
}
`;

export const ButtonsContainer = styled.section`
  display: flex;
  margin-right: 20px;
  align-items: center;
  justify-content: flex-end;
}
`;

export const Description = styled.p`
    width: 40vw;
    text-align: center;
`