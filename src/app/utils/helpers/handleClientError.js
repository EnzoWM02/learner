import errorHandler from "src/app/utils/helpers/errorHandlers/errorHandler";
import { spanToast } from "src/app/utils/helpers/spanToast";

export default function handleClientError(error) {
  const toastOptions = {
    autoClose: false,
    closeOnClick: true,
    theme: "dark",
  };

  return spanToast("error", errorHandler(error), toastOptions);
}
