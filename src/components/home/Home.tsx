import { useNavigate } from "react-router-dom";
import { AppButton } from "../common/buttons/AppButton";
import { Icon, IconType } from "../common/icons/Icon";
import { untranslated } from "../common/infrastructure/utilities/untranslsated";
import { Card } from "./components/Card";
import styles from "./Home.module.scss";
import { routePaths } from "../common/infrastructure/routes/routePaths";
import { TestemonialCard } from "./components/TestemonialCard";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {/* <div>Hero comes here</div> */}
      <div className={styles.pilates_info}>
        <h1>
          {untranslated(
            "Какво е Пилатес Реформър и защо е по-ефективен от класическия пилатес?"
          )}
        </h1>

        <div className={styles.pilates_info_bottom}>
          <div className={styles.pilates_info_bottom_left}>
            <div className={styles.pilates_info_bottom_left_image}></div>
          </div>
          <div className={styles.pilates_info_bottom_right}>
            <div className={styles.pilates_info_bottom_right_text}>
              Пилатес Реформър е съвременна и иновативна форма на пилатес, при
              която се използва специален уред – реформър машина. Тази машина
              съчетава платформа, подвижна карета, пружини и ленти за
              съпротивление, които позволяват упражненията да бъдат
              по-интензивни, по-прецизни и по-ефективни.
            </div>

            <AppButton
              text={untranslated(untranslated("ПРОЧЕТИ ОЩЕ"))}
              onClick={() => navigate(routePaths.reformer)}
              maxWidth={300}
            />
          </div>
        </div>

        <div className={styles.pilates_reformer}>
          <h2>
            {untranslated(
              "С какво Пилатес Реформър е по-добър от класическия пилатес?"
            )}
          </h2>
          <div className={styles.pilates_reformer_cards}>
            <Card
              firstText={untranslated(
                "По-бързи резултати – благодарение на съпротивлението от пружините, тялото работи по-активно и изгаря повече калории."
              )}
              secondText={untranslated(
                "Дълбока мускулна активация – достига се до стабилизиращи мускули, които трудно се активират с упражнения на пода."
              )}
            />
            <Card
              firstText={untranslated(
                "Облекчава напрежение в ставите – реформърът позволява плавни, контролирани движения, които щадят коленете, гърба и врата."
              )}
              secondText={untranslated(
                "Персонализирани натоварвания – всяко движение може да бъде адаптирано според нивото на трениращия."
              )}
            />
            <Card
              firstText={untranslated(
                "Подходящ и за възстановяване – често се използва от физиотерапевти при рехабилитация и след травми."
              )}
              secondText={
                <Icon
                  className={styles.pilates_reformer_cards_models}
                  type={IconType.PilatesModels}
                />
              }
            />
          </div>
        </div>

        <div className={styles.testemonials}>
          <h2>{untranslated("Истински истории, реални резултати")}</h2>
          <div className={styles.testemonials_cards}>
            <TestemonialCard
              text="Тренировките тук преобразиха тялото ми и подобриха стойката ми. Професионализмът на инструкторите е впечатляващ!"
              names={"Николай Николаев"}
            />
            <TestemonialCard
              text="След само няколко седмици усещам значително подобрение в силата и гъвкавостта си. Атмосферата е изключително приятна и мотивираща."
              names="Светослав Стойчев"
            />
            <TestemonialCard
              text="Най-доброто пилатес студио, което съм посещавала! Индивидуалният подход и вниманието към детайла правят всяка тренировка удоволствие."
              names="Габриела Илиева"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
