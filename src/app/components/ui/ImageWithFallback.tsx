/**
 * Custom Next.js Image component with a fallback image.
 *
 * @component
 * @example
 * <ImageWithFallback
 *   fallbackSrc="/path/to/fallback-image.jpg"
 *   src="/path/to/image.jpg"
 *   alt="Description of the image"
 *   width={500}
 *   height={300}
 * />
 *
 * @param {string} fallbackSrc - The source URL of the fallback image to be displayed if the primary image fails to load.
 * @param {string} alt - The alternative text for the image.
 * @param {string} src - The source URL of the primary image.
 * @param {object} props.* - Additional props accepted by the Next.js Image component.
 * @returns {JSX.Element} - ImageWithFallback component.
 */

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// TS
import { ImageWithFallbackProps } from "@/app/types";

const ImageWithFallback = ({
  fallbackSrc,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={() => setError(true)}
      src={error ? fallbackSrc : src}
      {...props}
    />
  );
};

export default ImageWithFallback;
