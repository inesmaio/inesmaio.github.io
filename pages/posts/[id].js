import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { createGlobalStyle } from "styled-components";
import { fetchPost, fetchComments } from '../../services/wp.api.service';
import { FixHeaderBar, PostDetails, Footer } from '../../components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "AmaticSC";
    src: url("../font/AmaticSC-Bold.ttf");
  }

  @font-face {
    font-family: "JosefinSlab";
    src: url("../font/JosefinSlab-Regular.ttf");
  }

  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.lightGreen};
    font-family: "JosefinSlab";
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
    color: ${(props) => props.theme.colors.blue};
    font-size: ${(props) => props.theme.fontSizes.pM};
    @media (min-width: 768px){
      font-size: ${(props) => props.theme.fontSizes.p};
  }

  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.h1M};
    color: ${(props) => props.theme.colors.red};
    font-family: ${(props) => props.theme.fontFamily.title};
    letter-spacing: 5px;
    margin: 30px 0;
    text-shadow: 5px 5px white;
    @media (min-width: 768px){
        font-size: ${(props) => props.theme.fontSizes.h1};
    }
  }

  h2 {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h2M};
    color: ${(props) => props.theme.colors.red};
    font-family: ${(props) => props.theme.fontFamily.title};
    letter-spacing: 1px;
    margin: 10px 0px 0px;
    font-weight: normal;
    @media (min-width: 768px){
      font-size: ${(props) => props.theme.fontSizes.h2};
    }
  }
  h3 {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h3M};
    color: ${(props) => props.theme.colors.red};
    font-family: ${(props) => props.theme.fontFamily.title};
    letter-spacing: 1px;
    margin: 10px 0px 0px;
    font-weight: bold;
    @media (min-width: 768px){
      font-size: ${(props) => props.theme.fontSizes.h3};
    }
  } 
`;

const Post = () => {
    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetching, setFetching] = useState(false)

    const loadData = async () => {
        if (!id) return;
        setFetching(true)
        try {
            const postsResponse = await fetchPost(id);
            setPost(postsResponse);
          
            if (!postsResponse.ID) return;
            const commentsResponse = await fetchComments(postsResponse.ID);
            setComments(commentsResponse.comments)
        } finally {
            setFetching(false)
        }
    }

    useEffect(() => {
        loadData();
    }, [id]);

    if (fetching) return <div>Loading...</div>

    return (
        <div>
            <GlobalStyle />
            <FixHeaderBar
                path="/"
                img="/icons/home.png"
            />
            <PostDetails
                post={post}
                comments={comments}
            />
            <Footer />
        </div>
    )
}

export default Post;