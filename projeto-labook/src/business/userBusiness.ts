import { user } from "../types/user";
import { generateId } from "../services/generateId";
import { userDataBase } from "../data/userDataBase";

export class UserBusiness {
  async create(name: string, email: string, password: string) {
    if (!name || !email || !password) {
      throw new Error('"name", "email" and  "password" must be provided');
    }

    const user: user = {
      id: generateId(),
      name,
      email,
      password,
    };
    const UserDataBase = new userDataBase();
    await UserDataBase.create(user);
  }
}
