/**
 * @file Project
 * @date 2022-04-11
 * @author xuejie.he
 * @lastModify xuejie.he 2022-04-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import banner from "@/assets/images/projectManager.png";
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
      <div className={styles.introduction_header}>项目管理系统</div>
      <div className={styles.introduction_subHeader}>
        这是项目管理中心，您可以在这里管理您所有的数据研究项目。
      </div>

      <div className={styles.introduction_btnMemo}>
        ( 👇 如果您想从0到1创建一个研究项目，请从这里开始。 )
      </div>
    </>
  );

  const description = (
    <>
      <p className={styles.introduction_text}>
        <span className={styles.introduction_tip}>👉</span>
        <span>
          您可以创建研究项目，决定这个项目的“可交付物”是什么。
          <br />
          例如，“设计表单收集数据”或“处理表单数据”。
        </span>
      </p>
      <p className={styles.introduction_text}>
        <span className={styles.introduction_tip}>👉</span>
        <span>您也可以将研究项目中的任务分配给您的协作者。</span>
      </p>
    </>
  );
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <Introduction
      icon={
        <Image src={banner} className={styles.introduction_banner} alt="" />
      }
      main={main}
      description={description}
      href={navLinks.projectManager}
    />
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

export default Temp;
