import { FlipCard, Titles, Logo, Front, Back, Description, Inner } from "./cards.component.style"

class Card extends React.Component {
    render() {
        return (
            <FlipCard>
                <Front href={this.props.url} target="_blank">
                    <Titles>
                        <h2>{this.props.title}</h2>
                        <h3>{this.props.date}</h3>
                        <h2>{this.props.company}</h2>
                    </Titles>
                    <Logo>
                        <img className={this.props.cat ? "portfolio" : ""} src={this.props.img_src} />
                    </Logo>
                </Front>
                {/* <Back>
                    <Titles>
                        <h2>{this.props.title}</h2>
                        <h3>{this.props.date}</h3>
                        <h2>{this.props.company}</h2>
                    </Titles>
                    <div>
                        <Description>{this.props.description}</Description>
                    </div>
                </Back> */}
            </FlipCard >
        )
    }
}

export default Card;