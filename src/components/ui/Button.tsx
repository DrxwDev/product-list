type ButtonProps = {
  label: string;
  styles: string;
  Method: () => void;
};

export default function Button({ label, Method, styles }: ButtonProps) {
  return (
    <button className={styles} onClick={Method} type="button">
      {label}
    </button>
  );
}
