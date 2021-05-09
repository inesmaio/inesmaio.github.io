import { PortCardContainer, PortCard, Content } from "./cards.component.style";


class PortfolioCard extends React.Component {
    render() {
        return (
            <PortCardContainer href={this.props.url} target="_blank">
                <PortCard backgroundImage={`url(${this.props.img_src})`} />
                <Content>
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.description}</h3>
                </Content>
            </PortCardContainer>
        )
    }
}

export default PortfolioCard;