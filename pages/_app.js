import "../styles/globals.css";
import NotificacionState from "./../context/notificaciones/notificacionState";
import useAuth from "./../hooks/useAuth";
import AuthContext from "./../context/auth/authContext";
import fire from "./../firebase/index";

function MyApp({ Component, pageProps }) {
  const usuario = useAuth();

  return (
    <AuthContext.Provider value={{ usuario }}>
      <NotificacionState>
        <Component {...pageProps} />
      </NotificacionState>
    </AuthContext.Provider>
  );
}

export default MyApp;
