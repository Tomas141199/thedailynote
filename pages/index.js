import { useContext, useEffect } from "react";
import AuthContext from "./../context/auth/authContext";
import Layout from "./../components/Layout/Layout";
import Hero from "./../components/Layout/Hero";
import { ToastContainer } from "react-toastify";
import NotificacionContext from "./../context/notificaciones/notificacionContext";
import { infoNotify } from "../helpers/notify";
import Heading from "./../components/ui/Heading";
import Link from "next/link";
import { GridNoticias } from "../components/Layout/GridNoticias";
import fire from "../firebase";

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
      <div className="flex gap-2">
        <div className="bg-white w-1/6 hidden sm:block px-2 py-4">
          <Heading
            titulo="Categorias"
            className="text-lg after:bg-primary-red after:w-11/12"
          />
          <ul className="flex flex-col items-center gap-3 mt-4 font-semibold">
            <li>
              <Link href="/">
                <a>Local</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Internacional</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Deportes</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Sociales</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Espectaculos</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Politica</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Comunidad BUAP</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-5/6 bg-slate-50 ">
          <div className="h-full text-center mt-12">
            <GridNoticias/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const notas = await fire.getNoticias();
//   return {
//     props: {
//       notas,
//     },
//   };
// }
