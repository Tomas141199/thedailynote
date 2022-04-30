import Link from "next/link";
import Heading from "../ui/Heading";

const Sidebar = () => {
  return (
    <div className="bg-white w-1/6 hidden sm:block px-2 py-4">
      <Heading
        titulo="Categorias"
        className="text-lg after:bg-primary-red after:w-11/12"
      />
      <ul className="flex flex-col items-center gap-3 mt-4 font-semibold">
        <li>
          <Link href="/Categories/Local">
            <a>Local</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Internacional</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Deportes</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sociales</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Espectaculos</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Politica</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Comunidad BUAP</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
