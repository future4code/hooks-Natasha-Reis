// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((numero) => {
        return numero % 2 === 0
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = retornaNumerosPares(array)
    return numerosPares.map((numero) => {
        return numero * numero
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const numerosOrdenados = retornaArrayOrdenado(array)
    return numerosOrdenados[numerosOrdenados.length - 1]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero

    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }
    return { maiorNumero: maiorNumero, maiorDivisivelPorMenor: maiorNumero % menorNumero === 0, diferenca: maiorNumero - menorNumero }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPares = []

    for (let index = 0; index < n; index++) {
        if (index === 0) {
            arrayPares.push(0)
        } else {
            let ultimoNumeroArray = arrayPares[arrayPares.length - 1]
            arrayPares.push(ultimoNumeroArray + 2)
        }
    }
    return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
