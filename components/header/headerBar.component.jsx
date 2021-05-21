import React from "react";
import Link from 'next/link';
import { IconsBar, LogoContainer, LogoTitle, HeaderBarContainer, ButtonsContainer } from "./header.component.style"

class HeaderBar extends React.Component {
  render() {
    return (
      <HeaderBarContainer id="menuBar">
        <LogoContainer>
          <Link href="/"><LogoTitle>Inês Maio</LogoTitle></Link>
        </LogoContainer>
        <ButtonsContainer>
          <IconsBar>
            <a href={this.props.path}><img src={this.props.img} /></a>
            <a href="/ines_maio_resume.pdf" target='_blank'><img src="/icons/cv.svg" /></a>
            <a href="mailto:inesmaio4@gmail.com"><img src="/icons/email.svg" /></a>
            <a href="https://github.com/inesmaio/" target="_blank"><img src="/icons/github.svg" /></a>
            <a href="https://www.linkedin.com/in/inesmaio/" target="_blank"><img src="/icons/linkedin.svg" /></a>
          </IconsBar>
        </ButtonsContainer>
      </HeaderBarContainer>
    )
  }
};

export { HeaderBar };
