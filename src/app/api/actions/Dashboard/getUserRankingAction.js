"use server";

import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";
import { RankingPeriodicity } from "src/app/utils/constants/modules/dashboard/DashboardHelper";
import handleServerError from "src/app/utils/helpers/handleServerError";
import prisma from "src/app/utils/prisma";
import calculateLevelService from "src/app/utils/services/User/calculateLevelService";

export async function getUserRankingAction(periodicity) {
  console.log("fetching", periodicity);
  try {
    if (
      periodicity === RankingPeriodicity.DAILY ||
      periodicity === RankingPeriodicity.MONTHLY
    ) {
      const todayStart =
        periodicity === RankingPeriodicity.DAILY
          ? startOfDay(new Date())
          : startOfMonth(new Date());
      const todayEnd =
        periodicity === RankingPeriodicity.DAILY
          ? endOfDay(new Date())
          : endOfMonth(new Date());

      const topUsersActivities = await prisma.user.findMany({
        select: {
          name: true,
          _count: {
            select: {
              activitiesDone: {
                where: { createdAt: { gte: todayStart, lte: todayEnd } },
              },
            },
          },
        },
      });

      const filteredUsers = topUsersActivities
        .filter((user) => user._count.activitiesDone >= 1)
        .sort((a, b) => b._count.activitiesDone - a._count.activitiesDone);

      return filteredUsers.map((user) => {
        return {
          name: user.name,
          data: user._count.activitiesDone,
        };
      });
    }

    if (periodicity === RankingPeriodicity.LEVEL) {
      const topUsers = await prisma.user.findMany({
        orderBy: {
          experience: "desc",
        },
        take: 10,
        select: {
          name: true,
          experience: true,
        },
      });

      return topUsers.map((user) => {
        return {
          name: user.name,
          data: calculateLevelService(user),
        };
      });
    }
  } catch (e) {
    return handleServerError(e);
  }
}
