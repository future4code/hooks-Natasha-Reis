import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  Unauthorized,
  UserNotFound,
} from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
  GetUserDTO,
  RecipeInputDTO,
  recipe,
  GetUserByIdDTO,
  GetRecipeByIdDTO,
} from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();
const hashManager = new HashManager();
const userDatabase = new UserDatabase();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const id: string = idGenerator.generateId();

      const hashPassword: string = await hashManager.hash(password);

      const user: user = {
        id,
        name,
        email,
        password: hashPassword,
      };

      await userDatabase.insertUser(user);
      const token = tokenGenerator.generateToken(id);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser({ email });

      if (!user) {
        throw new UserNotFound();
      }

      const isValidPassword: boolean = await hashManager.compare(
        password,
        user.password
      );

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      if (!isValidPassword) {
        throw new InvalidPassword();
      }

      const token = tokenGenerator.generateToken(user.id);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, id, token } = input;

      if (!name || !id || !token) {
        throw new CustomError(400, 'Preencha os campos "id", "name"');
      }

      const data = tokenGenerator.getTokenData(token);

      if (!data.id) {
        throw new Unauthorized();
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
      };

      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUser = async (data: GetUserDTO) => {
    try {
      const { token } = data;
      if (!token) {
        throw new CustomError(400, "Token invalido");
      }

      const tokenData = tokenGenerator.getTokenData(token);

      if (!tokenData.id) {
        throw new Unauthorized();
      }

      const input = {
        id: tokenData.id,
      };

      const user = await userDatabase.findUser(input);

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById = async (data: GetUserByIdDTO) => {
    try {
      const { token, id } = data;

      if (!token) {
        throw new CustomError(400, "Token invalido");
      }

      const tokenData = tokenGenerator.getTokenData(token);

      if (!tokenData.id) {
        throw new Unauthorized();
      }

      const input = {
        id,
      };

      const user = await userDatabase.findUser(input);

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getRecipeById = async (data: GetRecipeByIdDTO) => {
    try {
      const { token, id } = data;

      if (!token) {
        throw new CustomError(400, "Token invalido");
      }

      const tokenData = tokenGenerator.getTokenData(token);

      if (!tokenData.id) {
        throw new Unauthorized();
      }

      const input = {
        id,
      };

      const user = await userDatabase.findRecipe(input);

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public createRecipe = async (input: RecipeInputDTO): Promise<void> => {
    try {
      const { title, description, created_at } = input;

      if (!title || !description || !created_at) {
        throw new CustomError(
          400,
          'Preencha os campos "created_at", "description" e "title"'
        );
      }

      const id: string = idGenerator.generateId();

      const recipe: recipe = {
        id,
        title,
        description,
        created_at,
      };

      await userDatabase.insertRecipe(recipe);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
