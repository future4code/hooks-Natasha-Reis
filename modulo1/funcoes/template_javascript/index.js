//Exercícios de interpretação de código**

// 1) a - 10 e 50       b- Não apareceria nada porque a função foi declarada na local e a função está sendo envocada na global

//2) a- Essa função le uma frase ou palavra com a palavra cenoura e responde true. Qualquer outra frase/palavra que não contenha é reconhecido como false.
//b- true, true, true

//Exercícios de escrita de código

// EXERCICIO 1 
// A
// function imprimirDados() {
//     console.log("Eu sou Natasha, tenho 24 anos, moro em São Paulo e sou estudante.")
// }

// imprimirDados()

//B
// function imprimirDadosString(nome, idade, endereco, profissao){

//   console.log( `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
// }

// const nome = "Natasha"
// const idade = "24"
// const endereco = "Mogi das Cruzes"
// const profissao =  "Estudante"

// imprimirDadosString(nome, idade, endereco, profissao)

//EXERCICIO 2
//A
function receber2Numeros(numero1, numero2){
return numero1+numero2

}
const total = receber2Numeros(2,2)
console.log(total)


//B
function receberNumeros(numero1, numero2){
    return numero1>=numero2

}

console.log(receberNumeros(2,2))

//C
function eNumeroPar(numero){
const resto = numero % 2
return resto === 0

}
console.log(eNumeroPar(2))

//D
function mensagemLetrasMaiusculas(mensagem) {
const mensagemTamanho = mensagem.length
const mensagemMaiusculo = mensagem.toUpperCase()
console.log(mensagemTamanho, mensagemMaiusculo)

}
mensagemLetrasMaiusculas("Pirulito")

//EXERCICIO 3
function soma(numero1, numero2){
    return numero1+numero2
}
function subtracao(numero1, numero2){
    return numero1-numero2
}
function multiplicacao(numero1, numero2){
    return numero1*numero2
}
function divisao(numero1, numero2){
    return numero1/numero2
}
let insiraNumero1 = Number(prompt("Insira o primeiro numero"))
let insiraNumero2 = Number(prompt("Insira o segundo numero"))

console.log(`Numeros inseridos: ${insiraNumero1} e ${insiraNumero2}`)
console.log(`Soma: ${soma(insiraNumero1, insiraNumero2)}`)
console.log(`Diferença: ${subtracao(insiraNumero1, insiraNumero2)}`)
console.log(`Multiplicação: ${multiplicacao(insiraNumero1, insiraNumero2)}`)
console.log(`Divisão: ${divisao(insiraNumero1, insiraNumero2)}`)


// //Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10