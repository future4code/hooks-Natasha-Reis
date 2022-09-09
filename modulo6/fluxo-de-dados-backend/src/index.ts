import express from "express";
import { AddressInfo } from "net";
import { listProduct } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/test", (req, res) => {
  res.send("API está funcional.");
});

app.post("/inserir-produto", (req, res) => {
  try {
    const { name, price } = req.body;

    if (
      !name ||
      !price ||
      typeof name !== "string" ||
      typeof price !== "number" ||
      price <= 0
    ) {
      throw new Error("Houve um erro");
    }

    listProduct.push({
      id: String(listProduct.length + 1),
      name: name,
      price: price,
    });

    res.json(listProduct);
  } catch {
    res.status(500).end();
  }
});

app.get("/listar-produtos", (req, res) => {
  res.json(listProduct);
});

app.post("/alterar-preco-produto", (req, res) => {
  try {
    const { productId, newPrice } = req.body;

    const selectedProduct = listProduct.find(
      (product) => productId === product.id
    );

    if (
      !newPrice ||
      typeof newPrice !== "number" ||
      newPrice <= 0 ||
      !selectedProduct
    ) {
      throw new Error("Houve um erro");
    }

    selectedProduct.price = newPrice;

    res.json(listProduct);
  } catch {
    res.status(500).end();
  }
});

app.delete("/deletar-produto", (req, res) => {
  try {
    const { productId } = req.body;

    const selectedProduct = listProduct.find(
      (product) => productId === product.id
    );

    if (!selectedProduct) {
      throw new Error("Houve um erro");
    }

    listProduct.filter((product) => {
      req.body.productId !== product.id;
    });

    res.json(listProduct);
  } catch {
    res.status(500).end();
  }
});
