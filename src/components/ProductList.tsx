import * as products from "@data/data.json";
import { useProductContext } from "src/context/ProductProvider";

export default function ProductList() {
  const { productList } = useProductContext();
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Dessert</h1>
      <main>Product-List</main>
    </div>
  );
}
