import { useNavigate, useParams } from "react-router-dom";
import { untranslated } from "../common/infrastructure/utilities/untranslsated";
import { PageTitle } from "../common/PageTitle";
import { ITabData, Tabs } from "../common/Tabs/Tabs";
import { StudioProfile } from "./components/StudioProfile";
import styles from "./Studios.module.scss";
import {
  studioSofiaCenter,
  StudiosType,
  studioVarnaCenter,
  studioVarnaLevski,
  studioVarnaTroshevo,
} from "./utilities/studiosUtility";
import { constructStudioHref } from "../common/infrastructure/routes/routePaths";
import { useMemo } from "react";

export const Studios = () => {
  const tabs: ITabData<StudiosType>[] = [
    {
      label: "София - център",
      key: "sofia-center",
      children: (
        <StudioProfile
          studio={studioSofiaCenter}
          imageClassName={styles.sofia}
        />
      ),
    },
    {
      label: "Варна - център",
      key: "varna-center",
      children: (
        <StudioProfile
          studio={studioVarnaCenter}
          imageClassName={styles.varna_center}
        />
      ),
    },
    {
      label: "Варна - Трошево",
      key: "varna-troshevo",
      children: (
        <StudioProfile
          studio={studioVarnaTroshevo}
          imageClassName={styles.varna_troshevo}
        />
      ),
    },
    {
      label: "Варна - Левски",
      key: "varna-levski",
      children: (
        <StudioProfile
          studio={studioVarnaLevski}
          imageClassName={styles.varna_levski}
        />
      ),
    },
  ];

  const navigate = useNavigate();

  const onTabChange = (selectedValue: StudiosType) => {
    navigate(constructStudioHref(selectedValue));
  };

  const { studio } = useParams();

  const defaultSelectedValue = useMemo(
    () =>
      (studio as StudiosType) && studio !== ":studio"
        ? (studio as StudiosType)
        : "sofia-center",
    []
  );

  return (
    <div className={styles.studios}>
      <PageTitle text={untranslated("Нашите студиа")} />

      <Tabs
        tabs={tabs}
        defaultSelectedValue={defaultSelectedValue}
        buttonWidth={"auto"}
        onTabChange={onTabChange}
      />
    </div>
  );
};
