import { Suspense } from "react";
import { getUserTracksObjectCountAction } from "src/app/api/actions/Activities/getUserTracksObjectCountAction";
import { Loading } from "src/app/components/ui/Loading";
import TracksPage from "src/app/components/view/TracksPage";

export default function Activities() {
  const userTracksCountActionPromise = getUserTracksObjectCountAction();

  return (
    <Suspense fallback={<Loading />}>
      <TracksPage userTracksCountActionPromise={userTracksCountActionPromise} />
    </Suspense>
  );
}
