/**
 * @file 一级菜单
 * @date 2024-03-01
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { navLinks } from "@/defaultData/navigationBar";
import Link from "next/link";
import React from "react";
import NavBtn from "../navBtn";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = () => {
  return (
    <ul className={styles.navigation_desk__navMenu}>
      <li className={styles.navigation_desk__navItem}>
        <NavBtn className={styles.navigation_desk__navItemBtn} isProduct />
      </li>
      <li className={styles.navigation_desk__navItem}>
        <NavBtn className={styles.navigation_desk__navItemBtn}>
          <Link
            href={navLinks.market}
            className={styles.navigation_desk__navItemLink}
          >
            市场
          </Link>
        </NavBtn>
      </li>
      <li className={styles.navigation_desk__navItem}>
        <NavBtn className={styles.navigation_desk__navItemBtn}>
          <Link
            href={navLinks.community}
            className={styles.navigation_desk__navItemLink}
          >
            社区
          </Link>
        </NavBtn>
      </li>
      <li className={styles.navigation_desk__navItem}>
        <NavBtn
          path="/committeeOfExperts"
          className={styles.navigation_desk__navItemBtn}
        >
          <Link
            href="/committeeOfExperts"
            scroll={false}
            prefetch
            className={styles.navigation_desk__navItemLink}
          >
            专家委员会
          </Link>
        </NavBtn>
      </li>
      <li className={styles.navigation_desk__navItem}>
        <NavBtn
          path="/quotation"
          className={styles.navigation_desk__navItemBtn}
        >
          <Link
            href="/quotation"
            scroll={false}
            prefetch
            className={styles.navigation_desk__navItemLink}
          >
            报价
          </Link>
        </NavBtn>
      </li>
    </ul>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
