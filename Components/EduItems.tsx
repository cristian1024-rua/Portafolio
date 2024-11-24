type Props = {
  title: string;
  year: string;
  description: string;
};

const EduItems = ({ title, year, description }: Props) => {
  return (
    <div className="text-center md:text-left">
      <h1 className="uppercase font-semibold mb-[1rem] text-[1.5rem] md:text-[2rem] text-white">
        {title}
      </h1>

      <p className="text-white font-normal w-[90%] md:w-[80%] mx-auto md:mx-0 text-[1rem] md:text-[1.1rem] opacity-80 mb-[2rem]">
        {description}
      </p>

      <span className="px-[1.5rem] py-[0.8rem] text-white font-bold text-[1rem] md:text-[1.2rem] border-[2px] border-blue-400 inline-block">
        {year}
      </span>
    </div>
  );
};

export default EduItems;
