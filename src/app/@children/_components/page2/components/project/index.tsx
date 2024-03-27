/**
 * @file 项目编辑
 * @date 2024-03-25
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-25
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from "react";
import Item from "../item";
import Image from "next/image";
import styles from "./style.module.scss";
import listIcon from "@/assets/images/spr_projectListIcon.png";
import classNames from "@/functions/classNames";
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
      index={0}
      icon={
        <div
          className={classNames(styles.page2_projectIconContainer, {
            [styles.page2_projectIconContainer__active]: show,
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="18"
            viewBox="0 0 52 18"
            fill="none"
            className={styles.page2_projectHeader}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 5.2833V17.1707H51.5122L51.5122 13.2083C51.5122 13.2059 51.5122 13.2035 51.5122 13.2011C51.5091 10.2865 49.5884 7.92495 47.2195 7.92495H32.9604C31.55 7.92495 30.306 7.00164 29.8975 5.65175L29.2281 3.43936C28.6023 1.37145 26.9982 0 25.2053 0H4.29268C1.92187 0 0 2.36542 0 5.2833Z"
              fill="url(#paint0_linear_2_3564)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_3564"
                x1="25.7561"
                y1="0"
                x2="25.7561"
                y2="17.1707"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3CBBC7" />
                <stop offset="1" stopColor="#67CDD6" />
              </linearGradient>
            </defs>
          </svg>
          <div className={styles.page2_projectRect}>
            <Image
              src={listIcon}
              className={styles.page2_projectListIcon1}
              alt=""
            />
            <Image
              src={listIcon}
              className={styles.page2_projectListIcon2}
              alt=""
            />
            <Image
              src={listIcon}
              className={styles.page2_projectListIcon3}
              alt=""
            />
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
      全球首创数字化和数据资产项目管理器
    </Item>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
