import * as Yup from "yup";

export const crearNoticiaSchema = () => {
  return Yup.object({
    titulo: Yup.string().required("El titulo es obligatorio"),
    descripcion: Yup.string()
      .required("El cuerpo de la noticia es obligatorio")
      .min(50, "Almenos 50 caracteres")
      .max(1200, "El limite es de 500 caracteres"),
    fecha: Yup.date().required("La fecha es obligatoria"),
    categoria: Yup.string().required("La categoria es obligatoria"),
  });
};

const crearNoticiaValues = {
  titulo: "",
  descripcion: "",
  fecha: "",
  categoria: "",
};

export { crearNoticiaValues };

export default crearNoticiaSchema;
