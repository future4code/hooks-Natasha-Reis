// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, { Express } from "express";
import cors from "cors";
import { users } from "./userMock";

const app: Express = express();

app.use(express.json());
app.use(cors());

import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//EXERCICIO 1
app.get("/listar-usuarios", (req, res) => {
  res.json(users);
});

//API REST
//entidade utilizada foi o metodo GET

//EXERCICIO 2
app.get("/usuarios/type/:type", (req, res) => {
  const filterArray = users.filter((user) => user.type === req.params.type);

  res.json(filterArray);
});

//o type foi passado via params por ser uma propriedade do usuario e facilitar o uso da API
//fazer uma validação em cima do parametro type e caso seja diferente triga uma exception.
