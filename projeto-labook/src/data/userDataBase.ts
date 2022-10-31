import { user } from "../types/user";
import BaseDatabase from "./baseDataBase";

export class userDataBase extends BaseDatabase {
  public async create(user: user) {
    await BaseDatabase.connection("labook_users").insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }
}
