import "../scss/card.scss";


class Card extends React.Component {
    render() {
        return (
            <div className="flip-card gridrow col-m3 col-t3 col4">
                <div className="flip-card-inner gridrow">
                    <section className="flip-card-front gridrow">
                        <div className="titles gridrow">
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.date}</h3>
                        </div>
                        <div className="logo">
                            <img src= {this.props.img_src} width="100px" height="150px" className="card_img col-m4 col-t8 col12"/> 
                        </div>
                    </section>     
                    <section className="flip-card-back gridrow">
                        <div className="titles gridrow">
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.date}</h3>
                        </div>
                        <div>
                            <p className="card_description col-m4 col-t8 col12">{this.props.description}</p> 
                        </div>
                    </section>
                </div>   
            </div>
                
        )
    }
}

export default Card;