import Comentario from "./Comentario";

const SeccionComentarios = ({ comentarios, agregarComentario }) => {
  return (
    <>
      <div className="mt-6 divide-y-2">
        {comentarios.length === 0 ? (
          <div className="text-center text-xl my-12">
            Aun no hay comentarios
          </div>
        ) : (
          comentarios.map((comentario) => (
            <Comentario key={Math.random()} comentario={comentario} />
          ))
        )}
      </div>
      <form className="mt-6 w-full" onSubmit={agregarComentario}>
        <div className="flex w-full">
          <input
            type="text"
            name="comentario"
            id="comentario"
            className="flex-1 px-1 py-2 rounded-sm bg-gray-200 text-gray-600 placeholder-gray-600 outline-none"
            placeholder="Escribe un comentario"
          />
          <button
            type="submit"
            className="rounded-sm bg-slate-500 px-2 text-white font-semibold"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default SeccionComentarios;
