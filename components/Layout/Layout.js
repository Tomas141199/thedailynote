import Navbar from "./../ui/Navbar";

const Layout = ({ inicio = false, children, categorias }) => {
  return (
    <>
      <Navbar inicio={inicio} categorias={categorias} />
      {/* Aqui va todo el contenido de las paginas */}
      <div>{children}</div>
    </>
  );
};

export default Layout;
