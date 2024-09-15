import { Spinner } from "@nextui-org/react";

export function Loading({ className = undefined }) {
  return (
    <div
      className={className ?? "w-full h-full flex items-center justify-center"}
    >
      <Spinner color="primary" size="lg" />
    </div>
  );
}
