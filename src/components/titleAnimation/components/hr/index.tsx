/**
 * @file 文字下划线
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

export interface SpanHrEvents {
  toShow: () => Promise<boolean>;
  toHidden: () => Promise<boolean>;
}

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp = forwardRef<SpanHrEvents, unknown>((_, events) => {
  Temp.displayName = "SpanHr";
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const ref = useRef<HTMLDivElement | null>(null);

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
  /**
   * 圆点展示情况
   */
  const [pointShow, setPointShow] = useState(false);
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
      setShowStatus(true);

      if (status.current === "hidden") {
        animateEl.current?.cancel();
      }

      status.current = "show";
      const animateKeyframes: Keyframe[] = [
        {
          transform: `scaleX(0)`,
        },
        {
          transform: `scaleX(1)`,
        },
      ];

      const animateKeyframeOptions: KeyframeAnimationOptions = {
        duration: 150,
        iterations: 1,
        easing: "linear",
      };

      animateEl.current =
        ref.current?.animate(animateKeyframes, animateKeyframeOptions) ?? null;

      animateEl.current?.addEventListener("finish", () => {
        status.current = null;
        resolve(true);
        setPointShow(true);
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

      status.current = "hidden";
      setShowStatus(false);
      setPointShow(false);
      const animateKeyframes: Keyframe[] = [
        {
          transform: `scaleX(1)`,
        },
        {
          transform: `scaleX(0)`,
        },
      ];

      const animateKeyframeOptions: KeyframeAnimationOptions = {
        duration: 150,
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
    <div
      className={classNames(styles.titleAnimation_hr, {
        [styles.titleAnimation_hr__active]: showStatus,
      })}
      ref={ref}
    >
      <div
        className={classNames(styles.titleAnimation_point, {
          [styles.titleAnimation_point__active]: pointShow,
        })}
      />
    </div>
  );
});
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
Temp.displayName = "SpanHr";
