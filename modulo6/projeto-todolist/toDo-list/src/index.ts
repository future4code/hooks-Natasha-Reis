import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { User } from "./types/userType";
import { Task } from "./types/taskType";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/user", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { nome, email, nickname } = req.body;

    if (!nome || !email || !nickname) {
      throw new Error("Dados imcompletos");
    }

    const newUser: User = {
      id: Number(Date.now()),
      nome,
      email,
      nickname,
    };

    await connection.raw(`
          INSERT INTO User (id, nome, email, nickname)
          VALUES(${newUser.id}, "${newUser.nome}", "${newUser.email}", "${newUser.nickname}")
        `);

    res.status(200).send("Usuario criado");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Id não informado");
    }

    const result = await connection.raw(`
          SELECT * FROM User
          WHERE nome = "${id}";
        `);

    if (!result.length) {
      throw new Error("Usuario não encontrado");
    }

    return res.status(200).send(result[0]);
  } catch (error) {
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { nome, nickname } = req.body;

    const id = Number(req.params.id);

    if (!nome || !nickname) {
      throw new Error("É necessário passar nome e nickname");
    }

    await connection.raw(`
      UPDATE User
      SET nome = ${nome}, nickname = ${nickname}
      WHERE id = ${id};
    `);

    res.status(200).send("Dados alterados");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/task", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { title, description, limitDate, creatorUserId } = req.body;

    if (!title || !description || !limitDate || !creatorUserId) {
      throw new Error("Dados imcompletos");
    }

    const dateArray = limitDate.split("/");

    const newTask: Task = {
      id: Number(Date.now()),
      title,
      description,
      limitDate: `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`,
      creatorUserId,
    };

    await connection.raw(`
            INSERT INTO Task (id, title, description, limitDate, creatorUserId)
            VALUES(${newTask.id}, "${newTask.title}", "${newTask.description}", ${newTask.limitDate}, "${newTask.creatorUserId}")
          `);

    res.status(200).send("Tarefa criada!!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Id não informado");
    }

    const result = await connection.raw(`
        SELECT * FROM Task 
        INNER JOIN User ON Task.creatorUserId = User.id;
        WHERE task.id = ˜${id}˜
    `);

    if (!result.length) {
      throw new Error("Tarefa não encontrada");
    }

    const dateArray = result[0].limitDate.split("-");

    result[0].limitDate = `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`;

    return res.status(200).send(result[0]);
  } catch (error) {
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});

export default app;
