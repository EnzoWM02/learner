import { Suspense } from "react";
import StoreProvider from "src/app/components/providers/store/StoreProvider";
import StoreProviderLoader from "src/app/components/providers/store/StoreProviderLoader";
import BaseLayout from "src/app/components/ui/BaseLayout";
import { Loading } from "src/app/components/ui/Loading";

export default function layout({ children }) {
  return (
    <main className="learner-theme-protected">
      <Suspense
        fallback={
          <Loading className="min-w-screen min-h-screen flex items-center justify-center" />
        }
      >
        <StoreProvider>
          <StoreProviderLoader>
            <BaseLayout>{children}</BaseLayout>
          </StoreProviderLoader>
        </StoreProvider>
      </Suspense>
    </main>
  );
}
