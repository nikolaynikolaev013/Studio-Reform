import styles from "./Card.module.scss";

interface ICardProps {
  title?: string;
  text: string;
}

export const Card = ({ title, text }: ICardProps) => {
  return (
    <div className={styles.card}>
      {title && <h5 className={styles.card_title}>{title}</h5>}

      {title && <hr />}

      <div className={styles.card_content}>
        <span>{text}</span>
      </div>
    </div>
  );
};
