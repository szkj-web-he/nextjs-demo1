/**
 * @file 表格头
 * @date 2024-03-07
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-07
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon } from "@/components/icon";
import classNames from "@/functions/classNames";
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
    <div
      className={classNames(
        styles.quotation_pricingTableRow,
        styles.quotation_pricingTableHead
      )}
    >
      <div className={styles.quotation_pricingTableColOne}>
        <span
          className={classNames(
            styles.quotation_leftBottomAbs,
            styles.quotation_cBody1
          )}
        >
          功能对比
        </span>
        <div className={styles.quotation_pricingTableSplit} />
        <span
          className={classNames(
            styles.quotation_rightTopAbs,
            styles.quotation_cBody1
          )}
        >
          不同版本
        </span>
      </div>
      <div className={styles.quotation_pricingTableCol}>
        <h2
          className={classNames(
            styles.quotation_colorNeutral400,
            styles.quotation_ch4
          )}
        >
          免费版
        </h2>
        <span
          className={classNames(
            styles.quotation_colorNeutral400,
            styles.quotation_cBody3
          )}
        >
          限1个组织使用
        </span>
      </div>
      <div className={styles.quotation_pricingTableCol}>
        <h2
          className={classNames(
            styles.quotation_colorWhite,
            styles.quotation_ch4
          )}
        >
          高级版
        </h2>
        <span
          className={classNames(
            styles.quotation_colorWhite,
            styles.quotation_cBody3
          )}
        >
          最多3个组织使用
        </span>
      </div>
      <div className={styles.quotation_pricingTableCol}>
        <h2
          className={classNames(
            styles.quotation_colorWhite,
            styles.quotation_ch4
          )}
        >
          企业版
        </h2>
        <span
          className={classNames(
            styles.quotation_colorWhite,
            styles.quotation_cBody3
          )}
        >
          最多5个组织使用
        </span>
      </div>
      <div className={styles.quotation_pricingTableColLast}>
        <h2
          className={classNames(
            styles.quotation_colorWhite,
            styles.quotation_ch4
          )}
        >
          定制版
        </h2>
        <span
          className={classNames(
            styles.quotation_colorWhite,
            styles.quotation_cBody3
          )}
        >
          大型企业
        </span>
        <div className={styles.quotation_pricingTableHeadTips}>
          <p>
            额外费用 <b>8</b> 折
          </p>
          <Icon type="queryLinear" />
        </div>
      </div>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
