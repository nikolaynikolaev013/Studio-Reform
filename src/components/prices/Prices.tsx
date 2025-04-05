import { untranslated } from "../common/infrastructure/utilities/untranslsated";
import styles from "./Prices.module.scss";
import { PricesTable } from "./components/PricesTable";
import { PageTitle } from "../common/PageTitle";
import { ITabData, Tabs } from "../common/Tabs/Tabs";

type cities = "sofia" | "varna";

export const Prices = () => {
  const sofiaStudioPrices = [
    {
      sectionKey: "",
      prices: [{ key: "Единична тренировка", value: "25лв" }],
    },

    {
      sectionKey: "Пакети за период от 5 седмици:",
      prices: [
        {
          key: "4 тренировки (23.50 лева на трениворка)",
          value: "94 лв",
        },
        {
          key: "8 тренировки (22 лева на трениворка)",
          value: "176 лв",
        },
        { key: "12 тренировки (20 лв за тренировка)", value: "240лв" },
      ],
    },

    {
      sectionKey: "Индивидуални посещения:",
      prices: [
        {
          key: "Индивидуално посещение",
          value: "60 лв",
        },
        {
          key: "Пакет 8 индивидуални посещения",
          value: "440 лв",
        },
        {
          key: "Пакет 12 инидивидуални посещения",
          value: "600 лв",
        },
        {
          key: "Еднократно посещение - дует",
          value: "100 лв",
        },
        {
          key: "Пакет 10 дует посещения",
          value: "850 лв",
        },
        {
          key: "Пакет 12 дует посещения",
          value: "960 лв",
        },
        {
          key: "Цялото студио (група)",
          value: "120 лв",
        },
      ],
    },
  ];

  const varnaStudioPrices = [
    {
      sectionKey: "",
      prices: [{ key: "Единична тренировка", value: "21лв" }],
    },

    {
      sectionKey: "Пакети за период от 5 седмици:",
      prices: [
        {
          key: "4 тренировки (20 лева на трениворка)",
          value: "80 лв",
        },
        {
          key: "8 тренировки (19 лева на трениворка)",
          value: "152 лв",
        },
        { key: "12 тренировки (18 лв за тренировка)", value: "216лв" },
      ],
    },

    {
      sectionKey: "Индивидуални трнировки:",
      prices: [
        {
          key: "Индивидуална тренировка",
          value: "60 лв",
        },
        {
          key: "Индивидуален дует",
          value: "80 лв",
        },
      ],
    },
  ];

  const tabs: ITabData<cities>[] = [
    {
      label: "София",
      key: "sofia",
      children: <PricesTable studioPrices={sofiaStudioPrices} />,
    },
    {
      label: "Варна",
      key: "varna",
      children: <PricesTable studioPrices={varnaStudioPrices} />,
    },
  ];

  return (
    <div className={styles.panel}>
      <div className={styles.prices}>
        <PageTitle text={untranslated("Нашите цени")} />

        <Tabs tabs={tabs} defaultSelectedValue={"sofia"} />
        <div className={styles.disclaimer}>
          <div>{untranslated("Треньорът е включен в цената.")}</div>
          <div>
            {untranslated(
              "Освобождаването на час е мининун 24 часа преди тренировката."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
