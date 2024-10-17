"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import handleServerError from "src/app/utils/helpers/handleServerError";
import { prisma } from "src/app/utils/prisma";

export async function getUserActivitiesAction() {
  try {
    const session = await getServerSession(authOptions);

    const activities = await prisma.activityDone.findMany({
      where: {
        user_id: session.id,
      },
    });

    return activities;
  } catch (e) {
    console.log(e);
    return handleServerError(e);
  }
}
