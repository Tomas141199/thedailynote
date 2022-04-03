const MobileNav = ({ activeClass }) => {
  return (
    <nav
      className={`navbar-mobile z-40 fixed block sm:hidden min-h-screen w-2/3 bg-primary-blue -left-128 duration-500 ${activeClass}`}
    >
      hola
    </nav>
  );
};

export default MobileNav;
