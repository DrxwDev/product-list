import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types/product";

export default function AddButton({ product }: Product) {
  const { onIncProduct } = useCart();

  return (
    <button
      aria-label={`Add ${product.name} to cart`}
      onClick={() => onIncProduct(product)}
      className="w-full h-full rounded-full bg-white flex justify-center items-center gap-2 text-custom-rose-900 ring ring-custom-rose-400 hover:ring-custom-red hover:text-custom-red hover:cursor-pointer transition-all duration-200"
    >
      <img src="/icons/icon-add-to-cart.svg" alt="Shopping cart icon" />
      <span className="text-sm font-semibold">Add to Cart</span>
    </button>
  );
}
