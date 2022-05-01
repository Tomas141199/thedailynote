import Image from "next/image";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const NoticiaCard = ({
  address,
  categoria,
  createdAt,
  descripcion,
  fecha,
  mapCenter,
  titulo,
  urlImagen,
}) => {
  return (
    <div className="rounded-t bg-white shadow-xl mt-6 hover:scale-105 transition duration-700 hover:shadow-blue-500/50">
      <div
        className="h-40 w-full bg-cover bg-center rounded-t"
        style={{
          backgroundImage: `url(${urlImagen})`,
        }}
      ></div>

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

export default NoticiaCard;
