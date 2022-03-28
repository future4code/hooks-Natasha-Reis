/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Boas vindas ao jogo de Blackjack!')

if (confirm('Quer iniciar uma nova rodada?')) {
    const usuario = { carta1: comprarCarta(), carta2: comprarCarta() }
    const computador = { carta1: comprarCarta(), carta2: comprarCarta() }

    const pontuacaoUsuario = usuario.carta1.valor + usuario.carta2.valor
    const pontuacaoComputador = computador.carta1.valor + computador.carta2.valor

    console.log(`Usuário - cartas: ${usuario.carta1.texto} ${usuario.carta2.texto} - pontuação: ${pontuacaoUsuario} `)
    console.log(`Computador - cartas: ${computador.carta1.texto} ${computador.carta2.texto} - pontuação: ${pontuacaoComputador} `)

    if (pontuacaoUsuario === pontuacaoComputador) {
        console.log('Empate!')
    }

    if (pontuacaoUsuario > pontuacaoComputador) {
        console.log('O usuário ganhou!')
    }

    if (pontuacaoComputador > pontuacaoUsuario) {
        console.log('O computador ganhou!')
    }
} else {
    console.log('O jogo acabou')
}
