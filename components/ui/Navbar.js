import Link from "next/link";
import Image from "next/image";
import AuthContext from "./../../context/auth/authContext";
import { useContext } from "react";
import UserCard from "./UserCard";

const Navbar = ({ inicio }) => {
  const { usuario } = useContext(AuthContext);

  return (
    <div className={`navbar ${inicio} h-16 flex items-center`}>
      <div className="flex-1 flex justify-around items-center">
        <Link href="/">
          <a className="cursor-pointer">
            <Image
              blurDataURL="/images/logo-movil.svg"
              src="/images/logo-nombre.svg"
              width={200}
              height={55}
              alt="logo"
            />
          </a>
        </Link>
        <nav>
          <ul className="flex justify-between items-center gap-4 text-sm text-white">
            <li className="relative after:absolute after:w-full after:h-middle after:bg-light-blue after:left-0 after:top-link after:scale-x-0 after:origin-left after:duration-500 hover:after:scale-x-100">
              <Link href="#">¿Quíen somos?</Link>
            </li>
            <li className="relative after:absolute after:w-full after:h-middle after:bg-light-blue after:left-0 after:top-link after:scale-x-0 after:origin-left after:duration-500 hover:after:scale-x-100">
              <Link href="#">Contacto</Link>
            </li>
            {!usuario ? (
              <>
                <li className="relative after:absolute after:w-full after:h-middle after:bg-light-blue after:left-0 after:top-link after:scale-x-0 after:origin-left after:duration-500 hover:after:scale-x-100">
                  <Link href="/login">Entrar</Link>
                </li>
                <li className="relative after:absolute after:w-full after:h-middle after:bg-light-blue after:left-0 after:top-link after:scale-x-0 after:origin-left after:duration-500 hover:after:scale-x-100">
                  <Link href="/registro">Registrarse</Link>
                </li>
              </>
            ) : (
              <UserCard usuario={usuario} />
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
