"use server";

import { getServerSession } from "next-auth";
import { act } from "react";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import handleServerError from "src/app/utils/helpers/handleServerError";
import prisma from "src/app/utils/prisma";

export async function getUserTracksCountAction() {
  try {
    const session = await getServerSession(authOptions);
    const tracks = await prisma.activityDone.groupBy({
      by: ["track_id"],
      where: {
        user_id: session.id,
      },
      select: {
        track_id: true,
        _count: {
          select: {
            track_id: true,
          },
        },
      },
    });

    const activities = await prisma.activityDone.findMany({
      where: {
        user_id: session.id,
      },
    });

    return tracks.map((track) => {
      return {
        track_id: track.track_id,
        activities: activities
          .filter((activity) => activity.track_id === track.track_id)
          .map((activity) => activity.activity_id),
        count: track._count.track_id,
      };
    });
  } catch (e) {
    return handleServerError(e);
  }
}
