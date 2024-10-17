"use client";

import { Card, CardBody, Chip, Link, Progress } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";
import Container from "src/app/components/ui/Container";
import NewChip from "src/app/components/ui/NewChip";

export default function ActivitiesPage({
  userActivitiesActionPromise,
  trackId,
}) {
  const router = useRouter();
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
            <Container
              className={
                "flex flex-col gap-4 transition hover:bg-primary-600 hover:border-primary-700 cursor-pointer items-center justify-center"
              }
              key={index}
              onClick={() =>
                router.push(`/activities/${trackId}/${activity.id}`)
              }
            >
              <span className="text-lg">{activity.title}</span>
              <div className="flex gap-2 from-yell">
                {activity.new && <NewChip size="sm" />}
                {activitiesDone.includes(activity.id) && (
                  <Chip
                    size="sm"
                    classNames={{
                      base: "bg-gradient-to-br from-green-500 to-green-700 border-small border-white/50 shadow-pink-500/30",
                      content: "drop-shadow shadow-black text-white",
                    }}
                    startContent={<FaCircleCheck className="mx-1" size={12} />}
                  >
                    Concluido
                  </Chip>
                )}
              </div>
            </Container>
          );
        })}
      </div>
    </>
  );
}
