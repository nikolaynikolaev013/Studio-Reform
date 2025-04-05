import styles from "./PageTitle.module.scss";

interface IPageTitleProps {
  text: string;
}
export const PageTitle = ({ text }: IPageTitleProps) => {
  return <h2 className={styles.title}>{text}</h2>;
};
