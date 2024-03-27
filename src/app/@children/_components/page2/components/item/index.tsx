/**
 * @file
 * @date 2024-03-25
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-25
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from "react";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * icon
   */
  icon: React.ReactNode;
  /**
   * 内容
   */
  children: React.ReactNode;
  /**
   * 当移入时
   */
  handleEnter: () => void;
  /**
   * 当移出时
   */
  handleLeave: () => void;
  /**
   * 第几个
   */
  index: number;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({
  icon,
  children,
  handleEnter,
  handleLeave,
  index,
}) => {
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
    <div
      className={styles.page2_flexItem}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
      onTouchEnd={handleLeave}
      onTouchCancel={handleLeave}
      style={{
        transition: `all 0.15s ${0.1 * index}s linear`,
      }}
    >
      <div className={styles.page2_itemIcon}>{icon}</div>
      <div className={styles.page2_itemContent}>{children}</div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
