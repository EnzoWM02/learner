"use client";

import { use } from "react";

export default function RankingTabData({ getUserRankingPromise }) {
  const usersRanking = use(getUserRankingPromise);
  console.log(usersRanking);
  return (
    <div className="flex flex-col gap-1">
      {usersRanking.map((user, index) => (
        <div key={index} className="flex justify-between">
          <span>{user.name}</span>
          <span>{user.level}</span>
        </div>
      ))}
    </div>
  );
}
