/**
 * @file
 * @date 2024-02-24
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button } from "@/components/btn";
import { Icon } from "@/components/icon";
import { Transition } from "@/components/transition";
import { subMenus } from "@/defaultData/navigationBar";
import classNames from "@/functions/classNames";
import React, { useState } from "react";
import AnalysisReport from "../../../analysisReport";
import Distribution from "../../../distribution";
import PlugInEditor from "../../../plugInEditor";
import ProjectManager from "../../../projectManager";
import QEditor from "../../../qEditor";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 打开状态
   */
  open: boolean;
  /**
   * 返回
   */
  back: () => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ open, back }) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /**
   * 选中的数据
   */
  const [selectedData, setSelectedData] = useState(subMenus[0]);
  /**
   * 是否开始过渡
   */
  const [transitionEnd, setTransitionEnd] = useState(true);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const contentEl = (key: (typeof selectedData)["key"]) => {
    switch (key) {
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
      animationType="inRight"
      className={classNames(styles.navigation_mobile__subNavMenus, {
        [styles.navigation_mobile__subNavMenus__abs]: !transitionEnd,
      })}
      handleTransitionStart={() => {
        setTransitionEnd(false);
      }}
      handleTransitionEnd={() => {
        setTransitionEnd(true);
      }}
    >
      <div className={styles.navigation_mobile__back} onClick={back}>
        <Icon type="open" className={styles.navigation_mobile__backIcon} />
        返回
      </div>
      <div className={styles.navigation_mobile__subMenusHeader}>产品</div>
      <ul>
        {subMenus.map((item, index) => {
          return (
            <li className={styles.navigation_mobile__subMenu} key={index}>
              <Button
                className={classNames(styles.navigation_mobile__subMenuBtn, {
                  [styles.navigation_mobile__subMenuBtn__active]:
                    selectedData.key === item.key,
                })}
                onClick={() => {
                  setSelectedData(item);
                }}
              >
                <span>{item.label}</span>
                <Icon
                  type="open"
                  className={styles.navigationLinkMobile_subItemIcon}
                />
              </Button>
              <Transition
                show={selectedData.key === item.key}
                animationType="taller"
                className={styles.navigationLinkMobile_subItemContent}
              >
                {contentEl(item.key)}
              </Transition>
            </li>
          );
        })}
      </ul>
    </Transition>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
