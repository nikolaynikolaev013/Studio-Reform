import styles from "./Badge.module.scss";

interface IBadgeProps {
  text: string;
}

export const Badge = ({ text }: IBadgeProps) => {
  return <div className={styles.badge}>{text}</div>;
};
