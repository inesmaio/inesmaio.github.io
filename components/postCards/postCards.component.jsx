import React from "react";
import { Card, Container, CardsContainer, Description, Title, TitleSec } from "./postCards.component.style"
import { Button } from '../../components'
import { fecthPosts } from "../../services/wp.api.service"


class PostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        this.loadData();
    }

    async loadData() {
        try {
            console.log("I'm HERE")
            const posts = await fecthPosts();
            this.setState({ posts })
        } catch (e) {
            console.log(e);
            console.log("Ups! Something went wrong")
        }
    }
    render() {
        return (
            <Container>
                <CardsContainer>
                    {this.state.posts.map((post) => {
                        return (
                            <Card key={post.title}>
                                <TitleSec dangerouslySetInnerHTML={{ __html: post.title }} />
                                <Description dangerouslySetInnerHTML={{ __html: post.content }} />
                                <Button
                                    pathname={`/posts/${post.slug}`}
                                    label="Read More"
                                />
                            </Card>
                        )
                    })}
                </CardsContainer>
            </Container>
        )
    }
}

export default PostCard;