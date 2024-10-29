"use client";

import { Card, CardBody } from "@nextui-org/react";
import { use } from "react";
import TitleItem from "src/app/components/modules/store/TitleItem";

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
          <div className="flex flex-col">
            <span>{user.name}</span>
            <TitleItem className="text-xs" title={user.title} />
          </div>
          <span>{user.data}</span>
        </div>
      ))}
    </div>
  );
}
