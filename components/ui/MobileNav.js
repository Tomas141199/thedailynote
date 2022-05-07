import Link from "next/link";
import AuthContext from "../../context/auth/authContext";
import Heading from "./Heading";
import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import Router from "next/router";

const MobileNav = ({ activeClass, categorias }) => {
  const { usuario } = useContext(AuthContext);
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Router.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav
      className={`navbar-mobile z-40 fixed block sm:hidden h-screen w-2/3 bg-primary-blue -left-128 duration-500 ${activeClass} py-24 text-center flex flex-col items-center gap-3 overflow-y-auto`}
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

      {usuario ? (
        <>
          <Heading
            titulo="Perfil"
            className="text-white after:bg-primary-red text-lg mt-6 after:w-11/12"
          />
          <Link href="/crear-noticia">
            <a className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold">
              Publicar
            </a>
          </Link>
          <Link href={`/ver-publicaciones?id=${usuario.uid}`}>
            <a className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold">
              Publicaciones
            </a>
          </Link>
          <Link href="#">
            <a
              onClick={() => logOut()}
              className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold"
            >
              Salir
            </a>
          </Link>
        </>
      ) : (
        <>
          <Heading
            titulo="Visitante"
            className="text-white after:bg-primary-red text-lg mt-6 after:w-11/12"
          />
          <Link href="/login">
            <a className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold">
              Entrar
            </a>
          </Link>
          <Link href={`/registro`}>
            <a className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold">
              Registrarse
            </a>
          </Link>
        </>
      )}

      <Heading
        titulo="Sobre"
        className="text-white after:bg-primary-red text-lg mt-6 after:w-11/12"
      />
      <Link href="/sobre-nosotros">
        <a className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold">
          ¿Quíen somos?
        </a>
      </Link>
      <Link href={`https://chat.whatsapp.com/Lk4KH3zQunoEzPklZzXUeg`}>
        <a className="text-white font-medium w-full relative duration-300 ease-linear z-50 after:absolute after:content-[''] after:-z-10 after:w-full after:h-full after:bg-light-blue after:rounded-r-full after:left-0 after:origin-left after:duration-300 after:ease-linear after:scale-x-0 after:hover:scale-100 hover:font-bold">
          Contacto
        </a>
      </Link>
    </nav>
  );
};

export default MobileNav;
