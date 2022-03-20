import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./../components/ErrorMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fire from "./../firebase/fire";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  //Funcion para mostrar alertas
  const notify = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  //Control y Validacion del formulario con formik y yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es valido")
        .required("El email es obligatorio"),
      password: Yup.string().required("El password es obligatorio"),
    }),
    onSubmit: (values) => console.log(values),
  });

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
        notify("Algo salio mal intente de nuevo");
      });
  }

  return (
    <div className="overflow-x-hidden h-screen w-full flex flex-col sm:flex-row justify-center items-center bg-light-gray drop-shadow-lg">
      {/* Alertas por notificacion */}
      <ToastContainer />

      <div className="h-1/4 w-full sm:h-128 sm:w-96 sm:rounded-l bg-[url('/images/login-bg1.jpg')] sm:bg-[url('/images/login-bg3.jpg')] bg-cover brightness-75"></div>
      <div className="h-full w-full sm:h-128 sm:w-80 bg-white rounded-r p-4">
        <div className="w-full sm:w-11/12 mx-auto">
          <h1 className="text-center font-bold text-2xl mt-4">
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

          <form
            className="mt-12"
            method="post"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <div className="floating-input mb-12 relative">
              <input
                type="email"
                className="border-b-4 border-primary-red w-full p-2 outline-none"
                placeholder="name@example.com"
                {...formik.getFieldProps("email")}
              />
              <label className="absolute -top-1 left-0 px-3 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">
                Correo electronico
              </label>

              {/* Errores de validacion */}
              {formik.touched.email && formik.errors.email ? (
                <ErrorMessage message={formik.errors.email} />
              ) : null}
            </div>

            <div className="floating-input mb-6 relative">
              <input
                type="password"
                className="border-b-4 border-primary-red w-full p-2 outline-none"
                placeholder="password"
                {...formik.getFieldProps("password")}
              />
              <label className="absolute -top-1 left-0 px-3 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">
                Contraseña
              </label>
              {/* Errores de validacion */}
              {formik.touched.password && formik.errors.password ? (
                <ErrorMessage message={formik.errors.password} />
              ) : null}
            </div>

            <div className="flex justify-end">
              <input
                className="relative p-2 w-full sm:w-16 font-semibold text-white bg-primary-blue rounded cursor-pointer ease-in-out duration-300 hover:scale-105 hover:drop-shadow-lg"
                type="submit"
                value="Entrar"
              />
            </div>
          </form>

          <div className="mt-10 text-xs text-center text-primary-gray">
            ¿No tienes una cuenta?, Registrate
            <Link href="#">
              <a className="font-bold underline underline-offset-1 mb-1 sm:mb-6">
                {" "}
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
