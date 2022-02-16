//EXERCICIO DE INTERPRETAÇÃO
// 1 - a)undefined  b)null  c)11   d)3    e)(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]    f)9

//2 - SUBI NUM ÔNIBUS EM MARROCOS 27


//EXERCICIOS DE ESCRITA

//1

// let email = prompt ("Qual seu e-mail?")
// let nomeUsuario = prompt ("Qual seu nome?")
// console.log( `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario} !`)


//2

// const comidasFavoritas = ["Hamburguer", "Churrasco", "Pizza", "Sorvete", "Chocolate"]
// console.log(comidasFavoritas)
// console.log(`Essas são as minhas comidas favoritas:`)
// console.log(comidasFavoritas[0])
// console.log(comidasFavoritas[1])
// console.log(comidasFavoritas[2])
// console.log(comidasFavoritas[3])
// console.log(comidasFavoritas[4])

// let comidaUsuario = prompt("Qual sua comida favorita?")
// comidasFavoritas [1] = comidaUsuario
// console.log(comidasFavoritas)


//3

let listaDeTarefas = []
let listaDeTarefas1 = prompt ("Insira a 1 tarefas do seu dia")
let listaDeTarefas2 = prompt ("Insira a 2 tarefas do seu dia")
let listaDeTarefas3 = prompt ("Insira a 3 tarefas do seu dia")
listaDeTarefas.push(listaDeTarefas1)
listaDeTarefas.push(listaDeTarefas2)
listaDeTarefas.push(listaDeTarefas3)
let indice = prompt("Qual o indice da tarefa que voce ja realizou?, 0, 1 ou 2")
listaDeTarefas.splice (indice, 1)

console.log(listaDeTarefas)

