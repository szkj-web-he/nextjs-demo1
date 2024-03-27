/**
 * @file
 * @date 2024-03-08
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-08
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import imgFailed from "@/assets/images/icon_imgFailed.png";
import { forwardRef } from "react";
import styles from "./style.module.scss";
import { ImportImageProps } from "@/types/image";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 图片列表
   */
  src?: ImportImageProps;

  /**
   * 图片名称
   */
  name?: string;
  /**
   * scaleX的值
   */
  scaleX: number;
  /**
   * 当loading状态发生变化时
   */
  onLoad: () => void;
  /**
   * 当图片加载失败时
   */
  onError: () => void;
  /**
   * 当鼠标按钮下时
   */
  onMouseDown: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  /**
   * 当手触摸时
   */
  onTouchStart: (e: React.TouchEvent<HTMLImageElement>) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp = forwardRef<HTMLImageElement | null, TempProps>(
  ({ src, scaleX, name, onLoad, onError, onMouseDown, onTouchStart }, ref) => {
    Temp.displayName = "ImgTemp";
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/

    /************* This section will include this component general function *************/

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
      <img
        src={src?.src ?? ""}
        className={styles.imageViewer_img}
        style={{
          transform: `scaleX(${scaleX})`,
        }}
        onLoad={() => {
          onLoad();
        }}
        onError={(e) => {
          e.currentTarget.src = imgFailed.src;
          onError();
        }}
        ref={ref}
        draggable={true}
        alt={name ?? ""}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />
    );
  }
);
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
Temp.displayName = "ImgTemp";
