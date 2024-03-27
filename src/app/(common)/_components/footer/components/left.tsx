/**
 * @file 左侧的内容
 * @date 2024-03-07
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-07
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { labelSet } from "@/defaultData/footer";
import Link from "next/link";
import React from "react";
import styles from "../style.module.scss";
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
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={styles.footer_leftWrap}>
      {labelSet.map((item) => {
        return (
          <div className={styles.footer_linkGroup} key={item.label}>
            <div className={styles.footer_linkTitle}>{item.label}</div>
            <div className={styles.footer_linkList}>
              {item.data.map((cItem) => {
                return (
                  <Link
                    className={styles.footer_linkItem}
                    key={cItem.label}
                    href={cItem.link}
                  >
                    {cItem.label}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
