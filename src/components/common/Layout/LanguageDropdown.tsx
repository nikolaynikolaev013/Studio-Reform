import { classNames } from "primereact/utils";
import styles from "./LanguageDropdown.module.scss";
import { useEffect, useRef, useState } from "react";
import { Icon, IconType } from "../icons/Icon";
import { untranslated } from "../infrastructure/utilities/untranslsated";

interface ILanguageConfig {
  languagekey: string;
  flagIcon: IconType;
}

interface ILanguageDropdownProps {
  className?: string;
}

export const LanguageDropdown = ({ className }: ILanguageDropdownProps) => {
  const languages: ILanguageConfig[] = [
    {
      languagekey: "Български",
      flagIcon: IconType.BulgariaFlag,
    },
    // {
    //   languagekey: "English",
    //   flagIcon: IconType.UkFlag,
    // },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={classNames(styles.lang_dropdown, className)}
      onClick={() => setIsVisible(!isVisible)}
      ref={ref}
    >
      <button className={styles.lang_dropdown_btn}>
        <Icon type={selectedLanguage.flagIcon} width={"15px"} />
        {untranslated(selectedLanguage.languagekey)}
        <div
          className={classNames(styles.lang_dropdown_btn_arrow, {
            [styles.lang_dropdown_btn_arrow_show]: isVisible,
          })}
        ></div>
      </button>

      <div
        className={classNames(styles.lang_dropdown_panel, {
          [styles.lang_dropdown_panel_show]: isVisible,
        })}
      >
        {languages.map((x) => {
          return (
            <div
              onClick={() => setSelectedLanguage(x)}
              className={styles.lang_dropdown_panel_option}
              key={x.languagekey}
            >
              <Icon type={x.flagIcon} width={"15px"} />
              {untranslated(x.languagekey)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
