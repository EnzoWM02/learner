import { Suspense } from "react";
import StoreProvider from "src/app/components/providers/store/StoreProvider";
import BaseLayout from "src/app/components/ui/BaseLayout";
import { Loading } from "src/app/components/ui/Loading";

export default function layout({ children }) {
  return (
    <Suspense
      fallback={
        <Loading className="min-w-screen min-h-screen flex items-center justify-center" />
      }
    >
      <StoreProvider>
        <BaseLayout>{children}</BaseLayout>
      </StoreProvider>
    </Suspense>
  );
}
