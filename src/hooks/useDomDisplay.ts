/**
 * @file 监听dom是否可见
 * @date 2023-06-08
 * @author xuejie.he
 * @lastModify xuejie.he 2023-06-08
 */

import { useEffect, useState } from "react";
import { useLatest } from "./useLatest";

const getThreshold = () => {
  const arr: number[] = [];
  let val = 0;
  while (val <= 1) {
    arr.push(val);
    val += 0.1;
  }
  return arr;
};

/**
 * 监听 当页面滚动时，设置相应的透明度
 * @param ref 被监听的元素
 * @param callback 当变得可见，或者不可见时的回调
 * @param dependencyList  useEffect的监听
 */
export const useDomDisplay = <T extends Element | null>(
  ref: React.MutableRefObject<T>,
  callback?: (res: IntersectionObserverEntry) => void,
  dependencyList?: React.DependencyList
): [number, boolean] => {
  const callbackRef = useLatest(callback);
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(1);
  useEffect(
    () => {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          callbackRef.current?.(entries[0]);

          const data = entries[0];
          if (data.intersectionRatio >= 0.5) {
            setOpacity(1);
          } else {
            setOpacity(Math.round(data.intersectionRatio * 200) / 100);
          }

          setShow(data.intersectionRatio > 0.5);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: getThreshold(),
        }
      );
      // 开始监听
      const node = ref.current;
      node && intersectionObserver.observe(node);
      return () => {
        node && intersectionObserver.unobserve(node);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencyList ? dependencyList : []
  );
  return [opacity, show];
};
