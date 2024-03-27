/**
 * @file 工具栏按钮
 * @date 2023-12-13
 * @author xuejie.he
 * @lastModify xuejie.he 2023-12-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from "react";
import styles from "./style.module.scss";
import classNames from "@/functions/classNames";
import { Dropdown } from "@/components/dropdown";
import { DropdownBtn } from "@/components/dropdownBtn";
import { DropdownPortal } from "@/components/dropdownPortal";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 活跃状态
   */
  active?: boolean;
  /**
   * 提示文字
   */
  tipsText: string;
  /**
   * 按钮内容
   */
  children: React.ReactNode;
  /**
   * 禁用状态
   */
  disabled?: boolean;
  /**
   * 点击回调
   */
  onClick: () => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({
  tipsText,
  active,
  children,
  disabled,
  onClick,
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
    <Dropdown
      delayOnShow={800}
      offset={{
        y: -8,
      }}
      placement="ct"
      animate="fade"
      trigger={"hover"}
      triangle={{
        width: "1rem",
        height: "0.5rem",
        color: "rgba(0,0,0,0.7)",
      }}
    >
      <DropdownBtn
        className={classNames(styles.imageViewer_btn, {
          [styles.imageViewer_btn__active]: active && !disabled,
          [styles.imageViewer_btn__disabled]: disabled,
        })}
        onClick={onClick}
      >
        {children}
      </DropdownBtn>
      <DropdownPortal bodyClassName={styles.imageViewer_btnPopover}>
        {tipsText}
      </DropdownPortal>
    </Dropdown>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
