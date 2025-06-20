import { Link, useNavigate } from "react-router-dom";
import styles from "./StudioProfile.module.scss";
import { Icon, IconType } from "../../common/icons/Icon";
import { MapCard } from "../../common/MapCard";
import { Seo } from "../../common/Seo";
import { classNames } from "primereact/utils";
import { AppButton } from "../../common/buttons/AppButton";

export interface IStudioViewModel {
  studioName: string;
  workingHours: string;
  phoneNumbers: IStudioPhoneViewModel[];
  address: string;
  googleMapsLink: string;
  metaDescription: string;
  lat: number;
  lng: number;
  link?: string;
}

interface IStudioPhoneViewModel {
  phone: string;
  phoneLink: string;
}

interface IStudioProfileProps {
  studio: IStudioViewModel;
  imageClassName?: string;
}

export const StudioProfile = ({
  studio,
  imageClassName,
}: IStudioProfileProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.studio}>
      <Seo title={"Нашите студиа"} description={studio.metaDescription} />

      <div className={styles.studio_wrapper}>
        <div className={styles.studio_left}>
          <h2>{studio.studioName}</h2>
          <div className={styles.studio_left_links}>
            <div className={styles.studio_left_links_text}>
              <Icon type={IconType.Clock} width={"20px"} /> Работно време:{" "}
              {studio.workingHours}
            </div>

            {studio.phoneNumbers.map((phone) => (
              <Link
                key={phone.phone}
                to={phone.phoneLink}
                className={styles.studio_left_links_link}
                area-label={`Call ${studio.studioName} at ${phone.phone}`}
              >
                <Icon type={IconType.Phone} width={"20px"} /> {phone.phone}
              </Link>
            ))}

            <div className={styles.studio_left_links_text}>
              <Icon type={IconType.Locaton} width={"20px"} /> {studio.address}
            </div>

            <Link
              to={studio.googleMapsLink}
              className={styles.studio_left_links_link}
              area-label={`Open ${studio.studioName} in Google Maps`}
            >
              <Icon type={IconType.Map} width={"20px"} /> Отвори в Google Maps
            </Link>
            {!!studio.link && (
              <AppButton
                className={styles.studio_left_links_button}
                text={"Запази час онлайн"}
                onClick={() =>
                  window.open(studio.link, "_blank", "noopener,noreferrer")
                }
              />
            )}
          </div>
        </div>
        <div className={classNames(styles.studio_image, imageClassName)}></div>
      </div>
      <div className={styles.studio_footer_container}>
        <div className={styles.studio_footer}>
          <MapCard pins={[{ lat: studio.lat, lng: studio.lng }]} />
        </div>
      </div>
    </div>
  );
};
