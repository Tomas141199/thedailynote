// import React from "react";
import { ToastContainer } from "react-toastify";
import { Form, Formik } from "formik";
import Link from "next/link";
import ButtonForm from "./../components/ButtonForm";
import Field from "./../components/Field";
import { registroSchema, registroValues } from "./../validation/registroSchema";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import fire from "./../firebase/index";
import { errorNotify } from "./../helpers/notify";
import Router from "next/router";

const Registro = () => {
  //Funcion para registar al usuario con email y password
  const registrarNuevoUsuario = async (values) => {
    const { nombre, appaterno, email, password } = values;
    try {
      //Registro del nuevo usuario
      await createUserWithEmailAndPassword(fire.auth, email, password);
      //Envia el correo de verificacion
      await sendEmailVerification(fire.auth.currentUser);

      //Actualiza el nombre del usuario
      await updateProfile(fire.auth.currentUser, {
        displayName: `${nombre} ${appaterno}`,
      });

      Router.push("/login");

      //Fin de la operacion
    } catch (error) {
      errorNotify(error.code);
    }
  };

  return (
    <div className="overflow-x-hidden h-screen w-full flex flex-col-reverse sm:flex-row  items-center bg-light-gray drop-shadow-lg">
      {/* Alertas por notificacion */}
      <ToastContainer />

      {/*Contenedor del Formulario */}
      <div className="w-full h-3/4 sm:h-full sm:w-1/3  bg-white rounded-r p-4">
        <div className="w-full sm:w-2/3 mx-auto">
          <h1 className="text-center font-bold text-2xl sm:mt-6">
            Registrate aqui
          </h1>

          <span className="relative block text-md mt-4 text-center text-primary-gray">
            Ingresa los datos solicitados
          </span>

          {/* Control y Validacion del formulario con formik y yup */}
          <Formik
            initialValues={registroValues}
            validationSchema={registroSchema}
            onSubmit={registrarNuevoUsuario}
          >
            <Form className="mt-12">
              <Field name="nombre" label="Nombre" />
              <Field name="appaterno" label="Apellido Paterno" />
              <Field name="apmaterno" label="Apellido Materno" />
              <Field name="email" label="Correo electronico" />
              <Field name="password" label="Contraseña" />
              {/* Submit para enviar formulario */}
              <ButtonForm value="Registrar" />
            </Form>
          </Formik>

          <div className="mt-10 text-xs text-center text-primary-gray">
            ¿Ya tienes una cuenta?, inicia sesion
            <Link href="/login">
              <a className="font-bold underline underline-offset-1 mb-1 sm:mb-6 ml-1">
                aqui
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Imagen derecha */}
      <div className="h-1/4 w-full sm:h-full sm:w-2/3 bg-[url('/images/login-bg1.jpg')] sm:bg-[url('/images/registro-img.png')] bg-cover brightness-75"></div>
    </div>
  );
};

export default Registro;
