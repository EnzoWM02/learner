"use client";

import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";

export default function ActivityPage({ params }) {
  const activity = Object.values(ActivitiesList)
    .find((list) => list.list.find((item) => item.id === params.activityId))
    .list.find((item) => item.id === params.activityId);
  console.log(activity);

  const Component = activity.type;
  return (
    <div className="flex flex-col">
      <span className="text-white text-2xl">{activity.title}</span>
      <span className="text-gray-300 text-sm pt-2">{activity.description}</span>
      <Component />
    </div>
  );
}
