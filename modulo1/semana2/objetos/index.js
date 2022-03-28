
// EXERCICIOS DE IMTERPRETACAO
//-------------1-------------
// Matheus Nachtergaele
// Virginia Cavendish
// OBJETO canal Globo, horario: 14h

//-------------2-------------
//-------------a-------------
// nome: Juca, idade: 3, raca: SRD 
// nome: Juba, idade: 3, raca: SRD
// nome: Jubo, idade: 3, raca: SRD

//-------------b-------------
// os tres pontos pega todas as informaçòes da constante anterior

//-------------3-------------
//-------------a-------------
// false, undefined

//-------------b-------------
// ele retornou no console log false para backender que foi a propriedade atribuida e retonou undefined para altura porque não foi inserido nenhum valor a essa propriedade (nao existente)

//EXERCICIOS DE ESCRITA 

//-------------1-------------

// ISSO está em outro aqruivo
// const pessoa = {
//     nome: "Natasha", 
//     apelidos: ["nat", "na", "tasha"]
//  }




// function funcaoPessoa (objeto){
//     console.log(`Eu sou ${objeto.nome} , mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`)  
//     const novoApelido = ["Amandinha", "Mandinha", "Mandi"]
//     const novaPessoa = {
//         ...objeto,
//         apelidos: novoApelido
//     }
//     console.log(`Eu sou ${novaPessoa.nome} , mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]}, ${novaPessoa.apelidos[2]}`)  
// }
// funcaoPessoa(pessoa)

//-------------2-------------
// const pessoa1 = {
//     nome: "Natasha", 
//     idade: 24,
//     profissao: "Estudante"
//  }

//  const pessoa2 = {
//     nome: "Karl", 
//     idade: 31,
//     profissao: "Estudante"
//  }

//  function listaPessoas (referenciaPessoa) {
//    return [referenciaPessoa.nome, referenciaPessoa.nome.length, referenciaPessoa.idade, referenciaPessoa.profissao, referenciaPessoa.profissao.length]
//  }


// console.log(listaPessoas(pessoa1))
// console.log(listaPessoas(pessoa2))

//-------------3-------------

const carrinho = []
const fruta1 = {
    nome: "Morango",
    disponibilidade: true 
}
const fruta2 = {
    nome: "Uva",
    disponibilidade: false
}
const fruta3 = {
    nome: "Banana",
    disponibilidade: true 
}
function adicionarNoCarrinho(fruta){
    carrinho.push(fruta)
}
adicionarNoCarrinho(fruta1)
adicionarNoCarrinho(fruta2)
adicionarNoCarrinho(fruta3)
console.log(carrinho)
