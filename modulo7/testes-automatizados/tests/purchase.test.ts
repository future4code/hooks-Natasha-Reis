describe.skip("Teste usuário com o saldo maior do que o valor de compra", () => {
  test("toEqual", () => {
    const user: User = {
      name: "Thor",
      balance: 100,
    };

    const result = performPurchase(user, 40);

    expect(result).toEqual({
      name: "Thor",
      balance: 60,
    });
  });
});

describe.skip("Teste usuário com o saldo igual ao valor de compra", () => {
  test("toEqual", () => {
    const user: User = {
      name: "Bruce",
      balance: 50,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });
});

describe.skip("Teste usuário com o saldo menor do que o valor de compra", () => {
  test("toBeDefined", () => {
    const user: User = {
      name: "Pirulito",
      balance: 30,
    };

    const result = performPurchase(user, 50);

    expect(result).not.toBeDefined();
  });
});
