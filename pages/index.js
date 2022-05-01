import { useContext, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import Hero from "./../components/Layout/Hero";
import { ToastContainer } from "react-toastify";
import NotificacionContext from "./../context/notificaciones/notificacionContext";
import { infoNotify } from "../helpers/notify";
import { GridNoticias } from "../components/Layout/GridNoticias";
import fire from "../firebase";
import Sidebar from "../components/Layout/Sidebar";

export default function Home({ notas, categorias }) {
  //Context de las notificaciones
  const { notificacion } = useContext(NotificacionContext);

  useEffect(() => {
    if (notificacion) {
      infoNotify(notificacion.mensaje);
    }
  });

  return (
    <Layout inicio={true} categorias={categorias}>
      {/* Alertas por notificacion */}
      <ToastContainer />
      <Hero />
      <div className="flex gap-2 bg-slate-50 ">
        <Sidebar categorias={categorias} />
        <GridNoticias noticias={notas} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { categoria } }) {
  const notas = await fire.getNoticias(categoria);
  const categorias = await fire.getCategorias();
  return {
    props: {
      notas,
      categorias,
    },
  };
}
