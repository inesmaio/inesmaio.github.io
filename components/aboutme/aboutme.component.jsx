import { AboutMe, PetsIcons, ContentCenter, Description } from "./aboutme.component.style"
import Link from 'next/link'

const AboutMeSec = () => {
    return (
        <AboutMe>
            <Description>
                 Hi!<br />
                I’m Inês Maio, a tech enthusiast with a degree in Information Science and 12 years of experience in IT, from frontend development to QA and project coordination.<br />
                I believe technology starts with people, their creativity, their curuosity, and now their collaboration with AI to create smart, human-centred solutions.<br/>
                <br />
                Outside of tech, I’m a proud mum, a nature lover, and I share my home with a few furry friends and a lot of Lego bricks. I live by the sea in São Félix da Marinha, where the ocean breeze keeps my ideas flowing and curiosity growing.
            </Description>
               {/* <PetsIcons>
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
            </PetsIcons>  */}
           
        </AboutMe>

    )
};

export default AboutMeSec;
