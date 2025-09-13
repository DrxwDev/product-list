import { useState, type ReactNode } from "react";
import products from "@data/data.json";
import { type ProductProps } from "@components/Product";
import { ProductContext } from "./ProductContext";

type ProductProviderProps = {
  children: ReactNode;
};

export default function ProductProvider({ children }: ProductProviderProps) {
  const [productList, setProductList] = useState<ProductProps[]>(products);

  function addProduct(id: number) {
    setProductList(
      productList.map((p) =>
        p.id === id ? { ...p, price: p.price + p.price, quantity: 1 } : p,
      ),
    );
  }

  function deleteProduct(id: number) {
    setProductList(productList.filter((p) => p.id !== id));
  }

  return (
    <ProductContext.Provider value={{ productList, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
