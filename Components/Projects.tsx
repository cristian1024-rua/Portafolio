import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme(); 
  const projects = [
    {
      src: "/images/f3.png",
      alt: "Proyecto 1",
      title: "Proyecto 1: Reproductor de musica" ,
      description: "El proyecto se realizo en base a la plataforma de YouTube, para reproducir canciones de mp3."
    },
    {
      src: "/images/f4.png",
      alt: "Proyecto 2",
      title: "Proyecto 2: Plataforma de Redes Profesionales",
      description: "Una plataforma similar a LinkedIn, diseñada para facilitar la conectividad laboral y el crecimiento profesional a través de perfiles y ofertas de empleo."
    },
    {
      src: "/images/f5.png",
      alt: "Proyecto 3",
      title: "Proyecto 3: Fitness Tracker",
      description: "Aplicación que permite a los usuarios registrar y monitorear actividades físicas, rutinas de ejercicio y objetivos de fitness a lo largo del tiempo."
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className={`bg-[#02050a] pt-[2rem] md:pt-[4rem] pb-[4rem] ${theme === 'dark' ? 'bg-[#02050a]' : 'bg-[#3c688d]'}`}>
      <h1 id="project" className={`heading text-center ${theme === 'dark' ? 'text-white' : 'text-black'} text-4xl mb-20`}>
        PRO<span className="text-blue-400">JECT</span>
      </h1>

      <div className="flex justify-center items-center w-full">
        <div className="relative w-[90%] md:w-[60%]">
          <div className="flex flex-col items-center">
            <button
              onClick={prevProject}
              className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-transparent text-white text-4xl hover:text-blue-400 transition"
            >
              ←
            </button>
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image src={projects[currentProject].src} alt={projects[currentProject].alt} layout="fill" className="object-contain" />
            </div>
            <div className={`text-center mt-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <h2 className="text-2xl mb-4">{projects[currentProject].title}</h2>
              <p className="mb-8">{projects[currentProject].description}</p>
            </div>
            <button
              onClick={nextProject}
              className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-transparent text-white text-4xl hover:text-blue-400 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;



