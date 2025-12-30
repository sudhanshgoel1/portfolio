import { JSX, useEffect, useState } from 'react';
import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { words } from '../../dummyData/dummyData';
import { SocialIcons } from '../../components/SocialIcons/SocialIcons';
import { FiDownload, FiMail } from 'react-icons/fi';

const Hero = (): JSX.Element => {
  const [state, setState] = useState({
    text: "",
    wordIndex: 0,
    charIndex: 0,
    isDeleting: false,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const currentWord = words[state.wordIndex];
    let typingSpeed = state.isDeleting ? 80 : 150;

    if (!state.isDeleting && state.charIndex === currentWord.length) {
      setTimeout(() => {
        setState((pre) => ({ ...pre, isDeleting: true }));
      }, 2000);
    } else if (state.isDeleting && state.charIndex === 0) {
      setState(pre => ({ ...pre, isDeleting: false, wordIndex: (pre.wordIndex + 1) % words.length }));
    }

    const timeout = setTimeout(() => {
      setState(pre => ({
        ...pre, text:
          pre.isDeleting
            ? currentWord.substring(0, pre.charIndex - 1)
            : currentWord.substring(0, pre.charIndex + 1),
        charIndex: pre.charIndex + (pre.isDeleting ? -1 : 1)
      }));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [state.charIndex, state.isDeleting, state.wordIndex]);

  return (
    <section id="hero" className="hero-modern min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="hero-content text-center" data-aos="fade-up">
              <div className="hero-badge mb-4">
                <span className="badge-text">👋 Welcome to my portfolio</span>
              </div>

              <h1 className="hero-title mb-4">
                Hi, I'm <span className="gradient-text">Sudhansh Goel</span>
              </h1>

              <div className="hero-subtitle mb-4">
                <span className="typing-prefix">I'm a </span>
                <span className="typing-text gradient-text">
                  {state.text}
                  <span className="cursor">|</span>
                </span>
              </div>

              <p className="hero-description mb-5">
                Passionate software engineer specializing in full-stack development with expertise in
                <span className="tech-highlight"> .NET Core</span>,
                <span className="tech-highlight"> React</span>,
                <span className="tech-highlight"> React Native</span>,
                <span className="tech-highlight"> TypeScript</span>, and
                <span className="tech-highlight"> Golang</span>.
                I create scalable, user-focused applications that solve real-world problems.
              </p>

              <div className="hero-actions mb-5">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="btn btn-primary-modern me-3"
                >
                  <FiMail className="me-2" />
                  Get In Touch
                </Link>
                <a
                  href="./resume/Sudhansh_Goel_Resume.pdf"
                  download="Sudhansh_Goel_Resume.pdf"
                  className="btn btn-outline-modern"
                >
                  <FiDownload className="me-2" />
                  Download CV
                </a>
              </div>

              <div className="hero-social" data-aos="fade-up" data-aos-delay="600">
                <span className="social-label">Follow me:</span>
                <SocialIcons />
              </div>

              {/* Scroll Indicator - Mobile Relative */}
              <div className="scroll-indicator-mobile" data-aos="fade-up" data-aos-delay="700">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="scroll-btn"
                >
                  <div className="scroll-text">Scroll Down</div>
                  <div className="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop Fixed Position */}
      <div className="scroll-indicator-desktop" data-aos="fade-up" data-aos-delay="400">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-50}
          className="scroll-btn"
        >
          <div className="scroll-text">Scroll Down</div>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
