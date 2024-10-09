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

  // Animación similar a la de Projects
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,  // Activar solo una vez
    threshold: 0.1,     // La animación se activa cuando el 10% del componente es visible
  });

  return (
    <section id="contact">
      <h2
        ref={contactRef}
        className={`animate__animated ${contactInView ? 'animate__fadeInDown' : ''}`}
        style={{ '--animate-duration': '2s' }}
      >
        Contact
      </h2>

      <div
        className={`contact-left animate__animated ${contactInView ? 'animate__fadeInUp' : ''}`}
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
    </section>
  );
};

export default Contact;

