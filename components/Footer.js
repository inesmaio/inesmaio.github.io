import "../scss/footer.scss"

const Footer = () => {
    return (
        <footer>
            <section>
                <p id="smaller">made with</p>
                <img src="/icons/heart.svg" alt="heart"/>
                <p id="smaller"> by Inês Maio</p>
            </section>
            <section className="icons" id="icons-content">
                <a href="mailto:inesmaio4@gmail.com"><img className="col-m3" src="/icons/email.svg"/></a>
                <a href="https://twitter.com/inesmaio" target="_blank"><img className="col-m3" src="/icons/twitter.svg"/></a>
                <a href="https://github.com/inesmaio/" target="_blank"><img className="col-m3" src="/icons/github.svg"/></a>
                <a href="https://www.linkedin.com/in/inesmaio/" target="_blank"><img className="col-m3" src="/icons/linkedin.svg"/></a>
                <a href="/cv.pdf" download><img className="col-m3" src="/icons/cv.png"/></a>
            </section>
            <p className="freepik">icons and images designed by Freepik</p>
        </footer>
    )
}

export default Footer;