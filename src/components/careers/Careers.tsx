import { untranslated } from "../common/infrastructure/utilities/untranslsated";
import { PageTitle } from "../common/PageTitle";
import styles from "./Careers.module.scss";
import { Badge } from "./components/Badge";
import { InfoCard } from "./components/InfoCard";

export const Careers = () => {
  const values = [
    untranslated("Иновация"),
    untranslated("Сътрудничество"),
    untranslated("Интегритет"),
    untranslated("Разнообразие"),
    untranslated("Превъзходство"),
  ];
  return (
    <div className={styles.careers_wrapper}>
      <PageTitle text={untranslated("Станете част от нашия екип")} />

      <div className={styles.careers}>
        <h3>{untranslated("Защо да работите с нас?")}</h3>
        <p>
          {untranslated(
            "Ние сме динамичен екип, страстно отдаден на иновациите и създаването на значими решения. Присъединете се към нашата мисия да правим разлика."
          )}
        </p>
        <ul>
          <li>Конкурентно заплащане и пакет от придобивки</li>
          <li>
            Гъвкави условия на работа и възможности за работа от разстояние
          </li>
          <li>Възможности за професионално развитие</li>
          <li>Сътрудничество и приобщаваща работна среда</li>
          <li>Фокус върху баланса между работа и личен живот</li>
        </ul>

        <h4>Нашите ценности</h4>
        <div className={styles.careers_values}>
          {values.map((x) => (
            <Badge key={x} text={x} />
          ))}
        </div>
        <InfoCard />

        <p>
          За да кандидатствате за позиция, моля да ни изпратите Вашето CV на
          имейл <b>office@studioreform.bg</b> и ще се свържем с Вас.
        </p>
      </div>
    </div>
  );
};
