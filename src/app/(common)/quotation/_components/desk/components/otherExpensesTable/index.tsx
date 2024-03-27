/**
 * @file 其它费用
 * @date 2024-03-07
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-07
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from "react";
import styles from "./style.module.scss";
import { otherExpenses } from "@/defaultData/quotation";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
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
    <div className={styles.quotation_otherExpensesTableWrapper}>
      <h1 className={styles.quotation_otherExpensesTitle}>
        个别服务额外购买报价
      </h1>
      <div className={styles.quotation_otherExpensesTable}>
        {otherExpenses.map((item, index) => {
          return (
            <div className={styles.quotation_otherExpensesTableRow} key={index}>
              <div className={styles.quotation_otherExpensesTableOrder}>
                {item.index}
              </div>
              <div className={styles.quotation_otherExpensesTableModule}>
                {item.module}
              </div>
              <div className={styles.quotation_otherExpensesTableMemo}>
                <p>{item.des.content}</p>
                {item.des.tips ? (
                  <p
                    className={styles.quotation_otherExpensesTableColorGradient}
                  >
                    {item.des.tips}
                  </p>
                ) : undefined}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
