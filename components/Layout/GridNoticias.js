
import {  useEffect,useState } from "react";
import fire from "../../firebase";

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
    <div>GridNoticias
    
    {
        Noticias.map(noticia => {
            console.log(noticia.titulo);
        })
    }
    </div>
  )
};


