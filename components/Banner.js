import "../scss/banner.scss";


class Banner extends React.Component { 
    render () {
        return (
            <section className="banner gridrow"
                style={{
                    backgroundImage: `url(${this.props.img_src})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    backgroundAttachment: "fixed",
                }}>
                <h1>{this.props.title}</h1>

            </section>
        )
    }
}

export default Banner;