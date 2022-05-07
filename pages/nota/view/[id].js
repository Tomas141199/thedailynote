import Heading from "../../../components/ui/Heading";
import Layout from "./../../../components/Layout/Layout";
import fire from "./../../../firebase";
import StaticGoogleMap from "../../../components/ui/StaticGoogleMap";
import Image from "next/image";
import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../../context/auth/authContext";
import { onSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
import parse from "html-react-parser";
import Dots from "../../../components/spinners/Dots";
import Fade from "react-reveal/Fade";
import ShareSection from "../../../components/ShareSection";
import SeccionComentarios from "../../../components/SeccionComentarios";

const DetallesNota = ({ categorias, idNoticia, url }) => {
  const { usuario } = useContext(AuthContext);
  //Routing para obtener el id actual
  const router = useRouter();
  const [noticia, setNoticia] = useState({});
  const [consultarDB, guardarConsultarDB] = useState(true);
  const [comentario, setComentario] = useState({});
  const [activeClass, setActiveClass] = useState(false);
  useEffect(() => {
    if (idNoticia && consultarDB) {
      const obtenerNoticia = async () => {
        const docRef = doc(fire.db, "Noticias", idNoticia);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const unsub = onSnapshot(
            doc(fire.db, "Noticias", idNoticia),
            (doc) => {
              setNoticia(doc.data());
              guardarConsultarDB(false);
            }
          );
        } else {
          guardarConsultarDB(false);
        }
      };
      obtenerNoticia();
    }
  }, [idNoticia]);

  if (Object.keys(noticia).length === 0) {
    return <Dots />;
  }

  const {
    titulo,
    creador,
    comentarios,
    categoria,
    address,
    mapCenter,
    urlImagen,
    fecha,
    descripcion,
    haVotado,
    votos,
  } = noticia;

  const urlNoticia = url + router.asPath;

  const agregarComentario = async (e) => {
    e.preventDefault();
    if (!usuario) {
      return router.push("/login");
    }

    //Informacion extra al comentario
    comentario.mensaje = document.querySelector("#comentario").value;

    if (comentario.mensaje === "") {
      return;
    }

    comentario.nombre = usuario.displayName;
    comentario.usuarioId = usuario.uid;
    comentario.hora = Date.now();
    comentario.photo = usuario.photoURL;

    //Copia de los comentarios y carga al arreglo
    const nuevosComentarios = [...comentarios, comentario];
    //Actualizacion de la BD
    const productoRef = doc(fire.db, "Noticias", idNoticia);
    await updateDoc(productoRef, {
      comentarios: nuevosComentarios,
    });

    document.querySelector("#comentario").value = "";
    guardarConsultarDB(true);
  };

  //Administracion y validacion de los votos

  const votarProducto = async () => {
    if (!usuario) {
      return router.push("/login");
    }
    let nuevoTotal = 0;
    let nuevoHaVotado;
    //Verificacion del voto del usuario actual
    if (haVotado.includes(usuario.uid)) {
      nuevoTotal = votos - 1;
      nuevoHaVotado = haVotado.filter((id) => {
        return id !== usuario.uid;
      });
      console.log("Entre a desvotar: " + nuevoHaVotado);
    } else {
      //Obtencion y reucuento de los votos
      nuevoTotal = votos + 1;
      //Almacenamiento del usuario que ha votado
      nuevoHaVotado = [...haVotado, usuario.uid];
    }
    setActiveClass(!activeClass);

    //Actualizacion DB
    const productoRef = doc(fire.db, "Noticias", idNoticia);
    await updateDoc(productoRef, {
      votos: nuevoTotal,
      haVotado: nuevoHaVotado,
    });

    guardarConsultarDB(true); // Hay un voto por lo que consulta la base de datos
  };

  return (
    <Layout categorias={categorias}>
      <div className="w-11/12 md:container mx-auto mt-10">
        <Heading
          titulo={titulo}
          className="after:bg-light-gray after:w-11/12"
        />
        <div className="text-md font-semibold text-primary-red mt-2">
          Publicado por:
          <span className="ml-2 text-primary-blue">{creador.nombre}</span>
        </div>
        <div className="text-md font-semibold text-primary-red mt-2">
          Categoria:
          <span className="ml-2 text-primary-blue">{categoria}</span>
        </div>
        <div className="text-md font-semibold text-primary-red mt-2">
          Lugar del suceso:
          <span className="ml-2 text-primary-blue">{address}</span>
        </div>
        <div className="text-md font-semibold text-primary-red mt-2">
          Fecha del suceso:
          <span className="ml-2 text-primary-blue">{fecha}</span>
        </div>
        <div className="flex items-center mt-4  flex-col md:flex-row gap-3">
          <div id="descripcion" className="flex-1">
            {parse(descripcion)}
          </div>
          <div className="flex-1">
            <Fade big>
              <Image
                src={urlImagen}
                width={500}
                height={400}
                className="rounded"
                alt={titulo}
              />
            </Fade>
          </div>
        </div>
        {/* Mapa */}
        <div className="text-md font-semibold text-primary-red mt-8">
          Localización:
          <span className="ml-2 text-primary-blue">{address}</span>
        </div>
        <StaticGoogleMap mapCenter={mapCenter} />
        <ShareSection
          urlNoticia={urlNoticia}
          titulo={titulo}
          descripcion={descripcion}
          categoria={categoria}
        />

        {usuario ? (
          <div className="flex items-center gap-2 mb-6">
            <i
              className={`far fa-heart js-heart heart text-2xl  ${
                haVotado.includes(usuario.uid) ? "fas pulse" : ""
              }`}
              onClick={() => votarProducto()}
            ></i>
            <div className="text-lg font-semibold">{votos} Me gusta!</div>
          </div>
        ) : (
          <div className="mx-2 text-sm my-4">Inicia sesion para reaccionar</div>
        )}

        <div className="large-font text-center top-20"></div>
        <Heading
          titulo="Comentarios"
          className="after:bg-primary-red after:w-11/12"
        />
        <SeccionComentarios
          comentarios={comentarios}
          agregarComentario={agregarComentario}
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const idNoticia = id;
  const categorias = await fire.getCategorias();
  const url = process.env.URL_SITE;
  return {
    props: {
      categorias,
      idNoticia,
      url,
    },
  };
}

export default DetallesNota;
