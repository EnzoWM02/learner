import { Suspense } from "react";
import { getUserActivitiesAction } from "src/app/api/actions/Activities/getUserActivitiesAction";
import { Loading } from "src/app/components/ui/Loading";
import ActivitiesPage from "src/app/components/view/ActivitiesPage";

export default function Activities() {
  const userActivitiesActionPromise = getUserActivitiesAction();

  return (
    <Suspense fallback={<Loading />}>
      <ActivitiesPage
        userActivitiesActionPromise={userActivitiesActionPromise}
      />
    </Suspense>
  );
}
