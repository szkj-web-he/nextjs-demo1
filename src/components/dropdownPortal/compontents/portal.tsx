/**
 * @file
 * @date 2021-12-13
 * @author xuejie.he
 * @lastModify xuejie.he 2021-12-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { forwardRef } from "react";
import Main from "./portalChildren";

import { PortalCommonProps } from "../types/props";
import { useRemoveOnHidden } from "@/hooks/useRemoveOnHidden";
import { MountedPortal } from "@/components/mountedPortal";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps extends Omit<PortalCommonProps, "handlePositionChange"> {
  /**
   *
   */
  hashId?: string;

  /**
   * root节点
   */
  root?: Element;
  /**
   * show of Portal
   */
  show: boolean;
  /**
   * Remove when the element is hidden
   */
  removeOnHidden?: boolean;
  /**
   * Cache only works if removeOnHidden=true.
   * When cache=true, as long as the element has been rendered, it will no longer be removed.  The opposite is the state of cache=false.
   */
  cache?: boolean;
}

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp = forwardRef<HTMLDivElement | null, TempProps>(
  (
    {
      children,
      show,
      removeOnHidden = true,
      cache = true,
      handleTransitionEnd,
      handleTransitionStart,
      handleTransitionCancel,
      mount,
      ...props
    },
    ref
  ) => {
    Temp.displayName = "Portal";
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/

    const [endFn, isRemove, isFirst, visible] = useRemoveOnHidden(
      show,
      removeOnHidden,
      cache
    );

    if (isRemove) {
      return <></>;
    }
    return (
      <MountedPortal mount={mount}>
        <Main
          show={visible}
          ref={ref}
          isTransition={isFirst ? visible : true}
          handleTransitionStart={handleTransitionStart}
          handleTransitionEnd={() => {
            handleTransitionEnd?.();
            endFn();
          }}
          mount={mount}
          handleTransitionCancel={() => {
            handleTransitionCancel?.();
            endFn();
          }}
          {...props}
        >
          {children}
        </Main>
      </MountedPortal>
    );
  }
);
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
Temp.displayName = "Portal";
export default Temp;
