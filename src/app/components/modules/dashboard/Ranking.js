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
          <RankingTab getUserRankingPromise={getUserRankingPromiseDaily} />
        </Tab>
        <Tab key="monthly" title="Mensal">
          <RankingTab getUserRankingPromise={getUserRankingPromiseMonthly} />
        </Tab>
        <Tab key="all" title="Nível">
          <RankingTab getUserRankingPromise={getUserRankingPromiseLevel} />
        </Tab>
      </Tabs>
    </Container>
  );
}
