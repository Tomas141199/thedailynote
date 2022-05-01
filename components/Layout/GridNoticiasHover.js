import NoticiaCardHover from "./NoticiaCardHover";
import Heading from "../ui/Heading";

export const GridNoticiasHover = ({ noticias }) => {
  return (
    <div className="container mx-auto">
      <div className="h-full text-center mt-12 w-full mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 text-center">
          Noticias
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {noticias.map((noticia) => (
            <NoticiaCardHover key={noticia.createdAt} {...noticia} />
          ))}
        </div>
      </div>
    </div>
  );
};
