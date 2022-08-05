const novaTarefa = process.argv[2];

let listaDeTarefas = ["comprar pão", "comprar ração", "fazer tarefas"];

listaDeTarefas.push(novaTarefa);

console.table(listaDeTarefas);
