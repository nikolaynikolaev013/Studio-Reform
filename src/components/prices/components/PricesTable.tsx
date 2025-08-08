import styles from "./PricesTable.module.scss";

interface IPricesTableProps {
  studioPrices: StudioPricesData[];
}

export interface StudioPricesData {
  sectionKey: string;
  prices: IPricesValues[];
}

export interface IPricesValues {
  key: string;
  value: number;
}

export const PricesTable = ({ studioPrices }: IPricesTableProps) => {
  return (
    <div className={styles.prices_container}>
      {studioPrices.map((s, i) => (
        <div key={i} className={styles.prices_section}>
          <span className={styles.prices_section_title}>{s.sectionKey}</span>
          {s.prices.map((p) => (
            <div key={p.key} className={styles.prices_table_row}>
              <div className={styles.prices_table_key}>{p.key}</div>
              <div className={styles.prices_table_value}>
                {p.value} лв. / {(Number(p.value) / 1.95583).toFixed(2)} €
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
