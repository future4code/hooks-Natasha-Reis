import express, { Request, Response } from "express";
import cors from "cors";
import connection from "../database/connection";
import { Usuario } from "../types";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/usuarios", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const nome = req.query.nome;

    if (nome) {
      const resultado = await connection.raw(`
        SELECT * FROM Funcionarios
        WHERE nome like "%${nome}%";
      `);

      return res.status(200).send(resultado[0]);
    }

    const resultado = await connection.raw(`
      SELECT * FROM Funcionarios;
    `);

    res.status(200).send(resultado[0]);
  } catch (error) {
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});

app.post("/criar-usuario", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { nome, email } = req.body;

    if (!nome || !email || !email.includes("@")) {
      throw new Error("Dados imcompletos");
    }

    const novoUsuario: Usuario = {
      id: Number(Date.now()),
      nome,
      email,
    };

    await connection.raw(`
        INSERT INTO Funcionarios (id, nome, email)
        VALUES(${novoUsuario.id}, "${novoUsuario.nome}", "${novoUsuario.email}")
      `);

    res.status(200).send("Usuario criado");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.put("/editar-email/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = Number(req.params.id);
    const email = req.body.email;

    const usuarios = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = ${id};
    `);

    if (usuarios[0].length === 0 || !email.includes("@")) {
      throw new Error("E-mail não encontrado");
    }

    if (!email) {
      throw new Error("É necessário passar o novo e-mail");
    }

    await connection.raw(`
    UPDATE Funcionarios
    SET email = ${email}
    WHERE id = ${id};
  `);

    res.status(200).send("E-mail alterado");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.delete("/deletar-usuario/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = Number(req.params.id);

    const usuario = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = ${id};
    `);

    if (usuario[0].length === 0) {
      throw new Error("Usuário não encontrado");
    }

    await connection.raw(`
      DELETE FROM Funcionarios
      WHERE id = ${id};
    `);

    res.status(200).send("Usuario deletado");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
