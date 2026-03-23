import { useCart } from "@/hooks/useCart";
import RenderList from "./ui/RenderList";
import Item from "./Item";
import TotalOrder from "./TotalOrder";

export default function Modal() {
  const { cart, onStartNewOrder, onCancelOrder } = useCart();

  return (
    <div
      onClick={onCancelOrder}
      className="absolute bg-black/60 w-full h-full flex justify-center items-start"
    >
      <div className="w-full md:w-100 lg:w-120 mt-24 px-6 py-8 xl:w-140 flex flex-col gap-6 xl:p-8 bg-white rounded-t-lg md:rounded-b-lg xl:mt-80">
        <div className="flex flex-col gap-5">
          <img
            className="w-12"
            src="./src/assets/icons/icon-order-confirmed.svg"
            alt="Confirmed icon"
          />
          <div className="flex flex-col gap-1">
            <span className="text-[2.5rem] leading-14 font-bold text-custom-rose-900">
              Order Confirmed
            </span>
            <span className="text-custom-rose-900">
              We hope you enjoy your food!
            </span>
          </div>
        </div>
        <div className="flex flex-col px-6 py-1 bg-custom-rose-50 rounded-lg">
          <RenderList
            items={cart}
            render={(product) => (
              <Item key={product.id}>
                <div className="flex flex-row gap-4 py-1">
                  <img
                    className="rounded-sm object-cover w-11 h-11"
                    src={product.image.thumbnail}
                    alt={product.name}
                  />
                  <div className="flex flex-col gap-2 text-sm">
                    <span className="item-name">{product.name}</span>
                    <div className="flex flex-row gap-4">
                      <span className="item-qty">{product.qty}x</span>
                      <span className="item-price">
                        @ ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-custom-rose-900 text-sm font-semibold">
                  ${(product.price * product.qty).toFixed(2)}
                </span>
              </Item>
            )}
          />
          <div className="my-4">
            <TotalOrder />
          </div>
        </div>
        <button onClick={onStartNewOrder} className="item-btn">
          Start New Order
        </button>
      </div>
    </div>
  );
}
