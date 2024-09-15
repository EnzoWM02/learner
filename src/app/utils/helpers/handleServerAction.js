import errorHandler from "src/app/utils/helpers/errorHandlers/errorHandler";

export default async function handleServerAction(promiseAction) {
  try {
    const res = await promiseAction;

    if (res?.error) {
      console.error(errorHandler(res.error));
      return null;
    }

    return res;
  } catch (e) {
    console.error(errorHandler(res.error));
    return null;
  }
}
