import type { ReactNode } from "react";

type RenderProps<T> = {
  items: T[];
  renderItems: (item: T) => ReactNode;
};

export default function RenderList<T>({ items, renderItems }: RenderProps<T>) {
  return <>{items.map((p) => renderItems(p))}</>;
}
