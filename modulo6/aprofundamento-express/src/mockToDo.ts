//EXERCICIO 2
type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const listToDo: Array<ToDo> = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];

export { listToDo, ToDo };
