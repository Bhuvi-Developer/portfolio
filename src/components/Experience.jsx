import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Calendar, MapPin, Building, Code, Database, Globe, GitBranch, Users } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  useEffect(() => { AOS.init({ once: false, duration: 800 }) }, [])
  const experiences = [  
    {
      company: "Kairaa Tech Serve Pvt. Ltd.",
      position: "Full Stack Developer",
      duration: "DEC 2024 - PRESENT",
      location: "Madurai",
      technologies: ["React Js", "Java", "Node Js"],
      achievements: [
        "Built and maintained 3+ full-stack web applications, including e-commerce platforms, business portals, and admin dashboards",
        "Developed RESTful APIs and backend logic using Java (Spring Boot) and Node.js, focusing on performance, modularity, and clean architecture",
        "Designed dynamic and responsive frontends using React.js, implementing Redux for efficient global state management",
        "Styled user interfaces with Bootstrap 5 and Material UI (MUI) to ensure modern and user-friendly experiences across devices",
        "Managed MySQL and MongoDB databases to ensure reliable data handling and fast query performance",
        "Collaborated closely with cross-functional teams to deliver new features, resolve issues, and meet project deadlines",
        "Deployed and Maintained CI/CD pipeline through Git-Actions",
        "Used Git, GitHub and Postman consistently across the development lifecycle",
        "Participated in deployment processes, debugging, and code reviews, contributing to clean, maintainable, and production-ready code"
      ]
    },
    {
      company: "ZASTA INFOTEK PRIVATE LIMITED",
      position: "Frontend Developer",
      duration: "Feb 2024 - Nov 2024",
      location: "Chennai",
      technologies: ["Reactjs", "Java"],
      achievements: [
        "Proficient in building high-quality, responsive web interfaces for large-scale E-commerce and HRMS applications, with a focus on clean design and performance",
        "Hands-on experience in frontend development using React.js, Bootstrap 5, and Material UI (MUI), ensuring consistent UI and optimal user experience",
        "Contributed to backend development in the HRMS project using Java and Spring Boot, assisting in REST API creation and business logic implementation",
        "Skilled in using Swagger for API documentation and testing, ensuring smooth and efficient frontend-backend communication",
        "Actively collaborated in an Agile environment, participating in daily standups, sprint discussions, code reviews, and managing version control using Git"
      ]
    }
  ]

  const [openAchievements, setOpenAchievements] = useState(Array(experiences.length).fill(false));

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Work Experience</h2>
          <p>My professional journey</p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 150}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="experience-card left-card">
                    <div className="experience-header">
                      <div className="company-info">
                        <h3>{exp.position}</h3>
                        <span>{exp.duration}</span>
                      </div>
                      <div className="experience-meta">
                        <h4>{exp.company}</h4>
                        <div className="meta-item">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <button
                      className="achievements-toggle-btn"
                      onClick={() => {
                        setOpenAchievements(prev => {
                          const updated = [...prev];
                          updated[index] = !updated[index];
                          return updated;
                        });
                      }}
                    >
                      {openAchievements[index] ? 'Hide achievements' : 'See more'}
                    </button>
                    {openAchievements[index] && (
                      <div className="achievements">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              data-aos="fade-up"
                              data-aos-delay={(index * 150) + (achievementIndex * 50)}
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="timeline-dot"></div>
                  <div className="empty-side"></div>
                </>
              ) : (
                <>
                  <div className="empty-side"></div>
                  <div className="timeline-dot"></div>
                  <div className="experience-card right-card">
                    <div className="experience-header">
                      <div className="company-info">
                        <h3>{exp.position}</h3>
                        <span>{exp.duration}</span>
                      </div>
                      <div className="experience-meta">
                        <h4>{exp.company}</h4>
                        <div className="meta-item">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <button
                      className="achievements-toggle-btn"
                      onClick={() => {
                        setOpenAchievements(prev => {
                          const updated = [...prev];
                          updated[index] = !updated[index];
                          return updated;
                        });
                      }}
                    >
                      {openAchievements[index] ? 'Hide achievements' : 'See more'}
                    </button>
                    {openAchievements[index] && (
                      <div className="achievements">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              data-aos="fade-up"
                              data-aos-delay={(index * 150) + (achievementIndex * 50)}
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="experience-summary" data-aos="fade-up">
          <div className="summary-stats">
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="0">
              <div className="stat-icon">
                <Code />
              </div>
              <div className="stat-content">
                <h4>3+</h4>
                <p>Full Stack Applications</p>
              </div>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
              <div className="stat-icon">
                <Database />
              </div>
              <div className="stat-content">
                <h4>2</h4>
                <p>Database Technologies</p>
              </div>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
              <div className="stat-icon">
                <Globe />
              </div>
              <div className="stat-content">
                <h4>5+</h4>
                <p>Web Applications</p>
              </div>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
              <div className="stat-icon">
                <GitBranch />
              </div>
              <div className="stat-content">
                <h4>CI/CD</h4>
                <p>GitHub Actions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 