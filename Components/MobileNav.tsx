import { XMarkIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../context/ThemeContext"; // Asegúrate de importar el hook useTheme

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div 
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] 
      ${theme === 'dark' ? 'bg-[#09101a]' : 'bg-[#3c688d]'}`}>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <a 
          href="#home" 
          className={`nav-link-mobile ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
          onClick={closeNav}
        >
          HOME
        </a>
        <a 
          href="#about" 
          className={`nav-link-mobile ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
          onClick={closeNav}
        >
          ABOUT
        </a>
        <a 
          href="#services" 
          className={`nav-link-mobile ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
          onClick={closeNav}
        >
          SERVICES
        </a>
        <a 
          href="#education" 
          className={`nav-link-mobile ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
          onClick={closeNav}
        >
          EDUCATION
        </a>
        <a 
          href="#project" 
          className={`nav-link-mobile ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
          onClick={closeNav}
        >
          PROJECT
        </a>
        <a 
          href="#contact" 
          className={`nav-link-mobile ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
          onClick={closeNav}
        >
          CONTACT
        </a>
      </div>
      <div 
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-blue-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
