"use client";

import Body from "./Body";
import Tooltip from "../Tooltip";
import styles from "@/app/scss/components/ui/typography.module.scss";
import { TextLinkProps } from "@/app/types";

const TextLink = ({ tooltip, ...props }: TextLinkProps) => {
  const Link = <Body className={styles.textlink} tag="a" {...props} />;

  if (!tooltip) return Link;

  return <Tooltip label={tooltip}>{Link}</Tooltip>;
};

export default TextLink;
