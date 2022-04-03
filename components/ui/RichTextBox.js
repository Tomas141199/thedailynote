import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Field, ErrorMessage } from "formik";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export const RichTextBox = ({ label }) => {
  return (
    <div className="mb-4 sm:mb-2">
      <label className="text-light-blue text-xs">{label}</label>
      <Field name="descripcion">
        {({ field, errors, touched }) => (
          <div className="relative">
            <QuillNoSSRWrapper
              theme="snow"
              className="mt-2 mb-24 h-24 relative after:absolute after:w-full after:h-small after:bg-primary-red "
              value={field.value}
              onChange={field.onChange(field.name)}
            />
            {/* Errores de validacion */}
            <ErrorMessage
              name="descripcion"
              component="div"
              className="text-tiny text-red-600  absolute -bottom-14"
            />
          </div>
        )}
      </Field>
    </div>
  );
};

export default RichTextBox;
