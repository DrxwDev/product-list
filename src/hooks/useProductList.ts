import { ProductListContext } from "@/context/ProductList";
import { use } from "react";

export const useProductList = () => {
  const context = use(ProductListContext);

  if (!context) {
    throw new Error(
      "ProductListContext must be used within ProductListProvider",
    );
  }

  return context;
};
