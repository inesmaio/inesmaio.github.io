import React from "react";
import Link from 'next/link';
import { FixHeaderBarContainer, Icons, LogoContainer, LogoTitle, ButtonsContainer } from "./header.component.style"

class FixHeaderBar extends React.Component {
  render() {
    return (
      <FixHeaderBarContainer id="menuBar">
        <LogoContainer>
          <Link href="/blog"><LogoTitle>Inês Maio</LogoTitle></Link>
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
      </FixHeaderBarContainer>
    )
  }
};

export { FixHeaderBar };
