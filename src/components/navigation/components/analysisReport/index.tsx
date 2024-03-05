/**
 * @file Project
 * @date 2022-04-11
 * @author xuejie.he
 * @lastModify xuejie.he 2022-04-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import banner from "@/assets/images/analysis&Report.png";
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
      <div className={styles.introduction_header}>表单数据处理系统</div>
      <div className={styles.introduction_subHeader}>
        这是表单数据处理的工具。
      </div>

      <div className={styles.introduction_btnMemo}>
        ( 👇 如果您想创建一个可视化的表单数据图表，请从这里开始。)
      </div>
    </>
  );

  const description = (
    <p className={styles.introduction_text}>
      <span className={styles.introduction_tip}>👉</span>
      <span>
        您可以对收集到的数据进行清理和可视化，并以不同格式导出您的数据。
      </span>
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
      href={navLinks.dataProc}
    />
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

export default Temp;
