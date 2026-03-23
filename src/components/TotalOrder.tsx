import { useCart } from "@/hooks/useCart";

export default function TotalOrder() {
  const { totalOrder } = useCart();

  return (
    <div className="flex flex-row items-center justify-between">
      <span className="text-sm text-custom-rose-900">Order Total</span>
      <span className="text-[1.55rem] font-bold text-custom-rose-900">
        ${totalOrder.toFixed(2)}
      </span>
    </div>
  );
}
