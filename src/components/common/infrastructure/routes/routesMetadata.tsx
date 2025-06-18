import { JSX } from "react";
import { routePaths } from "./routePaths";
import { Home } from "../../../home/Home";
import { Prices } from "../../../prices/Prices";
import { ContactUs } from "../../../contactUs/ContactUs";
import { Studios } from "../../../studios/Studios";
import { Reformer } from "../../../reformer/Reformer";
import { Careers } from "../../../careers/Careers";
import { PrivacyPolicy } from "../../../policies/PrivacyPolicy";
import { TermsOfUse } from "../../../policies/TermsOfUse";

export interface IRoute {
  name: string;
  path: string;
  element: JSX.Element;
}

export const routesMetadata: IRoute[] = [
  {
    name: "home",
    path: routePaths.home,
    element: <Home />,
  },
  {
    name: "reformer",
    path: routePaths.reformer,
    element: <Reformer />,
  },
  {
    name: "prices",
    path: routePaths.prices,
    element: <Prices />,
  },
  {
    name: "contact-us",
    path: routePaths.contacts,
    element: <ContactUs />,
  },
  {
    name: "studio",
    path: routePaths.studios,
    element: <Studios />,
  },
  {
    name: "Стани част от нашият екип",
    path: routePaths.careers,
    element: <Careers />,
  },
  {
    name: "Политика за поверителност",
    path: routePaths.privacyPolicy,
    element: <PrivacyPolicy />,
  },
  {
    name: "Общи условия за ползване",
    path: routePaths.termsOfUse,
    element: <TermsOfUse />,
  },
];
