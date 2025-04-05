import { StudiosType } from "../../../studios/utilities/studiosUtility";

export const routePaths = {
  home: "/",
  reformer: "/reformer",
  prices: "/prices",
  contacts: "/contact-us",
  studios: "/studios/:studio?",
  careers: "/careers",
  privacyPolicy: "/privacy-policy",
  termsOfUse: "/terms-of-use",
};

export const constructStudioHref = (studio: StudiosType) => {
  return routePaths.studios.replace(":studio", studio);
};
