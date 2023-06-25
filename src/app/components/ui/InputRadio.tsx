import { forwardRef, ForwardedRef } from "react";
import { InputRadioProps } from "@/app/types";
import styles from "@/app/scss/components/ui/InputRadio.module.scss";

const InputRadio = forwardRef(
  ({ label, ...props }: InputRadioProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <label className={`${styles.inputRadio}`}>
        <input type="radio" {...props} ref={ref} />
        <span></span>
        {label}
      </label>
    );
  }
);

InputRadio.displayName = "InputRadio";

export default InputRadio;
