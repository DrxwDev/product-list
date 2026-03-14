import { ShoppingContext } from "@/context/ShoppingCartContext";
import { use } from "react";

export const useShoppingCart = () => {
  const context = use(ShoppingContext);
  if (!context) {
    throw new Error("useShoppingCart must be used within ShoppingProvider");
  }
  return context;
};
