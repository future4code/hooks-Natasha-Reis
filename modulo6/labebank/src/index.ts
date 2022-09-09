import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { clients } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

function isDateOver18(birthday: Date) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18;
}

function isInThePast(date: Date) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date < today;
}

app.post("/create-account", (req, res) => {
  try {
    const { name, cpf, dob } = req.body;

    const clientAlreadyExists = clients.find((client) => cpf === client.cpf);

    const userDateDob = new Date(dob);

    if (
      !name ||
      !cpf ||
      !dob ||
      !isDateOver18(userDateDob) ||
      clientAlreadyExists
    ) {
      throw new Error("Houve um erro");
    }

    clients.push({
      name: name,
      cpf: cpf,
      dob: dob,
      statement: [],
      balance: 0,
    });

    res.json(clients);
  } catch {
    res.status(500).end();
  }
});

app.get("/get-balance/:name/:cpf", (req, res) => {
  const { name, cpf } = req.params;

  const selectedClient = clients.find(
    (client) => name === client.name && Number(cpf) === client.cpf
  );

  res.json(selectedClient?.balance);
});

app.post("/pay", (req, res) => {
  try {
    const { value, description, date, cpf } = req.body;

    const selectedClient = clients.find((client) => cpf === client.cpf);

    const transactionDate = new Date(date);

    if (
      isInThePast(transactionDate) ||
      !cpf ||
      !selectedClient ||
      value <= selectedClient?.balance
    ) {
      throw new Error("Houve um erro");
    }
    selectedClient.statement.push({ value, date, description });

    selectedClient.balance = selectedClient.balance - value;
    res.json(selectedClient);
  } catch {
    res.status(500).end();
  }
});

app.post("/transfer", (req, res) => {
  try {
    const { value, fromName, fromCPF, destName, destCPF } = req.body;

    const selectedClientFrom = clients.find(
      (client) => fromCPF === client.cpf && fromName === client.name
    );

    const selectedClientDest = clients.find(
      (client) => destCPF === client.cpf && destName === client.name
    );

    if (
      !selectedClientDest ||
      !selectedClientFrom ||
      value <= selectedClientFrom?.balance
    ) {
      throw new Error("Houve um erro");
    }

    selectedClientFrom.statement.push({
      value: -value,
      date: new Date(),
      description: "transfer",
    });

    selectedClientDest.statement.push({
      value: value,
      date: new Date(),
      description: "transfer",
    });

    selectedClientFrom.balance = selectedClientFrom.balance - value;

    selectedClientDest.balance = selectedClientDest.balance + value;

    res.json("success");
  } catch {
    res.status(500).end();
  }
});
