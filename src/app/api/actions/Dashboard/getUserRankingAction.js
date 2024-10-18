"use server";

import handleServerError from "src/app/utils/helpers/handleServerError";
import prisma from "src/app/utils/prisma";
import calculateLevelService from "src/app/utils/services/User/calculateLevelService";

export async function getUserRankingAction(periodicity) {
  try {
    const topUsers = await prisma.user.findMany({
      orderBy: {
        experience: "desc",
      },
      take: 10,
    });

    return topUsers.map((user) => {
      return {
        ...user,
        level: calculateLevelService(user),
      };
    });
  } catch (e) {
    return handleServerError(e);
  }
}
