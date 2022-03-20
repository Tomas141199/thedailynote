import * as Yup from "yup";

export const loginSchema = () => {
  return Yup.object({
    nombre: Yup.string().required("El nombre es obligatorio"),
    appaterno: Yup.string().required("El Apellido Paterno es obligatorio"),
    apmaterno: Yup.string().required("El Apellido Materno es obligatorio"),
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatorio")
      .min(6, "La contraseña debe tener una longitud de 6"),
  });
};

const loginValues = {
  nombre: "",
  appaterno: "",
  apmaterno: "",
  email: "",
  password: "",
};

export { loginValues };

export default loginSchema;
