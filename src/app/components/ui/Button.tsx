import Body from "./typography/Body";
import { ButtonProps } from "../../types";
import styles from "@/app/scss/components/ui/Button.module.scss";

const Button = ({ children, href, ...props }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} className={styles.button} {...props}>
        <Body>{children}</Body>
      </a>
    );
  }
  return (
    <button className={styles.button} {...props}>
      <Body>{children}</Body>
    </button>
  );
};

export default Button;
