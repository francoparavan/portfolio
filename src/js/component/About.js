import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../../styles/about.css';
import profileImg from '../../img/Profilepic.png';

const About = () => {
  // Hook para el título (h2), que activará todas las animaciones cuando sea visible
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.2,    // Se activa cuando el 10% del título es visible
  });

  return (
    <div id="about" className="about-section"> 
      <div className="about-content">
        <div className="about-text">
          {/* Título con animación hacia abajo */}
          <h2
            ref={titleRef}
            className={`animate__animated ${titleInView ? 'animate__fadeInDown' : ''}`}
            style={{ '--animate-duration': '2s' }}
          >
            About
          </h2>

          {/* Párrafos con animación hacia la izquierda, activados cuando el título es visible */}
          <p
            className={`animate__animated ${titleInView ? 'animate__fadeInLeft' : ''}`}
            style={{ '--animate-duration': '2s' }}
          >
            I'm a <strong>Full-Stack Developer</strong> with a flexible approach, combining creativity and logic to create intuitive interfaces and ensure solid, efficient functionality.
          </p>
          <p
            className={`animate__animated ${titleInView ? 'animate__fadeInLeft' : ''}`}
            style={{ '--animate-duration': '2s' }}
          >
            With knowledge of technologies such as <strong>JavaScript</strong>, <strong>Python</strong>, <strong>React</strong>, <strong>Flask</strong>, among others, I enjoy the challenge of designing intuitive interfaces as much as the logic that supports them.
          </p>
          <p
            className={`animate__animated ${titleInView ? 'animate__fadeInLeft' : ''}`}
            style={{ '--animate-duration': '2s' }}
          >
            I’m continuously learning, always looking to improve and add value to every project. I’m motivated to collaborate in teams, adapting to the needs of each development to contribute to solutions that are both pleasant and useful for users.
          </p>
        </div>

        {/* Imagen con animación hacia la derecha, activada cuando el título es visible */}
        <div className="about-image">
          <img
            className={`animate__animated ${titleInView ? 'animate__fadeInRight' : ''}`}
            src={profileImg}
            alt="About"
            style={{ '--animate-duration': '2s' }}
          />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default About;
