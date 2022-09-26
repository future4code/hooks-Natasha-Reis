import { Request, Response } from "express";
import { connection } from "../data/connection";

const searchPurchase = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  const { user_id } = req.params;

  try {
    const result = await connection.raw(
      `SELECT * FROM labecommerce_purchases WHERE user_id=${user_id}`
    );

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
};

export { searchPurchase };
