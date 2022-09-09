type Statement = {
  value: number;
  date: Date;
  description: string;
};

type Client = {
  name: string;
  cpf: number;
  dob: Date;
  statement: Array<Statement>;
  balance: number;
};

const clients: Array<Client> = [
  {
    name: "Lito",
    cpf: 29023938800,
    dob: new Date("11/09/2020"),
    balance: 5,
    statement: [
      {
        value: -5,
        date: new Date("12/08/2022"),
        description: "comprou ração",
      },
      {
        value: 10,
        date: new Date("12/08/2022"),
        description: "recebeu salario ",
      },
    ],
  },
];

export { clients };
