import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import ButtonForm from "../../../components/ButtonForm";
import FileInput from "../../../components/File";
import Layout from "../../../components/Layout/Layout";
import Select from "../../../components/Select";
import GoogleMap from "../../../components/ui/GoogleMap";
import Heading from "../../../components/ui/Heading";
import RichTextBox from "../../../components/ui/RichTextBox";
import NotificacionContext from "../../../context/notificaciones/notificacionContext";
import crearNoticiaSchema from "../../../validation/crearNoticiaSchema";
import fire from "../../../firebase";
import Field from "./../../../components/Field";
import errorNotify from "../../../helpers/notify";
import Router from "next/router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const EditarNoticia = ({ nota, categorias }) => {
  const [address, setAddress] = useState(nota.address);
  const [mapCenter, setMapCenter] = useState(nota.mapCenter);
  const [urlImagen, setUrlImagen] = useState(nota.urlImagen);
  const { mostrarNotificacion } = useContext(NotificacionContext);

  const guardarCambios = (values) => {
    if (address === "") {
      errorNotify("Agrega una ubicacion");
      return;
    }

    if (urlImagen == "") {
      errorNotify("Agrega una imagen");
      return;
    }

    const noticia = {
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
      fire.editNoticia(nota.id, noticia);
      Router.push("/");
      mostrarNotificacion(
        "Nuevos cambios, los cambios se guardaron correctamente"
      );
    } catch (error) {
      errorNotify(error);
    }
  };

  const mostrarAlerta = () => {
    confirmAlert({
      title: "Eliminar Noticia",
      message: "¿Esta seguro de hacer esto?",
      buttons: [
        {
          label: "Si",
          onClick: () => eliminarNoticia(),
        },
        {
          label: "Cancelar",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const eliminarNoticia = async () => {
    try {
      await fire.delNoticia(nota.id);
      Router.push("/");
      mostrarNotificacion("Noticia eliminada, la nota se borro correctamente");
    } catch (e) {
      errorNotify("Algo salio mal...");
    }
  };

  return (
    <Layout categorias={categorias}>
      <div className="container mx-auto mt-10">
        {/* Alertas por notificacion */}
        <ToastContainer />
        <Heading titulo="Edita tu nota" className="after:bg-light-gray " />
        {/* Control y Validacion del formulario con formik y yup */}
        <Formik
          initialValues={{
            titulo: nota.titulo ?? "",
            descripcion: nota.descripcion ?? "",
            fecha: nota.fecha ?? "",
            categoria: nota.categoria ?? "",
          }}
          enableReinitialize={true}
          validationSchema={crearNoticiaSchema}
          onSubmit={(values) => guardarCambios(values)}
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
            <div className="flex justify-end items-center gap-3">
              <ButtonForm value="Guardar" />
              <button
                type="button"
                onClick={() => mostrarAlerta()}
                className="p-2 w-full sm:w-24 font-semibold text-white bg-red-600 rounded cursor-pointer ease-in-out duration-300 hover:scale-105 hover:drop-shadow-lg hover:bg-red-200 mb-6"
              >
                Eliminar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const nota = await fire.getNoticia(id);
  const categorias = await fire.getCategorias();
  nota.id = id;
  return {
    props: {
      nota,
      categorias,
    },
  };
}

export default EditarNoticia;
