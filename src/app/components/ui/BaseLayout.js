"use client";

import styles from "src/app/assets/styles/ui/base-layout.module.css";
import { Loading } from "src/app/components/ui/Loading";
import { useUserStore } from "src/stores/userStore";

export default function BaseLayout({ children }) {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return (
      <Loading className="min-w-screen min-h-screen flex items-center justify-center" />
    );
  }

  return <div>{JSON.stringify(user)}</div>;
}
