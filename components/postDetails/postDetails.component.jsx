import React from 'react';
import { Details, PostDetailsContainer, Title, Post, AuthorInfo, Comments, CommentContainer, Avatar, CommentContent, Description, CommentDetails } from "./postDetails.component.style";
import { HeaderBar } from "../header"


const PostDetails = ({
    post,
    comments,

}) => {
    return (
        <Details>
            <HeaderBar
                path="/"
                img="/icons/home.png"
            />
            <PostDetailsContainer>
                <Title dangerouslySetInnerHTML={{ __html: post.title }} />
                <Post dangerouslySetInnerHTML={{ __html: post.content }} />
                <AuthorInfo>Created by {post.author && post.author.name} on {post.date && post.date.slice(0, 10)}</AuthorInfo>
                <Comments>
                    {comments.map((comment) => {
                        return (
                            <CommentContainer>
                                <Avatar src={comment.author.avatar_URL} alt="avatar" />
                                <CommentContent>
                                    <Description dangerouslySetInnerHTML={{ __html: comment.content }} />
                                    <CommentDetails>Created by {comment.author.name} on {comment.date.slice(0, 10)} </CommentDetails>
                                </CommentContent>
                            </CommentContainer>
                        )
                    })}

                </Comments>
            </PostDetailsContainer>
        </Details>
    )
}

export default PostDetails