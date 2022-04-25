import React, { useContext, useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import Heading from '../components/ui/Heading'
import { GridNoticias } from "../components/Layout/GridNoticias";
import fire from "../firebase";
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { FireContext } from '../firebase';
import AuthContext from "../context/auth/authContext";

import Image from "next/image";

const ver_publicaciones = () => {

    //Guardar las noticias por usuario 
    const [noticias, guardarNoticias] = useState([]);

    //Jalamos el ID del usuario
    const { user } = useContext(AuthContext);

    useEffect(() => {

        //Funcion para obtener las publicaciones 
        const obtenerPublicaciones = async () => {
            //Aplicamos un where para que se muestren las puras notas que tengan el mismo id del usuario que está logeado
            const q = query(collection(fire.db, "noticias"), where("id", "==", user.uid));

            //Snapshot
            const querySnapshot = await getDocs(q);
            manejarSnapShot(querySnapshot);
        };
        //llamado a la funcion
        obtenerPublicaciones();
    }, []);

    //Devolucion del query
    function manejarSnapShot(querySnapshot) {
        const notas = querySnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });
        //Almacena las notas
        guardarNoticias(notas);
    }

    return (
        <Layout>
            <div className="container mx-auto mt-10">
                <Heading titulo={"Publicaciones"}></Heading>
                <hr></hr>
                <br></br>
                <div className='gap-4 grid-cols-2 items-stretch flex-wrap'>
                    <div className="relative flex flex-wrap items-stretch mb-3 sm:w-3/5">
                        <input type="text" placeholder="Buscar nota o palabras clave" className="px-3 py-3 placeholder-slate-500 text-black bg-slate-200 bg-white rounded-md text-sm border-0 shadow outline-none focus:outline-none focus:ring w-4/5 pr-15 mx-4" />
                        <button className='gap-4'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='gap-5'>
                        <div className='mx-4'>
                            <button className="p-2 w-full sm:w-24 font-semibold text-white bg-primary-blue rounded-md cursor-pointer ease-in-out duration-300  hover:scale-105 hover:drop-shadow-lg hover:bg-blue-200 mb-6 mx-2">Recientes</button>
                            <button className="p-2 w-full sm:w-24 font-semibold text-white bg-primary-blue rounded-md cursor-pointer ease-in-out duration-300  hover:scale-105 hover:drop-shadow-lg hover:bg-blue-200 mb-6 mx-2">Todas</button>
                            <button className="p-2 w-full sm:w-24 font-semibold text-white bg-primary-blue rounded-md cursor-pointer ease-in-out duration-300  hover:scale-105 hover:drop-shadow-lg hover:bg-blue-200 mb-6 mx-2">Aprobadas</button>
                            <button className="p-2 w-full sm:w-24 font-semibold text-white bg-primary-blue rounded-md cursor-pointer ease-in-out duration-300  hover:scale-105 hover:drop-shadow-lg hover:bg-blue-200 mb-6 mx-2">Por revisar</button>
                        </div>
                    </div>
                </div>
                {/**Aqui va la petición y la nueva card */}
                <div className="inline-block h85 rounded bg-white ml-8  shadow-xl mt-6  hover:scale-105 transition duration-700 hover:shadow-blue-500/50">
                    {/*<!-- card -->*/}
                    <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                        {/*<!-- img -->*/}
                        <img className="aspect-video w-96 rounded-t-2xl object-cover object-center" src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        {/*<!-- text info -->*/}
                        <div className="p-4">

                        </div>
                    </div>

                    <div className="flex justify-between justify-items-center content-center ">
                        <p className="m-2 mx-2 font-bold">
                            Hace:{" "}
                            <span className="font-normal text-slate-500">

                            </span>
                        </p>
                        <div>
                            <button className="mx-4">
                                <Image
                                    blurDataURL="/images/logo-movil.svg"
                                    src="/images/compartir.png"
                                    width={30}
                                    height={35}
                                    alt="logo"
                                />
                            </button>
                            <button className="mx-4">
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

            </div>
        </Layout>

    );
};

export default ver_publicaciones
