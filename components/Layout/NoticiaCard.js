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
    urlImagen
}) => {
  return (
    <div className="inline-block max-w-sm rounded bg-white h-full  shadow-xl mt-6  hover:scale-105 transition duration-700 hover:shadow-blue-500/50">
        <button>
            <img className="w-auto mt-6 mx-auto" src={urlImagen} alt="Sunset in the mountains"/>
        </button>
        <div className="flex justify-between justify-items-center ">
            
            <p className="mt-4 mx-8 text-l font-bold">{formatDistanceToNow(new Date(createdAt), { locale: es })}</p>
            <div>
                <button className="m-4 ">
                <Image
                    blurDataURL="/images/logo-movil.svg"
                    src="/images/compartir.png"
                    width={30}
                    height={35}
                    alt="logo"
                />
                </button>
                <button className="m-4">
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
  )
}

export default NoticiaCard