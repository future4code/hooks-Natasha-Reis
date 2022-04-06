function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
// Escreva seu código aqui

const arrayFiltrada = arrayDeNumeros.filter(numero => {
return numero === numeroEscolhido
})

if( arrayFiltrada.length === 0){
return"Número não encontrado"
}
