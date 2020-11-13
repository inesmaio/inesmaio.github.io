import "../scss/aboutme.scss"

const AboutMe = () => {
    return (
        <section className="aboutme gridrow">
            <p className="col6 col-m4 col-t5 gridrow">
                Hi, my name is Inês and I consider myself as a social and creative person. <br/>
                I live in Porto with my lovely and huge family. <br />
                I’m interested in JavaScript, ReactJS, CSS3 and HTML5. If you’re curious, check what I’ve been doing lately.<br/>
                
            </p>
            <div className="col5 col-m4 col-t3 pets-icons">
                <section className="gridrow">
                    <img src="/icons/cat.svg"/>
                    <img src="/icons/dog.svg"/>
                    <img src="/icons/cat.svg"/>
                    <img src="/icons/dog.svg"/>
                    <img src="/icons/cat.svg"/>
                </section>
                <section className="gridrow">
                    <img src="/icons/woman.svg"/>
                    <img src="/icons/girl.svg"/>
                    <img src="/icons/man.svg"/>
                </section>
            </div>
           
        </section>
    
    )
};
  
  export default AboutMe;