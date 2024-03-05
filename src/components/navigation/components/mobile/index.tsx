/**
 * @file 移动端的界面
 * @date 2024-03-01
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-01
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Button } from "@/components/btn";
import React, { useState } from "react";
import styles from "./style.module.scss";
import classNames from "@/functions/classNames";
import { Transition } from "@/components/transition";
import { MountedPortal } from "@/components/mountedPortal";
import Menus from "./components/menus";
import SubMenus from "./components/subMenus";
import { useChangeOpenSubMenus, useOpenSubMenus } from "../../context/subMenu";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /**
   * 是否打开了二级菜单
   */
  const [openSubMenus, setOpenSubmenus] = useState(false);
  /**
   * 是否打开菜单列表
   */
  const open = useOpenSubMenus();
  const changeOpen = useChangeOpenSubMenus();

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <>
      <Button
        className={classNames(styles.navigation_mobileOpenBtn, {
          [styles.navigation_mobileOpenBtn__active]: open,
        })}
        onClick={() => {
          changeOpen(!open);
        }}
      >
        <div className={styles.navigation_mobileOpenLine1} />
        <div className={styles.navigation_mobileOpenLine2} />
        <div className={styles.navigation_mobileOpenLine3} />
      </Button>
      <MountedPortal>
        <Transition
          show={open}
          className={classNames(styles.navigation_mobile__navMenu)}
          animationType="fade"
        >
          <div className={styles.navigation_mobile__navMenuMain}>
            <Transition
              show={!openSubMenus}
              animationType="inLeft"
              className={styles.navigation_mobile__navMenuTop}
            >
              <Menus
                open={() => {
                  setOpenSubmenus(true);
                }}
              />
            </Transition>

            <SubMenus
              open={openSubMenus}
              back={() => {
                setOpenSubmenus(false);
              }}
            />
          </div>
        </Transition>
      </MountedPortal>
    </>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
