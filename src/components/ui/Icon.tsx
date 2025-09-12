type IconProps = {
  image: string;
  alt: string;
  styles: string;
};

export default function Icon({ image, alt, styles }: IconProps) {
  return <img className={styles} src={image} alt={alt} />;
}
