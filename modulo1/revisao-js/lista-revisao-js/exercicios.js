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
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoDeTriangulo

    if (ladoA === ladoB && ladoA === ladoC) {
        tipoDeTriangulo = 'Equilátero'
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        tipoDeTriangulo = 'Escaleno'
    } else {
        tipoDeTriangulo = 'Isósceles'
    }
    return tipoDeTriangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const numOrdenados = retornaArrayOrdenado(array)
    const posicoes = [numOrdenados[numOrdenados.length - 2], numOrdenados[1]]
    return posicoes
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        ...pessoa,
        nome: 'ANÔNIMO',
    }
    return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60
    })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60
    })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((conta) => {
        let saldoAtualizado = conta.saldoTotal

        for (const compra of conta.compras) {
            saldoAtualizado = saldoAtualizado - compra
        }
        conta.saldoTotal = saldoAtualizado
        conta.compras = []

        return conta
    })
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => a.nome.localeCompare(b.nome))
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a, b) => new Date(a.dataDaConsulta) - new Date(b.dataDaConsulta))
}
