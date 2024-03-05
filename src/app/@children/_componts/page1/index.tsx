/**
 * @file 首屏
 * @date 2024-03-04
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-04
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon } from "@/components/icon";
import { Transition } from "@/components/transition";
import { navLinks } from "@/defaultData/navigationBar";
import { useDomDisplay } from "@/hooks/useDomDisplay";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Tabs from "./components/tabs";
import styles from "./style.module.scss";
import Feature from "./components/feature";
import classNames from "@/functions/classNames";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

// 延时多久
const delayTime = 5000; // ms
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [index, setIndex] = useState(0);

  /**
   * 组件根节点
   */
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * 计时器
   */
  const timer = useRef<number | null>(null);
  /**
   * 是否在滚动后变得不可见
   */
  const [opacity, show] = useDomDisplay(ref);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  // useEffect(() => {
  //   if (show) {
  //     const nextTimeDoSThing = () => {
  //       timer.current && window.clearTimeout(timer.current);
  //       timer.current = window.setTimeout(() => {
  //         setIndex((pre) => {
  //           nextTimeDoSThing();
  //           return pre === 1 ? 0 : 1;
  //         });
  //       }, delayTime);
  //     };
  //     nextTimeDoSThing();
  //   }
  //   return () => {
  //     timer.current && window.clearTimeout(timer.current);
  //   };
  // }, [show]);

  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /**
   *
   */
  const nextTimeDoSThing = () => {
    timer.current && window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setIndex((pre) => {
        nextTimeDoSThing();
        return pre === 1 ? 0 : 1;
      });
    }, delayTime);
  };

  /**
   * 当tab被点击时
   */
  const handleTabClick = (index: number) => {
    setIndex(index);
    nextTimeDoSThing();
  };

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={styles.page1_wrapper} ref={ref} style={{ opacity }}>
      <div className={styles.page1_body}>
        <Tabs index={index} handleClick={handleTabClick} />
        <div className={styles.page1_tabContent}>
          <Transition
            className={styles.page1_tabContentTransition}
            animationType="fade"
            show={index === 0}
          >
            <p
              className={classNames(
                styles.page1_tabMarginBottom24,
                styles.page1_tabText
              )}
            >
              全球首款
              <span className={styles.page1_tabColorText}>自助</span>
            </p>
            <p className={styles.page1_tabText}>
              <span className={styles.page1_tabColorText}>数据资产</span>
              管理平台
            </p>
            <ul className={styles.page1_tabUl}>
              <li className={styles.page1_tabColorLi} />
              <li className={styles.page1_tabLi} />
            </ul>
            <Link className={styles.page1_tabLink} href={navLinks.signUp}>
              去注册
              <Icon type="nextArrow" className={styles.page1_tabLinkIcon} />
            </Link>
          </Transition>
          <Transition
            className={styles.page1_tabContentTransition}
            animationType="fade"
            show={index === 1}
          >
            <p
              className={classNames(
                styles.page1_tabMarginBottom24,
                styles.page1_tabText
              )}
            >
              全球首家
              <span className={styles.page1_tabColorText}>数字化转型</span>
            </p>
            <p className={styles.page1_tabText}>
              <span className={styles.page1_tabColorText}>数据资产</span>
              专业咨询机构
            </p>
            <ul className={styles.page1_tabUl}>
              <li className={styles.page1_tabLi} />
              <li className={styles.page1_tabColorLi} />
            </ul>
            <Link className={styles.page1_tabLink} href="/committeeOfExperts">
              去咨询
              <Icon type="nextArrow" className={styles.page1_tabLinkIcon} />
            </Link>
          </Transition>
        </div>
        <Feature index={index} />
      </div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
