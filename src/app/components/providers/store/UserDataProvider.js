"use client";

import { useUserStore } from "src/stores/userStore";

export default function UserDataProvider({ user, children }) {
  useUserStore.setState({
    user,
  });

  return children;
}
