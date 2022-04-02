import { useContext } from "react";
import AuthContext from "./../context/auth/authContext";
import Layout from "./../components/Layout/Layout";
import Hero from "./../components/Layout/Hero";

export default function Home() {
  const { usuario } = useContext(AuthContext);
  return (
    <Layout inicio={true}>
      <Hero />
      <h1 className="h-96">Contenido de la pagina</h1>
      <h1 className="h-96">Contenido de la pagina</h1>
      <h1 className="h-96">Contenido de la pagina</h1>
      <h1 className="h-96">Contenido de la pagina</h1>
    </Layout>
  );
}
