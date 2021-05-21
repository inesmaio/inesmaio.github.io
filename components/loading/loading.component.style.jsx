import styled from 'styled-components'


export const LoadingContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.lightGreen};
    color: ${(props) => props.theme.colors.Salmon};
    font-size: ${(props) => props.theme.fontSizes.hM};
    margin: 0;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.oldWhite};
  font-family: ${(props) => props.theme.fontFamily.title};
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.h1};
`

export const Gif = styled.img`
    display: flex;
`