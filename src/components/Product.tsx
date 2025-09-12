export type ProductProps = {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  quantity: number;
};

type ProductCardProps = {
  product: ProductProps;
};

export default function Product({ product }: ProductCardProps) {
  return <div></div>;
}
