/**
 * @file
 * @date 2024-03-05
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-05
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button } from "@/components/btn";
import classNames from "@/functions/classNames";
import React from "react";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 展示第几个
   */
  index: number;
  /**
   * 当tab被点击时
   */
  handleClick: (index: number) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ index, handleClick }) => {
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
          handleClick(0);
        }}
      >
        工具链
      </Button>
      <Button
        className={classNames(styles.page1_tabTitle2, {
          [styles.page1_tabTitle__active]: index === 1,
        })}
        onClick={() => {
          handleClick(1);
        }}
      >
        咨询培训
      </Button>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
