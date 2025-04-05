import { constructStudioHref, routePaths } from "../routes/routePaths";

export interface INavigationLink {
  labelKey: string;
  href?: string;
  children?: INavigationLink[];
}

export const navigationLinks: INavigationLink[] = [
  // TODO: Add the correct label keys
  {
    labelKey: "Начало",
    href: routePaths.home,
  },
  {
    labelKey: "Реформър",
    href: routePaths.reformer,
  },
  {
    labelKey: "Цени",
    href: routePaths.prices,
  },
  {
    labelKey: "Контакти",
    href: routePaths.contacts,
  },
  {
    labelKey: "Студиа",
    href: routePaths.studios,
    children: [
      {
        labelKey: "Студио Варна Левски",
        href: constructStudioHref("varna-levski"),
      },
      {
        labelKey: "Студио Варна Център",
        href: constructStudioHref("varna-center"),
      },
      {
        labelKey: "Студио София Център",
        href: constructStudioHref("sofia-center"),
      },
    ],
  },
  {
    labelKey: "Кариери",
    href: routePaths.careers,
  },
];
