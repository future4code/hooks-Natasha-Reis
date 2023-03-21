const printNumbersCres = (n: number) => {
  if (n >= 0) {
    printNumbersCres(n - 1);
    console.log(n);
  }
};

const printNumbersDecr = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbersDecr(n - 1);
  }
};
