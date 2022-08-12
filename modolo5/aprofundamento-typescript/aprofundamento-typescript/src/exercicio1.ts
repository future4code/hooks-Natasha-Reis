let minhaString: string = "";
//Quando se atribui um numero a variável aparenta erro pois a mesma é foi declarada do tipo string

let meuNumero: number | string = "";

type pessoa = {
  name: string;
  age: number;
  favoriteColor: Colors;
};

enum Colors {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarela",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Azul-escuro",
  VIOLETA = "Violeta",
}

const usuario: pessoa = {
  name: "Natasha",
  age: 24,
  favoriteColor: Colors.AMARELO,
};
