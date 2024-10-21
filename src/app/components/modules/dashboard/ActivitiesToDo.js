"use client";

import { use } from "react";
import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";
import ActivityCard from "src/app/components/modules/activities/ActivityCard";
import Container from "src/app/components/ui/Container";

export default function ActivitiesToDo({ getUserTracksCountPromise }) {
  const activities = use(getUserTracksCountPromise);
  const uncompletedTrack = activities.find(
    (activity) =>
      activity.count <
      ActivitiesList.find((item) => item.id === activity.track_id).list.length
  );

  let nextActivity = null;
  if (uncompletedTrack) {
    nextActivity = ActivitiesList.find(
      (item) => item.id === uncompletedTrack.track_id
    ).list.find((item) => !uncompletedTrack.activities.includes(item.id));
  }

  return (
    <Container className={"h-fit"}>
      {activities.length === 0 ? (
        <span className="text-sm">
          Entre na aba de atividades e escolha uma rota!
        </span>
      ) : activities.length > 0 && !uncompletedTrack ? (
        <span className="text-sm">
          Parabéns! Todas as atividades das rotas iniciadas foram concluídas!
        </span>
      ) : (
        <div className="flex flex-col gap-3">
          <span className="text-lg">Sugestão de atividade:</span>
          <ActivityCard
            className={"bg-primary-800 hover:bg-primary-900"}
            activity={nextActivity}
            trackId={uncompletedTrack.track_id}
          />
        </div>
      )}
    </Container>
  );
}
