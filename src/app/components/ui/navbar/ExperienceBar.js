"use client";

import { Progress, Tooltip } from "@nextui-org/react";
import { useUserStore } from "src/stores/userStore";

export default function ExperienceBar() {
  const actualLevelExperience = useUserStore(
    (state) => state.actualLevelExperience
  );
  const nextLevelRequiredExperience = useUserStore(
    (state) => state.nextLevelRequiredExperience
  );

  return (
    <div className="fixed top-0 left-0 w-full h-[5px] bg-gray-950">
      <Tooltip
        showArrow
        content={`${actualLevelExperience}/${nextLevelRequiredExperience}`}
        color="foreground"
      >
        <Progress
          classNames={{
            base: "h-[5px]",
            indicator: "bg-gradient-to-r from-pink-500 to-primary-50",
          }}
          value={(actualLevelExperience / nextLevelRequiredExperience) * 100}
        />
      </Tooltip>
    </div>
  );
}
