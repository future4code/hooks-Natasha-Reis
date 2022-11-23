import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types";

const insertProduct = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  try {
    const { name, price, img_url } = req.body;

    if (!name || !price || !img_url) {
      throw new Error("Dados incompletos");
    }

    const newProduct: Product = {
      id: String(Date.now()),
      name,
      price,
      img_url,
    };

    await connection.raw(`
           INSERT INTO labecommerce_products (id, name, price, img_url)
           VALUES(${newProduct.id}, "${newProduct.name}", "${newProduct.price}", "${newProduct.img_url}")
         `);

    res.status(200).send("Produto inserido com sucesso!!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
};

export { insertProduct };
