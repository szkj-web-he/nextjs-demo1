/**
 * @file
 * @date 2024-03-25
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-25
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import {
  TitleAnimation,
  TitleAnimationEvents,
} from "@/components/titleAnimation";
import classNames from "@/functions/classNames";
import { useDomDisplay } from "@/hooks/useDomDisplay";
import React, { useEffect, useRef, useState } from "react";
import Collect from "./components/collect";
import Dist from "./components/dist";
import Plugin from "./components/plugin";
import Proc from "./components/proc";
import Project from "./components/project";
import QEditor from "./components/qeditor";
import styles from "./style.module.scss";
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
    <div className={styles.page2_wrapper} style={{ opacity }} ref={ref}>
      <TitleAnimation
        text="技术创新助力数字化和数据资产化"
        ref={titleEvent}
        handleAnimateEnd={(status) => {
          if (status) {
            setSubShow(status);
          }
        }}
      />
      <div
        className={classNames(styles.page2_animateContent, {
          [styles.page2_animateContent__active]: subShow,
        })}
      >
        <div
          className={classNames(
            styles.page2_flex,
            styles.page2_marginBottom100
          )}
        >
          <Project />
          <QEditor />
        </div>
        <div
          className={classNames(
            styles.page2_flex,
            styles.page2_marginBottom100
          )}
        >
          <Proc />
          <Plugin />
        </div>
        <div
          className={classNames(
            styles.page2_flex,
            styles.page2_marginBottom100
          )}
        >
          <Dist />
          <Collect />
        </div>
      </div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
