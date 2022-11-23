import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  try {
    const result = await connection.raw(`SELECT * FROM labecommerce_users;`);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
};

export { getUsers };
