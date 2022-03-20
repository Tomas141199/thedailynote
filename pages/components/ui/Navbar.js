const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 w-full">
      <nav className=" text-center md:flex md:items-center md:justify-between md:flex-wrap py-4 bg-slate-800 opacity-80">
        <div className=" md:flex md:items-center">
          <a href="/">
            <img className="mx-auto md:ml-3" src="../img/logo-tdn.svg" alt="logo tdn" width="40" />
          </a>
          
        </div>
        <div className="hidden md:block text-white text-2xl">
          <p>The Daily Note</p>
        </div>
        <ul className=" md:flex md:items-center md:justify-around text-white mt-6 md:mt-0">
          <li className=" my-3 md:my-0">
            <a href="#" className=" pr-4 hover:text-amber-300 ">¿Quines somos?</a>
          </li>
          <li className=" my-3 md:my-0">
            <a href="#" className="pr-4 hover:text-amber-300">Contacto</a>
          </li>
          <li className=" my-3 md:my-0">
            <a href="#" className="pr-4 hover:text-amber-300">Acerca de</a>
          </li>
          <li className=" my-3 md:my-0">
            <a href="#" className="pr-4 hover:text-amber-300">Usuario</a>
          </li>
        </ul>
        {/* <div className="block lg:hidden">
          <button className=" flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            hola este es el fondo del boton
          </button>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
