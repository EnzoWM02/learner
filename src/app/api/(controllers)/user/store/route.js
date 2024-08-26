import { CreateUserService } from "src/app/api/services/user/CreateUserService";

export async function POST(req, res) {
  const createUserService = new CreateUserService();
  await createUserService.handle(req, res);

  return res.json();
}
