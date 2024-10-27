import { Suspense } from "react";
import { getUserInventoryItemsAction } from "src/app/api/actions/Store/getUserInventoryItemsAction";
import { Loading } from "src/app/components/ui/Loading";
import PageHeader from "src/app/components/ui/PageHeader";
import StorePage from "src/app/components/view/StorePage";

export default function Store() {
  const getUserInventoryItemsPromise = getUserInventoryItemsAction();
  return (
    <>
      <PageHeader
        message={
          "Bem-vindo ao Learner! Esta é uma plataforma experimental para a validação dos conceitos de gamificação. Qualquer feedback por favor encaminhe para enzowmosman@gmail.com, obrigado!"
        }
      />
      <Suspense fallback={<Loading />}>
        <StorePage
          getUserInventoryItemsPromise={getUserInventoryItemsPromise}
        />
      </Suspense>
    </>
  );
}
