import type { ProductListProps } from "@/types/product-list";
import { createContext } from "react";

export const ProductListContext = createContext<ProductListProps | undefined>(
  undefined,
);
