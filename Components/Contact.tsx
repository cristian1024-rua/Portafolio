import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // Ruta correcta al ThemeContext

const Contact = () => {
    const { theme } = useTheme(); // Obtener el tema actual

    return (
        <div className={`pt-32 pb-16 ${theme === 'dark' ? 'bg-[#02050a]' : 'bg-[#3c688d]'} text-white`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 id="contact" className={`text-center ${theme === 'dark' ? 'text-white' : 'text-black'} text-3xl font-bold mb-12 sm:mb-16`}>
                    CONTACT
                </h2>

                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 sm:px-6 lg:px-0 space-y-16 lg:space-y-0">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="text-8xl text-white font-bold mb-5 flex justify-center items-center">
                            え
                        </div>
                        <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <span className={theme === 'dark' ? 'text-white' : 'text-black'}>CRISTIAN.</span>
                            <span className={theme === 'dark' ? 'text-blue-600' : 'text-white'}>RUANO</span>
                        </h1>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="flex flex-col space-y-8">
                            <div className={`flex items-center space-x-5 justify-center lg:justify-end ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                <FaFacebookF className={`text-white text-2xl`} />
                                <p className="text-lg">cristian.cr10@outlook.com</p>
                            </div>

                            <div className={`flex items-center space-x-5 justify-center lg:justify-end ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                <FaGithub className={`text-white text-2xl`} />
                                <p className="text-lg">ruanoperezcristian10@gmail.com</p>
                            </div>

                            <div className={`flex items-center space-x-5 justify-center lg:justify-end ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                <FaLinkedinIn className={`text-white text-2xl`} />
                                <p className="text-lg">cristian.ruano167@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
