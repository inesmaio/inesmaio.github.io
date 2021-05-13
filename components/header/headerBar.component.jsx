import React from "react";
import { Icons, LogoContainer, HeaderLogo, LogoTitle, HeaderBarContainer, ButtonsContainer } from "./header.component.style"

class HeaderBar extends React.Component {
  render() {
    return (
      <HeaderBarContainer id="menuBar">
        <LogoContainer>
          <LogoTitle>Inês Maio</LogoTitle>
        </LogoContainer>
        <ButtonsContainer>
          <Icons>
            <a href={this.props.path}><img src={this.props.img} /></a>
            <a href="mailto:inesmaio4@gmail.com"><img src="/icons/email.svg" /></a>
            <a href="https://twitter.com/inesmaio" target="_blank"><img src="/icons/twitter.svg" /></a>
            <a href="https://github.com/inesmaio/" target="_blank"><img src="/icons/github.svg" /></a>
            <a href="https://www.linkedin.com/in/inesmaio/" target="_blank"><img src="/icons/linkedin.svg" /></a>
            <a href="/ines_maio_resume.pdf" download><img src="/icons/cv.png" /></a>
          </Icons>
        </ButtonsContainer>
      </HeaderBarContainer>
    )
  }
};

export { HeaderBar };
