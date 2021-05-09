import PortfolioCard from "./card.portfolio.component";
import { CardsContainer } from "./cards.component.style"


class PortfolioCards extends React.Component {
    render() {
        return (
            <CardsContainer>
                {this.props.data.map(card => (
                    <PortfolioCard 
                    key={card.description} 
                    title={card.title}  
                    img_src={`${card.institution}`} 
                    description={card.description} 
                    url={`${card.url}`} />
                ))}
            </CardsContainer>

        )
    }
}

export default PortfolioCards;
