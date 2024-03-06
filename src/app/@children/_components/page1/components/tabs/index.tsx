/**
 * @file
 * @date 2024-03-05
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-05
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button } from "@/components/btn";
import classNames from "@/functions/classNames";
import React from "react";
import styles from "./style.module.scss";
import { useChangeIndex } from "../../context/changeIndex";
import { useIndex } from "../../context/activeIndex";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
  const changeIndex = useChangeIndex();

  const index = useIndex();

  return (
    <div className={styles.page1_tabs}>
      <div
        className={classNames(styles.page1_tabsBar, {
          [styles.page1_tabsBar__active]: index === 1,
        })}
      />
      <Button
        className={classNames(styles.page1_tabTitle1, {
          [styles.page1_tabTitle__active]: index === 0,
        })}
        onClick={() => {
          changeIndex(0);
        }}
      >
        工具链
      </Button>
      <Button
        className={classNames(styles.page1_tabTitle2, {
          [styles.page1_tabTitle__active]: index === 1,
        })}
        onClick={() => {
          changeIndex(1);
        }}
      >
        咨询培训
      </Button>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
