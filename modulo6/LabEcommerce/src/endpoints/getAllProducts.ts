import { Request, Response } from "express";
import { connection } from "../data/connection";

const getProducts = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  try {
    const result = await connection.raw(`SELECT * FROM labecommerce_products;`);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
};

export { getProducts };
