import { untranslated } from "../../common/infrastructure/utilities/untranslsated";
import styles from "./InfoCard.module.scss";

export const InfoCard = () => {
  return (
    <div className={styles.info_card}>
      <h4>{untranslated("Текущи отворени позиции")}</h4>
      <p>
        {untranslated(
          "В момента търсим талантливи хора за нашия разрастващ се екип в различни отдели. Независимо дали сте опитен професионалист или сега започвате кариерата си, имаме възможности за вас."
        )}
      </p>
    </div>
  );
};
