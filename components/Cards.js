import Card from "./Card";
import "../scss/cards.scss";


class Cards extends React.Component {
    render() {
        return (
            this.props.data.map(card => (
                <Card className="cards-container" title={card.title} date={card.date} img_src={`${card.institution}`} description={card.description}/>
            ))

        )
    }   
}

export default Cards;
