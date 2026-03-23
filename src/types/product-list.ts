import type { ProductProps } from "./product";

export type ProductListProps = {
  products: ProductProps[];
  error: string;
  loading: boolean;
};
