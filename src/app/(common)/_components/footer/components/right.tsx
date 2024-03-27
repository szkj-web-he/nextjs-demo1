/**
 * @file 右侧内容
 * @date 2024-03-07
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-07
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import areaCode86 from "@/assets/images/spr_contacts86.png";
import { defaultRightLinkSet } from "@/defaultData/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../style.module.scss";
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
    <div className={styles.footer_rightWrap}>
      <div className={styles.footer_language}>
        <Image
          src={areaCode86}
          className={styles.footer_language_icon}
          alt=""
        />
        <span className={styles.footer_language_content}>简体中文</span>
      </div>
      <div className={styles.footer_linkRight}>
        {defaultRightLinkSet.map((item) => {
          return (
            <Link
              className={styles.footer_linkRightItem}
              key={item.label}
              href={item.link ?? ""}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
