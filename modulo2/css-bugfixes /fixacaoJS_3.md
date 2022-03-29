function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
    let notaPeso1 = ex * 1
    let notaPeso2 = p1 * 2
    let notaPeso3 = p2 * 3
    const media = (notaPeso1 + notaPeso2 + notaPeso3) / 6

    if (media >= 9) {
        return "A"
    } else if (media < 9 && media >= 7.5) {
        return "B"
    } else if (media < 7.5 && media >= 6) {
        return "C"
    } else {
        return "D"
    }
}