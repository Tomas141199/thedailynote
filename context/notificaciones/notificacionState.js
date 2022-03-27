import { useReducer } from "react";
import { MOSTRAR_NOTIFICACION, LIMPIAR_NOTIFICACION } from "../../types/index";
import NotificacionContext from "./notificacionContext";
import NotificacionReducer from "./notificacionReducer";

const NotificacionState = ({ children }) => {
  //State inicial
  const initialState = {
    notificacion: null,
  };

  //Reducer
  const [state, dispatch] = useReducer(NotificacionReducer, initialState);

  //muestra alerta a usuarios nuevos
  const mostrarNotificacion = (mensaje) => {
    dispatch({
      type: MOSTRAR_NOTIFICACION,
      payload: { mensaje },
    });
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_NOTIFICACION,
      });
    }, 5000);
  };

  return (
    <NotificacionContext.Provider
      value={{ notificacion: state.notificacion, mostrarNotificacion }}
    >
      {children}
    </NotificacionContext.Provider>
  );
};

export default NotificacionState;
