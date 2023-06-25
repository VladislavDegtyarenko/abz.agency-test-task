"use client";

import {
  FunctionComponent,
  useState,
  useMemo,
  MouseEventHandler,
  RefObject,
  useRef,
} from "react";
import throttle from "@/app/utils/throttle";

import styles from "@/app/scss/components/ui/Tooltip.module.scss";

import { TooltipProps } from "@/app/types";

const Tooltip = ({ children, label }: TooltipProps) => {
  const [tooltip, setTooltip] = useState(false);
  const [position, setPosition] = useState({ top: "0px", left: "0px" });

  const ref: RefObject<HTMLSpanElement> | null = useRef(null);

  const showTooltip = () => setTooltip(true);
  const hideTooltip = () => setTooltip(false);

  const handleMouseMove: MouseEventHandler<HTMLSpanElement> = (e) => {
    const { clientX, clientY } = e;

    const OFFSET_X = 50,
      OFFSET_Y = 25;

    const rect = ref.current?.getBoundingClientRect();

    let top = 0,
      left = 0;

    if (rect !== undefined) {
      top = clientY - rect.top + OFFSET_Y;
      left = clientX - rect.left + OFFSET_X;
    }

    setPosition({ top: top + "px", left: left + "px" });
  };

  const throttleHandleMouseMove = useMemo(() => throttle(handleMouseMove, 16), []);

  return (
    <span
      className={styles.tooltipWrapper}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onMouseMove={throttleHandleMouseMove}
      ref={ref}
    >
      {children}
      {tooltip && (
        <span className={styles.tooltipLabel} style={{ ...position }} role="tooltip">
          {label}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
