// ------- EXERCICIO DE INTERPRETAÇÃO -------

// ------- 1 ---------
// O codigo está somando um numero até o 5. ex: 1+2+3+4=10
// console imprime 10

// ------- 2 ---------
// vai ser imresso no console todos os numeros que são maiores que 18
//

// ------- EXERCICIO DE ESCRITA DE CÓDIGO -------

let quantidadeBichinhos = prompt('Quantos bichinhos de estimação você tem?')
if (Number(quantidadeBichinhos) === 0) {
    console.log('Que pena, você pode adotar um pet!')
} else {
    const nomeBichinhos = []
    for (let i = 0; i < quantidadeBichinhos; i++) {
        let nomeBichinhosPergunta = prompt('Digite os nomes deles')
        nomeBichinhos.push(nomeBichinhosPergunta)
    }
    console.log(nomeBichinhos)
}


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function imprimeValores(array) {
    for (const numero of array) {
        console.log(numero)
    }
}
imprimeValores(array)

function imprimeValores(array) {
    for (const numero of array) {
        console.log(numero / 10)
    }
}
imprimeValores(array)

function numerosPares(array) {
    const novaArray = []

    for (const numero of array) {
        if (numero % 2 === 0) {
            novaArray.push(numero)
        }
    }

    console.log(novaArray)
}

numerosPares(array)

function crieArrayDeTextos(array) {
    const novaArray = []
    for (let i = 0; i < array.length; i++) {
        novaArray.push(`O elemento do índex ${i} é: ${array[i]}`)
    }
    console.log(novaArray)
}
crieArrayDeTextos(array)

function encontraMaiorMenor(array) {
    let valorMaximo
    let valorMinimo

    for (const numero of array) {
        if (!valorMinimo) {
            valorMinimo = numero
        } else {
            if (numero < valorMinimo) {
                valorMinimo = numero
            }
        }

        if (!valorMaximo) {
            valorMaximo = numero
        } else {
            if (numero > valorMaximo) {
                valorMaximo = numero
            }
        }
    }
    console.log(valorMaximo, valorMinimo)
}
encontraMaiorMenor(array)
