import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'
import './Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => { AOS.init({ once: false, duration: 800 }) }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 8610186781',
      link: 'tel:+918610186781'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'bhuvanbhuvanesh543@gmail.com',
      link: 'mailto:bhuvanbhuvanesh543@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Madurai, Tamil Nadu, India',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/bhuvanesh-kumar-n-s',
      color: '#0077b5'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/bhuvanesh-kumar',
      color: '#333'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Get In Touch</h2>
          <p>Let's work together</p>
        </div>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any opportunities or collaborations.</p>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.label}</h4>
                    {info.link ? (
                      <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ '--social-color': social.color }}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="contact-form" data-aos="fade-left">
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="contact-cta" data-aos="fade-up">
          <div className="cta-content">
            <h3>Ready to Start a Project?</h3>
            <p>I'm always open to discussing new opportunities and interesting projects.</p>
            <button
              className="cta-btn"
              onClick={() => window.open('mailto:bhuvanbhuvanesh543@gmail.com', '_blank')}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 