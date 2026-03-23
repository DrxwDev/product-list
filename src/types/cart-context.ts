import type { ProductProps } from "./product";

export type CartContextProps = {
  cart: ProductProps[];
  confirm: boolean;
  totalOrder: number;
  totalItems: number;
  onGetQty: (product: ProductProps) => number;
  onIncProduct: (product: ProductProps) => void;
  onDecProduct: (product: ProductProps) => void;
  onDelProduct: (product: ProductProps) => void;
  onConfirmOrder: () => void;
  onCancelOrder: () => void;
  onStartNewOrder: () => void;
};
