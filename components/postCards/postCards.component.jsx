import React from "react";
import { Card, Container, CardsContainer, Description, Title } from "./postCards.component.style"
import { Button } from '../../components'
import { fecthPosts } from "../../services/wp.api.service"


class PostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }
    handleOnClick(){
        return null
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
                <h1>Welcome to my Blog</h1>
                <CardsContainer>
                    {this.state.posts.map((post) => {
                        return (
                            <Card>
                                <Title dangerouslySetInnerHTML={{ __html: post.title }} />
                                <Description dangerouslySetInnerHTML={{ __html: post.content }} />
                                <Button 
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