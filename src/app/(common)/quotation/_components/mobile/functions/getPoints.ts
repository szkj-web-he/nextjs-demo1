/**
 * @file 设置每个banner的坐标
 * @date 2024-03-08
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-08
 */

import { quoteSliderList } from "@/defaultData/quotation";
import { PointProps } from "../types/point";

/**
 * 设置默认的point数据
 * @param currentIndex
 * @param bannerWidth
 *
 * 只能用于quoteSliderList.length为4的情况
 */
export const getPoints = (currentIndex: number, bannerWidth: number) => {
  const arr: PointProps[] = [];
  arr[currentIndex] = {
    scale: 1,
    x: 0,
    zIndex: 1,
  };
  let i = currentIndex + 1;
  let index = 1;

  while (i !== currentIndex && index < quoteSliderList.length) {
    if (i > quoteSliderList.length - 1) {
      i = 0;
    }

    arr[i] = {
      scale: 0.8,
      x: bannerWidth * (2 - index) + 24 * (2 - index),
      zIndex: 0,
    };
    ++i;
    ++index;
  }
  return arr;
};
