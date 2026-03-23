import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types/product";

export default function ProductButtons({ product }: Product) {
  const { onIncProduct, onDecProduct, onGetQty } = useCart();
  const quantity = onGetQty(product);

  return (
    <div className="w-full h-full rounded-full bg-custom-red flex flex-row justify-between items-center px-3.5">
      <button
        className="size-4 rounded-full ring ring-white flex items-center justify-center hover:cursor-pointer"
        onClick={() => onDecProduct(product)}
      >
        <img src="/icons/icon-decrement-quantity.svg" alt="Decrement icon" />
      </button>
      <span className="text-white text-sm font-semibold">{quantity}</span>
      <button
        className="size-4 rounded-full ring ring-white flex items-center justify-center hover:cursor-pointer"
        onClick={() => onIncProduct(product)}
      >
        <img src="/icons/icon-increment-quantity.svg" alt="Increment icon" />
      </button>
    </div>
  );
}
