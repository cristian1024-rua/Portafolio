import Image from 'next/image';
import { useTheme } from "../context/ThemeContext";

const About = () => {
    const { theme } = useTheme();

    return (
        <div className={`pb-[3rem] pt-[4rem] md:pt-[8rem] ${theme === 'dark' ? 'bg-[#02050a]' : 'bg-[#3c688d]'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div className="lg_w-[500px] mx-auto md:mx-0 mt-[2rem] lg:h-[500px] w-[300px] h-[300px] relative md:order-1">
                    <Image src="/images/foto.jpg" alt="user" layout="fill" objectFit="contain" className="relative z-[11] w-[100%] h-[100%] object-contain" />
                    <div className={`absolute w-[100%] h-[100%] z-[10] ${theme === 'dark' ? 'bg-blue-950' : 'bg-blue-200'} top-[-2rem] right-[-2rem]`}>
                    </div>
                </div>
                <div className="md:order-2">
                    <h1 id="about" className={`text-[25px] font-bold uppercase ${theme === 'dark' ? 'text-white' : 'text-black'} mb-[1rem]`}>ABOUT ME</h1>
                    <h2 className={`text-[28px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                        CRISTIAN GEOVANNY <span className={theme === 'dark' ? 'text-white' : 'text-black'}>RUANO PEREZ</span>
                    </h2>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className={`w-[100px] hidden md:block h-[5px] ${theme === 'dark' ? 'bg-slate-400' : 'bg-slate-600'} rounded-sm`}></span>
                        <p className={`text-[19px] ${theme === 'dark' ? 'text-slate-300' : 'text-black'} w-[80%]`}>
                            Soy Cristian Ruano, un apasionado desarrollador de software de 21 años, actualmente cursando Ingeniería de Software en la Universidad Cooperativa de Colombia. Tengo experiencia en el desarrollo de aplicaciones web y móviles, utilizando lenguajes como Python, Java, y TypeScript. He trabajado en varios proyectos, como un reproductor de música y un inventario de ventas de queso. Me encanta el deporte, especialmente el fútbol, y siempre busco aprender nuevas tecnologías para mejorar mis habilidades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


