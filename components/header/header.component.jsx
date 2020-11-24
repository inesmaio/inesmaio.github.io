import React from "react"
import { HeaderStyle, HeaderContent, Title, Icons } from "./header.component.style"

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderContent>
                <Title>Inês Maio</Title>
                <Icons>
                    <a href=""><img className="col-m3" src="/icons/email.svg" /></a>
                    <a href="https://twitter.com/inesmaio" target="_blank"><img className="col-m3" src="/icons/twitter.svg" /></a>
                    <a href="https://github.com/inesmaio/" target="_blank"><img className="col-m3" src="/icons/github.svg" /></a>
                    <a href="https://www.linkedin.com/in/inesmaio/" target="_blank"><img className="col-m3" src="/icons/linkedin.svg" /></a>
                    <a href="/cv.pdf" download><img className="col-m3" src="/icons/cv.png" /></a>
                </Icons>
            </HeaderContent>
        </HeaderStyle>

    )
}

export default Header;