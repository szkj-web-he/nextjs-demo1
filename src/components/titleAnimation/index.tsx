/**
 * @file 文字动效
 * @date 2024-03-06
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-06
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useLatest } from "@/hooks/useLatest";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Hr, { SpanHrEvents } from "./components/hr";
import Span, { SpanEvents } from "./components/span";
import styles from "./style.module.scss";
import classNames from "@/functions/classNames";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface TitleAnimationProps {
  /**
   * 文字
   */
  text: string;
  /**
   * 当动画结束的时候
   */
  handleAnimateEnd?: (show: boolean) => void;
  /**
   *
   */
  className?: string;
}

export interface TitleAnimationEvents {
  show: () => void;

  hidden: () => void;
}

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const TitleAnimation = forwardRef<
  TitleAnimationEvents,
  TitleAnimationProps
>(({ text, handleAnimateEnd, className }, events) => {
  TitleAnimation.displayName = "TitleAnimation";
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/

  /**
   * 转发的span事件
   */
  const spansEvent = useRef<SpanEvents[] | null>(null);
  /**
   * 当前动画进行到第几个了
   */
  const index = useRef(0);

  /**
   * 转发的下划线事件
   */
  const hrEvent = useRef<SpanHrEvents | null>(null);

  /**
   * 展示状态
   */
  const [show, setShow] = useState<boolean>();

  /**
   * 最新的handleAnimateEnd的方法
   */
  const handleAnimateEndRef = useLatest(handleAnimateEnd);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /**
   * 监听show的变化
   */
  useEffect(() => {
    let timer: number | null = null;
    /**
     * 展示的时候的 过渡结束的回调
     */
    const animateEndCallback = (i: number) => {
      if (i === text.length - 1) {
        handleAnimateEndRef.current?.(true);
      }
    };

    /**
     * 文字展示
     */
    const textToShow = (i: number = index.current) => {
      if (i >= text.length) {
        return;
      }
      const textItem = text[i];
      if (textItem === " ") {
        console.log("空文字");
        index.current = i;
        animateEndCallback(i);
        textToShow(i + 1);
        return;
      }
      const el = spansEvent.current?.[i];
      if (!el) {
        index.current = i;
        console.log("没有执行对象");
        animateEndCallback(i);
        textToShow(i + 1);
        return;
      }
      timer && window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        index.current = i;
        console.log(JSON.stringify({ text: text[i] }));
        el.toShow().finally(() => {
          animateEndCallback(i);
        });

        textToShow(i + 1);
      }, 17);
    };

    /**
     * 所有的开始展示
     */
    const toShow = () => {
      console.log("**************************");
      console.log("展示");
      if (index.current === 0) {
        console.log("下划线");
        hrEvent.current?.toShow().finally(() => {
          textToShow();
        });
      } else {
        textToShow();
      }
    };

    /**
     * 隐藏的时候的 过渡结束的回调
     */
    const animateEndCallbackWhenHidden = (i: number) => {
      if (i === 0) {
        console.log("下划线");
        hrEvent.current
          ?.toHidden()
          .finally(() => handleAnimateEndRef.current?.(false));
      }
    };

    /**
     *  隐藏
     */
    const toHidden = (i: number = index.current) => {
      console.log("**************************");
      console.log("隐藏");

      if (i < 0) {
        return;
      }

      const textItem = text[i];
      if (textItem === " ") {
        index.current = i;
        console.log("空文字");
        animateEndCallbackWhenHidden(i);
        toHidden(i - 1);
        return;
      }
      const el = spansEvent.current?.[i];
      if (!el) {
        index.current = i;
        console.log("没有执行对象");
        animateEndCallbackWhenHidden(i);
        toHidden(i - 1);
        return;
      }
      timer && window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        console.log(JSON.stringify({ text: text[i] }));
        index.current = i;
        el.toHidden();
        animateEndCallbackWhenHidden(i);
        toHidden(i - 1);
      }, 17);
    };

    if (show) {
      toShow();
    } else {
      toHidden();
    }

    return () => {
      timer && window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, text]);

  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/

  useImperativeHandle(events, () => {
    return {
      show: () => {
        setShow(true);
      },
      hidden: () => {
        setShow(false);
      },
    };
  });

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div className={classNames(className, styles.titleAnimation_wrapper)}>
      <span className={styles.titleAnimation_body}>
        {[...text].map((item, index) => {
          return (
            <Span
              key={index}
              text={item}
              ref={(event) => {
                if (!event) {
                  return;
                }
                const arr = spansEvent.current ? [...spansEvent.current] : [];
                arr.push(event);
                spansEvent.current = [...arr];
              }}
            />
          );
        })}
        <Hr ref={hrEvent} />
      </span>
    </div>
  );
});
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
TitleAnimation.displayName = "TitleAnimation";
