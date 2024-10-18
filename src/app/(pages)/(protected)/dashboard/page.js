import { getUserRankingAction } from "src/app/api/actions/Dashboard/getUserRankingAction";
import Ranking from "src/app/components/modules/dashboard/Ranking";
import PageHeader from "src/app/components/ui/PageHeader";

export default function Dashboard() {
  return (
    <>
      <PageHeader
        message={
          "Bem-vindo ao Learner! Esta é uma plataforma experimental para a validação dos conceitos de gamificação. Qualquer feedback por favor encaminhe para enzowmosman@gmail.com, obrigado!"
        }
      />
      <div className="w-1/4">
        <Ranking />
      </div>
    </>
  );
}
