import ErrorCodes from "src/app/utils/constants/ErrorCodes";
import prismaErrorHandler from "src/app/utils/helpers/errorHandlers/prismaErrorHandler";
import zodErrorHandler from "src/app/utils/helpers/errorHandlers/zodErrorHandler";
import { spanToast } from "src/app/utils/helpers/spanToast";

export default function handleClientError(error) {
  const toastOptions = {
    autoClose: false,
    closeOnClick: true,
  };

  if (error.type === ErrorCodes.ZOD) {
    return spanToast("error", zodErrorHandler(error), toastOptions);
  }

  if (error.type === ErrorCodes.PRISMA) {
    return spanToast("error", prismaErrorHandler(error), toastOptions);
  }

  if (error.type === ErrorCodes.LOGIN) {
    return spanToast("error", error.message, toastOptions);
  }

  return spanToast("error", error, toastOptions);
}
