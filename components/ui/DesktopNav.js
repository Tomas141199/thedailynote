import UserCard from "./UserCard";
import Link from "next/link";

const DesktopNav = ({ usuario }) => {
  return (
    <nav className="hidden sm:block">
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
  );
};

export default DesktopNav;
