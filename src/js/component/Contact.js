import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import mainperson from '../../img/main-person.png';

const Contact = () => {
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name) errors.name = 'Please enter your name.';
    if (!formValues.email) errors.email = 'Please enter your email.';
    if (!formValues.message) errors.message = 'Please enter your message.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
    } else {
      setFormErrors(errors);
    }
  };

  // Hook para detectar cuando el h2 entra en el viewport
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Solo se ejecuta una vez
    threshold: 0.2,    // Se activa cuando el 10% del título entra en el viewport
  });

  return (
    <section id="contact">
      {/* Título con animación fadeInDown */}
      <h2
        ref={titleRef}
        className={`animate__animated ${titleInView ? 'animate__fadeInDown' : ''}`}
        style={{ '--animate-duration': '2s' }}
      >
        Contact
      </h2>

      <div className="contact-container">
        {/* Caja izquierda con animación fadeInLeft */}
        <div
          className={`contact-left animate__animated ${titleInView ? 'animate__fadeInLeft' : ''}`}
          style={{ '--animate-duration': '2s' }}
        >
          <div className="profile">
            <img src={mainperson} alt="Profile" className="profile-image" />
            <h3>Franco Paraván</h3>
            <p className="centered-text">Full-Stack Developer</p>
            <p className="short-description">
              Feel free to reach out anytime. I'm always up for new connections!
            </p>
          </div>
          <div className="social-media">
            <p className="centered-text">FIND ME ON</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/francoparavan/" target="_blank" rel="noopener noreferrer" className="transUp">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://github.com/francoparavan" target="_blank" rel="noopener noreferrer" className="transUp">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a href="mailto:francoparavan@gmail.com" target="_blank" rel="noopener noreferrer" className="transUp">
                <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Caja derecha con animación fadeInRight */}
        <div
          className={`contact-right animate__animated ${titleInView ? 'animate__fadeInRight' : ''}`}
          style={{ '--animate-duration': '2s' }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleInputChange}
                className={formErrors.name ? 'input-error' : ''}
              />
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                value={formValues.email}
                onChange={handleInputChange}
                className={formErrors.email ? 'input-error' : ''}
              />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleInputChange}
                className={formErrors.message ? 'input-error' : ''}
              />
              {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            </div>
            <button type="submit" className="btn-submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;