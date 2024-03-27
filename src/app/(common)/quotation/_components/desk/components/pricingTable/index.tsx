/**
 * @file 价格表
 * @date 2024-03-07
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-07
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { priceList } from "@/defaultData/quotation";
import classNames from "@/functions/classNames";
import React from "react";
import Header from "./components/header";
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
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /**
   * 打开客服电话
   */
  const handleOpen = () => {
    window.ClinkChatWeb?.openSessionWindow();
  };

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={styles.quotation_pricingTable}>
      <Header />
      {priceList(handleOpen).map((item, index) => {
        return (
          <div
            key={index}
            className={classNames(
              styles.quotation_pricingTableRow,
              styles.quotation_pricingTableBody,
              { [styles.quotation_padding20]: index === 0 }
            )}
          >
            <div
              className={classNames(
                styles.quotation_pricingTableColOne,
                styles.quotation_cBody1
              )}
            >
              {item.funcName}
            </div>
            <div
              className={classNames(
                styles.quotation_pricingTableCol,
                styles.quotation_cBody1
              )}
            >
              {item.free}
            </div>
            <div
              className={classNames(
                styles.quotation_pricingTableCol,
                styles.quotation_cBody1
              )}
            >
              {item.advanced}
            </div>
            <div
              className={classNames(
                styles.quotation_pricingTableCol,
                styles.quotation_cBody1
              )}
            >
              {item.enterprise}
            </div>
            <div
              className={classNames(
                styles.quotation_pricingTableColLast,
                styles.quotation_cBody1
              )}
            >
              {item.customization}
            </div>
          </div>
        );
      })}
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
