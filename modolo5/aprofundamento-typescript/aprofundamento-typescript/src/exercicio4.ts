type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

//Rodaria o comando tsc --out exercicio4.js exercicio4.ts
//configuraria o tsconfig.json e rodaria o comando tsc para transformar em JS ou tsc --out exercicio4.js ./src/exercicio4.ts .
//Sim, configurando o projeto para buscar multiplas pastas e setar uma pasta de saída
