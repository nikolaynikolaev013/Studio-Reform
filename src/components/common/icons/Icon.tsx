import styles from "./Icon.module.scss";
import { JSX } from "react";
import { ReformPilatesLogo } from "./baseIcons/ReformPilatesLogo";
import { classNames } from "primereact/utils";
import { PilatesModles } from "./baseIcons/PilatesModels";
import { InstagramIcon } from "./baseIcons/InstagramIcon";
import { FacebookIcon } from "./baseIcons/FacebookIcon";
import { MailIcon } from "./baseIcons/MailIcon";
import { PhoneIcon } from "./baseIcons/PhoneIcon";
import { TeamIcon } from "./baseIcons/TeamIcon";
import { ClockIcon } from "./baseIcons/ClockIcon";
import { MapIcon } from "./baseIcons/MapIcon";
import { LocationIcon } from "./baseIcons/LocationIcon";

export enum IconType {
  ReformPilatesLogo = "ReformPilatesLogo",
  PilatesModels = "PilatesModels",
  Instagram = "Instagram",
  Facebook = "Facebook",
  MailIcon = "MailIcon",
  Phone = "Phone",
  Team = "Team",
  Clock = "Clock",
  Map = "Map",
  Locaton = "Locaton",
}

export interface IBaseIconProps {
  color?: string;
}

interface IIconProps {
  className?: string;
  type: IconType;
  height?: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
}

export const Icon = ({
  className,
  type,
  height,
  width,
  color,
  backgroundColor,
}: IIconProps) => {
  const baseIcons: { [key in IconType]: JSX.Element } = {
    [IconType.ReformPilatesLogo]: <ReformPilatesLogo />,
    [IconType.PilatesModels]: <PilatesModles />,
    [IconType.Instagram]: <InstagramIcon />,
    [IconType.Facebook]: <FacebookIcon />,
    [IconType.MailIcon]: <MailIcon />,
    [IconType.Phone]: <PhoneIcon />,
    [IconType.Team]: <TeamIcon />,
    [IconType.Clock]: <ClockIcon />,
    [IconType.Map]: <MapIcon />,
    [IconType.Locaton]: <LocationIcon />,
  };

  return (
    <div
      className={classNames(styles.root, className)}
      style={{ maxWidth: width, maxHeight: height }}
    >
      {baseIcons[type]}
    </div>
  );
};
