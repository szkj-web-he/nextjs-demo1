/**
 * @file 插件
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
import icon from "@/assets/images/spr_pluginIcon.png";
import Image from "next/image";
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
      index={4}
      icon={
        <div
          className={classNames(styles.page2_pluginIconContainer, {
            [styles.page2_pluginIconContainer__active]: show,
          })}
        >
          <div className={styles.page2_pluginRectContainer}>
            <div className={styles.page2_pluginRectCircle1__out} />
            <div className={styles.page2_pluginRectCircle2__out} />
            <div className={styles.page2_pluginRect}>
              <div className={styles.page2_pluginRectCircle1} />
              <div className={styles.page2_pluginRectCircle2} />
              <Image
                src={icon}
                alt=""
                className={styles.page2_pluginRectIcon}
              />
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
      全球首创表单插件系统
    </Item>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
