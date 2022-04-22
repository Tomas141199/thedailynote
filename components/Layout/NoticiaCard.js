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
    <div className="inline-block h85 rounded bg-white ml-8  shadow-xl mt-6  hover:scale-105 transition duration-700 hover:shadow-blue-500/50">
      <button>
        <img
          className="w-auto mt-6 mx-auto"
          src={urlImagen}
          alt="Sunset in the mountains"
        />
      </button>
      <div className="flex justify-between justify-items-center content-center ">
        <p className="m-2 mx-2 font-bold">
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
