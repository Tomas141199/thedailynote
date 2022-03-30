const Heading = ({ titulo }) => {
  return (
    <h1
      className="relative text-2xl font-bold 
      after:absolute after:w-2/3 after:h-tiny after:bg-light-gray after:left-0 after:bottom-0   
      "
    >
      {titulo}
    </h1>
  );
};

export default Heading;
