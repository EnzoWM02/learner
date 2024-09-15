"use client";

import { Avatar } from "@nextui-org/react";
import { useEffect, useState, forwardRef } from "react";
import { getRandomCatImage } from "src/app/api/actions/Avatar/getRandomCatImage";
import { Loading } from "src/app/components/ui/Loading";

const UserAvatar = forwardRef((props, ref) => {
  const [catUrl, setCatUrl] = useState("");

  async function getCatImage() {
    const catUrl = await getRandomCatImage();
    setCatUrl(catUrl);
  }

  useEffect(() => {
    if (catUrl === "") {
      getCatImage();
    }
  }, [catUrl]);

  if (!catUrl) {
    return <Loading />;
  }

  return <Avatar src={catUrl} ref={ref} {...props} />;
});

UserAvatar.displayName = "UserAvatar";
export default UserAvatar;
