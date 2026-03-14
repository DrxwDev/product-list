import { ShoppingContext } from "@/context/ShoppingCartContext";
import type { ProductProps } from "@/types/product";
import { useEffect, useState } from "react";

export default function ShoppingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true);
    const controller = new AbortController();
    try {
      const response = await fetch("/data.json");
      if (!response.ok) throw new Error("failed to fetch products");
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

  const onAddToCart = (product: ProductProps) => {
    setCart((cart) => {
      const found = cart.find((p) => p.id === product.id);
      if (found) {
        return cart.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
        );
      }
      return [...cart, { ...product, qty: 1 }];
    });
  };

  const onSubFromCart = (product: ProductProps) => {
    setCart((cart) =>
      cart
        .map((p) => (p.id === product.id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0),
    );
  };

  const onRemFromCart = (product: ProductProps) => {
    setCart((cart) => cart.filter((p) => p.id !== product.id));
  };

  const onGetQty = (product: ProductProps): number => {
    const found = cart.find((p) => p.id === product.id);
    if (!found) return 0;
    return found.qty;
  };

  const totalOrder = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <ShoppingContext
      value={{
        products,
        cart,
        totalOrder,
        error,
        loading,
        onAddToCart,
        onSubFromCart,
        onRemFromCart,
        onGetQty,
      }}
    >
      {children}
    </ShoppingContext>
  );
}
