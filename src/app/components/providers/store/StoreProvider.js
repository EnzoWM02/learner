import { getServerSession } from "next-auth";
import { getUserDataAction } from "src/app/api/actions/user/getUserDataAction";
import { authOptions } from "src/app/api/auth/[...nextauth]/route";
import UserDataProvider from "src/app/components/providers/store/UserDataProvider";
import handleServerAction from "src/app/utils/helpers/handleServerAction";

export default async function StoreProvider({ children }) {
  const session = await getServerSession(authOptions);
  const user = await handleServerAction(getUserDataAction(session.id));

  return <UserDataProvider user={user}>{children}</UserDataProvider>;
}