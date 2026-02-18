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
      prices: [{ key: "Единична тренировка", value: 14 }],
    },

    {
      sectionKey: "Пакети за период от 5 седмици:",
      prices: [
        {
          key: "4 тренировки (12.50€/24.44лв на трениворка)",
          value: 50,
        },
        {
          key: "8 тренировки (12.25€/23.95лв на трениворка)",
          value: 98,
        },
        { key: "12 тренировки (11.25€/22лв за тренировка)", value: 135 },
      ],
    },

    {
      sectionKey: "Индивидуални посещения:",
      prices: [
        {
          key: "Индивидуално посещение",
          value: 30,
        },
        {
          key: "Пакет 8 индивидуални посещения",
          value: 225,
        },
        {
          key: "Еднократно посещение - дует",
          value: 52,
        },
        {
          key: "Пакет 10 дует посещения",
          value: 435,
        },
        {
          key: "Цялото студио (група)",
          value: 67,
        },
      ],
    },
  ];

  const varnaStudioPrices = [
    {
      sectionKey: "",
      prices: [{ key: "Единична тренировка", value: 12 }],
    },

    {
      sectionKey: "Пакети за период от 5 седмици:",
      prices: [
        {
          key: "4 тренировки (11.25€/22лв на трениворка)",
          value: 45,
        },
        {
          key: "8 тренировки (10.62€/20.78лв на трениворка)",
          value: 85,
        },
        { key: "12 тренировки (10€/19.56 лв за тренировка)", value: 120 },
      ],
    },

    {
      sectionKey: "Индивидуални трнировки:",
      prices: [
        {
          key: "Индивидуална тренировка",
          value: 35,
        },
        // {
        //   key: "Индивидуален дует",
        //   value: 80,
        // },
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
