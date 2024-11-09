"use client";

import { Tab, Tabs } from "@nextui-org/react";
import RankingTab from "src/app/components/modules/dashboard/RankingTab";
import Container from "src/app/components/ui/Container";

export default function Ranking({
  getUserRankingPromiseDaily,
  getUserRankingPromiseMonthly,
  getUserRankingPromiseLevel,
}) {
  return (
    <Container>
      <Tabs fullWidth aria-label="Options" color="primary">
        <Tab key="daily" title="Diario">
          <RankingTab
            getUserRankingPromise={getUserRankingPromiseDaily}
            message="Ranquemento diário de atividades realizadas"
          />
        </Tab>
        <Tab key="monthly" title="Mensal">
          <RankingTab
            getUserRankingPromise={getUserRankingPromiseMonthly}
            message="Ranquemento mensal de atividades realizadas"
          />
        </Tab>
        <Tab key="all" title="Nível">
          <RankingTab
            getUserRankingPromise={getUserRankingPromiseLevel}
            message="Ranquemento por nível"
          />
        </Tab>
      </Tabs>
    </Container>
  );
}
