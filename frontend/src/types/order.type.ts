import { Product } from "./product.type";

export interface Order {
    id: number;
    userId: number;
    products: Product[];
    total: number;
    status: string;
  }