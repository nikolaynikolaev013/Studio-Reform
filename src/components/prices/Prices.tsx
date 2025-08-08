import { untranslated } from "../common/infrastructure/utilities/untranslsated";
import styles from "./Prices.module.scss";
import { PricesTable } from "./components/PricesTable";
import { PageTitle } from "../common/PageTitle";
import { ITabData, Tabs } from "../common/Tabs/Tabs";
import { Seo } from "../common/Seo";

type cities = "sofia" | "varna";

export const Prices = () => {
  const sofiaStudioPrices = [
    {
      sectionKey: "",
      prices: [{ key: "Единична тренировка", value: 25 }],
    },

    {
      sectionKey: "Пакети за период от 5 седмици:",
      prices: [
        {
          key: "4 тренировки (23.50 лв/12.01€ на трениворка)",
          value: 94,
        },
        {
          key: "8 тренировки (22 лв/11.24€ на трениворка)",
          value: 176,
        },
        { key: "12 тренировки (20 лв/10.22€ за тренировка)", value: 240 },
      ],
    },

    {
      sectionKey: "Индивидуални посещения:",
      prices: [
        {
          key: "Индивидуално посещение",
          value: 60,
        },
        {
          key: "Пакет 8 индивидуални посещения",
          value: 440,
        },
        {
          key: "Пакет 12 инидивидуални посещения",
          value: 600,
        },
        {
          key: "Еднократно посещение - дует",
          value: 100,
        },
        {
          key: "Пакет 10 дует посещения",
          value: 850,
        },
        {
          key: "Пакет 12 дует посещения",
          value: 960,
        },
        {
          key: "Цялото студио (група)",
          value: 120,
        },
      ],
    },
  ];

  const varnaStudioPrices = [
    {
      sectionKey: "",
      prices: [{ key: "Единична тренировка", value: 21 }],
    },

    {
      sectionKey: "Пакети за период от 5 седмици:",
      prices: [
        {
          key: "4 тренировки (20 лв/10.22€ на трениворка)",
          value: 80,
        },
        {
          key: "8 тренировки (19 лв/9.69€ на трениворка)",
          value: 152,
        },
        { key: "12 тренировки (18 лв/9.18€ за тренировка)", value: 216 },
      ],
    },

    {
      sectionKey: "Индивидуални трнировки:",
      prices: [
        {
          key: "Индивидуална тренировка",
          value: 60,
        },
        {
          key: "Индивидуален дует",
          value: 80,
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
      <Seo
        title={"Цени"}
        description={
          "Виж цените за пилатес тренировките в Studio Reform. Избери индивидуални или групови тренировки, или абонаментни планове, съобразени с твоите нужди."
        }
      />

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
