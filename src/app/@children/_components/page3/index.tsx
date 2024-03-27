/**
 * @file
 * @date 2024-03-26
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-26
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import {
  TitleAnimation,
  TitleAnimationEvents,
} from "@/components/titleAnimation";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { useDomDisplay } from "@/hooks/useDomDisplay";
import classNames from "@/functions/classNames";
import Menus from "./components/menus";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/

  /**
   * 组件根节点
   */
  const ref = useRef<HTMLDivElement | null>(null);
  /**
   * 是否在滚动后变得不可见
   */
  const [opacity, show] = useDomDisplay(ref);
  /**
   * 头部动画 转发的事件
   */
  const titleEvent = useRef<TitleAnimationEvents | null>(null);
  /**
   * 子内容是否展示
   */
  const [subShow, setSubShow] = useState(false);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/

  useEffect(() => {
    const events = titleEvent.current;
    if (show) {
      events?.show();
    } else {
      events?.hidden();
      setSubShow(false);
    }
  }, [show]);
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={styles.page3_wrapper} style={{ opacity }} ref={ref}>
      <TitleAnimation
        text="全球首创一站式数字化和数据资产项目工具链"
        ref={titleEvent}
        handleAnimateEnd={(status) => {
          if (status) {
            setSubShow(status);
          }
        }}
      />
      <div
        className={classNames(styles.page3_main, {
          [styles.page3_main__active]: subShow,
        })}
      >
        <div className={styles.page3_tips}>
          您可以通过项目管理工具来组织多个数据收集乃至数据清理工作，将工作成果进行统一管理，并能实时监控工作完成进度和及时反馈工作情况。
        </div>
        <Menus />
      </div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
