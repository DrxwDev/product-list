import { CartContext } from "@/context/Cart";
import type { ProductProps } from "@/types/product";
import { useState } from "react";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [confirm, setConfirm] = useState<boolean>(false);

  const onIncProduct = (product: ProductProps) => {
    setCart((prev) => {
      const found = cart.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const onDecProduct = (product: ProductProps) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === product.id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0),
    );
  };

  const onDelProduct = (product: ProductProps) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };

  const onConfirmOrder = () => {
    setConfirm(true);
  };

  const onCancelOrder = () => {
    setConfirm(false);
  };

  const onStartNewOrder = () => {
    setCart([]);
    setConfirm(false);
  };

  const onGetQty = (product: ProductProps): number => {
    const found = cart.find((p) => p.id === product.id);
    if (!found) return 0;
    return found.qty;
  };

  const totalOrder = cart.reduce((sum, p) => sum + p.price * p.qty, 0);
  const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);

  return (
    <CartContext
      value={{
        cart,
        confirm,
        totalOrder,
        totalItems,
        onGetQty,
        onIncProduct,
        onDecProduct,
        onDelProduct,
        onConfirmOrder,
        onCancelOrder,
        onStartNewOrder,
      }}
    >
      {children}
    </CartContext>
  );
}
