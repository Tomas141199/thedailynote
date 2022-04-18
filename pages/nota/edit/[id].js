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

const EditarNoticia = ({ nota }) => {
  const [address, setAddress] = useState(nota.address);
  const [mapCenter, setMapCenter] = useState(nota.mapCenter);
  const [urlImagen, setUrlImagen] = useState(
    nota.urlImagen ?? "/images/placeholder.jpg"
  );
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

    try {
      fire.editNoticia(nota.id, {
        ...values,
        urlImagen,
        address,
        mapCenter,
      });
      Router.push("/");
      mostrarNotificacion(
        "Nuevos cambios, los cambios se guardaron correctamente"
      );
    } catch (error) {
      errorNotify(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto mt-10">
        {/* Alertas por notificacion */}
        <ToastContainer />
        <Heading titulo="Edita tu nota" className="after:bg-light-gray " />
        {/* Control y Validacion del formulario con formik y yup */}
        <Formik
          initialValues={{
            titulo: nota.titulo ?? "",
            descripcion: nota.descripcion ?? "",
            fecha: nota.fecha,
            categoria: nota.categoria,
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
            <ButtonForm value="Guardar" />
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const nota = await fire.getNoticia(id);
  nota.id = id;
  return {
    props: {
      nota,
    },
  };
}

export default EditarNoticia;
