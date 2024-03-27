/**
 * @file 首屏 最外层的盒子
 * @date 2024-03-06
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-06
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import banner from "@/assets/images/bg_banner.png";
import { SkeletonLoading } from "@/components/skeletonLoading";
import { useDomDisplay } from "@/hooks/useDomDisplay";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ActiveIndexContext } from "../../context/activeIndex";
import { ChangeActiveIndexContext } from "../../context/changeIndex";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

interface TempProps {
  /**
   * 内容
   */
  children: React.ReactNode;
}

// 延时多久
const delayTime = 5000; // ms
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ children }) => {
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
  /**
   * 图片是否准备好
   */
  const [loading, setLoading] = useState(true);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  useEffect(() => {
    if (show) {
      const nextTimeDoSThing = () => {
        timer.current && window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => {
          setIndex((pre) => {
            nextTimeDoSThing();
            return pre === 1 ? 0 : 1;
          });
        }, delayTime);
      };
      nextTimeDoSThing();
    }
    return () => {
      timer.current && window.clearTimeout(timer.current);
    };
  }, [show]);

  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /**
   * 每固定时段 做点什么
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
   * 当手动更改index时
   */
  const handleChangeIndex = (index: number) => {
    setIndex(index);
    nextTimeDoSThing();
  };
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <ActiveIndexContext.Provider value={index}>
      <ChangeActiveIndexContext.Provider value={handleChangeIndex}>
        <div className={styles.page1_wrapper} style={{ opacity }}>
          <Image
            alt=""
            src={banner}
            className={styles.page1_bannerImg}
            onLoad={() => {
              setLoading(false);
            }}
          />
          <div className={styles.page1_body} ref={ref}>
            {loading ? <SkeletonLoading /> : children}
          </div>
        </div>
      </ChangeActiveIndexContext.Provider>
    </ActiveIndexContext.Provider>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
