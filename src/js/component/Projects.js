import React from 'react';
import '../../styles/projects.css';

const projectsData = [
  {
    title: 'Real Time Chat Application',
    description: 'The real-time chat application built with Node.js employs WebSockets for instant messaging, ensuring low-latency communication. It features robust user authentication and authorization mechanisms for secure access.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
    githubLink: 'https://github.com/user/chat-app',
    liveLink: 'https://chatapp.com',
    imageSrc: 'path/to/chat-app-image.jpg'
  },
  {
    title: 'Notes Application',
    description: 'This is a full-stack notes application built using the MERN stack. The application allows users to login to their account and create, read, update, and delete notes.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/user/notes-app',
    liveLink: 'https://notesapp.com',
    imageSrc: 'path/to/notes-app-image.jpg'
  },
  {
    title: 'Authentication App',
    description: 'This is an authentication application where users can register themselves, log in, view and update their profiles, and reset their passwords using an OTP sent to their email.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/user/auth-app',
    liveLink: 'https://authapp.com',
    imageSrc: 'path/to/auth-app-image.jpg'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.imageSrc} alt={project.title} />
            </div>
            <div className="project-details">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-icons">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
