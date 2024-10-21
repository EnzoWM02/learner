"use client";

import { Card, CardBody, Chip, Link, Progress } from "@nextui-org/react";
import Image from "next/image";
import { use } from "react";
import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";
import ActivityCard from "src/app/components/modules/activities/ActivityCard";

export default function ActivitiesPage({
  userActivitiesActionPromise,
  trackId,
}) {
  const activitiesDone = use(userActivitiesActionPromise);
  const currentActivityList = ActivitiesList.find(
    (item) => item.id === trackId
  );

  return (
    <>
      <Card
        classNames={{
          base: ["bg-primary-900 p-2"],
        }}
      >
        <CardBody>
          <div className="flex gap-4 items-center">
            <Image
              src={currentActivityList.icon}
              alt={currentActivityList.title}
              width={55}
              height={55}
            />
            <div className="flex flex-col w-full gap-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-xl">{currentActivityList.title}</span>
                  <div>
                    {currentActivityList.links &&
                      currentActivityList.links.map((link, index) => {
                        return (
                          <Link
                            key={index}
                            isBlock
                            showAnchorIcon
                            href={link.url}
                            target="_blank"
                            color="primary"
                          >
                            {link.title}
                          </Link>
                        );
                      })}
                  </div>
                </div>
                <span className="text-sm">
                  {`${activitiesDone.length ?? 0}/${currentActivityList.list.length}`}
                </span>
              </div>
              <Progress
                color="success"
                value={
                  ((activitiesDone.length ?? 0) /
                    currentActivityList.list.length) *
                  100
                }
              />
            </div>
          </div>
        </CardBody>
      </Card>
      <div className=" mt-6 grid grid-cols-1 sm:grid-cols-5 gap-4">
        {currentActivityList.list.map((activity, index) => {
          return (
            <div key={index}>
              <ActivityCard
                activity={activity}
                trackId={trackId}
                isDone={activitiesDone.includes(activity.id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
