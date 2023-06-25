import styles from "@/app/scss/components/ui/typography.module.scss";
import Typography from "./Typography";
import { HeadingProps } from "@/app/types";

const Heading = ({ children, ...props }: HeadingProps) => {
  return (
    <Typography className={styles.h1} {...props}>
      {children}
    </Typography>
  );
};

export default Heading;
