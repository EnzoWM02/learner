"use client";

import { act } from "react";
import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";
import styles from "src/app/assets/styles/modules/activities.module.css";

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
      <div className="w-full flex items-center justify-center mt-10">
        <div className={styles.activities_component_container}>
          <div className="mb-4">
            <span className="text-white">{activity.questions.title}</span>
          </div>
          <Component
            title={activity.questions.title}
            options={activity.questions.options}
          />
        </div>
      </div>
    </div>
  );
}
