import type { ProductProps } from "./product";

export type ShoppingValue = {
  products: ProductProps[];
  cart: ProductProps[];
  totalOrder: number;
  error: string;
  loading: boolean;
  onAddToCart: (product: ProductProps) => void;
  onSubFromCart: (product: ProductProps) => void;
  onRemFromCart: (product: ProductProps) => void;
  onGetQty: (product: ProductProps) => number;
};
