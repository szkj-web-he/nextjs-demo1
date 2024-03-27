/**
 * @file
 * @date 2024-03-26
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from "react";
import Item from "../item";
import classNames from "@/functions/classNames";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = () => {
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
      index={6}
      icon={
        <div
          className={classNames(styles.page2_collectIconContainer, {
            [styles.page2_collectIconContainer__active]: show,
          })}
        >
          <div className={styles.page2_collectIconCircle}>
            <div className={styles.page2_collectIconRect}>
              <div className={styles.page2_collectIconRectCircle} />
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
      全球首创微件式数据收集系统
    </Item>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
