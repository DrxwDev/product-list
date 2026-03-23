import type { CartContextProps } from "@/types/cart-context";
import { createContext } from "react";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined,
);
