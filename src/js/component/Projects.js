import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../../styles/projects.css';
import geekfood from '../../img/geekfood.png';
import starwars from '../../img/starwars.png';
import landingpage from '../../img/landingpage.png';
import starwarsapi from '../../img/starwarsapi.png';

const projectsData = [
  {
    title: 'Geek Food',
    description: 'The online ordering platform enables users to efficiently browse and filter products, enhancing the discovery experience. It offers secure user authentication for seamless registration and login. The platform also supports payment management and optimized image handling for smoother transactions and faster load times.',
    technologies: ['Javascript', 'React', 'Bootstrap', 'NodeJs', 'Python', 'Flask', 'PostgreSQL', 'JWT'],
    githubLink: 'https://github.com/francoparavan/geekfood',
    imageSrc: geekfood
  },
  {
    title: 'Star Wars Blog',
    description: 'The web application provides an interactive experience by integrating dynamic data from the Star Wars API, allowing users to explore characters, vehicles, and planets. It features a "favorites" system for seamless user interaction and navigation between different views. The responsive design ensures an optimal user interface across devices, with smooth transitions between pages for detailed content exploration.',
    technologies: ['Javascript', 'React', 'Bootstrap'],
    githubLink: 'https://github.com/francoparavan/star-wars-blog',
    imageSrc: starwars
  },
  {
    title: 'Star Wars Themed REST API Development',
    description: 'The Flask API enables efficient management of Star Wars-themed characters, planets, and user favorites for a personalized blog experience. A robust data model was designed with SQLAlchemy and Alembic migrations to handle database interactions. Endpoints were implemented to manage favorites, as well as to list and detail characters and planets, ensuring reliable and smooth functionality through thorough testing.',
    technologies: ['Python', 'Flask', 'SQLite'],
    githubLink: 'https://github.com/francoparavan/build-starwars-rest-api',
    imageSrc: starwarsapi
  },
  {
    title: 'AdventureSphere: Tourism Landing Page',
    description: 'The landing page for the travel agency features a modular interface, divided into reusable components for better scalability and maintainability. It incorporates a responsive design, ensuring optimal user experience across devices. The focus on component reusability and clear structure enhances both the performance and future development of the project.',
    technologies: ['Javascript', 'React', 'Bootstrap'],
    githubLink: 'https://github.com/francoparavan/landing-page',
    imageSrc: landingpage
  }
];

const Projects = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,   
  });

  return (
    <section id="projects">
      <h2
        ref={titleRef}
        className={`animate__animated ${titleInView ? 'animate__fadeInDown' : ''}`}
        style={{ '--animate-duration': '2s' }}
      >
        Projects
      </h2>
      <div
        className={`projects-container animate__animated ${titleInView ? 'animate__fadeInUp' : ''}`}
        style={{ '--animate-duration': '2s' }}
      >
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
      <div className="more-projects">
        <p>AND MORE...</p>
      </div>
    </section>
  );
};

export default Projects;
