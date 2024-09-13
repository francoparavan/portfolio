import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useEmblaCarousel from 'embla-carousel-react';
import '../../styles/technologies.css';

const technologies = [
  { name: 'Javascript', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: 'Python', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: 'React', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: 'Flask', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: 'HTML', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: 'CSS', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: 'Bootstrap', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: 'JEST', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
  { name: 'NodeJs', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: 'PostgreSQL', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: 'MySQL', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: 'Git', imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
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
            <div className="embla__slide" key={tech.name}>
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
