import React from 'react'
import { useContext, useEffect } from "react";
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Layout/Hero';
import { ToastContainer } from 'react-toastify';
import NotificacionContext from '../../context/notificaciones/notificacionContext';
import { infoNotify } from '../../helpers/notify';
import fire from '../../firebase';
import Sidebar from '../../components/Layout/Sidebar';
import { async } from '@firebase/util';
import { GridNoticias } from '../../components/Layout/GridNoticias';

export default function Local({ local }) {

    //Context de las notificaciones
    const { notificacion } = useContext(NotificacionContext);

    useEffect(() => {
        if (notificacion) {
            infoNotify(notificacion.mensaje);
        }
    });

    return (
        <Layout inicio={true}>
            {/* Alertas por notificacion */}
            <ToastContainer />
            <Hero />
            <div className="flex gap-2">
                <Sidebar />
                <GridNoticias noticias={local} />
            </div>
        </Layout>
    );
};

export async function getServerSideProps() {
    const local = await fire.getNoticiaLocal();
    console.log(local);
    return {
        props: {
            local,
        },
    };
}
