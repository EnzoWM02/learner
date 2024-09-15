"use client";
import { Loading } from "src/app/components/ui/Loading";
import { useUserStore } from "src/stores/userStore";

export default function StoreProviderLoader({ children }) {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return (
      <Loading className="min-w-screen min-h-screen flex items-center justify-center" />
    );
  }

  return children;
}
