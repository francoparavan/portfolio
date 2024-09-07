import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../../styles/technologies.css';

const technologies = [
  { name: 'Next.js', url: 'https://nextjs.org/', imageSrc: 'ruta_a_tu_logo_nextjs.png' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/', imageSrc: 'ruta_a_tu_logo_typescript.png' },
  { name: 'React', url: 'https://reactjs.org/', imageSrc: 'ruta_a_tu_logo_react.png' },
  { name: 'AWS', url: 'https://aws.amazon.com/', imageSrc: 'ruta_a_tu_logo_aws.png' },
  { name: 'Express', url: 'https://expressjs.com/', imageSrc: 'ruta_a_tu_logo_express.png' },
  { name: 'GraphQL', url: 'https://graphql.org/', imageSrc: 'ruta_a_tu_logo_graphql.png' },
  { name: 'Git', url: 'https://git-scm.com/', imageSrc: 'ruta_a_tu_logo_git.png' },
  { name: 'GitHub', url: 'https://github.com/', imageSrc: 'ruta_a_tu_logo_github.png' },
  { name: 'Vercel', url: 'https://vercel.com/', imageSrc: 'ruta_a_tu_logo_vercel.png' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', imageSrc: 'ruta_a_tu_logo_tailwind.png' }
];

const Technologies = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start', // Alinear los elementos al inicio
    skipSnaps: false,
    dragFree: false,
  });

  // Movimiento automático
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext(); // Movimiento automático cada 3 segundos
    }, 1000);

    return () => clearInterval(autoplay); // Limpiar el intervalo al desmontar
  }, [emblaApi]);

  return (
    <div id="tech">
      <h2>Technologies</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {technologies.map((tech) => (
            <div className="embla__slide" key={tech.name}>
              <a href={tech.url} target="_blank" rel="noopener noreferrer" aria-label={tech.name}>
                <div className="logo-wrapper">
                  <img src={tech.imageSrc} alt={tech.name} className="logo" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;

