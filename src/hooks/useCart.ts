import { CartContext } from "@/context/Cart";
import { use } from "react";

export const useCart = () => {
  const context = use(CartContext);

  if (!context) {
    throw new Error("CartContext must be used within CartProvider");
  }

  return context;
};
