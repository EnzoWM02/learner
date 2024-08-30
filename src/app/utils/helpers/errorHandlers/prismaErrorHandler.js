export default function prismaErrorHandler(error) {
  let errMessage = `<strong>Erro ${error.code} nos campos: '${error.meta.target.join("', '")}'</strong>\n`;

  if (PRISMA_CUSTOM_CODE_MESSAGE[error.code]) {
    errMessage += PRISMA_CUSTOM_CODE_MESSAGE[error.code];
  } else {
    errMessage += error.message;
  }

  return errMessage;
}

const PRISMA_CUSTOM_CODE_MESSAGE = {
  P2002: "Já existe um registro com esse valor",
};
