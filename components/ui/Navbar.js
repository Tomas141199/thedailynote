import Link from "next/link";
import Image from "next/image";
import AuthContext from "./../../context/auth/authContext";
import { useState, useContext, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import useClickOutside from "./../../hooks/useClickOutside";
import MobileNav from "./MobileNav";

const Navbar = ({ inicio }) => {
  const { usuario } = useContext(AuthContext);
  const { activeClass, wrapperRef, toggleClass } = useClickOutside();
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setStickyClass("sticky");
    } else {
      setStickyClass("");
    }
  };

  return (
    <>
      <div
        className={`navbar ${inicio} ${stickyClass} origin-bottom h-20 flex items-center z-50`}
      >
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

          {/* Navegacion de escritorio */}
          <DesktopNav usuario={usuario} />

          <button
            onClick={toggleClass}
            ref={wrapperRef}
            className={`hamburguer ${activeClass} cursor-pointer w-6 block sm:hidden`}
          >
            <div className="bar w-5 h-small bg-white"></div>
          </button>
        </div>
      </div>
      <MobileNav activeClass={activeClass} />
    </>
  );
};

export default Navbar;
