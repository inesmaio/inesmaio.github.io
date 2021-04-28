import { AboutMe, PetsIcons, ContentCenter, Description } from "./aboutme.component.style"

const AboutMeSec = () => {
    return (
        <AboutMe>
            <Description>
                Hi, my name is Inês and I consider myself as a social and creative person. <br />
                I live in Porto with my lovely and huge family. <br />
                I’m interested in JavaScript, ReactJS, CSS3 and HTML5. If you’re curious, check what I’ve been doing lately.<br />
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