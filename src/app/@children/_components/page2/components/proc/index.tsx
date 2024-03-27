/**
 * @file 全球首创数据收集任务追踪及协同系统
 * @date 2024-03-26
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import classNames from "@/functions/classNames";
import React, { useState } from "react";
import Item from "../item";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [show, setShow] = useState(false);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <Item
      index={3}
      icon={
        <div
          className={classNames(styles.page2_procIconContainer, {
            [styles.page2_procIconContainer__active]: show,
          })}
        >
          <div className={styles.page2_procIconPoint1Container}>
            <div className={styles.page2_procIconPoint1} />
          </div>
          <div className={styles.page2_procIconPoint2Container}>
            <div className={styles.page2_procIconPoint2}>
              <div className={styles.page2_procIconCircle} />
            </div>
          </div>
        </div>
      }
      handleEnter={() => {
        setShow(true);
      }}
      handleLeave={() => {
        setShow(false);
      }}
    >
      全球首创标准化专业数字化表单编辑器
    </Item>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
