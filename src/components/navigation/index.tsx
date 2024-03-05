/**
 * @file 头部导航
 * @date 2024-02-23
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-23
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
"use client";
import { navLinks } from "@/defaultData/navigationBar";
import classNames from "@/functions/classNames";
import useEventListener from "@/hooks/useEventListener";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Skeleton } from "../skeleton";
import Desk from "./components/desk";
import Logo from "./components/logo";
import Mobile from "./components/mobile";
import { ChangeOpenSubMenus, OpenSubMenus } from "./context/subMenu";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Navigation: React.FC = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [show, setShow] = useState<boolean>();
  /**
   * 二级菜单是否打开
   */
  const [open, setOpen] = useState(false);
  /**
   * 获取导航
   */
  const pathname = usePathname();

  useEffect(() => {
    setShow(window.matchMedia("(max-width: 1024px)").matches);
  }, []);

  useEventListener("resize", () => {
    setShow(window.matchMedia("(max-width: 1024px)").matches);
  });

  const content = () => {
    if (typeof show === "boolean") {
      return show ? <Mobile /> : <Desk />;
    }
    return <Skeleton variant="rect" width="2rem" height="2rem" />;
  };

  /* <------------------------------------ **** STATE END **** ------------------------------------ */

  return (
    <div
      className={classNames(styles.navigation_wrapper, {
        [styles.navigation_wrapperTransparent]: !open && pathname === "/",
      })}
    >
      <Logo link={navLinks.home} />
      <OpenSubMenus.Provider value={open}>
        <ChangeOpenSubMenus.Provider
          value={(status) => {
            setOpen(status);
          }}
        >
          {content()}
        </ChangeOpenSubMenus.Provider>
      </OpenSubMenus.Provider>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
