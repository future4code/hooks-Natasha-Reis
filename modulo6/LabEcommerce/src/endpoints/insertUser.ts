import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

const insertUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Dados imcompletos");
    }

    const newUser: User = {
      id: String(Date.now()),
      name,
      email,
      password,
    };

    await connection.raw(`
           INSERT INTO User (id, name, email, password)
           VALUES(${newUser.id}, "${newUser.name}", "${newUser.email}", "${newUser.password}")
         `);

    res.status(200).send("Usuario criado");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
};

export { insertUser };
