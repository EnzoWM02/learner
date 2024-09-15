"use client";

import styles from "src/app/assets/styles/ui/base-layout.module.css";
import { useUserStore } from "src/stores/userStore";

export default function BaseLayout({ children }) {
  const user = useUserStore((state) => state.user);

  return <div>{JSON.stringify(user)}</div>;
}
