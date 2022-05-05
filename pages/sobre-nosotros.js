import Layout from "../components/Layout/Layout";
import Heading from "../components/ui/Heading";
import fire from "./../firebase";

const Nosotros = ({ categorias }) => {
  return (
    <Layout categorias={categorias}>
      <div className="container mx-auto mt-10">
        <Heading
          titulo={"Sobre nosotros"}
          className="after:bg-gray-200 after:w-11/12"
        />

        <div className="text-sm w-11/12 mx-auto text-left mt-4 font">
          Somos estudiantes de la carrera en Ingeniería Tecnologías de la
          información y buscamos ofrecer una
          <span className="mx-1 text-light-blue font-semibold">plataforma</span>
          en la que la gente pueda
          <span className="mx-1 text-light-blue font-semibold">compartir</span>
          los acontecimientos más importantes o cosas que quieran expresar para
          llegar a las personas y crear una comunicación que en maravillosos
          casos permita la{" "}
          <span className="mx-1 text-light-blue font-semibold">
            calaboración
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <div className="h-36 w-36 rounded-full bg-tomas bg-center bg-cover mx-auto"></div>
            <div className="font-bold text-light-blue text-sm text-center">
              Tomás Hernández García
            </div>
            <div className="font-bold text-primary-blue text-sm text-center">
              Desarrollador Web
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-36 w-36 rounded-full bg-donaldo bg-center bg-cover mx-auto"></div>
            <div className="font-bold text-light-blue text-sm  text-center">
              Luís Donaldo Galloso Tapía
            </div>
            <div className="font-bold text-primary-blue text-sm text-center">
              Desarrollador Web
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-36 w-36 rounded-full bg-juan bg-center bg-cover mx-auto"></div>
            <div className="font-bold text-light-blue text-sm  text-center">
              Juan Carlos Pablo Santos
            </div>
            <div className="font-bold text-primary-blue text-sm  text-center">
              Desarrollador Web
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { categoria } }) {
  const categorias = await fire.getCategorias();
  return {
    props: {
      categorias,
    },
  };
}

export default Nosotros;
