import { classNames } from "primereact/utils";
import styles from "./AppTextArea.module.scss";

interface IAppTextAreaProps {
  className?: string;
  width: number;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  rows?: number;
}

export const AppTextArea = ({
  className,
  width,
  placeholder,
  value,
  onChange,
  rows = 4,
}: IAppTextAreaProps) => {
  return (
    <div
      className={classNames(styles.inputGroup, className)}
      style={{ width: width }}
    >
      <textarea
        id="message"
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
