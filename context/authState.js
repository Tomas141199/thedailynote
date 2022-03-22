import { useReducer } from "react";
import authContext from "./authContext";
import AuthReducer from "./authReducer";
import { REGISTRO_EXITOSO } from './../types/index';

const AuthState = ({ children }) => {
  //State inicial
  const initialState = {
    usuario: null,
    mensaje: null,
  };

  //Reducer
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    
  //muestra alerta a usuarios nuevos
    const mostrarMensajeUsuarioAutenticado = () => {
        dispatch({
            type: REGISTRO_EXITOSO,
    
      })
  }
};
