import { FlipCard, Titles, Logo, Front, Back, Description, Inner } from "./cards.component.style";



class Card extends React.Component {
    render() {
        return (
            <FlipCard>
                <Inner>
                    <Front>
                        <Titles>
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.date}</h3>
                        </Titles>
                        <Logo>
                            <img src= {this.props.img_src} width="100px" height="150px" className="card_img col-m4 col-t8 col12"/> 
                        </Logo>
                    </Front>     
                    <Back>
                        <Titles>
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.date}</h3>
                        </Titles>
                        <div>
                            <Description>{this.props.description}</Description> 
                        </div>
                    </Back>
                </Inner>   
            </FlipCard>
                
        )
    }
}

export default Card;