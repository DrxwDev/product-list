import { useProductList } from "@/hooks/useProductList";
import RenderList from "./ui/RenderList";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { products, error, loading } = useProductList();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>404: {error}</h1>;

  return (
    <section className="w-full xl:w-200 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5.75">
      <RenderList
        items={products}
        render={(product) => <ProductCard key={product.id} product={product} />}
      />
    </section>
  );
}
