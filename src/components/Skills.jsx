import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiJavascript, SiSpringboot, SiNodedotjs, 
  SiMongodb, SiMysql, SiBootstrap, SiGit, 
  SiGithub, SiPostman, SiSwagger 
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { SiMaterialdesign } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  useEffect(() => { AOS.init({ once: false, duration: 800 }) }, [])
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <SiReact color="#61DAFB" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Material UI", icon: <SiMaterialdesign color="#0081CB" /> },
        { name: "Bootstrap 5", icon: <SiBootstrap color="#7952B3" /> }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "Git & GitHub", icon: <SiGit color="#F05032" /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
        { name: "Swagger", icon: <SiSwagger color="#85EA2D" /> }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Skills & Technologies</h2>
          <p>Technologies I work with</p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 150}
            >
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-card"
                    data-aos="zoom-in"
                    data-aos-delay={(categoryIndex * 150) + (skillIndex * 50)}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="skills-summary" data-aos="fade-up">
          <div className="summary-card">
            <h3>Development Approach</h3>
            <div className="approach-items">
              <div className="approach-item" data-aos="zoom-in" data-aos-delay="0">
                <span className="approach-icon">🎯</span>
                <div>
                  <h4>Clean Code</h4>
                  <p>Writing maintainable and readable code following best practices</p>
                </div>
              </div>
              <div className="approach-item" data-aos="zoom-in" data-aos-delay="100">
                <span className="approach-icon">🚀</span>
                <div>
                  <h4>Performance First</h4>
                  <p>Optimizing applications for speed and user experience</p>
                </div>
              </div>
              <div className="approach-item" data-aos="zoom-in" data-aos-delay="200">
                <span className="approach-icon">📱</span>
                <div>
                  <h4>Responsive Design</h4>
                  <p>Creating applications that work seamlessly across all devices</p>
                </div>
              </div>
              <div className="approach-item" data-aos="zoom-in" data-aos-delay="300">
                <span className="approach-icon">🔒</span>
                <div>
                  <h4>Security Focused</h4>
                  <p>Implementing secure practices in all development phases</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills 