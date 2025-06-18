import { JSX } from "react";
import styles from "./Layout.module.scss";
import { classNames } from "primereact/utils";
import { TransparentPanel } from "../../transparentPanel/TransparentPanel";
import { Icon, IconType } from "../icons/Icon";
import { Navigation } from "./Navigation";
import { Link, useLocation } from "react-router-dom";
import {
  constructStudioHref,
  routePaths,
} from "../infrastructure/routes/routePaths";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useVisibilityObserver } from "../../../common/hooks/useVisibilityObserver";
// import { LanguageDropdown } from "./LanguageDropdown";

interface ILayoutProps {
  className?: string;
  children: JSX.Element;
}

export const Layout = ({ className, children }: ILayoutProps) => {
  const { isVisible: headerNotSticky, ref: headerStickyRef } =
    useVisibilityObserver();
  const location = useLocation();

  return (
    <div className={className}>
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
              {/* <LanguageDropdown
                className={styles.header_header_top_languages}
              /> */}
              <Link to={"/"} area-label="Go to Studio Reform Homepage">
                <Icon type={IconType.ReformPilatesLogo} />
              </Link>
              {/* TODO: Translate untranslated */}
              <div className={styles.header_header_top_addresses}>
                <ul>
                  <li>
                    <Link
                      to={constructStudioHref("sofia-center")}
                      area-label="See more about Sofia Center Studio"
                    >
                      📍 Студио <span>София Център</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={constructStudioHref("varna-center")}
                      area-label="See more about Varna Center Studio"
                    >
                      📍 Студио <span>Варна Център</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={constructStudioHref("varna-levski")}
                      area-label="See more about Varna Levski Studio"
                    >
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
      <div key={location.pathname}>{children}</div>

      <footer className={styles.footer}>
        <div className={styles.footer_left}>
          <Link to={"/"} area-label="Go to Studio Reform Homepage">
            <Icon type={IconType.ReformPilatesLogo} />
          </Link>
          <div className={styles.footer_left_socials}>
            <Link
              to={"https://facebook.com/reformerpilatesvarna"}
              area-label="Go to our Facebook page"
            >
              <Icon width={"3rem"} height={"3rem"} type={IconType.Facebook} />
            </Link>
            <Link
              to={
                "https://www.instagram.com/studio.reform.pilates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
              area-label="Go to our Instagram page"
            >
              <Icon width={"3rem"} height={"3rem"} type={IconType.Instagram} />
            </Link>
            <Link
              to={"mailto:office@studioreform.bg"}
              area-label="Send us an email"
            >
              <Icon width={"3rem"} height={"3rem"} type={IconType.MailIcon} />
            </Link>
          </div>
        </div>
        <div className={styles.footer_right}>
          <div>
            <Link to={routePaths.studios} area-label="Go to 'Our Studios' page">
              Нашите студиа
            </Link>
            <span>•</span>
            <Link to={routePaths.careers} area-label="Go to 'Careers' page">
              Кариери
            </Link>
            <span>•</span>
            <Link
              to={routePaths.privacyPolicy}
              area-label="Go to 'Privacy Policy' page"
            >
              Политика за поверителност
            </Link>
            <span>•</span>
            <Link
              to={routePaths.termsOfUse}
              area-label="Go to 'Terms of use' page"
            >
              Общи условия
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} Studio Reform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
