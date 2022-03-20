import React from "react";
import styled from "@emotion/styled";

const Imagen = styled.div`
  background-image: url("/public/registro-img.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Registro = () => {
  return (
    <div className="md:container md:mx-auto">
      {" "}
      {/* Contenedor */}
      <div className="flex mb-auto h-screen w-screen">
        {" "}
        {/* Flex */}
        <div className="w-1/3 bg-white h-12">
          {" "}
          {/* Columna 1 del formulario  */}
          <div className="flex items-center justify-center min-h-screen">
            <div className='"px-10 py-8 mt-4 text-left bg-white shadow-lg"'>
              <h2 className="text-2xl font-bold text-center">The Daily Note</h2>
              <br></br>
              <h3 className="text-2xl font-bold text-center">
                Registrate aqui
              </h3>
              <h4 className="text-gray-500 text-center">
                Ingresa los datos solicitados
              </h4>
              <form>
                <div className="mt-4">
                  {" "}
                  {/* Div del input y el label con el nombre */}
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-2 pt-2"
                        forHtml="inline-nombre"
                      >
                        Nombre
                      </label>
                    </div>
                    <div className="md:w-2/3 border-b border-purple-700">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Nombre"
                        aria-label="Nombre"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {" "}
                  {/* Div del input y el label con el apellido paterno */}
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-2"
                        forHtml="inline-nombre"
                      >
                        Apellido Paterno
                      </label>
                    </div>
                    <div className="md:w-2/3 border-b border-purple-700">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Apellido paterno"
                        aria-label="Apellido paterno"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {" "}
                  {/* Div del input y el label con el apellido materno */}
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-2"
                        forHtml="inline-nombre"
                      >
                        Apellido Materno
                      </label>
                    </div>
                    <div className="md:w-2/3 border-b border-purple-700">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Apellido materno"
                        aria-label="Apellido materno"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {" "}
                  {/* Div del input y el label con el correo */}
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-2"
                        forHtml="inline-nombre"
                      >
                        Correo
                      </label>
                    </div>
                    <div className="md:w-2/3 border-b border-purple-700">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="email"
                        placeholder="Correo"
                        aria-label="correo"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {" "}
                  {/* Div del input y el label con la contraseña */}
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-black font-bold md:text-left mb-1 md:mb-0 pr-2"
                        forHtml="inline-nombre"
                      >
                        Contraseña
                      </label>
                    </div>
                    <div className="md:w-2/3 border-b border-purple-700">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="password"
                        placeholder="Contraseña"
                        aria-label="password"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {" "}
                  {/* Div del link de redirección al login*/}
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                      <a className="underline" href="">
                        ¿Estás registrado? Inicia sesión aquí
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {" "}
                  {/* Div del boton de envio  */}
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                      <button
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                      >
                        Registrarse
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-2/3 imagen-registro-div">
          {" "}
          {/* Columna pa la imagen */}
          ola
          <Imagen></Imagen>
        </div>
      </div>
    </div>
  );
};

export default Registro;
