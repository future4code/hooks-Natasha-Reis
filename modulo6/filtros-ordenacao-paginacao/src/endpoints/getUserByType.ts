import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUserByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { type } = req.params;

    const user = await selectUserByType(type);

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

export default async function selectUserByType(type: string): Promise<any> {
  const result = await connection.raw(`
         SELECT * FROM aula48_exercicio WHERE type LIKE ${type}
      `);

  return result[0];
}
