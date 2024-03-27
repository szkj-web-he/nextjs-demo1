/**
 * @file 报价
 * @date 2024-02-22
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-22
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import {
  TitleAnimation,
  TitleAnimationEvents,
} from "@/components/titleAnimation";
import { Transition } from "@/components/transition";
import { useMobile } from "@/hooks/useMobile";
import React, { useEffect, useRef, useState } from "react";
import Desk from "./_components/desk";
import Mobile from "./_components/mobile";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /**
   * 转发的事件
   */
  const titleEvent = useRef<TitleAnimationEvents | null>(null);
  /**
   * 当title执行完成后
   * 展示下面的内容
   */
  const [show, setShow] = useState(false);
  /**
   * 是否展示手机端
   */
  const isMobile = useMobile();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  useEffect(() => {
    titleEvent.current?.show();
  }, []);
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={styles.quotation_wrapper}>
      <TitleAnimation
        text="购买服务报价"
        ref={titleEvent}
        handleAnimateEnd={(status) => {
          if (status) {
            setShow(true);
          }
        }}
      />
      <Transition animationType="fade" show={show}>
        {isMobile ? <Mobile /> : <Desk />}
      </Transition>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
