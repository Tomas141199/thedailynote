import Image from "next/image";
import {  useEffect,useState } from "react";
import fire from "../../firebase";
import NoticiaCard from "./NoticiaCard";

export const GridNoticias = () => {

    const [Noticias, setNoticias] = useState([])

    useEffect(() => {
      noticias();
    }, [])
    
    const noticias = async() => {
        const noticia  = await fire.getNoticias()
        setNoticias(noticia)
    }
    
  return (
    <>
    <p>Noticias</p>
    <div className="flex flex-wrap gap-6">
    {
        Noticias.map(noticia => (
            <NoticiaCard
                key={noticia.createdAt}
                {...noticia}
            />
        ))
    }
    </div>
    </>
  )
};


