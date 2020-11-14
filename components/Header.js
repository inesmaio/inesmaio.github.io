import "../scss/header.scss"

const Header = () => {
    return (
        <section className="header gridrow">
            <section className="header-content gridrow col8">
                <h1 className="col10">Inês Maio</h1>
                <section className="col12 icons gridrow" id="icons-content">
                    <a href=""><img className="col-m3" src="/icons/email.svg"/></a>
                    <a href="https://twitter.com/inesmaio" target="_blank"><img className="col-m3" src="/icons/twitter.svg"/></a>
                    <a href="https://github.com/inesmaio/" target="_blank"><img className="col-m3" src="/icons/github.svg"/></a>
                    <a href="https://www.linkedin.com/in/inesmaio/" target="_blank"><img className="col-m3" src="/icons/linkedin.svg"/></a>
                    <a href="/cv.pdf" download><img className="col-m3" src="/icons/cv.png"/></a>
                </section>
            </section>
        </section>
       
    )}

export default Header;