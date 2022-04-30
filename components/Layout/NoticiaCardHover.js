import Image from "next/image";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const NoticiaCardHover = ({
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
        <div className="relative group container inline-block h85 rounded bg-white ml-8 shadow-xl mt-6 shadow-lg content-div">
            {/* Div para la imagen */}
            <div>
                <div className="fd-cl group-hover:opacity-25">
                    <button>
                        <img
                            className="w-auto mt-6 mx-auto"
                            src={urlImagen}
                            alt="Sunset in the mountains"
                        />
                    </button>
                </div>

                {/* Div de los botones y la información */}
                <div className="flex justify-between justify-items-center content-center group-hover:opacity-25">

                    <p className="m-2 mx-2 font-bold">
                        {titulo}
                    </p>

                    <p className="m-2 mx-2 font-bold">
                        Hace:{" "}
                        <span className="font-normal text-slate-500">
                            {formatDistanceToNow(new Date(createdAt), { locale: es })}
                        </span>
                    </p>
                </div>

                <div className="absolute left-8 top-2 ml-16 mt-24 mr-8 opacity-0 fd-sh group-hover:opacity-100">
                    <div className="text-center">
                        <button className="text-center ml-4 rounded-full p-4 bg-white ">
                            <Image
                                blurDataURL="/images/logo-movil.svg"
                                src="/images/editar.png"
                                width={30}
                                height={35}
                                alt="logo"
                            />
                        </button>

                        <button className="text-center ml-4 rounded-full p-4 bg-white ">
                            <Image
                                blurDataURL="/images/logo-movil.svg"
                                src="/images/delete.png"
                                width={30}
                                height={35}
                                alt="logo"
                            />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default NoticiaCardHover;








