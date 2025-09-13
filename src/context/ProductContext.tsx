import { createContext, use } from "react";
import type { ProductProps } from "@components/Product";

type ProductData = {
  productList: ProductProps[];
  addProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
};

export const ProductContext = createContext<ProductData | undefined>(undefined);

export function useProductContext() {
  const ctx = use(ProductContext);

  if (!ctx) {
    throw new Error("useProductContext must be used within ProductProvider");
  }

  return ctx;
}
