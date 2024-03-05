/**
 * @file Project
 * @date 2022-04-11
 * @author xuejie.he
 * @lastModify xuejie.he 2022-04-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */

import banner from "@/assets/images/distribution.png";
import { navLinks } from "@/defaultData/navigationBar";
import Image from "next/image";
import { Introduction } from "../introduction";
import styles from "../introduction/style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp = (): JSX.Element => {
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  const main = (
    <>
      <div className={styles.introduction_header}>样本分发系统</div>
      <div className={styles.introduction_subHeader}>这是表单分发工具</div>
      <div className={styles.introduction_btnMemo}>
        ( 👇 如果您想将一份表单样本进行分发，请从这里开始。)
      </div>
    </>
  );

  const description = (
    <p className={styles.introduction_text}>
      <span className={styles.introduction_tip}>👉</span>
      <span>通过使用这个工具，您可以以一种高效的方式分发表单样本。</span>
    </p>
  );

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <Introduction
      icon={
        <Image src={banner} className={styles.introduction_banner} alt="" />
      }
      main={main}
      description={description}
      href={navLinks.dist}
    />
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

export default Temp;
