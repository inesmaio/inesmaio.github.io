import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { createGlobalStyle } from "styled-components";
import { fetchPost, fetchComments, postComment } from '../../services/wp.api.service';
import { FixHeaderBar, PostDetails, Footer, Button, Loading } from '../../components'

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
      font-size: ${(props) => props.theme.fontSizes.pT};
    }
    @media (min-width: 1024px){
        font-size: ${(props) => props.theme.fontSizes.p};
      }
  }
  .buttonContainer{
      display: flex;
      justify-content: center;
      align-itme: center;
      margin: 30px;
  }
`;

const Post = () => {
    const router = useRouter()
    const { slug } = router.query
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({})
    const [fetching, setFetching] = useState(false)

    const loadData = async () => {
        if (!slug) return;
        setFetching(true)
        try {
            const postsResponse = await fetchPost(slug);
            setPost(postsResponse);

            if (!postsResponse.slug) return;
            const commentsResponse = await fetchComments(postsResponse.ID);
            setComments(commentsResponse.comments);

            // const postNewComment = await postComment(postsResponse.ID);
            // setNewComment(postNewComment)

        } finally {
            setFetching(false)
        }
    }

    useEffect(() => {
        loadData();
    }, [slug]);

    if (fetching) return <Loading />

    return (
        <div>
            <GlobalStyle />
            <FixHeaderBar
                path="/blog"
                img="/icons/blog.png"
            />
            <PostDetails
                post={post}
                comments={comments}
            />
            <div className="buttonContainer">
                <Button
                    pathname='/blog'
                    label="Back To Blog"
                />
            </div>
            <Footer
                path="/blog"
                img="/icons/blog.png"
            />
        </div>

    )
}

export default Post;