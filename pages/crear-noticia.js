import Layout from "./../components/Layout/Layout";
import Heading from "./../components/ui/Heading";
import { Form, Formik } from "formik";
import Field from "./../components/Field";
import ButtonForm from "./../components/ButtonForm";
import {
  crearNoticiaSchema,
  crearNoticiaValues,
} from "./../validation/crearNoticiaSchema";
import { useState } from "react";
import Image from "next/image";
import { RichTextBox } from "./../components/ui/RichTextBox";

const CrearNoticia = () => {
  const [urlImagen, setUrlImagen] = useState(
    "https://images-ext-2.discordapp.net/external/p9vTDce_N9n7653rR_bH2RZ0nq_T4Qfvp85IYI1qSzw/https/mdbootstrap.com/img/Photos/Others/placeholder.jpg"
  );

  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <Heading titulo="Publica tu nota" />
        {/* Control y Validacion del formulario con formik y yup */}
        <Formik
          initialValues={crearNoticiaValues}
          validationSchema={crearNoticiaSchema}
          onSubmit={(values) => console.log(values)}
        >
          <div>
            <div className="flex justify-between mx-auto sm:flex-nowrap flex-wrap gap-12">
              <div className="mx-auto w-11/12 sm:w-2/3">
                <Form className="mt-12">
                  <Field name="titulo" label="Titulo" />
                  <Field name="cuerpo" label="Descripcion" />
                  <RichTextBox />
                  <Field name="fecha" label="Fecha del suceso" type="date" />
                  <Field name="categoria" label="Categoria" type="select" />
                </Form>
              </div>
              <div className="my-auto">
                <div>
                  <Image
                    width={600}
                    height={400}
                    src={urlImagen}
                    alt="imagen"
                  />
                </div>
                <input
                  type="file"
                  className="curso-pointer block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-400 file:text-white
      file:duration-150
      hover:file:bg-primary-red"
                />
              </div>
            </div>

            {/* Aqui va a ir el mapita c: */}
            <Field name="ubicacion" label="Ubicacion" />

            {/* Submit para enviar formulario */}
            <ButtonForm value="Registrar" />
          </div>
        </Formik>
      </div>
    </Layout>
  );
};

export default CrearNoticia;
