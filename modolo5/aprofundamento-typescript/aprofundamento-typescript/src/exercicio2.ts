type estatisticas = {
  maior: number;
  menor: number;
  media: number;
};

type amostras = {
  numeros: Array<number>;
  obterEstatisticas: (numeros: Array<number>) => estatisticas;
};

const amostraDeIdades: amostras = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: obterEstatisticas,
};

function obterEstatisticas(numeros: Array<number>): estatisticas {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
