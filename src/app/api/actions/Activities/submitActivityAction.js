"use server";

import { prisma } from "src/app/utils/prisma";
import handleServerError from "src/app/utils/helpers/handleServerError";
import activitySubmitSchema from "src/app/api/schemas/Activity/activitySubmitSchema";
import handleServerAction from "src/app/utils/helpers/handleServerAction";
import { updateUserStatus } from "src/app/api/actions/User/updateUserStatus";
import { getServerSession } from "next-auth";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";

export async function submitActivityAction(payload) {
  try {
    const schema = activitySubmitSchema.parse(payload);
    const session = await getServerSession(authOptions);

    let activityDone = await prisma.activityDone.findFirst({
      where: {
        user_id: session.id,
        activity_id: schema.id,
      },
    });

    if (activityDone) {
      return activityDone;
    }

    activityDone = await prisma.activityDone.create({
      data: {
        user_id: session.id,
        activity_id: schema.id,
      },
    });

    await handleServerAction(
      updateUserStatus(session.id, payload.experience, payload.coins)
    );

    return activityDone;
  } catch (e) {
    return handleServerError(e);
  }
}
