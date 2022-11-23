import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {
  EditUserInputDTO,
  GetUserDTO,
  GetUserByIdDTO,
  LoginInputDTO,
  RecipeInputDTO,
  UserInputDTO,
  GetRecipeByIdDTO,
} from "../model/user";

export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password,
      };
      const userBusiness = new UserBusiness();
      const token = await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const userBusiness = new UserBusiness();
      const token = await userBusiness.login(input);

      res.status(200).send({ message: "Usuário logado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUser = async (req: Request, res: Response) => {
    try {
      const data: GetUserDTO = {
        token: req.headers.authorization as string,
      };

      const userBusiness = new UserBusiness();
      const user = await userBusiness.getUser(data);

      res.status(201).send({ user });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const data: GetUserByIdDTO = {
        id,
        token: req.headers.authorization as string,
      };

      const userBusiness = new UserBusiness();
      const user = await userBusiness.getUserById(data);

      res.status(201).send({ user });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getRecipeById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const data: GetRecipeByIdDTO = {
        id,
        token: req.headers.authorization as string,
      };

      const userBusiness = new UserBusiness();
      const user = await userBusiness.getRecipeById(data);

      res.status(201).send({ user });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public createRecipe = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;

      const data: RecipeInputDTO = {
        title,
        description,
        created_at: new Date(),
        token: req.headers.authorization as string,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.createRecipe(data);

      res.status(201).send({ message: "Receita Criada!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
