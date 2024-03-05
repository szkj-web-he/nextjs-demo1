/**
 * @file Project
 * @date 2022-04-11
 * @author xuejie.he
 * @lastModify xuejie.he 2022-04-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import banner from "@/assets/images/plug-InEditor.png";
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
      <div className={styles.introduction_header}>表单插件系统</div>
      <div className={styles.introduction_subHeader}>
        这是表单插件开发工具。
      </div>

      <div className={styles.introduction_btnMemo}>
        ( 👇 如果您想为表单制作插件来实现定制功能，请从这里开始。)
      </div>
    </>
  );

  const description = (
    <>
      <p className={styles.introduction_text}>
        <span className={styles.introduction_tip}>👉</span>
        <span>通过使用这个工具，您可以开发自己的插件，在表单编辑中使用。</span>
      </p>
      <p className={styles.introduction_text}>
        <span className={styles.introduction_tip}>👉</span>
        <span>您也可以在“插件商店”出售这些插件来赚取额外的钱。</span>
      </p>
    </>
  );
  {
    /* <img src={banner} className={styles.introduction_banner} alt="" />; */
  }
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <Introduction
      icon={
        <Image src={banner} className={styles.introduction_banner} alt="" />
      }
      main={main}
      description={description}
      href={navLinks.plugin}
    />
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

export default Temp;
