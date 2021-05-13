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
                        const contentMarkup = () => {
                            return { __html: post.content }
                        }
                        const titleMarkup = () => {
                            return { __html: post.title }
                        }
                        return (
                            <Card>
                                <Title dangerouslySetInnerHTML={titleMarkup()} />
                                <Description dangerouslySetInnerHTML={contentMarkup()} />
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