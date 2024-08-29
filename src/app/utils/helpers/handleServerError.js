import ErrorCodes from "src/app/utils/constants/ErrorCodes";
import { ZodError } from "zod";

export default async function handleServerError(error) {
  if (error instanceof ZodError) {
    const parsedZodError = error.errors.map((err) => {
      return {
        path: err.path[0],
        message: err.message,
      };
    });

    return {
      error: {
        type: ErrorCodes.ZOD,
        errors: parsedZodError,
      },
    };
  }

  return {
    error: {
      type: ErrorCodes.UNKNOWN,
      errors: error.message,
    },
  };
}