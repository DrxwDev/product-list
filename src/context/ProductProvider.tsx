import type { ProductProps } from "@components/Product";
import {
  useState,
  createContext,
  type PropsWithChildren,
  useContext,
} from "react";

type ProductContextProps = {
  productList: ProductProps[];
  cart: ProductProps[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
};

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined,
);

export function useProductContext() {
  const ctx = useContext(ProductContext);

  if (!ctx) {
    throw new Error("useProductContext must be used within ProductProvider");
  }
  return ctx;
}

type ProductProviderProps = PropsWithChildren & {
  productList: ProductProps[];
};

export default function ProductProvider({
  productList,
  children,
}: ProductProviderProps) {
  const [cart, setCart] = useState<ProductProps[]>([]);

  function addProduct(id: number) {
    const product = productList.find((p) => p.id === id);
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find((p) => p.id === id);
      if (existing) {
        // Si ya existe, incrementamos cantidad
        return prev.map((p) =>
          p.id === id
            ? {
                ...p,
                quantity: (p.quantity || 1) + 1,
                price: (p.price / (p.quantity || 1)) * ((p.quantity || 1) + 1),
              }
            : p,
        );
      } else {
        // Si no existe, lo agregamos con quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  function removeProduct(id: number) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function increment(id: number) {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              quantity: (p.quantity || 1) + 1,
              price: (p.price / (p.quantity || 1)) * ((p.quantity || 1) + 1),
            }
          : p,
      ),
    );
  }

  function decrement(id: number) {
    setCart(
      (prev) =>
        prev
          .map((p) => {
            if (p.id === id) {
              const newQuantity = (p.quantity || 1) - 1;
              if (newQuantity <= 0) return null; // eliminar producto si cantidad es 0
              return {
                ...p,
                quantity: newQuantity,
                price: (p.price / (p.quantity || 1)) * newQuantity,
              };
            }
            return p;
          })
          .filter(Boolean) as ProductProps[], // filtramos los null
    );
  }

  return (
    <ProductContext.Provider
      value={{
        productList,
        cart,
        addProduct,
        removeProduct,
        increment,
        decrement,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
