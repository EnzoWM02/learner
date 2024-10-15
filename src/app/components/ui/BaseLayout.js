"use client";

import Navbar from "src/app/components/ui/navbar/Navbar";
import { useUserStore } from "src/stores/userStore";

export default function BaseLayout({ children }) {
  const user = useUserStore((state) => state.user);

  return (
    <div className="h-screen w-screen bg-primary-900">
      <Navbar />
      <div className="pl-[160px] pt-[40px]">{children}</div>
    </div>
  );
}
