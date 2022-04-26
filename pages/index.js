import { useContext, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import Hero from "./../components/Layout/Hero";
import { ToastContainer } from "react-toastify";
import NotificacionContext from "./../context/notificaciones/notificacionContext";
import { infoNotify } from "../helpers/notify";
import { GridNoticias } from "../components/Layout/GridNoticias";
import fire from "../firebase";
import Sidebar from "../components/Layout/Sidebar";

export default function Home({ notas }) {
  //Context de las notificaciones
  const { notificacion } = useContext(NotificacionContext);

  useEffect(() => {
    if (notificacion) {
      infoNotify(notificacion.mensaje);
    }
  });

  return (
    <Layout inicio={true}>
      {/* Alertas por notificacion */}
      <ToastContainer />
      <Hero />
      <div className="flex gap-2">
        <Sidebar />
        <GridNoticias noticias={notas} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const notas = await fire.getNoticias();
  return {
    props: {
      notas,
    },
  };
}
