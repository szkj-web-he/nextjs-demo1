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
import styles from "./style.module.scss";
import icon from "@/assets/images/spr_distIcon.png";
import classNames from "@/functions/classNames";
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
      index={5}
      icon={
        <div
          className={classNames(styles.page2_distIconContainer, {
            [styles.page2_distIconContainer__active]: show,
          })}
        >
          <div className={styles.page2_distIconRect1}>
            <Image
              src={icon}
              className={styles.page2_distIconBookmark}
              alt=""
            />
            <div className={styles.page2_distTextIcon1}></div>
            <div className={styles.page2_distTextIcon2}></div>
          </div>
          <div className={styles.page2_distIconRect2}></div>
        </div>
      }
      handleEnter={() => {
        setShow(true);
      }}
      handleLeave={() => {
        setShow(false);
      }}
    >
      全球首创敏捷式样本分发器
    </Item>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
