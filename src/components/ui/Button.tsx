import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  styles: string;
  Method: () => void;
};

export default function Button({ children, Method, styles }: ButtonProps) {
  return (
    <button className={styles} onClick={Method} type="button">
      {children}
    </button>
  );
}
