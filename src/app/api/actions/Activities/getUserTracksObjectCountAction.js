"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import handleServerError from "src/app/utils/helpers/handleServerError";
import prisma from "src/app/utils/prisma";

export async function getUserTracksObjectCountAction() {
  try {
    const session = await getServerSession(authOptions);
    const activities = await prisma.activityDone.findMany({
      where: {
        user_id: session.id,
      },
    });

    const typeCounts = activities.reduce((acc, obj) => {
      const type = obj.track_id;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    return typeCounts;
  } catch (e) {
    return handleServerError(e);
  }
}
