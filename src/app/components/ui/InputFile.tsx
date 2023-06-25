import { forwardRef, ForwardedRef } from "react";
import { InputFileProps } from "@/app/types";
import styles from "@/app/scss/components/ui/InputFile.module.scss";

const InputFile = forwardRef(
  (
    { errorMessage, helperText, filename, ...props }: InputFileProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={`${styles.inputFile} ${errorMessage ? styles.error : ""}`}>
        <input type="file" {...props} ref={ref} />

        <span className={`${styles.upload} ${errorMessage ? styles.error : ""}`}>
          Upload
        </span>

        <span className={`${styles.filename} ${filename ? styles.active : ""}`}>
          {filename || "Upload your photo"}
        </span>

        {errorMessage || helperText ? (
          <span className={`${styles.helper} ${errorMessage ? styles.error : ""}`}>
            {errorMessage || helperText}
          </span>
        ) : null}
      </label>
    );
  }
);

InputFile.displayName = "InputFile";

export default InputFile;
