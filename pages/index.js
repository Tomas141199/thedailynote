import { useContext, useEffect } from "react";
import AuthContext from "./../context/auth/authContext";
import Layout from "./../components/Layout/Layout";
import Hero from "./../components/Layout/Hero";
import { ToastContainer } from "react-toastify";
import NotificacionContext from "./../context/notificaciones/notificacionContext";
import { infoNotify } from "../helpers/notify";

export default function Home() {
  const { usuario } = useContext(AuthContext);

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
      <h1 className="h-96">Contenido de la pagina</h1>
      <h1 className="h-96">Contenido de la pagina</h1>
      <h1 className="h-96">Contenido de la pagina</h1>
      <h1 className="h-96">Contenido de la pagina</h1>
    </Layout>
  );
}
