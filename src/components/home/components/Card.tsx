import { JSX } from "react";
import { untranslated } from "../../common/infrastructure/utilities/untranslsated";
import styles from "./Card.module.scss";

interface ICardProps {
  image?: string;
  firstText: string;
  secondText: string | JSX.Element;
}

export const Card = ({ image, firstText, secondText }: ICardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}></div>
      <div className={styles.card_text}>
        <span>{firstText}</span>
        <hr />
        <span>{secondText}</span>
      </div>
    </div>
  );
};
