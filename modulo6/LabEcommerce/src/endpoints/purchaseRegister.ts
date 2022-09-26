import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Purchase } from "../types";

const purchaseRegister = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  try {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
      throw new Error("A venda não pode ser registrada por falta de dados");
    }

    const newPurchase: Purchase = {
      id: String(Date.now()),
      user_id,
      product_id,
      quantity,
      total_price: quantity * product_id,
    };

    await connection.raw(`
           INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price )
           VALUES(${newPurchase.id}, "${newPurchase.user_id}", "${newPurchase.product_id}", "${newPurchase.quantity}", "${newPurchase.total_price}" )
         `);

    res.status(200).send("Compra registrada com sucesso!!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
};

export { purchaseRegister };
