/**
 * @file
 * @date 2024-02-24
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useOpenSubMenus } from "@/components/navigation/context/subMenu";
import { Transition } from "@/components/transition";
import { subMenus } from "@/defaultData/navigationBar";
import classNames from "@/functions/classNames";
import React, { useState } from "react";
import AnalysisReport from "../../analysisReport";
import Distribution from "../../distribution";
import PlugInEditor from "../../plugInEditor";
import ProjectManager from "../../projectManager";
import QEditor from "../../qEditor";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /**
   * 选中的数据
   */
  const [selectData, setSelectData] = useState(subMenus[0]);

  /**
   * 是否可见
   */
  const open = useOpenSubMenus();

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const contentEl = () => {
    switch (selectData?.key) {
      case "QEditor":
        return <QEditor />;
      case "ProjectManager":
        return <ProjectManager />;
      case "AnalysisReport":
        return <AnalysisReport />;
      case "Distribution":
        return <Distribution />;
      case "PlugInEditor":
        return <PlugInEditor />;
      default:
        return <></>;
    }
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <Transition
      show={open}
      className={classNames(styles.navigation_desk__subMenusWrapper)}
      animationType="fade"
    >
      <div className={styles.navigation_desk__subMenusBody}>
        <div className={styles.navigation_desk__subMenusSlide}>
          {subMenus.map((item) => {
            const isActive = item.label === selectData?.label;

            return (
              <div
                className={classNames(styles.navigation_desk__subMenuItem, {
                  [styles.navigation_desk__subMenuItem__active]: isActive,
                })}
                onClick={() => {
                  setSelectData(item);
                }}
                key={item.key}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        <div className={styles.navigation_desk__subMenuItemContent}>
          {contentEl()}
        </div>
        <div className={styles.navigation_desk__subMenusBg} />
      </div>
    </Transition>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
