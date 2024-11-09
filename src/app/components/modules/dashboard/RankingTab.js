import { Suspense } from "react";
import RankingTabData from "src/app/components/modules/dashboard/RankingTabData";
import { Loading } from "src/app/components/ui/Loading";

export default function RankingTab({ getUserRankingPromise, message }) {
  return (
    <Suspense fallback={<Loading />}>
      <RankingTabData getUserRankingPromise={getUserRankingPromise} message={message} />
    </Suspense>
  );
}
