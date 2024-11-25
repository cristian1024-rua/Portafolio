import EduItems from "./eduItems";
import { useTheme } from "../context/ThemeContext"; // Asegúrate de importar el hook useTheme

const Education = () => {
  const { theme } = useTheme(); // Obtener el tema actual

  return (
    <div className={`pt-[4rem] md:pt-[8rem] pb-[5rem] ${theme === 'dark' ? 'bg-[#02050a]' : 'bg-[#3c688d]'} text-center`}>
      {/* Título de la sección */}
      <h1
        id="education"
        className={`text-blue-400 heading text-[2rem] md:text-[3rem] font-bold mb-[3rem] ${theme === 'dark' ? 'text-white' : 'text-black'}`}
      >
        EDUCATION
      </h1>

      {/* Contenedor de los elementos */}
      <div className="w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-start">
        <EduItems
          title="INSTITUCION EDUCATIVA TECNICA EL ESPINO"
          year="2008 - 2020"
          description="Me gradué del Colegio Institución Educativa Técnica el Espino, donde adquirí una sólida base educativa y desarrollé habilidades esenciales en diversas áreas. Durante mi tiempo en el colegio, participé en actividades extracurriculares que fomentaron mi interés en la tecnología y el trabajo en equipo. Este entorno académico me preparó para enfrentar los desafíos futuros en la educación superior y me impulsó a seguir una carrera."
        />
        <EduItems
          title="UNIVERSIDAD COOPERATIVA DE COLOMBIA CAMPUS PASTO"
          year="2022 - 2026"
          description="Actualmente estudio en la Universidad Cooperativa de Colombia en el Campus Pasto, donde me estoy formando en el ámbito profesional. Aquí he adquirido conocimientos avanzados y desarrollado habilidades en diversas áreas académicas y extracurriculares, con un enfoque en el trabajo en equipo y la innovación tecnológica."
        />
      </div>
    </div>
  );
};

export default Education;
