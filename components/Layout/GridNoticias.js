import NoticiaCard from "./NoticiaCard";
import Fade from "react-reveal/Fade";
export const GridNoticias = ({ noticias }) => {
  return (
    <div className="mx-4 md:ml-40 md:mr-2">
      <div className="h-full text-center mt-12 w-full mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 text-center">
          Noticias
        </h1>
        {noticias.length === 0 ? (
          <div className="mt-6">Aun no hay publicaciones</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {noticias.map((noticia) => (
              <Fade key={noticia.createdAt} big>
                <NoticiaCard {...noticia} />
              </Fade>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
