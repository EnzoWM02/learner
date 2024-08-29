import ErrorCodes from "src/app/utils/constants/ErrorCodes";
import zodErrorHandler from "src/app/utils/helpers/errorHandlers/zodErrorHandler";
import { spanToast } from "src/app/utils/helpers/spanToast";

export default function handleClientError(error) {
  const toastOptions = {
    autoClose: false,
    closeOnClick: true,
  };

  if (error.type === ErrorCodes.ZOD) {
    spanToast("error", zodErrorHandler(error), toastOptions);
  }
}
