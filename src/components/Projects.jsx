import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Beauty Parlor Website',
    description: 'Modern responsive website with online booking, service showcase, and admin dashboard.',
    link: 'https://your-beauty-paulor-link.com',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/beauty-parlor'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured ecommerce with product catalog, shopping cart, and Razorpay integration.',
    link: 'https://your-ecommerce-link.com',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/yourusername/ecommerce'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team collaboration.',
    link: 'https://your-task-app.com',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80',
    tech: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/yourusername/task-manager'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with location-based forecasts and interactive maps.',
    link: 'https://your-weather-app.com',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=400&q=80',
    tech: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/yourusername/weather-dashboard'
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      offset: 50,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header" data-aos="fade-down">
          <h2 className="projects-main-heading">Projects</h2>
          <p className="projects-subtitle">Showcasing my latest work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span className="tech-badge" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                    <i className="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    <i className="fab fa-github"></i>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 