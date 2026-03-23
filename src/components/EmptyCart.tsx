export default function EmptyCart() {
  return (
    <div className="flex flex-col gap-4 mt-10 mb-4.5 items-center justify-center">
      <img src="/icons/illustration-empty-cart.svg" alt="Empty cart icon" />
      <span className="text-sm text-custom-rose-500 font-semibold">
        Your added items will appear here
      </span>
    </div>
  );
}
