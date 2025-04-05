import { Link } from "react-router-dom";
import styles from "./StudioProfile.module.scss";
import { Icon, IconType } from "../../common/icons/Icon";
import { MapCard } from "../../common/MapCard";

export interface IStudioViewModel {
  studioName: string;
  workingHours: string;
  phoneNumbers: IStudioPhoneViewModel[];
  address: string;
  googleMapsLink: string;
  lat: number;
  lng: number;
}

interface IStudioPhoneViewModel {
  phone: string;
  phoneLink: string;
}

interface IStudioProfileProps {
  studio: IStudioViewModel;
}

export const StudioProfile = ({ studio }: IStudioProfileProps) => {
  return (
    <div className={styles.studio}>
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
            >
              <Icon type={IconType.Map} width={"20px"} /> Отвори в Google Maps
            </Link>
          </div>
        </div>
        <div className={styles.studio_right}></div>
      </div>
      <div className={styles.studio_footer_container}>
        <div className={styles.studio_footer}>
          <MapCard pins={[{ lat: studio.lat, lng: studio.lng }]} />
        </div>
      </div>
    </div>
  );
};
