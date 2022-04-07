const Heading = ({ titulo, className = "" }) => {
  return (
    <h1
      className={`relative text-2xl font-bold mx-4 sm:mx-0 
      after:absolute after:w-2/3 after:h-tiny after:bg-light-gray after:left-0 after:bottom-0 ${className}   
       `}
    >
      {titulo}
    </h1>
  );
};

export default Heading;
