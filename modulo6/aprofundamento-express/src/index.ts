import { listToDo, ToDo } from "./mockToDo";
import express from "express";
import { AddressInfo } from "net";

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

//EXERCICIO 1
app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

//EXERCICIO 4
app.get("/tarefas-completas", (req, res) => {
  const listCheck: Array<ToDo> = listToDo.filter((task) => task.completed);

  res.json(listCheck);
});

//EXERCICIO 5
app.post("/inserir-tarefa", (req, res) => {
  listToDo.push({
    id: listToDo.length + 1,
    completed: false,
    title: req.body.title,
    userId: req.body.userId,
  });

  res.json(listToDo);
});

//EXERCICIO 6
app.post("/setar-tarefa", (req, res) => {
  listToDo.map((task) => {
    if (req.body.taskId === task.id) {
      task.completed = !task.completed;
    }
  });

  res.json(listToDo);
});

//EXERCICIO 7
app.delete("/deletar-tarefa", (req, res) => {
  listToDo.filter((task) => {
    req.body.taskId !== task.id;
  });

  res.json(listToDo);
});

//EXERCICIO 7
app.get("/tarefa/usuario/:userId", (req, res) => {
  listToDo.filter((task) => {
    Number(req.params.userId) === task.userId;
  });

  res.json(listToDo);
});
