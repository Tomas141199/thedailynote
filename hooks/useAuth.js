import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function useAuth() {
  const [usuarioAutenticado, guardarUsuarioAutenticado] = useState({});
  const auth = getAuth();
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      user ? guardarUsuarioAutenticado(user) : guardarUsuarioAutenticado(null);
    });
    return unsuscribe;
  }, []);

  return usuarioAutenticado;
}

export default useAuth;
