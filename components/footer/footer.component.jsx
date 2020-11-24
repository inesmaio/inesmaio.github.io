import { FooterContainer, Creator, Heart, Icons } from "./footer.component.style"

const Footer = () => {
    return (
        <FooterContainer>
            <Creator>
                <p id="smaller">made with</p>
                <Heart src="/icons/heart.svg" alt="heart" />
                <p id="smaller"> by Inês Maio</p>
            </Creator>
            <Icons>
                <a href="mailto:inesmaio4@gmail.com"><img className="col-m3" src="/icons/email.svg" /></a>
                <a href="https://twitter.com/inesmaio" target="_blank"><img className="col-m3" src="/icons/twitter.svg" /></a>
                <a href="https://github.com/inesmaio/" target="_blank"><img className="col-m3" src="/icons/github.svg" /></a>
                <a href="https://www.linkedin.com/in/inesmaio/" target="_blank"><img className="col-m3" src="/icons/linkedin.svg" /></a>
                <a href="/cv.pdf" download><img className="col-m3" src="/icons/cv.png" /></a>
            </Icons>
            <p className="freepik">icons and images designed by Freepik</p>
        </FooterContainer>
    )
}

export default Footer;