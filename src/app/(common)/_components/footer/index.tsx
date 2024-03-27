/**
 * @file
 * @date 2022-06-15
 * @author
 * @lastModify  2022-06-15
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import idCardImg from "@/assets/images/secret_idCard.png";
import SecurityRecord from "@/assets/images/spr_security_record.png";
import React, { useEffect, useRef, useState } from "react";
import { ImageViewer, ImageViewerEvents } from "@/components/imageViewer";
import Image from "next/image";
import Link from "next/link";
import Left from "./components/left";
import Right from "./components/right";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Footer: React.FC = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/

  const [is375, setIs375] = useState<boolean>();

  /**
   * 转发的事件
   */
  const imageEvents = useRef<ImageViewerEvents | null>(null);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/

  useEffect(() => {
    const fn = () => {
      setIs375(window.matchMedia("(max-width: 376px)").matches);
    };
    fn();

    window.addEventListener("resize", fn);
    return () => {
      window.removeEventListener("resize", fn);
    };
  }, []);
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_wrapper_top}>
        <Left />
        {!is375 && <Right />}
      </div>
      <div className={styles.footer_hr} />
      <div className={styles.footer_wrapper_bottom}>
        {is375 && <Right />}
        <div className={styles.footer_info}>
          <span className={styles.footer_copyright}>
            版权属于数支科技，并保留所有权利
          </span>
          <span className={styles.footer_filing}>
            <Link
              href="https://beian.miit.gov.cn"
              target={"_blank"}
              rel="noreferrer"
            >
              鄂ICP备2022009085号-1
            </Link>
          </span>
          <span className={styles.footer_security_record}>
            <Image src={SecurityRecord} alt="" />
            <Link
              href="https://www.beian.gov.cn/"
              target={"_blank"}
              rel="noreferrer"
            >
              鄂公网安备 42018502005944号
            </Link>
          </span>
          <span
            className={styles.footer_idCard}
            onClick={() => {
              imageEvents.current?.open();
            }}
          >
            增值电信业务经营许可证：鄂B2-20230124
          </span>
        </div>
      </div>
      <ImageViewer
        ref={imageEvents}
        src={idCardImg}
        name="中华人民共和国增值电信业务经营许可证"
      />
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
