import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { User, Code, Database, Globe } from 'lucide-react'
import './About.css'

const About = () => {
  useEffect(() => { AOS.init({ once: false, duration: 800 }) }, [])
  const stats = [
    { icon: <Code />, label: 'Projects', value: '3+' },
    { icon: <User />, label: 'Experience', value: '1.5+ Years' },
    { icon: <Database />, label: 'Technologies', value: '8+' },
    { icon: <Globe />, label: 'Applications', value: '5+' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h3>Who I Am</h3>
            <p>
              A passionate software developer with 1.5+ years of experience in full-stack web
              development. Skilled in both frontend and backend technologies like React.js,
              Node.js, Java, and Spring Boot. Experienced with MongoDB and MySQL for
              data management, and comfortable working with REST APIs, Redux, and UI
              frameworks like Material UI and Bootstrap.
            </p>
            <p>
              Familiar with CI/CD using GitHub Actions and capable of taking projects from idea to deployment. 
              Focused on writing clean, maintainable code and building user-friendly applications.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Clean, maintainable code</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>User-friendly applications</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔄</span>
                <span>CI/CD with GitHub Actions</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">👥</span>
                <span>Team collaboration</span>
              </div>
            </div>
          </div>

          <div className="about-stats" data-aos="fade-left">
            <h3>Quick Stats</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-features" data-aos="fade-up">
          <div className="features-grid">
            <div className="feature-card" data-aos="zoom-in" data-aos-delay="0">
              <div className="feature-icon">💻</div>
              <h4>Full Stack Development</h4>
              <p>End-to-end development from database design to UI implementation</p>
            </div>
            <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-icon">🎨</div>
              <h4>UI/UX Design</h4>
              <p>Creating responsive and intuitive user interfaces with modern frameworks</p>
            </div>
            <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-icon">⚡</div>
              <h4>Performance Optimization</h4>
              <p>Optimizing applications for speed, scalability, and user experience</p>
            </div>
            <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-icon">🔧</div>
              <h4>Problem Solving</h4>
              <p>Analytical approach to debugging and implementing efficient solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 