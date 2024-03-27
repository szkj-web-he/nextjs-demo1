/**
 * @file 菜单列表
 * @date 2024-03-27
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-27
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button } from "@/components/btn";
import { Icon } from "@/components/icon";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { projectList } from "@/defaultData/projectList";
import classNames from "@/functions/classNames";
import Image from "next/image";
import icon from "@/assets/images/spr_hrIcon.png";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = () => {
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
    <div className={styles.page3_menusScrollWrapper}>
      {projectList.map((item, index) => {
        return (
          <Button
            className={classNames(
              styles.page3_menuItem,
              styles[`page3_menu__${item.icon}`]
            )}
            key={index}
          >
            <Icon type={item.icon} className={styles.page3_menuItemIcon} />
            <span className={styles.page3_menuItemText}>{item.content}</span>
          </Button>
        );
      })}
      <div className={styles.page3_menusHr} />
      <div className={styles.page3_menusHrItem}>
        <div />
        <Image src={icon} alt="" />
        <div />
      </div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
