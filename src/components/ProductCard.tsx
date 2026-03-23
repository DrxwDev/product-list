import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types/product";
import AddButton from "./AddButton";
import ProductButtons from "./ProductButtons";

export default function ProductCard({ product }: Product) {
  const { onGetQty } = useCart();
  const quantity = onGetQty(product);

  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <img
            className={`w-full rounded-md object-center ${quantity > 0 && "ring-[2.3px] ring-custom-red"} xl:rounded-lg xl:h-60 transition-all duration-200`}
            src={product.image.mobile}
            alt={product.name}
          />
        </picture>
        <div
          className={`absolute left-1/2 -bottom-5.5 -translate-x-1/2 w-40 h-10.75 ${quantity > 0 && "h-11"} rounded-full`}
        >
          {quantity === 0 ? (
            <AddButton product={product} />
          ) : (
            <ProductButtons product={product} />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between h-19">
        <span className="product-category">{product.category}</span>
        <span className="product-name">{product.name}</span>
        <span className="product-price">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
