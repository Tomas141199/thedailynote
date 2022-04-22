import NoticiaCard from "./NoticiaCard";

export const GridNoticias = ({ noticias }) => {
  return (
    <>
      <p>Noticias</p>
      <div className="flex flex-wrap gap-6">
        {noticias.map((noticia) => (
          <NoticiaCard key={noticia.createdAt} {...noticia} />
        ))}
      </div>
    </>
  );
};
