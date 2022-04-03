import Navbar from "./../ui/Navbar";

const Layout = ({ inicio = false, children }) => {
  return (
    <>
      <Navbar inicio={inicio} />
      {/* Aqui va todo el contenido de las paginas */}
      <div>{children}</div>
    </>
  );
};

export default Layout;
