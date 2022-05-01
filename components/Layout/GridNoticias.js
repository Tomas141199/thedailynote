import NoticiaCard from "./NoticiaCard";
export const GridNoticias = ({ noticias }) => {
  return (
    <div className="w-11/12 container mx-auto">
      <div className="h-full text-center mt-12 w-full mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 text-center">
          Noticias
        </h1>
        {noticias.length === 0 ? (
          <div className="mt-6">Aun no hay publicaciones</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {noticias.map((noticia) => (
              <NoticiaCard key={noticia.createdAt} {...noticia} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
