import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import {
  INavigationLink,
  navigationLinks,
} from "../infrastructure/navigation/navigationItems";
import styles from "./Navigation.module.scss";
import { classNames } from "primereact/utils";
import { TransparentPanel } from "../../transparentPanel/TransparentPanel";
import { LanguageDropdown } from "./LanguageDropdown";
import { Icon, IconType } from "../icons/Icon";
import { useState } from "react";
import { Sidebar } from "primereact/Sidebar";
import { constructStudioHref } from "../infrastructure/routes/routePaths";

interface INavigationProps {
  className?: string;
}

export const Navigation = ({ className }: INavigationProps) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
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

      <div className={styles.nav_mobile}>
        <TransparentPanel
          className={classNames(styles.nav_mobile_panel, className)}
        >
          <>
            <LanguageDropdown className={styles.nav_mobile_language_dropdown} />
            <div
              onClick={() => {
                setIsSideMenuOpen(!isSideMenuOpen);
              }}
            >
              <Icon
                type={IconType.BurgerMenu}
                width={"30px"}
                className={styles.nav_mobile_burger}
              />
            </div>
          </>
        </TransparentPanel>
        <Sidebar
          visible={isSideMenuOpen}
          onHide={() => setIsSideMenuOpen(false)}
          position="right"
          className={styles.sidebar}
        >
          <div className={styles.sidebar_addresses}>
            <ul>
              <li>
                <Link
                  to={constructStudioHref("sofia-center")}
                  onClick={() => setIsSideMenuOpen(false)}
                  area-label="See more about Sofia Center Studio"
                >
                  📍 Студио <span>София Център</span>
                </Link>
              </li>
              <li>
                <Link
                  to={constructStudioHref("varna-center")}
                  onClick={() => setIsSideMenuOpen(false)}
                  area-label="See more about Varna Center Studio"
                >
                  📍 Студио <span>Варна Център</span>
                </Link>
              </li>
              <li>
                <Link
                  to={constructStudioHref("varna-levski")}
                  onClick={() => setIsSideMenuOpen(false)}
                  area-label="See more about Varna Levski Studio"
                >
                  📍 Студио <span>Варна Левски</span>
                </Link>
              </li>
            </ul>
          </div>
          <ul className={styles.sidebar_list}>
            {navigationLinks.map((x: INavigationLink) => (
              <NavigationItem
                key={x.href}
                item={x}
                onClick={() => setIsSideMenuOpen(false)}
              />
            ))}
          </ul>
        </Sidebar>
      </div>
    </>
  );
};

interface INavigationItemProps {
  item: INavigationLink;
  onClick?: () => void;
}

const NavigationItem = ({ item, onClick }: INavigationItemProps) => {
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

    onClick?.();
  };
  return (
    <li onClick={onItemClick}>
      <span className={classNames({ [styles.active]: isActive })}>
        {item.labelKey}
      </span>
    </li>
  );
};
