import React from 'react';
import '../../styles/jumbo.css';

const Jumbo = () => {
  return (
    <div className="jumbo-container">
      <div className="jumbo-content">
        <div className="light-bar"></div>
        <h1>Franco Paravan</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          I create flawless, captivating, and inclusive digital interactions with a focus on pixel precision.
        </p>
      </div>
      <div className="divider"></div> {/* Añadimos el divider */}
    </div>
  );
};

export default Jumbo;
