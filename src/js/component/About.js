import React from 'react';
import '../../styles/about.css';
import profileImg from '../../img/Profilepic.png';

const About = () => {
  return (
    <div id="about" className="about-section"> 
      <div className="about-content">
        <div className="about-text">
          <h2>About</h2>
          <p>
            I'm a <strong>Full-Stack Developer</strong> with a flexible approach, combining creativity and logic to create intuitive interfaces and ensure solid, efficient functionality.
          </p>
          <p>
            With knowledge of technologies such as <strong>JavaScript</strong>, <strong>Python</strong>, <strong>React</strong>, <strong>Flask</strong>, among others, I enjoy the challenge of designing intuitive interfaces as much as the logic that supports them.
          </p>
          <p>
            I’m continuously learning, always looking to improve and add value to every project. I’m motivated to collaborate in teams, adapting to the needs of each development to contribute to solutions that are both pleasant and useful for users.
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
