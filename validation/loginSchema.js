import * as Yup from "yup";

export const loginSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatorio")
      .min(6, "La contraseña debe tener una longitud de 6"),
  });
};

const loginValues = {
  email: "",
  password: "",
};

export { loginValues };

export default loginSchema;
