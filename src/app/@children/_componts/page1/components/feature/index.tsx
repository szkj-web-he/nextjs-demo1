/**
 * @file 平台的优势  模块
 * @date 2024-03-05
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-05
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from "react";
import styles from "./style.module.scss";
import { Icon } from "@/components/icon";
import classNames from "@/functions/classNames";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 展示第几个
   */
  index: number;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ index }) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={styles.page1_sliding}>
      <div
        className={classNames(styles.page1_slidingItem, {
          [styles.page1_slidingItem__active]: index === 0,
        })}
      >
        <p className={styles.page1_slidingItemText}>
          我们帮助您高效低价地管理您的数据资产，同时帮助您快速地实现从数字化到数据资产增值的过程。帮助您定制化地完成数字化，确保您的数字化旅程的：
        </p>
        <ul className={styles.page1_slidingItemUl}>
          {["自主", "高效", "低价"].map((item, index) => {
            return (
              <li className={styles.page1_slidingItemLi} key={index}>
                <Icon
                  type="mark1"
                  className={styles.page1_slidingItemLiStyle}
                />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={classNames(styles.page1_slidingItem, {
          [styles.page1_slidingItem__active]: index === 1,
        })}
      >
        <p className={styles.page1_slidingItemText}>
          我们帮助您策划符合您企业的数字化转型路径，为您在数字化建设的新一轮风口中寻收到自己的变现之路。
        </p>
        <ul className={styles.page1_slidingItemUl}>
          {["分阶段", "高产出", "可落地"].map((item, index) => {
            return (
              <li className={styles.page1_slidingItemLi} key={index}>
                <Icon
                  type="mark1"
                  className={styles.page1_slidingItemLiStyle}
                />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
