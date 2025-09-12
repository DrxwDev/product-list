type TextProps = {
  text: string;
  styles: string;
};

export default function Text({ text, styles }: TextProps) {
  return <p className={styles}>{text}</p>;
}
