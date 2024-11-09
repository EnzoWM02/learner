"use client";

import { Card, CardBody } from "@nextui-org/react";
import { use } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import TitleItem from "src/app/components/modules/store/TitleItem";
import Icon from "src/app/components/ui/Icon";

export default function RankingTabData({ getUserRankingPromise, message }) {
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
      {usersRanking.length > 0 && (
        <Card
          classNames={{
            base: ["bg-primary-100 mb-6"],
          }}
        >
          <CardBody>
            <div className="flex gap-4">
              <Icon icon={FaCircleInfo} size={20} />
              <span className="text-sm">{message}</span>
            </div>
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
