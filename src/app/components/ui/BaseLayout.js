"use client";

import styles from "src/app/assets/styles/ui/base-layout.module.css";
import Navbar from "src/app/components/ui/navbar/Navbar";
import { useUserStore } from "src/stores/userStore";

export default function BaseLayout({ children }) {
  const user = useUserStore((state) => state.user);

  return (
    <div className="h-screen w-screen bg-primary-900">
      <Navbar />
      <div className="pl-[120px]">{children}</div>
    </div>
  );
}
