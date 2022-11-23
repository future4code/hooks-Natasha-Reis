import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO } from "../model/user";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";

export class UserController {

      public createUser = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public editUser = async (req: Request, res: Response) => {
        try {
          
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id
          };

          const userBusiness = new UserBusiness()
          userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 

      public userSignup = async (req: Request, res: Response) => {
        try 
        {if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
       
        if (!req.body.password || req.body.password.length < 6) {
          throw new Error("Invalid password");
        }
    
        const userData = {
          email: req.body.email,
          password: req.body.password,
        };
    
        const id = generateId();
    
      
        await this.createUser(id, userData.email, userData.password)

    
        const token = generateToken({
          id
        });
    
        res.status(200).send({
          token,
        });}
      }catch (err:any) {
        res.status(400).send({
          message: err.message,
        });
      }
    }
  }

