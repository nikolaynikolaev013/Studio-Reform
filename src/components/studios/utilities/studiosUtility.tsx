import { IStudioViewModel } from "../components/StudioProfile";

export type StudiosType =
  | "varna-center"
  | "varna-levski"
  | "sofia-center"
  | "varna-troshevo"
  | "varna-BMKC";

export const studioSofiaCenter: IStudioViewModel = {
  studioName: "София - център",
  workingHours: "Пон-Пет; 8:00-20:30",
  phoneNumbers: [
    {
      phone: "+359 887 414 101",
      phoneLink: "tel:00359887414101",
    },
  ],
  address: "ул. 'Георг Вашингтон' 29, София",
  googleMapsLink: "https://maps.app.goo.gl/76sjF14ttUPuk6CY6",
  lat: 42.7011482,
  lng: 23.3214208,
  link: "https://sofia.studioreform.bg/appointment?selectedStudio=23",
  metaDescription:
    "Реформър пилатес студио в центъра на София – модерно оборудване, уютна обстановка и сертифицирани треньори.",
};

export const studioVarnaLevski: IStudioViewModel = {
  studioName: "Варна - Левски",
  workingHours: "Пон-Пет; 8:00-20:00",
  phoneNumbers: [
    {
      phone: "+359 889 953 740",
      phoneLink: "tel:00359889953740",
    },
  ],
  address: "Детски център 'Мама и аз', етаж 1, Варна",
  //TODO: Add the correct link
  googleMapsLink: "https://maps.app.goo.gl/whkdPmhyXQ2G5u5N6",
  lat: 43.2205151,
  lng: 27.9334835,
  link: "https://varna.studioreform.bg/appointment?selectedStudio=4",
  metaDescription:
    "Пилатес студио Studio Reform в квартал Левски, Варна. Тренировки, съобразени с твоето ниво и цели. Запиши се още днес!",
};

export const studioVarnaCenter: IStudioViewModel = {
  studioName: "Варна - Център",
  workingHours: "Пон-Пет; 8:00-20:00; Съб: 9:00-18:00",
  phoneNumbers: [
    {
      phone: "+359 889 953 740",
      phoneLink: "tel:00359889953740",
    },
  ],
  address: "ул. 'Александър Дякович' 45В, етаж 2, Варна",
  // TODO: Add the correct link
  googleMapsLink: "https://maps.app.goo.gl/b9BuCJ5NQX6Ge5NP6",
  lat: 43.2029828,
  lng: 27.9033711,
  link: "https://varna.studioreform.bg/appointment?selectedStudio=22",
  metaDescription:
    "Studio Reform Варна Център – първокласно пилатес студио с фокус върху индивидуалния подход и професионалната грижа.",
};

export const studioVarnaTroshevo: IStudioViewModel = {
  studioName: "Варна - Трошево",
  workingHours: "Пон-Пет; 8:00-20:00; Съб: 9:00-18:00",
  phoneNumbers: [
    {
      phone: "+359 889 953 740",
      phoneLink: "tel:00359889953740",
    },
  ],
  address: "Варна, ул.'Младежка' 141, ет.2",
  // TODO: Add the correct link
  googleMapsLink: "https://maps.app.goo.gl/xGT34GZkxszwuc6H9",
  lat: 43.226035,
  lng: 27.87923,
  link: "https://varna.studioreform.bg/appointment?selectedStudio=16",
  metaDescription:
    "Studio Reform Варна Трошево – пилатес студио от висок клас, със силен акцент върху персонализирания подход и професионалното внимание към клиента.",
};

export const studioVarnaPlanetarium: IStudioViewModel = {
  studioName: "Варна - БМКЦ",
  workingHours: "Пон-Пет; 8:00-20:00; Съб: 9:00-18:00",
  phoneNumbers: [
    {
      phone: "+359 889 953 740",
      phoneLink: "tel:00359889953740",
    },
  ],
  address:
    "Български Морски Квалификационен Център (вход от към Планетариума), Варна",
  // TODO: Add the correct link
  googleMapsLink: "https://maps.app.goo.gl/L4bJxfsxctFQM1n29",
  lat: 43.2118312,
  lng: 27.9311762,
  link: "https://varna.studioreform.bg/appointment?selectedStudio=21",
  metaDescription:
    "Studio Reform Варна БКМЦ – реформър пилатес студио до Планетариума с индивидуален подход и сертифицирани инструктори.",
};
