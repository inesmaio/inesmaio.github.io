import styled from "styled-components"

export const Details = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

export const PostDetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    margin-top: 100px;
    @media (min-width: 1024px) {
       width: 70vw;
    }

`

export const Title = styled.h1`
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h1M};
    font-family: ${(props) => props.theme.fontFamily.title};
    color: ${(props) => props.theme.colors.red};
    letter-spacing: 5px;
    margin: 30px 0;
    text-shadow: 4px 4px white;
        @media (min-width: 1024px) {
            align-content: center;
            text-shadow: 5px 5px white;
        }

`;

export const Post = styled.p`
    line-height: 40px;
    margin: 20px;
    font-size: ${(props) => props.theme.fontSizes.pM};
    & img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 70px;
    }
    @media (min-width: 768px){
        line-height: 40px;
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
    align-items: center;
    width: 80%;
    margin:0;
    padding: 0;
    border: 1px solid ${(props) => props.theme.colors.green};
    border-radius: 15px;
    background: #ebf8f6;

`;

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: ${(props) => props.theme.fontSizes.pT};
`;

export const Avatar = styled.img`
    border: 0 solid;
    border-radius: 100%;
    margin: 20px;
`;

export const CommentContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Description = styled.div`
    & p {
        margin-top: 0;
    }
`;

export const CommentDetails = styled.div`
    font-size: ${(props) => props.theme.fontSizes.pM};
`