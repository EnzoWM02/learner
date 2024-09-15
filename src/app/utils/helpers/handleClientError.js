import errorHandler from "src/app/utils/helpers/errorHandlers/errorHandler";
import { spanToast } from "src/app/utils/helpers/spanToast";

export default function handleClientError(error) {
  const toastOptions = {
    autoClose: false,
    closeOnClick: true,
  };

  return spanToast("error", errorHandler(error), toastOptions);
}
