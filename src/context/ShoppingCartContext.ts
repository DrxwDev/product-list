import type { ShoppingValue } from "@/types/shopping-context";
import { createContext } from "react";

export const ShoppingContext = createContext<ShoppingValue | undefined>(
  undefined,
);
