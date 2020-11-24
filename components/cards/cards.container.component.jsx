import Card from "./card.component";
import {CardsContainer} from "./cards.component.style"


class Cards extends React.Component {
    render() {
        return (
            <CardsContainer>
            {this.props.data.map(card => (
                <Card key={card.description} title={card.title} date={card.date} company={card.company} img_src={`${card.institution}`} description={card.description}/>
            ))}
            </CardsContainer>

        )
    }   
}

export default Cards;
