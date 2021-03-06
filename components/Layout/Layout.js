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
        <title>TheDailyNote</title>

        <meta name="description" content="Generated by create next app" />
        <meta
          name="description"
          content="Sitio web para la publicacion de noticias y eventos importantes"
        />
        <link rel="shortcut icon" href="/images/logo-tdn.svg"></link>
      </Head>
      <Navbar inicio={inicio} categorias={categorias} />
      {/* Aqui va todo el contenido de las paginas */}
      <div className="mb-12">{children}</div>
    </>
  );
};

export default Layout;
