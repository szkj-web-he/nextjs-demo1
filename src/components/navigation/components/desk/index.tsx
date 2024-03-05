/**
 * @file 桌面端的入口
 * @date 2024-03-01
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { navLinks } from "@/defaultData/navigationBar";
import Link from "next/link";
import React from "react";
import Menus from "./menus";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
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
    <div className={styles.navigation_desk}>
      <Menus />
      <div className={styles.navigation_desk__split} />
      <Link className={styles.navigation_desk__signUp} href={navLinks.signUp}>
        注册
      </Link>
      <Link className={styles.navigation_desk__signIn} href={navLinks.signIn}>
        登录
      </Link>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
