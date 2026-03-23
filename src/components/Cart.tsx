import { useCart } from "@/hooks/useCart";
import EmptyCart from "./EmptyCart";
import RenderList from "./ui/RenderList";
import Item from "./Item";
import TotalOrder from "./TotalOrder";

export default function Cart() {
  const { cart, totalItems, onDelProduct, onConfirmOrder } = useCart();

  return (
    <section className="w-full xl:max-w-100 bg-white p-6  rounded-lg shadow-md shadow-custom-rose-100">
      <span className="text-2xl text-custom-red font-bold">
        Your Cart ({totalItems})
      </span>
      {totalItems === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex flex-col mt-2">
            <RenderList
              items={cart}
              render={(product) => (
                <Item key={product.id}>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-custom-rose-900 font-semibold">
                      {product.name}
                    </span>
                    <div className="flex flex-row gap-4 items-baseline text-sm w-35">
                      <span className="item-qty">{product.qty}x</span>
                      <div className="flex flex-row items-baseline gap-2">
                        <span className="item-price">
                          @ ${product.price.toFixed(2)}
                        </span>
                        <span className="item-total-price">
                          ${(product.price * product.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onDelProduct(product)}
                    className="size-4 rounded-full ring ring-custom-rose-500 flex items-center justify-center hover:ring-custom-rose-900 hover:cursor-pointer transition-all duration-200"
                  >
                    <img
                      src="/icons/icon-remove-item.svg"
                      alt="Remove item icon"
                    />
                  </button>
                </Item>
              )}
            />
          </div>
          <div className="my-6">
            <TotalOrder />
          </div>
          <div className="flex flex-col gap-6 mt-2">
            <div className="flex flex-row gap-2 justify-center items-center bg-custom-rose-50 py-4 rounded-lg">
              <img src="/icons/icon-carbon-neutral.svg" alt="Carbon icon" />
              <p className="text-sm text-custom-rose-900">
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <button onClick={onConfirmOrder} className="item-btn">
              Confirm Order
            </button>
          </div>
        </>
      )}
    </section>
  );
}
