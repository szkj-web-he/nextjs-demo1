/**
 * @file 右侧的动图
 * @date 2024-03-26
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-26
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import spr_computerscreen from "@/assets//images/spr_computerscreen.png";
import spr_body from "@/assets/images/spr_body.png";
import spr_computer from "@/assets/images/spr_computer.png";
import spr_cylinder from "@/assets/images/spr_cylinder.png";
import spr_laptop from "@/assets/images/spr_laptop.png";
import spr_questionnaire from "@/assets/images/spr_questionnaire.png";
import { Transition } from "@/components/transition";
import Image from "next/image";
import React from "react";
import { useIndex } from "../../context/activeIndex";
import spr_body2 from "@/assets/images/spr_body2.png";
import spr_cylinder2 from "@/assets/images/spr_cylinder2.png";
import spr_cylinderHalo from "@/assets/images/spr_cylinderHalo.png";
import spr_cylinderLight from "@/assets/images/spr_cylinderLight.png";
import spr_loop from "@/assets/images/spr_loop.png";
import spr_phone from "@/assets/images/spr_phone.png";
import spr_phoneCurtain from "@/assets/images/spr_phoneCurtain.png";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const index = useIndex();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <>
      <Transition
        show={index === 0}
        animationType="fade"
        className={styles.page2_index1Images}
      >
        <Image src={spr_body} alt="" />
        <Image src={spr_computer} alt="" />
        <Image src={spr_computerscreen} alt="" />
        <Image src={spr_laptop} alt="" />
        <Image src={spr_cylinder} alt="" />
        <Image src={spr_questionnaire} alt="" />
      </Transition>
      <Transition
        show={index === 1}
        animationType="fade"
        className={styles.page2_index2Images}
      >
        <Image src={spr_body2} alt="" />
        <Image src={spr_cylinderLight} alt="" />
        <Image src={spr_cylinderHalo} alt="" />
        <Image src={spr_cylinder2} alt="" />
        <Image src={spr_phoneCurtain} alt="" />
        <Image src={spr_phone} alt="" />
        <div className={styles.page2_loopWrap}>
          <Image src={spr_loop} alt="" />
        </div>
      </Transition>
    </>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
