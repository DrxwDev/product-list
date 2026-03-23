import { ProductListContext } from "@/context/ProductList";
import type { ProductProps } from "@/types/product";
import { useEffect, useState } from "react";

export default function ProductListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    const controller = new AbortController();
    setLoading(true);
    try {
      const response = await fetch("/data.json");
      if (!response.ok) throw new Error("error fetching products");
      const data = await response.json();
      setProducts(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
    return controller.abort();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductListContext value={{ products, error, loading }}>
      {children}
    </ProductListContext>
  );
}
