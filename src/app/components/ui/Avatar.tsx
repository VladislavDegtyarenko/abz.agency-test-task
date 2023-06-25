// import Image from "next/image";
import { default as Image } from "./ImageWithFallback";
import styles from "@/app/scss/components/ui/Avatar.module.scss";
import { AvatarProps } from "@/app/types";

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <Image
      src={src || ""}
      fallbackSrc={"/assets/photo-cover.svg"}
      alt={alt || "employee photo"}
      width={70}
      height={70}
      className={styles.avatar}
    />
  );
};

export default Avatar;
