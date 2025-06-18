import { JSX } from "react";
import styles from "./Card.module.scss";
import { classNames } from "primereact/utils";

interface ICardProps {
  image?: string;
  firstText: string;
  secondText: string | JSX.Element;
  imageClass: string;
}

export const Card = ({ firstText, secondText, imageClass }: ICardProps) => {
  return (
    <div className={styles.card}>
      <div className={classNames(styles.card_image, imageClass)}></div>
      <div className={styles.card_text}>
        <span>{firstText}</span>
        <hr />
        <span>{secondText}</span>
      </div>
    </div>
  );
};
