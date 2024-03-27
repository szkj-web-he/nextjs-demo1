/**
 * @file 图片变化
 * @date 2023-12-13
 * @author xuejie.he
 * @lastModify xuejie.he 2023-12-13
 */

import { mathSub, mathSum } from "@/functions/math";
import useEventListener from "@/hooks/useEventListener";
import { useLatest } from "@/hooks/useLatest";
import { useEffect, useMemo, useState } from "react";

export interface ImgTransformProps {
  /**
   * x偏移值
   */
  x: number;
  /**
   * x偏移值
   */
  y: number;
  /**
   * 缩放比例
   */
  scale: {
    x: number;
    y: number;
    z: number;
  };
  /**
   * 是否镜像翻转了
   */
  isMirror: boolean;
  /**
   * 旋转
   */
  rotate: number;
}

export interface ImgTransformEvents {
  /**
   * 镜像
   */
  mirror: () => void;
  /**
   * 旋转
   */
  rotate: () => void;
  /**
   * 缩小
   */
  shrink: () => void;
  /**
   * 放大
   */
  enlarge: () => void;
  /**
   * 还原
   */
  reset: () => void;
  /**
   * 移动
   */
  move: (moveX: number, moveY: number) => void;
  /**
   * 还原位置
   */
  restPosition: () => void;
}

export const useImgTransform = (
  src?: string
): [ImgTransformProps | undefined, ImgTransformEvents] => {
  /**
   * 图片的转化属性
   */
  const [imgTransformData, setImgTransformData] = useState<ImgTransformProps>({
    x: 0,
    y: 0,
    scale: {
      x: 1,
      y: 1,
      z: 1,
    },
    rotate: 0,
    isMirror: false,
  });

  const imgTransformDataRef = useLatest(imgTransformData);

  /**
   * 监听imgList变化，
   * 用id来标识，每个transform的状态
   */
  useEffect(() => {
    setImgTransformData({
      x: 0,
      y: 0,
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      rotate: 0,
      isMirror: false,
    });
  }, [src]);

  /**
   * 修改transformData
   */
  const dispatch = useMemo<ImgTransformEvents>(() => {
    return {
      /**
       * 镜像
       */
      mirror: () => {
        setImgTransformData((pre) => {
          return {
            ...pre,
            isMirror: !pre?.isMirror,
          };
        });
      },
      /**
       * 旋转
       */
      rotate: () => {
        setImgTransformData((pre) => {
          return {
            ...pre,
            rotate: pre.rotate + 90,
          };
        });
      },

      /**
       * 缩小
       */
      shrink: () => {
        const fn = (num: number) => {
          if (mathSub(num, 0.1) >= 1) {
            return mathSub(num, 0.1);
          }
          return num;
        };

        setImgTransformData((pre) => {
          const data = {
            ...pre,
            scale: {
              x: fn(pre.scale.x),
              y: fn(pre.scale.y),
              z: pre.scale.z,
            },
          };
          if (
            JSON.stringify(data) === JSON.stringify(imgTransformDataRef.current)
          ) {
            return pre;
          }
          return data;
        });
      },
      /**
       * 放大
       */
      enlarge: () => {
        setImgTransformData((pre) => {
          return {
            ...pre,
            scale: {
              x: mathSum(pre.scale.x, 0.1),
              y: mathSum(pre.scale.x, 0.1),
              z: pre.scale.z,
            },
          };
        });
      },
      /**
       * 还原
       */
      reset: () => {
        setImgTransformData((pre) => {
          const data = {
            x: 0,
            y: 0,
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
            rotate: 0,
            isMirror: false,
          };
          if (
            JSON.stringify(data) === JSON.stringify(imgTransformDataRef.current)
          ) {
            return pre;
          }
          return data;
        });
      },
      /**
       * 移动
       */
      move: (moveX, moveY) => {
        setImgTransformData((pre) => {
          //按缩放比例进行转化
          const xVal = Math.round(moveX / pre.scale.y);
          const yVal = Math.round(moveY / pre.scale.y);

          return {
            ...pre,
            x: pre.x + xVal,
            y: pre.y + yVal,
          };
        });
      },
      /**
       * 还原位置
       */
      restPosition: () => {
        setImgTransformData((pre) => {
          const data = {
            ...pre,
            x: 0,
            y: 0,
          };
          if (
            JSON.stringify(data) === JSON.stringify(imgTransformDataRef.current)
          ) {
            return pre;
          }
          return data;
        });
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 监听键盘 按下事件
   *
   * 执行收拾
   * + => 放大
   * - => 缩小
   */
  useEventListener(
    "keydown",
    (e) => {
      const key = e.key;

      if (key === "+") {
        //放大

        e.preventDefault();
        dispatch.enlarge();
        return;
      }
      if (key === "-") {
        //缩小
        e.preventDefault();
        dispatch.shrink();
        return;
      }
    },
    { current: document },
    { passive: false }
  );

  /**
   * 监听滚轮事件
   */
  useEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const val = e.deltaY;
      if (val < 0) {
        dispatch.enlarge();
        return;
      }
      if (val > 0) {
        dispatch.shrink();
        return;
      }
    },
    undefined,
    { passive: false }
  );

  return [imgTransformData, dispatch];
};
