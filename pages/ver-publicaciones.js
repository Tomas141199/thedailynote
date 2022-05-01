import Layout from "../components/Layout/Layout";
import Heading from "../components/ui/Heading";
import { GridNoticiasHover } from "../components/Layout/GridNoticiasHover";
import fire from "../firebase";

const Publicaciones = ({ noticias, categorias }) => {
  return (
    <Layout categorias={categorias}>
      <div className="container mx-auto p-4 mt-10">
        <Heading
          titulo={"Publicaciones"}
          className="after:bg-slate-100 after:w-11/12"
        />

        <div className="flex justify-center items-center mt-6 flex-wrap md:flex-nowrap">
          <form className="relative w-full">
            <input
              type="text"
              placeholder="Buscar nota"
              className="px-3 py-2 placeholder-gray-600 text-black bg-slate-200 rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 right-2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </form>
          <div className="flex items-center mt-6 md:mt-0">
            <button className="p-2 font-semibold text-white bg-primary-blue rounded-full cursor-pointer ease-in-out duration-300  hover:scale-105 hover:drop-shadow-lg hover:bg-blue-200 mx-2">
              Recientes
            </button>
            <button className="p-2 font-semibold text-white bg-primary-blue rounded-full cursor-pointer ease-in-out duration-300  hover:scale-105 hover:drop-shadow-lg hover:bg-blue-200 mx-2">
              Todas
            </button>
            <button className="p-2 font-semibold text-white bg-primary-blue rounded-full cursor-pointer ease-in-out duration-300  hover:scale-105 hover:drop-shadow-lg hover:bg-blue-200 mx-2">
              Aprobadas
            </button>
            <button className="p-2 font-semibold text-white bg-primary-blue rounded-full cursor-pointer ease-in-out duration-300  hover:scale-105 hover:drop-shadow-lg hover:bg-blue-200 mx-2">
              Pendientes
            </button>
          </div>
        </div>
        <div>
          {/* Aqui va la card */}
          <GridNoticiasHover noticias={noticias} />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { id, categoria } }) {
  const noticias = await fire.getNoticiasByUserIdCategorica(id, categoria);
  const categorias = await fire.getCategorias();

  return {
    props: {
      noticias,
      categorias,
    },
  };
}

export default Publicaciones;
