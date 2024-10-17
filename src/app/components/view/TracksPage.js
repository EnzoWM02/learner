"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";
import Image from "next/image";
import Card from "src/app/components/ui/Card";

export default function TracksPage({ userActivitiesActionPromise }) {
  const router = useRouter();
  const activities = use(userActivitiesActionPromise);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-pointer">
      {ActivitiesList.map((activity, index) => {
        return (
          <Card
            className={"flex gap-4 transition-all hover:scale-105"}
            key={index}
          >
            <Image
              src={activity.icon}
              alt={activity.title}
              width={50}
              height={50}
            />
            <div>
              <span className="text-lg">{activity.title}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
