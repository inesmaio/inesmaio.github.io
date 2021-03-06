import { FooterContainer, Creator, Heart, Icons, Content } from "./footer.component.style"

const Footer = ({
    path,
    img
}) => {
    return (
        <FooterContainer>
            <Creator>
                <Content>made with</Content>
                <Heart src="/icons/heart.svg" alt="heart" />
                <Content> by Inês Maio</Content>
            </Creator>
            <Icons>
                <a href={path}><img src={img} /></a>
                <a href="/ines_maio_resume.pdf" target='_blank'><img src="/icons/cv.svg" /></a>
                <a href="mailto:inesmaio4@gmail.com"><img src="/icons/email.svg" /></a>
                <a href="https://github.com/inesmaio/" target="_blank"><img src="/icons/github.svg" /></a>
                <a href="https://www.linkedin.com/in/inesmaio/" target="_blank"><img src="/icons/linkedin.svg" /></a>
            </Icons>
            <Content>icons and images designed by Freepik</Content>
        </FooterContainer>
    )
}

export default Footer;