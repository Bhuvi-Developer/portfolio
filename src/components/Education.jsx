import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import './Education.css'

const Education = () => {
  useEffect(() => { AOS.init({ once: false, duration: 800 }) }, [])
  const educationData = [
    {
      degree: "B.E - Electronics and Communication Engineering",
      institution: "SETHU INSTITUTE OF TECHNOLOGY",
      duration: "2020 - 2024",
      location: "Madurai, Tamil Nadu",
      cgpa: "8.3",
      type: "Bachelor's Degree"
    },
    {
      degree: "HSC (Higher Secondary)",
      institution: "M M HIGHER SECONDARY SCHOOL",
      duration: "2019 - 2020",
      location: "Madurai, Tamil Nadu",
      cgpa: "Completed",
      type: "Higher Secondary"
    },
    {
      degree: "SSLC (Secondary School)",
      institution: "M M HIGHER SECONDARY SCHOOL",
      duration: "2017 - 2018",
      location: "Madurai, Tamil Nadu",
      cgpa: "Completed",
      type: "Secondary School"
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Education</h2>
          <p>My academic journey</p>
        </div>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="education-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="education-header">
                <div className="education-icon">
                  <GraduationCap size={24} />
                </div>
                <div className="education-type">{edu.type}</div>
              </div>

              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                
                <div className="education-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="meta-item">
                    <Award size={16} />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              </div>

              <div className="education-highlight">
                {index === 0 && (
                  <div className="highlight-badge">
                    <span>🎓</span>
                    <span>Latest Degree</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="education-summary" data-aos="fade-up">
          <div className="summary-content">
            <h3>Academic Excellence</h3>
            <div className="academic-highlights">
              <div className="highlight-item" data-aos="zoom-in" data-aos-delay="0">
                <div className="highlight-icon">📚</div>
                <div>
                  <h4>Strong Foundation</h4>
                  <p>Solid academic background in Electronics and Communication Engineering</p>
                </div>
              </div>
              <div className="highlight-item" data-aos="zoom-in" data-aos-delay="100">
                <div className="highlight-icon">🎯</div>
                <div>
                  <h4>Consistent Performance</h4>
                  <p>Maintained excellent academic record with CGPA of 8.3</p>
                </div>
              </div>
              <div className="highlight-item" data-aos="zoom-in" data-aos-delay="200">
                <div className="highlight-icon">🔬</div>
                <div>
                  <h4>Technical Skills</h4>
                  <p>Applied engineering principles to software development</p>
                </div>
              </div>
              <div className="highlight-item" data-aos="zoom-in" data-aos-delay="300">
                <div className="highlight-icon">🚀</div>
                <div>
                  <h4>Continuous Learning</h4>
                  <p>Committed to ongoing professional development and skill enhancement</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Education 