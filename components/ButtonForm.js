const ButtonForm = ({ value }) => {
  return (
    <div className="flex justify-end">
      <input
        className="p-2 w-full sm:w-24 font-semibold text-white bg-primary-blue rounded cursor-pointer ease-in-out duration-300 hover:scale-105 hover:drop-shadow-lg hover:bg-blue-200 mb-6"
        type="submit"
        value={value}
      />
    </div>
  );
};

export default ButtonForm;
