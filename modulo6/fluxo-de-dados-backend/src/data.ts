type Product = {
  id: string;
  name: string;
  price: number;
};

const listProduct: Array<Product> = [
  {
    id: "1",
    name: "banana",
    price: 5,
  },
  {
    id: "2",
    name: "morango",
    price: 10,
  },
  {
    id: "3",
    name: "uva",
    price: 8,
  },
  {
    id: "4",
    name: "maçã",
    price: 5,
  },
];

export { listProduct, Product };
