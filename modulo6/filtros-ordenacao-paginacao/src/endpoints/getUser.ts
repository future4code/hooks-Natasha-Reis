import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;

    if (!name) return;

    const user = await selectUser(name.toString());

    if (!user.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    }

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export default async function selectUser(name: string): Promise<any> {
  const result = await connection.raw(`
         SELECT * FROM aula48_exercicio WHERE name LIKE ${name}

      `);

  return result[0];
}
