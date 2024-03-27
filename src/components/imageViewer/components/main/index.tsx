/**
 * @file 预览的单个图片
 * @date 2023-12-13
 * @author xuejie.he
 * @lastModify xuejie.he 2023-12-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon } from "@/components/icon";
import { Skeleton } from "@/components/skeleton";
import { useDrag } from "@/hooks/useDrag";
import useEventListener from "@/hooks/useEventListener";
import { useLatest } from "@/hooks/useLatest";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { resetOutOfViewport } from "../../functions/resetOutOfViewport";
import { useImgTransform } from "../../hooks/useImgTransform";
import { LoadingStatus } from "../../types/loadStatus";
import Tools from "../tools";
import ImgTemp from "./components/ImgTemp";
import styles from "./style.module.scss";
import { ImportImageProps } from "@/types/image";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 图片
   */
  src?: ImportImageProps;
  /**
   * 关闭
   */
  close: () => void;
  /**
   * 图片名称
   */
  name?: string;
}

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ src, close, name }) => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/

  /**
   * 图片
   */
  const imgRef = useRef<HTMLImageElement | null>(null);
  /**
   * 图片 的 transform属性
   */
  const [transformData, transformDispatch] = useImgTransform(src?.src);

  /**
   * 上一次的点位
   */
  const point = useRef({
    x: 0,
    y: 0,
  });

  /**
   * 修改全局样式
   */
  const styleRef = useRef<HTMLStyleElement | null>(null);

  /**
   * 拖拽状态
   */
  const [isDrag, setIsDrag] = useState(false);

  /**
   * 图片加载状态
   */
  const [status, setStatus] = useState<LoadingStatus>("pending");

  /**
   * 最新的close
   */
  const closeRef = useLatest(close);

  /**
   * 拖拽事件
   */
  const [handleMouseDown, handleTouchStart] = useDrag(
    (e) => {
      // 开始拖拽
      setIsDrag(true);
      styleRef.current?.remove();

      point.current = {
        x: e.pageX,
        y: e.pageY,
      };

      const styleEl = document.createElement("style");
      styleEl.innerHTML = `
            * {
                cursor: pointer !important;
            }
            `;
      document.head.appendChild(styleEl);

      styleRef.current = styleEl;
    },
    (e) => {
      // 拖拽中
      e.preventDefault();

      const moveX = e.pageX - point.current.x;
      const moveY = e.pageY - point.current.y;
      point.current = {
        x: e.pageX,
        y: e.pageY,
      };
      transformDispatch.move(moveX, moveY);
    },
    () => {
      setIsDrag(false);
      styleRef.current?.remove();
      styleRef.current = null;
      // 拖拽结束
    },
    () => {
      setIsDrag(false);
      styleRef.current?.remove();
      styleRef.current = null;
      // 拖拽取消
    }
  );

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /**
   * 当拖拽结束后
   * 判断图片是否在视口之外
   * 如果是
   * 要还原位置
   */
  useEffect(() => {
    let timer: null | number = null;
    (() => {
      if (isDrag) {
        return;
      }
      timer = window.setTimeout(() => {
        timer = null;
        if (imgRef.current && resetOutOfViewport(imgRef.current)) {
          transformDispatch.restPosition();
        }
      }, 100);
    })();
    return () => {
      timer && window.clearTimeout(timer);
    };
  }, [isDrag, transformDispatch]);

  /**
   * 当展示的图片链接发生变化时
   */
  useLayoutEffect(() => {
    setStatus("pending");
  }, [src]);
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /**
   * 镜像的值
   */
  const mirrorVal = () => {
    if (typeof transformData?.isMirror === "boolean") {
      return transformData.isMirror ? -1 : 1;
    }
    return 1;
  };

  /**
   * 监听键盘 按下事件
   *
   * 执行手势
   * Esc => 关闭
   */
  useEventListener("keyup", (e) => {
    const key = e.key;

    if (key === "Escape") {
      closeRef.current();
      return;
    }
  });

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */

  return (
    <>
      <div
        className={styles.imageViewer_close}
        onClick={() => {
          close();
        }}
      >
        <Icon type="close" className={styles.imageViewer_closeIcon} />
      </div>

      {status === "pending" ? (
        <Skeleton variant="img" className={styles.imageViewer_loading} />
      ) : undefined}
      <div
        style={{
          transform: `scale3d(${transformData?.scale?.x ?? 1},${
            transformData?.scale?.y ?? 1
          },${transformData?.scale?.z ?? 1}) translate(${transformData?.x ?? 0}px,${
            transformData?.y ?? 0
          }px)`,
        }}
        className={styles.imageViewer_imgContainer}
      >
        <div
          className={styles.imageViewer_imgContainer}
          style={{
            transform: `rotate(${transformData?.rotate}deg)`,
          }}
        >
          <ImgTemp
            src={src}
            scaleX={mirrorVal()}
            onLoad={() => {
              setStatus("success");
            }}
            name={name}
            onError={() => {
              setStatus("failed");
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          />
        </div>
      </div>

      <Tools dispatch={transformDispatch} transform={transformData} />
    </>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
