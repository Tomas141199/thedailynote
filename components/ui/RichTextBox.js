import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export const RichTextBox = () => {
  return (
    <QuillNoSSRWrapper
      theme="snow"
      className="mb-16 h-24 max-h-24 relative after:absolute after:w-full after:h-small after:bg-primary-red "
    />
  );
};

export default RichTextBox;
