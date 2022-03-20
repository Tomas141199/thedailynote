import Image from "next/image";
import Link from "next/link";
import { Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fire from "./../firebase/fire";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Field from "./../components/Field";
import ButtonForm from "./../components/ButtonForm";
import { loginSchema, loginValues } from "./../validation/loginSchema";
import { errorNotify } from "./../helpers/notify";

const Login = () => {
  //Funcion para que usuario inicie sesion con su cuenta de google
  async function iniciarSesionConGoogle() {
    signInWithPopup(fire.auth, fire.provider)
      .then((result) => {
        //Arroja el token de acceso a la cuenta, esto es para acceder a la API de google
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // La informacion del usuario logueado
        const user = result.user;

        localStorage.setItem("usuario", JSON.stringify(user));
      })
      .catch((error) => {
        // Manejo de errores
        errorNotify("Algo salio mal intente de nuevo");
      });
  }

  return (
    <div className="overflow-x-hidden h-screen w-full flex flex-col sm:flex-row  items-center bg-light-gray drop-shadow-lg">
      {/* Alertas por notificacion */}
      <ToastContainer />

      {/* Imagen lado izquierdo */}
      <div className="h-1/4 w-full sm:h-full sm:w-2/3 sm:rounded-l bg-[url('/images/login-bg1.jpg')] sm:bg-[url('/images/login-bg3.jpg')] bg-cover bg-center brightness-50"></div>

      {/* Formulario */}
      <div className="h-full w-full sm:h-full sm:w-1/3 bg-white rounded-r p-4">
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
            onSubmit={(values) => console.log(values)}
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
