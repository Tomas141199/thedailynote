const Navbar = () => {

  const handledropdown = () => {
    const dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('flex');
    
  }



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
        <ul className=" md:flex md:items-center md:justify-around text-white mt-6 md:mr-2 md:mt-0">
          <li className=" md:my-3 md:my-0">
            <a href="#" className=" md:pr-4 hover:text-amber-300 ">¿Quienes somos?</a>
          </li>
          <li className=" md:my-3 md:my-0">
            <a href="#" className="md:pr-4 hover:text-amber-300">Contacto</a>
          </li>
          <li className=" md:my-3 md:my-0">
            <a href="#" className="md:pr-4 hover:text-amber-300">Acerca de</a>
          </li>
          <li className=" md:my-3 md:my-0 relative  flex flex-col items-center">
            <a href="#" onClick={handledropdown} className="md:pr-12 hover:text-amber-300">Usuario</a>
            <div id="dropdown" className=" absolute md:right-2  mt-5 bg-slate-800 hidden flex-col  rounded mt-1 p-2 text-sm w-32">
              <a href="#" className="px-1 py-1 hover:text-amber-300">Perfil</a>
              <a href="#" className="px-1 py-1 hover:text-amber-300">Cerrar sesión</a>
            </div>
          </li>
            
        </ul>
        
      </nav>
    </div>
  );
};

export default Navbar;
