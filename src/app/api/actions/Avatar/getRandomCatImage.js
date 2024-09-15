"use server";

import handleServerError from "src/app/utils/helpers/handleServerError";

export async function getRandomCatImage() {
  try {
    const cat = await fetch("https://api.thecatapi.com/v1/images/search");
    const catJson = await cat.json();

    return catJson[0].url;
  } catch (e) {
    return handleServerError(e);
  }
}
