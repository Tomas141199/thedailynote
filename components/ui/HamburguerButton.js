const HamburguerButton = ({ activeClass }) => {
  return (
    <button
      onClick={toggleClass}
      ref={wrapperRef}
      className={`hamburguer ${activeClass} cursor-pointer w-6 block sm:hidden`}
    >
      <div className="bar w-5 h-small bg-white"></div>
    </button>
  );
};

export default HamburguerButton;
