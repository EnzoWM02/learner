"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import handleServerError from "src/app/utils/helpers/handleServerError";
import prisma from "src/app/utils/prisma";

export async function getUserActivitiesAction(trackId) {
  try {
    const session = await getServerSession(authOptions);
    const activities = await prisma.activityDone.findMany({
      where: {
        user_id: session.id,
        track_id: trackId,
      },
    });

    return activities.map((activity) => activity.activity_id);
  } catch (e) {
    return handleServerError(e);
  }
}
