import { Suspense } from "react";
import { getUserActivitiesAction } from "src/app/api/actions/Activities/getUserActivitiesAction";
import { Loading } from "src/app/components/ui/Loading";
import ActivitiesPage from "src/app/components/view/ActivitiesPage";

export default function Activities({ params }) {
  const userActivitiesActionPromise = getUserActivitiesAction(params.trackId);

  return (
    <Suspense fallback={<Loading />}>
      <ActivitiesPage
        userActivitiesActionPromise={userActivitiesActionPromise}
        trackId={params.trackId}
      />
    </Suspense>
  );
}
