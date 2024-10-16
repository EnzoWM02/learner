import { getSession } from "next-auth/react";
import { getUserDataAction } from "src/app/api/actions/User/getUserDataAction";
import handleServerAction from "src/app/utils/helpers/handleServerAction";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  updateUser: async () => {
    const session = await getSession();
    if (session) {
      const user = await handleServerAction(getUserDataAction(session.id));
      set({ user });
    } else {
      console.error("No active session found.");
    }
  },
}));
