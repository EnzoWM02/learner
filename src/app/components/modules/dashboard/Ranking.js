"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { getUserRankingAction } from "src/app/api/actions/Dashboard/getUserRankingAction";
import RankingTab from "src/app/components/modules/dashboard/RankingTab";
import Container from "src/app/components/ui/Container";

export default function Ranking() {
  return (
    <Container>
      <Tabs fullWidth aria-label="Options" color="primary">
        <Tab key="daily" title="Diario">
          <RankingTab periodicity="daily" />
        </Tab>
        <Tab key="monthly" title="Mensal">
          <RankingTab periodicity="monthly" />
        </Tab>
        <Tab key="all" title="Total">
          <RankingTab periodicity="all" />
        </Tab>
      </Tabs>
    </Container>
  );
}
