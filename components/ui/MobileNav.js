import Link from "next/link";
import Heading from "./Heading";
const MobileNav = ({ activeClass, categorias }) => {
  return (
    <nav
      className={`navbar-mobile z-40 fixed block sm:hidden min-h-screen w-2/3 bg-primary-blue -left-128 duration-500 ${activeClass} py-24 text-center flex flex-col items-center gap-3`}
    >
      <Heading
        titulo="Categorias"
        className="text-white after:bg-primary-red text-lg after:w-11/12"
      />

      {categorias.map((categoria) => (
        <Link
          key={categoria.nombre}
          href={{ pathname: "/", query: { categoria: categoria.nombre } }}
        >
          <a className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold">
            {categoria.nombre}
          </a>
        </Link>
      ))}

      <Heading
        titulo="Perfil"
        className="text-white after:bg-primary-red text-lg mt-6 after:w-11/12"
      />
      <Link href="/crear-noticia">
        <a className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold">
          Publicar
        </a>
      </Link>
      <Link href="#">
        <a className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold">
          Salir
        </a>
      </Link>
    </nav>
  );
};

export default MobileNav;
