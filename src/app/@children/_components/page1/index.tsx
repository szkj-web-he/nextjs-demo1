/**
 * @file 首屏
 * @date 2024-03-04
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-04
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon } from "@/components/icon";
import { navLinks } from "@/defaultData/navigationBar";
import classNames from "@/functions/classNames";
import Link from "next/link";
import React from "react";
import TransitionWrapper from "./components/transitionWrapper";
import Tabs from "./components/tabs";
import Wrapper from "./components/wrapper";
import styles from "./style.module.scss";
import FeatureItem from "./components/featureItem";
import Imgs from "./components/imgs";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC = () => {
  return (
    <Wrapper>
      <Tabs />
      <div className={styles.page1_tabContent}>
        <TransitionWrapper mySelfIndex={0}>
          <p
            className={classNames(
              styles.page1_tabMarginBottom24,
              styles.page1_tabText
            )}
          >
            全球首款
            <span className={styles.page1_tabColorText}>自助</span>
          </p>
          <p className={styles.page1_tabText}>
            <span className={styles.page1_tabColorText}>数据资产</span>
            管理平台
          </p>
          <ul className={styles.page1_tabUl}>
            <li className={styles.page1_tabColorLi} />
            <li className={styles.page1_tabLi} />
          </ul>
          <Link className={styles.page1_tabLink} href={navLinks.signUp}>
            去注册
            <Icon type="nextArrow" className={styles.page1_tabLinkIcon} />
          </Link>
        </TransitionWrapper>
        <TransitionWrapper mySelfIndex={1}>
          <p
            className={classNames(
              styles.page1_tabMarginBottom24,
              styles.page1_tabText
            )}
          >
            全球首家
            <span className={styles.page1_tabColorText}>数字化转型</span>
          </p>
          <p className={styles.page1_tabText}>
            <span className={styles.page1_tabColorText}>数据资产</span>
            专业咨询机构
          </p>
          <ul className={styles.page1_tabUl}>
            <li className={styles.page1_tabLi} />
            <li className={styles.page1_tabColorLi} />
          </ul>
          <Link className={styles.page1_tabLink} href="/committeeOfExperts">
            去咨询
            <Icon type="nextArrow" className={styles.page1_tabLinkIcon} />
          </Link>
        </TransitionWrapper>
      </div>
      <div className={styles.page1_sliding}>
        <FeatureItem mySelfIndex={0}>
          <p className={styles.page1_slidingItemText}>
            我们帮助您高效低价地管理您的数据资产，同时帮助您快速地实现从数字化到数据资产增值的过程。帮助您定制化地完成数字化，确保您的数字化旅程的：
          </p>
          <ul className={styles.page1_slidingItemUl}>
            {["自主", "高效", "低价"].map((item, index) => {
              return (
                <li className={styles.page1_slidingItemLi} key={index}>
                  <Icon
                    type="mark1"
                    className={styles.page1_slidingItemLiStyle}
                  />
                  {item}
                </li>
              );
            })}
          </ul>
        </FeatureItem>
        <FeatureItem mySelfIndex={1}>
          <p className={styles.page1_slidingItemText}>
            我们帮助您策划符合您企业的数字化转型路径，为您在数字化建设的新一轮风口中寻收到自己的变现之路。
          </p>
          <ul className={styles.page1_slidingItemUl}>
            {["分阶段", "高产出", "可落地"].map((item, index) => {
              return (
                <li className={styles.page1_slidingItemLi} key={index}>
                  <Icon
                    type="mark1"
                    className={styles.page1_slidingItemLiStyle}
                  />
                  {item}
                </li>
              );
            })}
          </ul>
        </FeatureItem>
      </div>
      <Imgs />
    </Wrapper>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
