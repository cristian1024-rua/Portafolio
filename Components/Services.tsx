import { CodeBracketIcon, CubeIcon, PaintBrushIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../context/ThemeContext"; // Importa el hook useTheme

const Services = () => {
  const { theme } = useTheme(); // Obtener el tema actual

  return (
    <div className={`pt-[4rem] md:pt-[8rem] pb-[5rem] ${theme === 'dark' ? 'bg-[#02050a]' : 'bg-[#3c688d]'}`}>
      <p id="services" className={`heading ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        MY <span className="text-blue-400">SERVICES</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem]">
        
        {/* Servicio 1: HTML */}
        <div>
          <div className={`bg-blue-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-white"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">HTML</h1>
            <p className={`text-[15px] font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Es el lenguaje de marcado estándar utilizado para crear y estructurar contenido en la web. Define la estructura básica de una página web, incluyendo encabezados, párrafos, enlaces, imágenes, formularios, etc.</p>
          </div>
        </div>

        {/* Servicio 2: CSS */}
        <div>
          <div className={`bg-blue-400 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <PaintBrushIcon className="w-[6rem] h-[6rem] mx-auto text-white"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">CSS</h1>
            <p className={`text-[15px] font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Es un lenguaje utilizado para describir la presentación de un documento escrito en HTML o XML. CSS define la apariencia visual de las páginas web, como colores, fuentes, espaciado y disposición de los elementos en una página.</p>
          </div>
        </div>

        {/* Servicio 3: Angular */}
        <div>
          <div className={`bg-blue-400 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-white"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">ANGULAR</h1>
            <p className={`text-[15px] font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Es un framework de desarrollo para aplicaciones web de una sola página (SPA). Angular está basado en JavaScript (específicamente TypeScript) y permite crear aplicaciones dinámicas y eficientes.</p>
          </div>
        </div>

        {/* Servicio 4: Python */}
        <div>
          <div className={`bg-blue-400 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <CubeIcon className="w-[6rem] h-[6rem] mx-auto text-white"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">PYTHON</h1>
            <p className={`text-[15px] font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Es un lenguaje de programación de alto nivel, fácil de aprender y usar. Es conocido por su sintaxis clara y concisa y se utiliza en desarrollo web, análisis de datos, IA y más.</p>
          </div>
        </div>

        {/* Servicio 5: Java */}
        <div>
          <div className={`bg-blue-400 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <PaintBrushIcon className="w-[6rem] h-[6rem] mx-auto text-white"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">JAVA</h1>
            <p className={`text-[15px] font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Es un lenguaje de programación orientado a objetos que permite desarrollar aplicaciones independientes de la plataforma. Utilizado en aplicaciones móviles, empresariales y sistemas distribuidos.</p>
          </div>
        </div>

        {/* Servicio 6: TypeScript */}
        <div>
          <div className={`bg-blue-400 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <CubeIcon className="w-[6rem] h-[6rem] mx-auto text-white"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">TYPESCRIPT</h1>
            <p className={`text-[15px] font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Es un superset de JavaScript que agrega tipado estático y otras características avanzadas. TypeScript se compila a JavaScript y se utiliza en grandes aplicaciones.</p>
          </div>
        </div>

        {/* Servicio 7: Vercel */}
        <div>
          <div className={`bg-blue-400 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-white"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">VERCEL</h1>
            <p className={`text-[15px] font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Es una plataforma de despliegue de aplicaciones web que permite la implementación rápida y sencilla de proyectos, especialmente con frameworks como Next.js.</p>
          </div>
        </div>

        {/* Servicio 8: Tailwind */}
        <div>
          <div className={`bg-blue-400 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-white"/>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">TAILWIND</h1>
            <p className={`text-[15px] font-normal ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Es un framework de CSS utilitario que facilita la creación de interfaces de usuario modernas, utilizando clases utilitarias para diseñar componentes personalizados.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
