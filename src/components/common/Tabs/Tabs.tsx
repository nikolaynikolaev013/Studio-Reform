import { JSX, useEffect, useMemo, useState } from "react";
import styles from "./Tabs.module.scss";
import { classNames } from "primereact/utils";

export interface ITabData<T extends string> {
  label: string;
  key: T;
  children: JSX.Element;
}

interface ITabsProps<T extends string> {
  tabs: ITabData<T>[];
  defaultSelectedValue: T;
  buttonWidth?: number | string;
  onTabChange?: (selectedValue: T) => void;
}

export const Tabs = <T extends string>({
  tabs,
  defaultSelectedValue,
  buttonWidth,
  onTabChange,
}: ITabsProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<T>(defaultSelectedValue);

  const currentlySelectedTab = useMemo(
    () => tabs.find((tab) => tab.key === selectedValue),
    [selectedValue, tabs]
  );

  useEffect(() => {
    onTabChange?.(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    setSelectedValue(defaultSelectedValue);
  }, [defaultSelectedValue]);

  return (
    <div className={styles.tabs_container}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={classNames(styles.tabs_button, {
              [styles.tabs_button_active]: selectedValue === tab.key,
            })}
            style={{ width: buttonWidth }}
            onClick={() => setSelectedValue(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {currentlySelectedTab?.children}
    </div>
  );
};
