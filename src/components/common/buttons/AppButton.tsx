import { classNames } from "primereact/utils";
import styles from "./AppButton.module.scss";

interface IAppButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  maxWidth?: number;
}

export const AppButton = ({
  text,
  onClick,
  className,
  type = "button",
  maxWidth,
}: IAppButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(styles.button, className)}
      onClick={onClick}
      style={{ maxWidth: maxWidth }}
    >
      {text}
    </button>
  );
};
