"use client";

import { useEffect } from "react";
import { useUserStore } from "src/stores/userStore";

export default function UserDataProvider({ user, children }) {
  const updateUser = useUserStore((state) => state.updateUser);

  useEffect(() => {
    updateUser();
  }, [user]);

  return children;
}
