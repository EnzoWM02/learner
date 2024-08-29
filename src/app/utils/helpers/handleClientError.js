import ErrorCodes from "src/app/utils/constants/ErrorCodes";
import zodErrorHandler from "src/app/utils/helpers/errorHandlers/zodErrorHandler";
import { spanToast } from "src/app/utils/helpers/spanToast";

export default function handleClientError(error) {
  const toastOptions = {
    autoClose: false,
    closeOnClick: true,
  };

  console.error("clienterror", error);

  if (error.type === ErrorCodes.ZOD) {
    return spanToast("error", zodErrorHandler(error), toastOptions);
  }

  if (error.type === ErrorCodes.PRISMA) {
    return spanToast("error", error.errors, toastOptions);
  }

  return spanToast("error", error.errors, toastOptions);
}
