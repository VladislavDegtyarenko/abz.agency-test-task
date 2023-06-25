import styles from "@/app/scss/components/ui/typography.module.scss";
import Typography from "./Typography";
import { TypographyProps } from "@/app/types";

const Body = ({ children, className = "", ...props }: TypographyProps) => {
  return (
    <Typography className={`${styles.body} ${className}`} {...props}>
      {children}
    </Typography>
  );
};

export default Body;
