import { classNames } from "primereact/utils";
import styles from "./AppInputField.module.scss";

interface IAppInputFieldProps {
  className?: string;
  width: number;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
}

export const AppInputField = ({
  className,
  width,
  placeholder,
  value,
  type = "text",
  onChange,
}: IAppInputFieldProps) => {
  return (
    <div
      className={classNames(styles.inputGroup, className)}
      style={{ width: width }}
    >
      <input
        type={type}
        id="name"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
