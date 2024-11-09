"use client";

import { Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaCircleCheck, FaDollarSign, FaRegCircleUp } from "react-icons/fa6";
import Container from "src/app/components/ui/Container";
import Icon from "src/app/components/ui/Icon";
import NewChip from "src/app/components/ui/NewChip";

export default function ActivityCard({
  activity,
  trackId,
  className = "",
  isDone = false,
}) {
  const router = useRouter();

  return (
    <Container
      className={`${className} relative flex flex-col gap-4 transition hover:bg-primary-600 hover:border-primary-700 cursor-pointer items-center justify-center`}
      onClick={() => router.push(`/activities/${trackId}/${activity.id}`)}
    >
      <span className="text-lg">{activity.title}</span>
      <div className="flex gap-2">
        <div className="flex items-center">
          <Icon icon={FaDollarSign} color="white" size="14px" />
          <span className="leading-[1px]">{activity.coins}</span>
        </div>
        <span className="text-white leading-[14px]">•</span>
        <div className="flex items-center gap-1">
          <Icon icon={FaRegCircleUp} color="white" size="14px" />
          <span className="leading-[1px]">{activity.experience}</span>
        </div>
      </div>
      <div className="flex gap-2 from-yell">
        <Chip
          classNames={{
            base: "border-small border-white/50",
            content: "drop-shadow shadow-black text-white",
          }}
          size="sm"
          color={activity.difficulty.color}
        >
          {activity.difficulty.label}
        </Chip>
        {activity.new && <NewChip size="sm" />} 
        {isDone && (
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
}
