import Layout from "./../components/Layout/Layout";
import Heading from "./../components/ui/Heading";
import { Form, Formik } from "formik";
import Field from "./../components/Field";
import ButtonForm from "./../components/ButtonForm";
import {
  crearNoticiaSchema,
  crearNoticiaValues,
} from "./../validation/crearNoticiaSchema";
import { useState, useContext } from "react";
import { RichTextBox } from "./../components/ui/RichTextBox";
import Select from "./../components/Select";
import GoogleMap from "../components/ui/GoogleMap";
import FileInput from "./../components/File";
import { errorNotify } from "./../helpers/notify";
import { ToastContainer } from "react-toastify";
import fire from "./../firebase/fire";
import Router from "next/router";
import NotificacionContext from "./../context/notificaciones/notificacionContext";
import UserCard from "../components/ui/UserCard";
import AuthContext from "../context/auth/authContext";

const CrearNoticia = (values) => {

  const { usuario } = useContext(AuthContext);
  const { mostrarNotificacion } = useContext(NotificacionContext);
  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 19.0043346,
    lng: -98.20169539999999,
  });
  const [urlImagen, setUrlImagen] = useState("/images/placeholder.jpg");

  const crearNoticia = (values) => {
    if (address === "") {
      errorNotify("Agrega una ubicacion");
      return;
    }

    if (urlImagen == "") {
      errorNotify("Agrega una imagen");
      return;
    }

    const noticia = {
      id: usuario.id,
      titulo: values.titulo,
      descripcion: values.descripcion,
      fecha: values.fecha,
      categoria: values.categoria,
      address,
      mapCenter,
      urlImagen,
      createdAt: Date.now(),
    };

    try {
      fire.addNoticia(noticia);
      mostrarNotificacion(
        "Registro exitoso!, revisa tu correo para confirmar tu cuenta"
      );

      mostrarNotificacion(
        "Creacion exitosa!, tu publicacion esta pendiente de revision"
      );
      Router.push("/");
    } catch (error) {
      errorNotify(error.code);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto mt-10">
        {/* Alertas por notificacion */}
        <ToastContainer />
        <Heading titulo="Publica tu nota" />
        {/* Control y Validacion del formulario con formik y yup */}
        <Formik
          initialValues={crearNoticiaValues}
          validationSchema={crearNoticiaSchema}
          onSubmit={(values) => crearNoticia(values)}
        >
          <Form className="mx-auto w-11/12 sm:w-full mt-12">
            <div className="flex sm:justify-between mx-auto gap-1 sm:gap-12 flex-wrap sm:flex-nowrap">
              {/* Formulario Izquierdo */}
              <div className="mx-auto w-11/12 sm:w-2/3">
                <Field name="titulo" label="Titulo" />
                <RichTextBox label="Descripcion" />
                <Field name="fecha" label="Fecha del suceso" type="date" />
                <Select name="categoria" label="Categoria" />
              </div>
              {/* Formulario derecho */}
              <div className="mx-auto w-11/12 sm:w-1/3 self-center mb-6 sm:mb-0">
                <FileInput urlImagen={urlImagen} setUrlImagen={setUrlImagen} />
              </div>
            </div>

            {/* Mapa */}
            <GoogleMap
              address={address}
              setAddress={setAddress}
              mapCenter={mapCenter}
              setMapCenter={setMapCenter}
            />

            {/* Submit para enviar formulario */}
            <ButtonForm value="Registrar" />
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export default CrearNoticia;
