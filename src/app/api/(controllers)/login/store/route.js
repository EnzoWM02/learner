import { LoginService } from "src/app/api/services/login/LoginService";

export default async function handle(req, res) {
  await LoginService.handle(req, res);

  return res.json();
}
