import Head from "next/head";
import Navbar from "./../ui/Navbar";

const Layout = ({ inicio = false, children, categorias }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar inicio={inicio} categorias={categorias} />
      {/* Aqui va todo el contenido de las paginas */}
      <div className="mb-12">{children}</div>
    </>
  );
};

export default Layout;
