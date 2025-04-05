import styles from "./TestemonialCard.module.scss";

interface ITestemonialCardProps {
  text: string;
  names: string;
}

export const TestemonialCard = ({ text, names }: ITestemonialCardProps) => {
  return (
    <div className={styles.testemonial}>
      <h3>{text}</h3>
      <div className={styles.testemonial_user}>
        <div className={styles.testemonial_user_names}>- {names}</div>
      </div>
    </div>
  );
};
