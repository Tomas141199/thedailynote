import Image from "next/image";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Link from "next/link";

const NoticiaCard = ({ id, createdAt, titulo, urlImagen, votos }) => {
  return (
    <Link passHref={true} href={{ pathname: "nota/view/[id]", query: { id } }}>
      <div className="rounded-t cursor-pointer bg-white shadow-xl mt-6 hover:scale-105 transition duration-700 hover:shadow-blue-500/50">
        <div
          className="h-40 w-full bg-cover bg-center rounded-t"
          style={{
            backgroundImage: `url(${urlImagen})`,
          }}
        ></div>

        <h2 className="text-overflow font-bold text-left mx-2 mt-4 text-md leading-normal">
          {titulo}
        </h2>

        <div className="flex py-2 justify-between flex-wrap items-center">
          <p className="text-overflow text-left w-1/2 m-2 text-sm mx-3 font-semibold">
            Hace:{" "}
            <span className="font-normal text-slate-500">
              {formatDistanceToNow(new Date(createdAt), { locale: es })}
            </span>
          </p>
          <div>
            <button className="mx-4 flex items-center gap-1">
              <span className="text-xs"> {votos}</span>

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
    </Link>
  );
};

export default NoticiaCard;
