import ProductListProvider from "@/provider/ProductListProvider";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { useCart } from "@/hooks/useCart";
import Modal from "./Modal";

export default function ShoppingApp() {
  const { confirm } = useCart();

  return (
    <div className="relative flex">
      <div className="container mx-auto px-6 py-5 flex flex-col justify-center items-start gap-8 xl:flex-row xl:px-8 xl:pt-21">
        <div className="flex flex-col gap-7">
          <h1 className="text-[2.5rem] leading-14 font-bold text-custom-rose-900">
            Desserts
          </h1>
          <ProductListProvider>
            <ProductList />
          </ProductListProvider>
        </div>
        <Cart />
      </div>
      {confirm && <Modal />}
    </div>
  );
}
