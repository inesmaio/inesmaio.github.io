import { FlipCard, Titles, Logo, Front, Back, Description, Inner } from "./cards.component.style"
import "./flip.style.css"



class Card extends React.Component {

    render() {
        console.log("start")
        let clicked = false;
        const flip = () => {
            clicked = !clicked
            console.log(clicked)
        }

        return (
            <FlipCard onClick={flip}>
               
                    <Front>
                        <Titles>
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.date}</h3>
                            <h2>{this.props.company}</h2>
                        </Titles>
                        <Logo>
                            <a href={this.props.url} target="_blank"><img src={this.props.img_src} width="100px" height="150px" className="card_img col-m4 col-t8 col12" /> </a>
                        </Logo>
                    </Front>
                    <Back>
                        <Titles>
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.date}</h3>
                            <h2>{this.props.company}</h2>
                        </Titles>
                        <div>
                            <Description>{this.props.description}</Description>
                        </div>
                    </Back>
                 
            </FlipCard>

        )
    }
}

export default Card;