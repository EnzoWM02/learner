import { Suspense } from "react";
import { getUserTracksCountAction } from "src/app/api/actions/Activities/getUserTracksCountAction";
import { Loading } from "src/app/components/ui/Loading";
import TracksPage from "src/app/components/view/TracksPage";

export default function Activities() {
  const userTracksCountActionPromise = getUserTracksCountAction();

  return (
    <Suspense fallback={<Loading />}>
      <TracksPage userTracksCountActionPromise={userTracksCountActionPromise} />
    </Suspense>
  );
}
