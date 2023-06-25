import { ValidateResult } from "react-hook-form";

const validateImageResolution = (files: FileList, minWidth = 70, minHeight = 70) => {
  return new Promise<ValidateResult>((resolve, reject) => {
    const img = new Image();
    const objectUrl = window?.URL.createObjectURL(files[0]);

    img.src = objectUrl;

    img.onload = function () {
      const { width, height } = img;

      resolve(
        (width >= minWidth && height >= minHeight) || "Minimum size of photo 70x70px"
      );
    };

    img.onerror = function () {
      reject("Failed to load the image.");
    };
  });
};

export default validateImageResolution;
