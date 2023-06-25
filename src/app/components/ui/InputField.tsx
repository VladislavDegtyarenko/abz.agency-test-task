import { forwardRef, ForwardedRef } from "react";
import styles from "@/app/scss/components/ui/InputField.module.scss";
import { InputFieldProps } from "@/app/types";

const InputField = forwardRef(
  (
    { helperText, errorMessage, placeholder, ...props }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={`${styles.inputField}`}>
        <input ref={ref} placeholder=" " {...props} />

        <span className={`${styles.label} ${errorMessage ? styles.error : ""}`}>
          {placeholder}
        </span>

        <fieldset className={`${styles.border} ${errorMessage ? styles.error : ""}`}>
          <legend>
            <span>{placeholder}</span>
          </legend>
        </fieldset>

        {errorMessage || helperText ? (
          <span className={`${styles.helper} ${errorMessage ? styles.error : ""}`}>
            {errorMessage || helperText}
          </span>
        ) : null}
      </label>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
