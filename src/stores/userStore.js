import { getSession } from "next-auth/react";
import { getUserDataAction } from "src/app/api/actions/User/getUserDataAction";
import handleServerAction from "src/app/utils/helpers/handleServerAction";
import calculateLevelService from "src/app/utils/services/User/calculateLevelService";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  actualLevelExperience: 0,
  nextLevelRequiredExperience: 0,
  updateUser: async () => {
    const session = await getSession();
    if (session) {
      const user = await handleServerAction(getUserDataAction(session.id));
      const level = calculateLevelService(user, true);
      set({
        user: user,
        actualLevelExperience: level.actualLevelExperience,
        nextLevelRequiredExperience: level.nextLevelRequiredExperience,
      });
    } else {
      console.error("No active session found.");
    }
  },
}));
