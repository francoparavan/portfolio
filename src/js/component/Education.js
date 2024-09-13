import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../../styles/education.css';

const educationData = [
  {
    title: 'Certificate in Full-Stack Software Development',
    institution: '4Geeks Academy',  
    description: 'An immersive program focused on front-end and back-end technologies, including JavaScript, Python, Flask, React, and SQL. The program emphasizes real-world projects, Git-based workflows, and agile methodologies, providing comprehensive training in web development, database management, and API integration.',
    date: 'September 2024'
  },
  {
    title: 'Bachelor of Information Systems',
    institution: 'Universidad Catolica de Santa Fe',  
    description: 'Focused on managing human and technical resources in IT projects, conducting feasibility studies and audits, and developing business plans for tech-driven ventures. The program emphasizes collaboration in project management, digital transformation, and the introduction of innovative products, services, and processes within organizations.',
    date: 'March 2019'
  }
];

const Education = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education">
      <h2
        ref={titleRef}
        className={`animate__animated ${titleInView ? 'animate__fadeInDown' : ''}`}
        style={{ '--animate-duration': '2s' }}
      >
        Education and Certifications
      </h2>
      <div
        className={`education-container animate__animated ${titleInView ? 'animate__fadeInUp' : ''}`}
        style={{ '--animate-duration': '2s' }}
      >
        {educationData.map((education, index) => (
          <div className="education-card" key={index}>
            <div className="education-details">
              <div className="education-header">
                <h3>{education.title}</h3>
                <span className="education-date"><strong>{education.date}</strong></span>
              </div>
              <p className="education-institution"><strong>{education.institution}</strong></p> 
              <p>{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
