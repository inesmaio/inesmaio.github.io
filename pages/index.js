import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import { experience, education } from "../public/data";
import "../scss/main.scss"



const Index = () => {
    return (
        <section>
            <Header />
            <Banner img_src="/aboutme-banner.jpg" title="About Me" />
            <AboutMe />
            <Banner img_src="/education-banner.jpg" title="Education" />
            <section className="cards-container gridrow">
                <Cards data={education} />
            </section>
            <Banner img_src="/exp.jpg" title="Experience" />
            <section className="cards-container gridrow">
                <Cards data={experience} />
            </section>
            <Footer />
        </section>

    )
};

export default Index;