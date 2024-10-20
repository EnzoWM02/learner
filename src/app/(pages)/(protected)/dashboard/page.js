import { getUserRankingAction } from "src/app/api/actions/Dashboard/getUserRankingAction";
import Ranking from "src/app/components/modules/dashboard/Ranking";
import PageHeader from "src/app/components/ui/PageHeader";
import { RankingPeriodicity } from "src/app/utils/constants/modules/dashboard/DashboardHelper";

export default function Dashboard() {
  const getUserRankingPromiseDaily = getUserRankingAction(
    RankingPeriodicity.DAILY
  );
  const getUserRankingPromiseMonthly = getUserRankingAction(
    RankingPeriodicity.MONTHLY
  );
  const getUserRankingPromiseLevel = getUserRankingAction(
    RankingPeriodicity.LEVEL
  );

  return (
    <>
      <PageHeader
        message={
          "Bem-vindo ao Learner! Esta é uma plataforma experimental para a validação dos conceitos de gamificação. Qualquer feedback por favor encaminhe para enzowmosman@gmail.com, obrigado!"
        }
      />
      <div className="w-2/5">
        <Ranking
          getUserRankingPromiseDaily={getUserRankingPromiseDaily}
          getUserRankingPromiseMonthly={getUserRankingPromiseMonthly}
          getUserRankingPromiseLevel={getUserRankingPromiseLevel}
        />
      </div>
    </>
  );
}
