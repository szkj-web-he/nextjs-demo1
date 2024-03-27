/**
 * @file banner轮播
 * @date 2024-03-08
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-08
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { quoteSliderList } from "@/defaultData/quotation";
import React, { useEffect, useRef, useState } from "react";
import quote from "@/assets/images/spr_quote.png";
import Image from "next/image";
import styles from "./style.module.scss";
import classNames from "@/functions/classNames";
import useEventListener from "@/hooks/useEventListener";
import { bannerSize } from "../../functions/bannerSize";
import { useRefState } from "@/hooks/useRefState";
import { PointProps } from "../../types/point";
import { getPoints } from "../../functions/getPoints";
import { PointProp, useDrag } from "@/hooks/useDrag";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [isTouch, setIsTouch] = useState(false);

  /**
   * 设置每个item的位置
   */
  const [points, pointsRef, setPoints] = useRefState<PointProps[] | null>(null);

  /**
   * 以670作为分界线
   */
  const [isLess670, setIsLess670] = useState(true);

  /**
   * 当前显示的第几个
   */
  const [currentIndex, currentIndexRef, setCurrentIndex] = useRefState(0);

  /**
   * 开始的点位信息
   */
  const startData = useRef<PointProp>();

  /**
   * 滑动
   */
  const [handleMouseDown, handleTouchStart] = useDrag(
    (res) => {
      startData.current = res;
    },
    (e) => {
      const startPoint = startData.current;
      if (!startPoint) {
        return;
      }

      if (e.pageX - startPoint.pageX <= e.pageY - startPoint.pageY) {
        //不是水平滑动
        return;
      }

      if (e.pageX > startPoint.pageX) {
        //向右
      } else if (e.pageX < startPoint.pageX) {
        //向左
      }
    },
    () => {},
    () => {}
  );
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/

  useEffect(() => {
    setIsLess670(window.matchMedia("(max-width: 670px)").matches);
  }, []);
  useEventListener("resize", () => {
    setIsLess670(window.matchMedia("(max-width: 670px)").matches);
  });

  /**
   * 见提供
   */
  useEffect(() => {
    const main = () => {
      const sizeData = bannerSize(isLess670);
      setPoints(getPoints(currentIndexRef.current, sizeData.width));
    };
    if (!isTouch) {
      main();
    }
  }, [isLess670, isTouch]);

  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/

  const bannerSizeData = bannerSize(isLess670);

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <div
      className={styles.quotation_swipeWrapper}
      style={{
        width: `${bannerSizeData.width}px`,
        height: `${bannerSizeData.height}px`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {quoteSliderList.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classNames(
              styles.quotation_swipeItem,
              styles[`quotation_swipeItem__${item.fontColor}`],
              {
                [styles.quotation_swipeItem__transition]: !isTouch,
              }
            )}
            style={{
              background: item.bg,
              transform: `scale(${points?.[index]?.scale})`,
              left: `${points?.[index]?.x}px`,
              zIndex: `${points?.[index]?.zIndex}`,
            }}
          >
            {item.tips}
            <Image
              src={quote}
              alt=""
              className={styles.quotation_swipeItem__img}
            />
            <h2 className={styles.quotation_swipeItem__version}>
              {item.version}
            </h2>
            <h1 className={styles.quotation_swipeItem__price}>{item.text}</h1>
            <p className={styles.quotation_swipeItem__des}>{item.message}</p>
          </div>
        );
      })}
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
