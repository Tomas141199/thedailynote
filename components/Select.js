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
      />

      {/* Errores de validacion */}
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
};

export default Select;
