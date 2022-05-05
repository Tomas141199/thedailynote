import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const Comentario = ({ comentario }) => {
  return (
    <div className="py-2 flex gap-3 items-center">
      <div
        className="h-12 w-12 rounded-full bg-cover"
        style={{ backgroundImage: `url(${comentario.photo})` }}
      ></div>
      <div className="">
        <div className="font-bold text-primary-blue">{comentario.nombre}</div>
        <div>{comentario.mensaje}</div>
        <div className="text-xs text-gray-400">
          Hace {""}
          {formatDistanceToNow(new Date(comentario.hora), { locale: es })}
        </div>
      </div>
    </div>
  );
};

export default Comentario;
