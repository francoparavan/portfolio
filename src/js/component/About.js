import React from 'react';
import '../../styles/about.css';
import profileImg from '../../img/Profilepic.png';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About</h2>
          <p>
            Back in 2020, I decided to try my hand at web development and jump into programming, learning <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong> – a move which snowballed my intrigue of tech.
          </p>
          <p>
            Fast forward to now, I've been working as a <strong>Frontend Developer</strong> for nearly 3 years, and have been fortunate enough to work on some exciting projects, and with some amazing people.
          </p>
          <p>
            My passion for web development has only grown, and I'm always looking to learn new things and improve my skills. I'm currently working with <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong> to build modern, responsive and accessible web applications.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImg} alt="About" />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default About;
