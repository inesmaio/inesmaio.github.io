import React from "react"
import { HeaderStyle, HeaderContent, Title, Icons, CVIcon } from "./header.component.style"
import { HeaderStyle, HeaderContent, Title, Description, Icons } from "./header.component.style"
import { HeaderBar } from "./headerBar.component"

class Header extends React.Component {
    render() {
        return (
            <HeaderStyle>
                <HeaderBar
                    path="mailto:inesmaio4@gmail.com"
                    img="/icons/home.png"
                />
                <HeaderContent>
                    <Title>{this.props.title}</Title>
                    <Description>{this.props.description}</Description>
                    <Icons>
                        <a href={this.props.path}><img src={this.props.img} /></a>
                        <a href="/ines_maio_resume.pdf" download><img src="/icons/cv.svg" /></a>
                        <a href="mailto:inesmaio4@gmail.com"><img src="/icons/email.svg" /></a>
                        <a href="https://github.com/inesmaio/" target="_blank"><img src="/icons/github.svg" /></a>
                        <a href="https://www.linkedin.com/in/inesmaio/" target="_blank"><img src="/icons/linkedin.svg" /></a>
                    </Icons>
                </HeaderContent>
            </HeaderStyle>

        )
    }
}

export default Header;