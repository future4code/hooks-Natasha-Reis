// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  total_price: number;
};

export class Purchase {
  constructor(
    private id: string,
    private userId: string,
    private productId: string,
    private quantity: number,
    private totalPrice: number
  ) {}

  public getId(): string {
    return this.id;
  }

  getuserId(): string {
    return this.userId;
  }

  getProductId(): string {
    return this.productId;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
}
