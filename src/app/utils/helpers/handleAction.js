import { toast } from "react-toastify";
import handleClientError from "src/app/utils/helpers/handleClientError";

export default async function handleAction(
  promiseAction,
  loadingMessage = "Carregando"
) {
  const res = await toast.promise(promiseAction, {
    pending: loadingMessage,
  });

  if (res.error) {
    handleClientError(res.error);
    return null;
  }

  return res;
}