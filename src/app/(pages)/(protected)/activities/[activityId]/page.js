"use client";

import { toast } from "react-toastify";
import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";
import { submitActivityAction } from "src/app/api/actions/Activities/submitActivityAction";
import styles from "src/app/assets/styles/modules/activities.module.css";
import handleClientAction from "src/app/utils/helpers/handleClientAction";
import { useUserStore } from "src/stores/userStore";

export default function ActivityPage({ params }) {
  const updateUser = useUserStore((state) => state.updateUser);
  console.log("updateUserStore", updateUser);
  const activity = Object.values(ActivitiesList)
    .find((list) => list.list.find((item) => item.id === params.activityId))
    .list.find((item) => item.id === params.activityId);

  const Component = activity.type;
  const fnSubmit = async (isRight) => {
    if (isRight) {
      await handleClientAction(
        submitActivityAction({
          id: activity.id,
          experience: activity.experience,
          coins: activity.coins,
        }),
        "Validando sua resposta..."
      );
      console.log("updateing user");
      await updateUser();
      toast.success("A resposta está correta!");
    } else {
      toast.error("A resposta está incorreta! Tente novamente");
    }
  };

  return (
    <div className="flex flex-col">
      <span className="text-white text-2xl">{activity.title}</span>
      <span className="text-gray-300 text-sm pt-2">{activity.description}</span>
      <div className="w-full flex items-center justify-center mt-10">
        <div className={styles.activities_component_container}>
          <div className="mb-4">
            <span className="text-white">{activity.questions.title}</span>
          </div>
          <Component fnSubmit={fnSubmit} options={activity.questions.options} />
        </div>
      </div>
    </div>
  );
}
