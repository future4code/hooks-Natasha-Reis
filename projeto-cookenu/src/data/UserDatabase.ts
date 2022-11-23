import { CustomError } from "../error/customError";
import { EditUserInput, recipe, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public findUser = async (input: any) => {
    try {
      const result = await UserDatabase.connection("Cookenu_users")
        .select()
        .where({ email: input.email, id: input.id });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findRecipe = async (input: any) => {
    try {
      const result = await UserDatabase.connection("Cookenu_recipes")
        .select()
        .where({ id: input.id });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("Cookenu_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertRecipe = async (recipe: recipe) => {
    try {
      await UserDatabase.connection
        .insert({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          created_at: recipe.created_at,
        })
        .into("Cookenu_recipes");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name })
        .where({ id: user.id })
        .into("Cookenu_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
