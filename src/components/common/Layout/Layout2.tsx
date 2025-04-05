import { JSX, useEffect } from "react";
import styles from "./Layout2.module.scss";
import { classNames } from "primereact/utils";
import { TransparentPanel } from "../../transparentPanel/TransparentPanel";
import { Icon, IconType } from "../icons/Icon";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import {
  constructStudioHref,
  routePaths,
} from "../infrastructure/routes/routePaths";
import "primereact/resources/themes/lara-light-blue/theme.css"; // or another theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useVisibilityObserver } from "../../../common/hooks/useVisibilityObserver";

interface ILayoutProps {
  children: JSX.Element;
}

export const Layout2 = ({ children }: ILayoutProps) => {
  const { isVisible: headerNotSticky, ref: headerStickyRef } =
    useVisibilityObserver();

  return (
    <div>
      <div className={styles.header}>
        <div>
          <div className={classNames(styles.sphere, styles.sphere1)}></div>
          <div className={classNames(styles.sphere, styles.sphere2)}></div>
          <div className={classNames(styles.sphere, styles.sphere3)}></div>
          <div className={classNames(styles.sphere, styles.sphere4)}></div>
        </div>
        <header className={styles.header_header}>
          <TransparentPanel className={styles.root_header}>
            <div className={styles.header_header_top}>
              <Link to={"/"}>
                <Icon type={IconType.ReformPilatesLogo} />
              </Link>
              {/* TODO: Translate untranslated */}
              <div className={styles.header_header_top_addresses}>
                <ul>
                  <li>
                    <Link to={constructStudioHref("sofia-center")}>
                      📍 Студио <span>София Център</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={constructStudioHref("varna-center")}>
                      📍 Студио <span>Варна Център</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={constructStudioHref("varna-levski")}>
                      📍 Студио <span>Варна Левски</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </TransparentPanel>
        </header>
      </div>

      <div ref={headerStickyRef} />
      <Navigation
        className={classNames({
          [styles.header_navigation_sticky]: !headerNotSticky,
        })}
      />
      <div>{children}</div>

      <footer className={styles.footer}>
        <div className={styles.footer_left}>
          <Link to={"/"}>
            <Icon type={IconType.ReformPilatesLogo} />
          </Link>
          <div className={styles.footer_left_socials}>
            <Link to={"https://www.facebook.com/groups/1732183253860779"}>
              <Icon width={"3rem"} height={"3rem"} type={IconType.Facebook} />
            </Link>
            <Link
              to={
                "https://www.instagram.com/studio.reform.pilates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
            >
              <Icon width={"3rem"} height={"3rem"} type={IconType.Instagram} />
            </Link>
            <Link to={"mailto:office@studioreform.bg"}>
              <Icon width={"3rem"} height={"3rem"} type={IconType.MailIcon} />
            </Link>
          </div>
        </div>
        <div className={styles.footer_right}>
          <div>
            <Link to={routePaths.studios}>Нашите студиа</Link>
            <span>•</span>
            <Link to={routePaths.careers}>Кариери</Link>
            <span>•</span>
            <Link to={routePaths.privacyPolicy}>Политика за поверителност</Link>
            <span>•</span>
            <Link to={routePaths.termsOfUse}>Общи условия</Link>
          </div>
          <p>
            © {new Date().getFullYear()} Studio Reform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
