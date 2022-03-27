import "../styles/globals.css";
import NotificacionState from "./../context/notificaciones/notificacionState";

function MyApp({ Component, pageProps }) {
  return (
    <NotificacionState>
      <Component {...pageProps} />
    </NotificacionState>
  );
}

export default MyApp;
