import Categoria from "../ui/Categorias";
import Heading from "../ui/Heading";

const Sidebar = ({ categorias }) => {
  return (
    <div className="bg-white w-1/6 hidden md:block px-2 py-4">
      <Heading
        titulo="Categorias"
        className="text-lg after:bg-primary-red after:w-11/12"
      />
      <ul className="ml-1 flex flex-col items-start gap-3 mt-4 font-semibold">
        {categorias.map((categoria) => (
          <Categoria key={Math.random()} categoria={categoria} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
