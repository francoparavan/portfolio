import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useEmblaCarousel from 'embla-carousel-react';
import '../../styles/technologies.css';

const technologies = [
  { name: 'Javascript', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Python', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", url: 'https://www.python.org/' },
  { name: 'React', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", url: 'https://reactjs.org/' },
  { name: 'Flask', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", url: 'https://flask.palletsprojects.com/' },
  { name: 'HTML', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Bootstrap', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", url: 'https://getbootstrap.com/' },
  { name: 'JEST', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg", url: 'https://jestjs.io/' },
  { name: 'NodeJs', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", url: 'https://nodejs.org/' },
  { name: 'PostgreSQL', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", url: 'https://www.postgresql.org/' },
  { name: 'MySQL', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", url: 'https://www.mysql.com/' },
  { name: 'Git', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", url: 'https://git-scm.com/' }
];

const Technologies = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  });
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext(); 
    }, 1000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div id="tech">
      <h2
        ref={titleRef}
        className={`animate__animated ${titleInView ? 'animate__fadeInDown' : ''}`}
        style={{ '--animate-duration': '2s' }}
      >
        Technologies
      </h2>
      <div
        className={`embla animate__animated ${titleInView ? 'animate__fadeInUp' : ''}`}
        ref={emblaRef}
        style={{ '--animate-duration': '2s' }}
      >
        <div className="embla__container">
          {technologies.map((tech) => (
            <div 
              className="embla__slide" 
              key={tech.name}
              onClick={() => window.open(tech.url, '_blank')} // Abre la URL en una nueva pestaña
              style={{ cursor: 'pointer' }} // Agrega un estilo visual de "clicable"
            >
              <div className="logo-wrapper">
                <img src={tech.imageSrc} alt={tech.name} className="logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
