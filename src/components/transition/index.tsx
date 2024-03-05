/**
 * @file
 * @date 2024-02-24
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { ActionType, useCssTransition } from "@/hooks/useCssTransition";
import { useLatest } from "@/hooks/useLatest";
import { useRemoveOnHidden } from "@/hooks/useRemoveOnHidden";
import React, {
  forwardRef,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
} from "react";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TransitionProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  /**
   * is child component visible
   */
  show: boolean;
  /**
   * enter className
   * * Intersection of fromEnter and toEnter
   */
  enterActive?: string;
  /**
   * leave className
   * * Intersection of fromLeave and toLeave
   */
  leaveActive?: string;
  /**
   * ClassName when entering
   */
  toEnter?: string;
  /**
   * ClassName when leaving
   */
  toLeave?: string;
  /**
   * ClassName when starting to enter
   */
  fromEnter?: string;
  /**
   * ClassName when starting to leave
   */
  fromLeave?: string;
  /**
   * children of ReactNode
   */
  children?: React.ReactNode;
  /**
   * first animation
   */
  firstAnimation?: boolean;
  /**
   * The component library encapsulates several default animation libraries
   */
  animationType?:
    | "fade"
    | "zoom"
    | "taller"
    | "wider"
    | "inLeft"
    | "inRight"
    | "inTop"
    | "inBottom"
    | "slideDown"
    | "slideUp"
    | "slideLeft"
    | "slideRight";

  /**
   * 如果animationType为taller的时候
   * height 为多少像素
   * * 默认是auto
   */
  height?: number | "auto";
  /**
   * 如果animationType为wider的时候
   * width 为多少像素
   * * 默认是auto
   */
  width?: number | "auto";

  /**
   * ontransitionEnd callback
   * 当过渡结束时的回调
   */
  handleTransitionEnd?: (show: boolean) => void;

  /**
   * Remove when the element is hidden
   * 隐藏时，是否移除节点
   */
  removeOnHidden?: boolean;
  /**
   * Cache only works if removeOnHidden=true.
   * When cache=true, as long as the element has been rendered, it will no longer be removed.  The opposite is the state of cache=false.
   *
   * cache的使用仅在removeOnHidden=true时生效
   *
   * 当cache为true
   * 隐藏时，移除节点(只会执行一次)
   *
   * 当cache为false
   * 隐藏时，移除节点(每次都会执行)
   *
   */
  cache?: boolean;
  /**
   * transitionStart callback
   * 当过渡开始时的回调
   */
  handleTransitionStart?: (show: boolean) => void;
  /**
   * transition cancel callback
   * 当过渡取消时的回调
   */
  handleTransitionCancel?: (show: boolean) => void;
  /**
   * 进入的时候延时 单位ms
   */
  delayOnEnter?: number;
  /**
   * 离开的时候延时 单位ms
   */
  delayOnLeave?: number;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Transition: React.FC<TransitionProps> = (
  {
    show,
    children,
    firstAnimation = false,
    handleTransitionEnd,
    handleTransitionStart,
    handleTransitionCancel,
    removeOnHidden = false,
    cache,
    ...props
  },
  ref
) => {
  Transition.displayName = "Transition";
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [endFn, isRemove, isFirst, visible] = useRemoveOnHidden(
    show,
    removeOnHidden,
    cache
  );

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/

  if (isRemove) {
    return <></>;
  }
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <Main
      show={visible}
      ref={ref}
      isTransition={isFirst ? firstAnimation : true}
      handleTransitionStart={handleTransitionStart}
      handleTransitionEnd={(status) => {
        handleTransitionEnd?.(status);
        endFn();
      }}
      handleTransitionCancel={(status) => {
        handleTransitionCancel?.(status);
        endFn();
      }}
      {...props}
    >
      {children}
    </Main>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */

const Main = forwardRef<
  HTMLDivElement | null,
  Omit<TransitionProps, "removeOnHidden" | "cache" | "firstAnimation"> & {
    isTransition: boolean;
  }
>(
  (
    {
      className,
      style,
      children,
      handleTransitionStart,
      handleTransitionEnd,
      handleTransitionCancel,
      animationType,
      enterActive,
      fromEnter,
      fromLeave,
      leaveActive,
      toEnter,
      toLeave,
      height,
      width,
      show,
      isTransition,
      delayOnEnter,
      delayOnLeave,
      ...props
    },
    ref
  ) => {
    Main.displayName = "Main";

    const msgId = useId(); //通讯id

    const cloneRef = useRef<HTMLDivElement | null>(null);

    const [dispatch, insertedAttr] = useCssTransition(
      (status) => {
        handleTransitionStart?.(status);

        const event = new CustomEvent<{ show: boolean }>(
          `${msgId}-transitionStart`,
          {
            detail: { show },
          }
        );
        document.dispatchEvent(event);
      },
      (status) => {
        handleTransitionEnd?.(status);

        const event = new CustomEvent<{ show: boolean }>(
          `${msgId}-transitionEnd`,
          {
            detail: { show },
          }
        );
        document.dispatchEvent(event);
      },
      (status) => {
        handleTransitionCancel?.(status);

        const event = new CustomEvent<{ show: boolean }>(
          `${msgId}-transitionCancel`,
          {
            detail: { show },
          }
        );
        document.dispatchEvent(event);
      },
      cloneRef,
      width,
      height,
      style,
      delayOnEnter,
      delayOnLeave
    );

    const dispatchRef = useLatest(dispatch);

    const isTransitionRef = useLatest(isTransition);

    useLayoutEffect(() => {
      dispatchRef.current({
        type: ActionType.SetClassNameAction,
        payload: {
          type: animationType,
          enterActive,
          fromEnter,
          fromLeave,
          leaveActive,
          toEnter,
          toLeave,
        },
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      animationType,
      enterActive,
      fromEnter,
      fromLeave,
      leaveActive,
      toEnter,
      toLeave,
    ]);

    useEffect(() => {
      dispatchRef.current({
        type: ActionType.SwitchVisibleStatusAction,
        payload: {
          value: show,
          isTransition: isTransitionRef.current,
        },
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    const setClassName = () => {
      const arr = structuredClone(insertedAttr.className);
      return arr.join(" ") + (className ? ` ${className}` : "");
    };

    return (
      <div
        ref={(el) => {
          cloneRef.current = el;
          if (typeof ref === "function") {
            ref(el);
          } else if (ref !== null && "current" in ref) {
            ref.current = el;
          }
        }}
        style={{ ...style, ...insertedAttr.style }}
        className={setClassName()}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Main.displayName = "Main";
