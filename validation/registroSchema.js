import * as Yup from "yup";

export const registroSchema = () => {
  return Yup.object({
    nombre: Yup.string().required("El Nombre es obligatorio"),
    apellido: Yup.string().required("El Apellido es obligatorio"),
    email: Yup.string()
      .email("El Email no es valido")
      .required("El Email es obligatorio"),
    password: Yup.string()
      .required("La Contraseña es obligatorio")
      .min(6, "La Contraseña debe tener una longitud de 6"),
  });
};

const registroValues = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
};

export { registroValues };

export default registroSchema;


