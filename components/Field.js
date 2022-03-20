import ErrorMessage from "./../components/ErrorMessage";
import { useField } from "formik";
const Field = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="floating-input mb-12 relative h-10">
      <input
        type={type}
        className="border-b-4 border-primary-red w-full p-2 outline-none"
        placeholder="placeholder"
        {...field}
        {...props}
      />
      <label className="absolute -top-1 left-0 px-3 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">
        {label}
      </label>

      {/* Errores de validacion */}
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
};

export default Field;
