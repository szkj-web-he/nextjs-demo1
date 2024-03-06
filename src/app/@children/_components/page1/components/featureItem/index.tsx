/**
 * @file
 * @date 2024-03-06
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-06
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import classNames from "@/functions/classNames";
import React from "react";
import { useIndex } from "../../context/activeIndex";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 内容
   */
  children: React.ReactNode;
  /**
   * 自己是第几个
   */
  mySelfIndex: number;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ children, mySelfIndex }) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const index = useIndex();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  return (
    <div
      className={classNames(styles.page1_slidingItem, {
        [styles.page1_slidingItem__active]: index === mySelfIndex,
      })}
    >
      {children}
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
