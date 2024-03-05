/**
 * @file 导航栏的调整按钮的交互样式
 * @date 2024-02-24
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-24
 */
"use client";
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon } from "@/components/icon";
import classNames from "@/functions/classNames";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { MountedPortal } from "@/components/mountedPortal";
import SubMenus from "../subMenus";
import { useChangeOpenSubMenus } from "@/components/navigation/context/subMenu";
import { useLatest } from "@/hooks/useLatest";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 路径
   */
  path?: string;
  /**
   * 是否时"产品"导航
   */
  isProduct?: boolean;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({
  children,
  path,
  className,
  isProduct,
  ...props
}) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /**
   * 获取导航
   */
  const pathname = usePathname();

  const changeOpenSubMenus = useChangeOpenSubMenus();
  const changeOpenSubMenusRef = useLatest(changeOpenSubMenus);
  /**
   * hover状态
   */
  const [hover, setHover] = useState(false);
  /**
   * timer
   */
  const timer = useRef<null | number>(null);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  useEffect(() => {
    return () => {
      timer.current && window.clearTimeout(timer.current);
    };
  }, []);
  useEffect(() => {
    isProduct && changeOpenSubMenusRef.current(hover);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hover, isProduct]);
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */

  if (isProduct) {
    return (
      <div
        {...props}
        className={classNames(className, {
          [styles.navigation_desk__navItem__active]: path && pathname === path,
          [styles.navigation_desk__navItem__hover]: hover,
        })}
        onMouseEnter={() => {
          timer.current && window.clearTimeout(timer.current);
          setHover(true);
        }}
        onMouseLeave={() => {
          timer.current = window.setTimeout(() => {
            setHover(false);
          }, 200);
        }}
      >
        产品
        <Icon
          type="dropdown"
          className={styles.navigation_desk__navItem__dropdown}
        />
        <MountedPortal>
          <SubMenus />
        </MountedPortal>
      </div>
    );
  }
  return (
    <div
      {...props}
      className={classNames(className, {
        [styles.navigation_desk__navItem__active]: path && pathname === path,
        [styles.navigation_desk__navItem__hover]: hover,
      })}
      onMouseEnter={() => {
        timer.current && window.clearTimeout(timer.current);
        setHover(true);
      }}
      onMouseLeave={() => {
        timer.current = window.setTimeout(() => {
          setHover(false);
        }, 200);
      }}
    >
      {children}
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
