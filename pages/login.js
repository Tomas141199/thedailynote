import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen w-full flex flex-col sm:flex-row justify-center items-center bg-light-gray drop-shadow-lg">
      <div className="h-1/4 w-full sm:h-128 sm:w-80 sm:rounded-l bg-[url('/images/login-bg1.jpg')] sm:bg-[url('/images/login-bg3.jpg')] bg-cover brightness-75"></div>
      <div className="h-3/4 w-full sm:h-128 sm:w-96 bg-white rounded-r p-4">
        <div className="w-full sm:w-11/12 mx-auto">
          <h1 className="text-center font-bold text-3xl">Iniciar sesion</h1>

          <button className="mx-auto mt-12 bg-white p-2 flex justify-center items-center gap-2 font-semibold text-sm rounded-full transition hover:scale-105 shadow-md">
            Continuar con
            <Image
              src="/images/icon-google.svg"
              width="30px"
              height="30px"
              alt="google icon"
            />
          </button>

          <form className="mt-12" method="post" autoComplete="off">
            <div className="floating-input mb-12 relative">
              <input
                type="email"
                className="border-b-4 border-primary-red w-full p-2 outline-none"
                placeholder="name@example.com"
              />
              <label
                forHtml="correo"
                className="absolute -top-1 left-0 px-3 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
              >
                Correo electronico
              </label>
            </div>
            <div className="floating-input mb-6 relative">
              <input
                name="password"
                type="password"
                className="border-b-4 border-primary-red w-full p-2 outline-none"
                placeholder="password"
              />
              <label
                forHtml="password"
                className="absolute -top-1 left-0 px-3 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
              >
                Contraseña
              </label>
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
              <a
                className="font-bold
              relative
              after:content-['']
              after:absolute
              after:w-full
              after:h-tiny
              after:rounded
              after:top-3
              after:left-0
              after:scale-x-0
              after:origin-left
              after:ease-in-out
              after:duration-300
              after:hover:scale-x-100
              after:bg-light-blue
              "
              >
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
