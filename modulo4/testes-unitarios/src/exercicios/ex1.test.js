import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
  test("retorna true pra 1600", () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2000", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 1996", () => {
    const resultado = checaBissexto(1996);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2008", () => {
    const resultado = checaBissexto(2008);

    expect(resultado).toEqual(true);
  });

  test("retorna false pra 2007", () => {
    const resultado = checaBissexto(2007);

    expect(resultado).toEqual(true);
  });

  test("retorna false pra 1998", () => {
    const resultado = checaBissexto(1998);

    expect(resultado).toEqual(true);
  });

  test("retorna false pra 1990", () => {
    const resultado = checaBissexto(1990);

    expect(resultado).toEqual(true);
  });
});
