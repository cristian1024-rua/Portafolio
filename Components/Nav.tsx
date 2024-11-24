import { Bars3Icon } from "@heroicons/react/24/solid";
import { useTheme } from "../context/ThemeContext"; // Ruta al ThemeContext, asegúrate de que sea correcta

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const { theme, toggleTheme } = useTheme(); // Obtener el tema y la función toggleTheme

    return (
        <div className={`w-[100%] fixed z-[10000] top-0 h-[12vh] shadow-md ${theme === 'dark' ? 'bg-[#151c27]' : 'bg-[#374553]'}`}>
            <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] font-bold" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                    CRISTIAN.
                    <span className="text-blue-500">RUANO</span>
                </h1>
                <a href="#home" className="nav-link">HOME</a>
                <a href="#about" className="nav-link">ABOUT</a>
                <a href="#services" className="nav-link">SERVICES</a>
                <a href="#education" className="nav-link">EDUCATION</a>
                <a href="#project" className="nav-link">PROJECT</a>
                <a href="#contact" className="nav-link">CONTACT</a>

                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer" style={{ color: theme === 'dark' ? 'white' : 'black' }} />
                </div>

                <button onClick={toggleTheme} className="ml-4 text-white">
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>
        </div>
    );
};

export default Nav;
