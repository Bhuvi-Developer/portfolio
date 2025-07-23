import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Beauty Paulor Website',
    description: 'A modern website for a beauty salon, featuring online booking, service showcase, and customer testimonials.',
    link: 'https://your-beauty-paulor-link.com',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    tech: ['React', 'CSS', 'Responsive'],
    featured: true,
  },
  {
    title: 'Ecommerce',
    description: 'A full-featured ecommerce platform with product catalog, shopping cart, and secure checkout and Razorpay for payments.',
    link: 'https://your-ecommerce-link.com',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe'],
    featured: true,
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <h2 className="projects-main-heading" data-aos="fade-down">Projects</h2>
      {projects.map((project, idx) => (
        <div className="featured-project" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
          <div className="featured-project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="featured-project-content">
            <span className="featured-label">Featured Project</span>
            <h3 className="featured-title">{project.title}</h3>
            <div className="featured-desc-box">
              <p>{project.description}</p>
            </div>
            <div className="featured-tech">
              {project.tech.map((t, i) => (
                <span className="featured-tech-badge" key={i}>{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="featured-link" title="External Link">
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects; 