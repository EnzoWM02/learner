import { Suspense } from "react";
import { getUserRankingAction } from "src/app/api/actions/Dashboard/getUserRankingAction";
import RankingTabData from "src/app/components/modules/dashboard/RankingTabData";
import { Loading } from "src/app/components/ui/Loading";

export default function RankingTab({ periodicity }) {
  const getUserRankingPromise = getUserRankingAction(periodicity);

  return (
    <Suspense fallback={<Loading />}>
      <RankingTabData getUserRankingPromise={getUserRankingPromise} />
    </Suspense>
  );
}
