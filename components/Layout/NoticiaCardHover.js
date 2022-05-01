import Image from "next/image";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const NoticiaCardHover = ({ createdAt, titulo, urlImagen }) => {
  return (
    <div className="rounded-t bg-white shadow-xl mt-6  transition duration-700 hover:shadow-blue-500/50">
      <div
        className="relative h-40 w-full bg-cover bg-center rounded-t"
        style={{
          backgroundImage: `url(${urlImagen})`,
        }}
      >
        <div className="h-full w-full flex items-center justify-center gap-8 bg-opacity-blue opacity-0 duration-300 ease-linear hover:opacity-100">
          <button className="bg-opacity-light-blue rounded-full w-10 h-10 flex items-center duration-300 justify-center hover:rotate-45 hover:scale-110">
            <Image
              blurDataURL="/images/logo-movil.svg"
              src="/images/trash-can.png"
              width={24}
              height={24}
              alt="logo"
            />
          </button>
          <button className="bg-opacity-light-blue rounded-full w-10 h-10 flex items-center duration-300 justify-center hover:rotate-180 hover:scale-110">
            <Image
              blurDataURL="/images/logo-movil.svg"
              src="/images/eye.png"
              width={24}
              height={24}
              alt="logo"
            />
          </button>
        </div>
      </div>

      <h2 className="font-semibold text-left mx-2 mt-4 text-lg leading-normal">
        {titulo}
      </h2>

      <div className="flex py-2 justify-between justify-items-center items-center">
        <p className="m-2 text-sm mx-2 font-bold">
          Hace:{" "}
          <span className="font-normal text-slate-500">
            {formatDistanceToNow(new Date(createdAt), { locale: es })}
          </span>
        </p>
        <div>
          <button className="mx-4">
            <Image
              blurDataURL="/images/logo-movil.svg"
              src="/images/compartir.png"
              width={30}
              height={35}
              alt="logo"
            />
          </button>
          <button className="mx-4">
            <Image
              blurDataURL="/images/logo-movil.svg"
              src="/images/heart.png"
              width={30}
              height={30}
              alt="logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticiaCardHover;
