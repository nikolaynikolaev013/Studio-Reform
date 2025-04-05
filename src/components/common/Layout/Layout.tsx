import { JSX } from "react";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.root_header}>
        <div className={styles.root_header_top}></div>
        <div className={styles.root_header_nav}>
          <nav>
            <ul>
              <li className={styles.active}>Начало</li>
              <li>Тренировки</li>
              <li>Цени</li>
              <li>Контакти</li>
              <li>Стани част от екипа</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.root_content}>{children}</div>
    </div>
  );
};
