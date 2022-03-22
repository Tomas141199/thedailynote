import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const errorNotify = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export default errorNotify;
