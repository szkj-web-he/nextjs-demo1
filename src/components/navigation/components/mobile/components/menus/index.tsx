/**
 * @file 一级菜单
 * @date 2024-03-01
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button } from "@/components/btn";
import { Icon } from "@/components/icon";
import { navLinks } from "@/defaultData/navigationBar";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 打开 "产品"的二级菜单
   * @returns
   */
  open: () => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ open }) => {
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
    <>
      <div className={styles.navigation_mobile__width}>
        <ul className={styles.navigation_mobile__navMenu}>
          <li className={styles.navigation_mobile__navItem}>
            <Button
              className={styles.navigation_mobile__navItemBtn}
              onClick={open}
            >
              <span className={styles.navigation_mobile__navItemText}>
                产品
              </span>
              <Icon
                type="open"
                className={styles.navigationLinkMobile_dropdownIcon}
              />
            </Button>
          </li>
          <li className={styles.navigation_mobile__navItem}>
            <Link
              href={navLinks.market}
              className={styles.navigation_mobile__navItemLink}
            >
              市场
            </Link>
          </li>
          <li className={styles.navigation_mobile__navItem}>
            <Link
              href={navLinks.community}
              className={styles.navigation_mobile__navItemLink}
            >
              社区
            </Link>
          </li>
          <li className={styles.navigation_mobile__navItem}>
            <Link
              href="/committeeOfExperts"
              scroll={false}
              prefetch
              className={styles.navigation_mobile__navItemLink}
            >
              专家委员会
            </Link>
          </li>
          <li className={styles.navigation_mobile__navItem}>
            <Link
              href="/quotation"
              scroll={false}
              prefetch
              className={styles.navigation_mobile__navItemLink}
            >
              报价
            </Link>
          </li>
        </ul>
        <div className={styles.navigation_mobile__hr} />
        <Link
          href={navLinks.signIn}
          className={styles.navigation_mobile__signIn}
        >
          登录
        </Link>
      </div>
      <Link href={navLinks.signUp} className={styles.navigation_mobile__signUp}>
        免费注册
      </Link>
    </>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
