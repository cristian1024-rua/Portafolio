import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Codificador',
        1500, 
        'Desarrollador',
        1500,
        'Diseñador web',
        1500,
        'Programador',
        1500
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-white font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;