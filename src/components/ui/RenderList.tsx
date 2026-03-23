type Props<T> = {
  items: T[];
  render: (item: T) => void;
};

export default function RenderList<T>({ items, render }: Props<T>) {
  return <>{items.map((item) => render(item))}</>;
}
