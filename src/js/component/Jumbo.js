import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../../styles/jumbo.css';

const Jumbo = () => {
  // Hook para detectar cuando el light-bar entra en el viewport
  const { ref: lightBarRef, inView: lightBarInView } = useInView({
    triggerOnce: true, // Solo se dispara una vez
    threshold: 0.1,    // Se activa cuando el 10% del light-bar entra en el viewport
  });

  return (
    <div className="jumbo-container">
      <div className="jumbo-content">
        {/* Light-bar con la animación personalizada */}
        <div
          ref={lightBarRef}
          className={`light-bar ${lightBarInView ? 'animate__flip-custom' : ''}`}
        ></div>

        {/* h1 con animación fadeInTopLeft */}
        <h1
          className={`animate__animated ${lightBarInView ? 'animate__fadeInTopLeft' : ''}`}
          style={{ '--animate-duration': '2s' }}
        >
          Franco Paraván
        </h1>

        {/* h2 con animación fadeInBottomRight */}
        <h2
          className={`animate__animated ${lightBarInView ? 'animate__fadeInBottomRight' : ''}`}
          style={{ '--animate-duration': '2s' }}
        >
          Full-Stack Developer
        </h2>

        {/* p con animación fadeInUp */}
        <p
          className={`animate__animated ${lightBarInView ? 'animate__fadeInUp' : ''}`}
          style={{ '--animate-duration': '2s' }}
        >
          I create intuitive web solutions, enhancing user experience and exploring new technologies to continuously innovate in the digital world.
        </p>
      </div>
    </div>
  );
};

export default Jumbo;
