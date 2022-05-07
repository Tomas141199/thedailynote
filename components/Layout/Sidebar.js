import Categoria from "../ui/Categorias";
import Heading from "../ui/Heading";
import { useState, useEffect } from "react";

const Sidebar = ({ categorias }) => {
  const [stickyClass, setStickyClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setStickyClass(true);
    } else {
      setStickyClass(false);
    }
  };
  return (
    <div
      className={`fixed bg-white w-36 hidden md:flex md:items-center md:justify-center px-2 duration-500 ${
        stickyClass ? "h-screen top-1/2 -translate-y-1/2" : ""
      }`}
    >
      <div className="">
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
    </div>
  );
};

export default Sidebar;
