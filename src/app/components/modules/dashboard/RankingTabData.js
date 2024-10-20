"use client";

import { Card, CardBody } from "@nextui-org/react";
import { use } from "react";

export default function RankingTabData({ getUserRankingPromise }) {
  const usersRanking = use(getUserRankingPromise);

  return (
    <div className="flex flex-col gap-1">
      {usersRanking.length === 0 && (
        <Card>
          <CardBody>
            <span className="text-sm">
              Nenhum dado foi encontrado para esse ranking... Complete
              atividades e seja o primeiro!
            </span>
          </CardBody>
        </Card>
      )}
      {usersRanking.map((user, index) => (
        <div key={index} className="flex justify-between">
          <span>{user.name}</span>
          <span>{user.data}</span>
        </div>
      ))}
    </div>
  );
}
