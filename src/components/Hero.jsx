import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Download, Mail, Linkedin, Github } from 'lucide-react'
import profilePic from '../assets/bhuviPhoto.png'
import resumePDF from '../assets/Bhuvaneshkumar N S_SDE.pdf'
import './Hero.css'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  useEffect(() => { AOS.init({ once: false, duration: 800 }) }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge" data-aos="fade-down">
            <span>👋 Hello, I'm</span>
          </div>
          <h1 className="hero-title" data-aos="fade-right" data-aos-delay="100">
            Bhuvanesh Kumar N S
          </h1>
          <h2 className="hero-subtitle" data-aos="fade-right" data-aos-delay="200">
            <Typewriter
              words={['Full Stack Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="hero-description" data-aos="fade-right" data-aos-delay="300">
            A passionate software developer with 1.5+ years of experience in full-stack web development. 
            Skilled in React.js, Node.js, Java, and Spring Boot. Building user-friendly applications 
            with clean, maintainable code.
          </p>
          <div className="hero-buttons" >
            <button
              // onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <a
              className="btn btn-secondary"
              href={resumePDF}
              download="Bhuvaneshkumar_N_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
          {/* <div className="hero-social" data-aos="fade-up" data-aos-delay="500">
            <a
              href="https://linkedin.com/in/bhuvanesh-kumar-n-s"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              data-aos="zoom-in"
              data-aos-delay="0"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/bhuvanesh-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Github size={24} />
            </a>
          </div> */}
        </div>
        <div className="hero-visual" data-aos="zoom-in" data-aos-delay="600">
          <div className="hero-avatar">
            <img src={profilePic} alt="Bhuvanesh Kumar N S" className="avatar-img" />
          </div>
          {/* <div className="hero-contact-row">
            <a href="https://linkedin.com/in/bhuvanesh-kumar-n-s" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={22} />
            </a>
            <span className="hero-contact-sep">|</span>
            <a href="https://github.com/bhuvanesh-kumar" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={22} />
            </a>
          </div> */}
          {/* <div className="floating-elements">
            <div className="floating-element element-1">⚛️</div>
            <div className="floating-element element-2">☕</div>
            <div className="floating-element element-3">⚡</div>
            <div className="floating-element element-4">🚀</div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero 