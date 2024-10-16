"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";

export default function ActivitiesPage({ userActivitiesActionPromise }) {
  const router = useRouter();
  const activities = use(userActivitiesActionPromise);

  return (
    <div>
      {ActivitiesList.map((activity, index) => {
        return (
          <div key={index}>
            <span className="text-white text-lg">{activity.title}</span>
            <div className="pt-4 flex">
              {activity.list.map((item, index) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center cursor-pointer"
                    key={index}
                    onClick={() => router.push(`/activities/${item.id}`)}
                  >
                    <div className="w-[80px] h-[80px] rounded-lg bg-white flex justify-center items-center">
                      <span className="text-black">{index}</span>
                    </div>
                    <span className="text-white pt-2">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
