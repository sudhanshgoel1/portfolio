import './HomePage.css';
import NavbarComponent from '../../components/Navbar/Navbar';
import Hero from '../../sections/Hero/Hero';
import About from '../../sections/About/About';
import Skills from '../../sections/Skills/Skills';
import Projects from '../../sections/Projects/Projects';
import Experience from '../../sections/Experience/Experience';
import Education from '../../sections/Education/Education';
import Achievements from '../../sections/Achievements/Achievements';
import Contact from '../../sections/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';

export const HomePage = () => {
    return (
        <div className="Home">
            <NavbarComponent />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Achievements />
            <Contact />
            <Footer />
            <ScrollToTop />
        </div>
    );
}
