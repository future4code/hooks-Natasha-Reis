const operacao = process.argv[2];
const primeiroNumero = Number(process.argv[3]);
const segundoNumero = Number(process.argv[4]);

const soma = primeiroNumero + segundoNumero;
const subitrai = primeiroNumero - segundoNumero;
const multiplica = primeiroNumero * segundoNumero;
const divide = primeiroNumero / segundoNumero;

switch (operacao) {
  case "add":
    console.log(soma);

    break;
  case "sub":
    console.log(subitrai);

    break;
  case "mult":
    console.log(multiplica);

    break;
  case "div":
    console.log(divide);

    break;
}
