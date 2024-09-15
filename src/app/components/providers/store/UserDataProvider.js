"use client";

import { useEffect } from "react";
import { useUserStore } from "src/stores/userStore";

export default function UserDataProvider({ user, children }) {
  useEffect(() => {
    useUserStore.setState({
      user,
    });
  }, [user]);

  return children;
}
