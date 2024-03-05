/**
 * @file 挂载Portal
 * @date 2024-02-29
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-29
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface MountedPortalProps {
  /**
   * 自定的挂载位置
   */
  mount?: Element;
  /**
   * 内容
   */
  children?: React.ReactNode;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const MountedPortal: React.FC<MountedPortalProps> = ({
  mount,
  children,
}) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [state, setState] = useState<Element>();
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  useEffect(() => {
    (() => {
      if (mount) {
        setState(mount);
        return;
      }
      let node = document.querySelector("div#r_portal");
      if (!node) {
        node = document.createElement("div");
        node.setAttribute("id", "r_portal");
        document.body.appendChild(node);
      }
      setState(node);
    })();
  }, [mount]);
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  if (!state) {
    return <></>;
  }
  return createPortal(children, state);
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
