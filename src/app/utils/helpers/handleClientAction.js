import { toast } from "react-toastify";
import handleClientError from "src/app/utils/helpers/handleClientError";

export default async function handleClientAction(
  promiseAction,
  loadingMessage = "Carregando"
) {
  try {
    const res = await toast.promise(promiseAction, {
      pending: loadingMessage,
    });

    if (res?.error) {
      handleClientError(res.error);
      return null;
    }

    return res;
  } catch (e) {
    handleClientError(e);
    return null;
  }
}
