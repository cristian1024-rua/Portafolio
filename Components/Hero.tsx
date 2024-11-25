import Image from 'next/image';
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { useTheme } from "../context/ThemeContext"; 

const Hero = () => {
    const { theme } = useTheme(); 

    return (
        <div className={`h-[88vh] mt-[10vh] bg-cover bg-center ${theme === 'dark' ? 'bg-[#02050a]' : 'bg-[#3c688d]'}`}>
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 id="home" className={`text-[35px] md:text-[50px] ${theme === 'dark' ? 'text-white' : 'text-black'} font-bold`}>
                        HOLA, MI NOMBRE ES <span className="text-blue-400">CRISTIAN!</span>
                    </h1>
                    <TextEffect />
                    <p className={`mt-[1.5rem] text-[18px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        ¡Hola y bienvenido a mi portafolio!
                        Soy un apasionado ingeniero en desarrollo de software con experiencia en la creación de soluciones tecnológicas innovadoras y eficientes. Mi objetivo es transformar ideas en aplicaciones funcionales que generen impacto y valor. Aquí encontrarás algunos de los proyectos en los que he trabajado, mis áreas de especialización, y cómo puedo contribuir a tus necesidades tecnológicas. ¡Gracias por visitarme! 
                    </p>
                </div>
                <div className="w-[500px] hidden relative lg:flex items-center rounded-full h-[500px]" style={{ backgroundColor: 'white' }}>
                    <Image src="/images/foto3.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
