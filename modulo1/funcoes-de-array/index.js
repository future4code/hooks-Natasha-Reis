// ------- EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO -----
// 1 - Vai aparecer o nome e o apelido de cada usuário

// 2 - Vai aparecer o nome de cada usuário

// 3 - Vai aparecer somente os nomes que forem diferentes de Chijo



// ------- EXERCICIO DE ESCRITA DE CÓDIGO -----
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]
console.log(pets.map(cachorro => {
  console.log(cachorro.nome)
}))

console.log(pets.filter(cachorro => {
  return cachorro.raca === 'Salsicha'
}))

const poodles = pets.filter(cachorro => {
  return cachorro.raca === 'Poodle'
})
poodles.map(poodle => {
  console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`)
})


//--------------------------
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
console.log(produtos.map(listaNomesProdutos => {
  console.log(listaNomesProdutos.nome)
}))

const desconto = produtos.map(item => {
  item.preco = item.preco *0.95 
  return item
})
console.log(desconto)

console.log(produtos.filter(listaBedidas =>{
  return listaBedidas.categoria === 'Bebidas'
}))

console.log(produtos.filter(produto =>{
return produto.nome.includes('Ypê')

}))

const produtosYpe = produtos.filter(produto =>{
  return produto.nome.includes('Ypê')
})
produtosYpe.map(produto => {
 console.log(`Compre ${produto.nome} por ${produto.preco}`) 
})


