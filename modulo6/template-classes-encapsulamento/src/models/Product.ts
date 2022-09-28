export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number
  ) {}

  public getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
