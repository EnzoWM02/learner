export default function zodErrorHandler(error) {
  let errMessage = "<strong>Erro ao validar campos:</strong>\n";
  for (const err of error.errors) {
    errMessage += `<strong>${err.path}</strong>\n${err.message}\n`;
  }

  return errMessage;
}
