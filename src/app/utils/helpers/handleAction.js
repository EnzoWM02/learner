import handleClientError from "src/app/utils/helpers/handleClientError";

export default async function handleAction(promiseAction) {
  const res = await promiseAction;

  if (res.error) {
    handleClientError(res.error);
    return null;
  }

  return res;
}
