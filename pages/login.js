import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import fire from "./../firebase/fire";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Field from "./../components/Field";
import ButtonForm from "./../components/ButtonForm";
import { loginSchema, loginValues } from "./../validation/loginSchema";
import { errorNotify, infoNotify } from "./../helpers/notify";
import Router from "next/router";
import NotificacionContext from "./../context/notificaciones/notificacionContext";

const Login = () => {
  //Context de las notificaciones
  const { notificacion } = useContext(NotificacionContext);

  useEffect(() => {
    if (notificacion) {
      infoNotify(notificacion.mensaje);
    }
  }, []);

  //Funcion para que usuario inicie sesion con su cuenta de google
  const iniciarSesionConGoogle = () => {
    signInWithPopup(fire.auth, fire.provider)
      .then((result) => {
        //Arroja el token de acceso a la cuenta, esto es para acceder a la API de google
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // La informacion del usuario logueado
        const user = result.user;
        const token = credential.accessToken;

        //Guarda la sesion del usuario
        localStorage.setItem("usuario", JSON.stringify(user));

        //Regresar al usuario al inicio de la pagina
        Router.push("/");
      })
      .catch((error) => {
        errorNotify(error.code);
      });
  };

  //Funcion para iniciar sesion con Email y Contrasenia
  const iniciarSesionConEmailandPassword = (values) => {
    //Obtencion de los campos de formik
    const { email, password } = values;
    //Inicio de sesion con los parametros
    signInWithEmailAndPassword(fire.auth, email, password)
      .then((userCredential) => {
        // Se autentico correctamente
        const user = userCredential.user;

        //Verifica que el correo se ha verificado
        if (user.emailVerified) {
          localStorage.setItem("usuario", JSON.stringify(user));
          //Regresar al usuario al inicio de la pagina
          Router.push("/");
        } else {
          errorNotify("El correo no se ha verificado, revisa tu correo");
        }
      })
      .catch((error) => {
        errorNotify(error.code);
      });
  };

  return (
    <div className="relative overflow-x-hidden h-screen w-full flex flex-col sm:flex-row  items-center bg-light-gray drop-shadow-lg">
      {/* Alertas por notificacion */}
      <ToastContainer />

      {/* Imagen lado izquierdo */}
      <div className="relative h-1/4 w-full sm:h-full sm:w-2/3 bg-mask">
        <div className="flex justify-center items-center sm:absolute sm:top-0 sm:left-12">
          <Link href="/" passHref={true}>
            <Image
              src="/images/logo-escritorio.svg"
              width="180px"
              height="120px"
              alt="logo escritorio"
            />
          </Link>
        </div>
      </div>

      {/* Formulario */}
      <div className="h-full w-full overflow-y-auto sm:h-full sm:w-1/3 bg-white rounded-r p-4">
        <div className="w-full sm:w-2/3 mx-auto">
          <h1 className="text-center font-bold text-2xl mt-12">
            Iniciar sesion
          </h1>

          <button
            onClick={iniciarSesionConGoogle}
            className="mx-auto mt-12 bg-white p-2 flex justify-center items-center gap-2 font-semibold text-sm rounded-full transition hover:scale-105 shadow-md"
          >
            Continuar con
            <Image
              src="/images/icon-google.svg"
              width="30px"
              height="30px"
              alt="google icon"
            />
          </button>

          {/* Control y Validacion del formulario con formik y yup */}
          <Formik
            initialValues={loginValues}
            validationSchema={loginSchema}
            onSubmit={iniciarSesionConEmailandPassword}
          >
            <Form className="mt-12">
              <Field name="email" type="email" label="Correo electronico" />
              <Field name="password" type="password" label="Contraseña" />
              {/* Submit para enviar formulario */}
              <ButtonForm value="Entrar" />
            </Form>
          </Formik>

          <div className="mt-10 text-xs text-center text-primary-gray">
            ¿No tienes una cuenta?, Registrate
            <Link href="/registro">
              <a className="font-bold underline underline-offset-1 mb-1 sm:mb-6 ml-1">
                aqui
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
