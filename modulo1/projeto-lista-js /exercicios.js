// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

let altura  =  Number (prompt ("Insira a altura do retângulo"))
let largura =  Number (prompt ("Insira a largura do retângulo"))
const area = altura * largura 

 console.log(area) 


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = Number (prompt ("Insira o ano atual"))
  let anoNascimento = Number (prompt ("Insira o ano do seu nascimento"))
  const idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  nome = prompt("Qual seu nome?")
  idade = prompt("Qual sua idade")
  email = prompt("Qual seu email?")

  

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

const cor1 = prompt("Insira sua 1 cor favorita")
const cor2 = prompt("Insira sua 2 cor caforita")
const cor3 = prompt("Insira sua 3 cor caforita")

const coresFavoritas = [cor1, cor2, cor3]
console.log(coresFavoritas)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso
  

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0] 


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length-1]


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const ultimoElemento = array[array.length-1]
  array[array.length-1] = array[0]
  array[0] = ultimoElemento

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui


return string1.toUpperCase() === string2.toUpperCase()



}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}