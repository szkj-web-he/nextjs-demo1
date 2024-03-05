/**
 * @file
 * @date 2024-02-29
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-29
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import editorIcon from "@/assets/images/questionnaireEditor.png";
import { navLinks } from "@/defaultData/navigationBar";
import Image from "next/image";
import React from "react";
import { Introduction } from "../introduction";
import styles from "../introduction/style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const main = (
    <>
      <div className={styles.introduction_header}>表单编辑系统</div>
      <div className={styles.introduction_subHeader}>这是表单编辑工具。</div>

      <div className={styles.introduction_btnMemo}>
        ( 👇 如果您想设计一份数据表单，请从这里开始。)
      </div>
    </>
  );

  const description = (
    <p className={styles.introduction_text}>
      <span className={styles.introduction_tip}>👉</span>
      <span>
        通过使用这个工具，您可以在内容、逻辑和外观上编辑完全可定制的数字化表单，从而产出高度自定义的数据收集流程。
      </span>
    </p>
  );
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <Introduction
      icon={
        <Image src={editorIcon} className={styles.introduction_banner} alt="" />
      }
      main={main}
      description={description}
      href={navLinks.qEditorDashboard}
    />
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
