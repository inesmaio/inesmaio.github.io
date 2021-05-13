import styled from "styled-components"

export const Details = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PostDetailsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;
    margin: 20px;
    margin-top: 100px;

    @media (min-width: 1024px) {
        flex-direction: column;
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

`;

export const Post = styled.p`
    line-height: 40px;
    margin: 20px;
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.pM};
    @media (min-width: 768px){
        line-height: 40px;
        width: 80%;
        font-size: ${(props) => props.theme.fontSizes.p};
    }
`;

export const AuthorInfo = styled.p`
    line-height: 40px;
    text-align: left;
    width: 80%;
    font-size: ${(props) => props.theme.fontSizes.pM};
`;

export const Comments = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin:0;
`