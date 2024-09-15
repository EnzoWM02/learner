import { Image } from "@nextui-org/react";
import { getRandomCatImage } from "src/app/api/actions/Avatar/getRandomCatImage";
import handleServerAction from "src/app/utils/helpers/handleServerAction";

export default async function UserAvatar() {
  const catUrl = await handleServerAction(getRandomCatImage());

  return (
    <Image
      src={catUrl}
      className="w-full h-full rounded-full"
      alt="Cat image"
      height={32}
      width={32}
    />
  );
}
