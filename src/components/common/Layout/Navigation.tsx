import { matchPath, useLocation, useNavigate } from "react-router-dom";
import {
  INavigationLink,
  navigationLinks,
} from "../infrastructure/navigation/navigationItems";
import styles from "./Navigation.module.scss";
import { classNames } from "primereact/utils";
import { TransparentPanel } from "../../transparentPanel/TransparentPanel";

interface INavigationProps {
  className?: string;
}

export const Navigation = ({ className }: INavigationProps) => {
  return (
    <div className={styles.nav}>
      <TransparentPanel className={classNames(styles.nav_panel, className)}>
        <nav>
          <ul>
            {navigationLinks.map((x: INavigationLink) => (
              <NavigationItem key={x.href} item={x} />
            ))}
          </ul>
        </nav>
      </TransparentPanel>
    </div>
  );
};

interface INavigationItemProps {
  item: INavigationLink;
}

const NavigationItem = ({ item }: INavigationItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentRoute = navigationLinks.find(
    (x) => x.href && matchPath(x.href, location.pathname)
  );

  const isActive = item?.href === currentRoute?.href;

  const onItemClick = () => {
    if (item.href) {
      navigate(item.href!);
    }
  };
  return (
    <li onClick={onItemClick}>
      <span className={classNames({ [styles.active]: isActive })}>
        {item.labelKey}
      </span>
    </li>
  );
};
