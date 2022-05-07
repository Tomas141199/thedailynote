import "../styles/globals.css";
import NotificacionState from "./../context/notificaciones/notificacionState";
import useAuth from "./../hooks/useAuth";
import AuthContext from "./../context/auth/authContext";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import fire from "../firebase";

//Config Progress bar
const progress = new ProgressBar({
  size: 4,
  color: "#0597F2",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

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
