import { Product } from "../product/types";

interface CartProduct {
  product: Product;
  count: number;
}

export type Cart = CartProduct[];
