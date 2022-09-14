import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUserByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { type, name } = req.query;

    if (!type || !name) {
      res.statusCode = 500;
      throw new Error("erro");
    }
    const user = await selectUserByType(type.toString(), name.toString());

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

export default async function selectUserByType(
  type: string,
  name: string
): Promise<any> {
  let orderBy = "ORDER BY name ASC";

  if (!name && !type) {
    orderBy = "ORDER BY email ASC";
  }

  const result = await connection.raw(`
         SELECT * FROM aula48_exercicio WHERE type LIKE ${type} AND name LIKE ${name} ${orderBy}
      `);

  return result[0];
}
