"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import ActivitiesList from "src/app/(pages)/(protected)/activities/constants/ActivitiesList";
import Image from "next/image";
import Container from "src/app/components/ui/Container";
import { Progress } from "@nextui-org/react";
import PageHeader from "src/app/components/ui/PageHeader";

export default function TracksPage({ userTracksCountActionPromise }) {
  const router = useRouter();
  const trackCounts = use(userTracksCountActionPromise);

  return (
    <>
      <PageHeader
        message={
          "Bem-vindo a escolha de rotas, aqui você poderá escolher uma rota que deseja participar e realizar atividades que vão te ensinar e aprimorar suas habilidades!"
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ActivitiesList.map((activity, index) => {
          return (
            <Container
              className={
                "flex gap-4 transition hover:bg-primary-600 hover:border-primary-700 cursor-pointer"
              }
              key={index}
              onClick={() => router.push(`/activities/${activity.id}`)}
            >
              <Image
                src={activity.icon}
                alt={activity.title}
                width={50}
                height={50}
              />
              <div className="w-full">
                <div className="flex justify-between">
                  <span className="text-lg">{activity.title}</span>
                  <span className="text-sm">
                    {`${trackCounts[activity.id] ?? 0}/${activity.list.length}`}
                  </span>
                </div>
                <Progress
                  color="success"
                  value={
                    ((trackCounts[activity.id] ?? 0) / activity.list.length) *
                    100
                  }
                />
              </div>
            </Container>
          );
        })}
      </div>
    </>
  );
}
