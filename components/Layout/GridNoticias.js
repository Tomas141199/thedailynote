import NoticiaCard from "./NoticiaCard";
import Heading from "./../ui/Heading";
export const GridNoticias = ({ noticias }) => {
  return (
    <div className="container mx-auto bg-slate-50 ">
      <div className="h-full text-center mt-12 w-full mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 text-center">
          Noticias
        </h1>
        <div className="flex flex-wrap gap-6">
          {noticias.map((noticia) => (
            <NoticiaCard key={noticia.createdAt} {...noticia} />
          ))}
        </div>
      </div>
    </div>
  );
};
