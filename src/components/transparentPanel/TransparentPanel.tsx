import styles from "./TransparentPanel.module.scss";
import { classNames } from "primereact/utils";
import { JSX } from "react";

export interface ITransparentPanelProps {
  className?: string;
  height?: string;
  maxHeight?: string;
  children: JSX.Element;
}

export const TransparentPanel = ({
  className,
  height = "100%",
  maxHeight,
  children,
}: ITransparentPanelProps) => {
  return (
    <div
      className={classNames(styles.panel, className)}
      style={{
        height: height,
        maxHeight: maxHeight,
      }}
    >
      {children}
    </div>
  );
};
