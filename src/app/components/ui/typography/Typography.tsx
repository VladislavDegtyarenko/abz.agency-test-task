import { TypographyProps } from "@/app/types";
import styles from "@/app/scss/components/ui/typography.module.scss";

const Typography = ({ tag = "p", center, ...props }: TypographyProps) => {
  const Tag = `${tag}` as keyof JSX.IntrinsicElements;

  if (center) {
    props.className = `${props.className} ${styles.center}`;
  }

  return <Tag {...props} />;
};

export default Typography;
