import { getUserTracksCountAction } from "src/app/api/actions/Activities/getUserTracksCountAction";
import { getUserRankingAction } from "src/app/api/actions/Dashboard/getUserRankingAction";
import ActivitiesToDo from "src/app/components/modules/dashboard/ActivitiesToDo";
import Ranking from "src/app/components/modules/dashboard/Ranking";
import PageHeader from "src/app/components/ui/PageHeader";
import { RankingPeriodicity } from "src/app/utils/constants/modules/dashboard/DashboardHelper";

export default function Dashboard() {
  const getUserRankingDailyPromise = getUserRankingAction(
    RankingPeriodicity.DAILY
  );
  const getUserRankingMonthlyPromise = getUserRankingAction(
    RankingPeriodicity.MONTHLY
  );
  const getUserRankingLevelPromise = getUserRankingAction(
    RankingPeriodicity.LEVEL
  );
  const getUserTracksCountPromise = getUserTracksCountAction();

  return (
    <>
      <PageHeader
        message={
          "Bem-vindo ao Learner! Esta é uma plataforma experimental para a validação dos conceitos de gamificação. Qualquer feedback por favor encaminhe para enzowmosman@gmail.com, obrigado!"
        }
      />
      <div className="grid grid-cols-2 gap-5">
        <ActivitiesToDo getUserTracksCountPromise={getUserTracksCountPromise} />
        <Ranking
          getUserRankingPromiseDaily={getUserRankingDailyPromise}
          getUserRankingPromiseMonthly={getUserRankingMonthlyPromise}
          getUserRankingPromiseLevel={getUserRankingLevelPromise}
        />
      </div>
    </>
  );
}
