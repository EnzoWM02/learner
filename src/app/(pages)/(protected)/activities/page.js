import { Suspense } from "react";
import { getUserActivitiesAction } from "src/app/api/actions/Activities/getUserActivitiesAction";
import { Loading } from "src/app/components/ui/Loading";
import TracksPage from "src/app/components/view/TracksPage";

export default function Activities() {
  const userActivitiesActionPromise = getUserActivitiesAction();

  return (
    <Suspense fallback={<Loading />}>
      <TracksPage userActivitiesActionPromise={userActivitiesActionPromise} />
    </Suspense>
  );
}
