import ErrorCodes from "src/app/utils/constants/ErrorCodes";
import prismaErrorHandler from "src/app/utils/helpers/errorHandlers/prismaErrorHandler";
import zodErrorHandler from "src/app/utils/helpers/errorHandlers/zodErrorHandler";

export default function errorHandler(error) {
  if (error.type === ErrorCodes.ZOD) {
    return zodErrorHandler(error);
  }

  if (error.type === ErrorCodes.PRISMA) {
    return prismaErrorHandler(error);
  }

  if (error.type === ErrorCodes.LOGIN) {
    return error.message;
  }

  return error.errors ?? error;
}
