import { AboutMe, PetsIcons, ContentCenter, Description } from "./aboutme.component.style"

const AboutMeSec = () => {
    return (
        <AboutMe>
            <Description>
                Hi, I'm Inês <br />
                I live in Porto with my lovely and huge family. <br />
                I'm a Frontend Developer with knowledge of JavaScript, React, CSS, SASS, Styled-Components, to be able to create amazing things. <br />
                I try to keep a positive mindset and eager to learn and develop my skills further.<br />
                Scroll down to find out more. <br />
            </Description>
            <PetsIcons>
                <ContentCenter>
                    <img src="/icons/cat.svg" />
                    <img src="/icons/dog.svg" />
                    <img src="/icons/cat.svg" />
                    <img src="/icons/dog.svg" />
                    <img src="/icons/cat.svg" />
                </ContentCenter>
                <ContentCenter>
                    <img src="/icons/woman.svg" />
                    <img src="/icons/girl.svg" />
                    <img src="/icons/man.svg" />
                </ContentCenter>
            </PetsIcons>
           
        </AboutMe>

    )
};

export default AboutMeSec;