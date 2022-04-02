import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="floating-input mb-12 relative h-10">
      <select
        className="border-b-4 border-primary-red w-full p-2 outline-none"
        placeholder="placeholder"
        {...field}
        {...props}
      >
        <option value="" disabled>
          Selecione una categoria
        </option>
        <option value="Local">Local</option>
        <option value="Deportes">Deportes</option>
        <option value="Sociales">Sociales</option>
        <option value="Espectaculos">Espectaculos</option>
        <option value="Internacional">Internacional</option>
        <option value="Politica">Politica</option>
        <option value="Comunidad BUAP">Comunidad BUAP</option>
      </select>

      {/* Errores de validacion */}
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
};

export default Select;
