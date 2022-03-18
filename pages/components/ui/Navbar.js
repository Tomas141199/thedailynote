
const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 w-full">
        <nav className="flex items-center justify-between flex-wrap p-4 bg-slate-500 opacity-80">
            <div className="flex items-center text-white mr-6">
                <img src="../img/logo-tdn.svg"  alt="logo tdn"
                    width="40"
                />
        
            </div>
            <div className=" block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    hola este es el fondo del boton
                </button>
            </div>
            <div className="text-white text-2xl">
                The Daily Note
            </div>
            <div className="flex items-center justify-around flex-wrap text-white ">
                <a className="pr-4">¿Quines somos?</a>
                <a className="pr-4">Contacto</a>
                <a className="pr-4">Acerca de</a>
                <a className="pr-4">Usuario</a>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar;
