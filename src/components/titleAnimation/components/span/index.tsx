/**
 * @file 单个文字
 * @date 2024-03-06
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-06
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import classNames from "@/functions/classNames";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 单个文字
   */
  text: string;
}

export interface SpanEvents {
  toShow: () => Promise<boolean>;
  toHidden: () => Promise<boolean>;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp = forwardRef<SpanEvents, TempProps>(({ text }, events) => {
  Temp.displayName = "TitleItem";
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const ref = useRef<HTMLSpanElement | null>(null);

  /**
   * 动画执行对象
   */
  const animateEl = useRef<Animation | null>(null);
  /**
   * 执行状态
   */
  const status = useRef<"show" | "hidden" | null>(null);

  /**
   * 展示状态
   */
  const [showStatus, setShowStatus] = useState(false);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/

  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /**
   * 展示动画
   */
  const show = () => {
    return new Promise<boolean>((resolve) => {
      if (status.current === "show") {
        return;
      }

      if (status.current === "hidden") {
        animateEl.current?.cancel();
      }
      setShowStatus(true);
      status.current = "show";
      const animateKeyframes: Keyframe[] = [
        {
          opacity: 0,
          transform: `translateY(50%)`,
        },
        {
          opacity: 1,
          transform: `translateY(0)`,
        },
      ];

      const animateKeyframeOptions: KeyframeAnimationOptions = {
        duration: 300,
        iterations: 1,
        easing: "ease",
      };

      animateEl.current =
        ref.current?.animate(animateKeyframes, animateKeyframeOptions) ?? null;

      animateEl.current?.addEventListener("finish", () => {
        status.current = null;
        resolve(true);
      });

      animateEl.current?.addEventListener("cancel", () => {
        status.current = null;
        resolve(false);
      });

      animateEl.current?.addEventListener("remove", () => {
        status.current = null;
        resolve(false);
      });
    });
  };

  /**
   * 隐藏动画
   */
  const hidden = () => {
    return new Promise<boolean>((resolve) => {
      if (status.current === "hidden") {
        return;
      }

      if (status.current === "show") {
        animateEl.current?.cancel();
      }
      setShowStatus(false);
      status.current = "hidden";
      const animateKeyframes: Keyframe[] = [
        {
          opacity: 1,
          transform: `translateY(0%)`,
        },
        {
          opacity: 0,
          transform: `translateY(50%)`,
        },
      ];

      const animateKeyframeOptions: KeyframeAnimationOptions = {
        duration: 200,
        iterations: 1,
        easing: "linear",
      };

      animateEl.current =
        ref.current?.animate(animateKeyframes, animateKeyframeOptions) ?? null;
      animateEl.current?.addEventListener("finish", () => {
        status.current = null;
        resolve(true);
      });
      animateEl.current?.addEventListener("cancel", () => {
        status.current = null;
        resolve(false);
      });
      animateEl.current?.addEventListener("remove", () => {
        status.current = null;
        resolve(false);
      });
    });
  };

  useImperativeHandle(events, () => {
    return {
      toShow: () => {
        return show();
      },
      toHidden: () => {
        return hidden();
      },
    };
  });

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <span
      ref={ref}
      className={classNames(styles.titleAnimation_span, {
        [styles.titleAnimation_spanHidden]: !showStatus,
      })}
    >
      {text}
    </span>
  );
});
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
Temp.displayName = "TitleItem";
