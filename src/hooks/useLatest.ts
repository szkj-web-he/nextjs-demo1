/**
 * @file 最新的数据，解决value作用域的问题
 * @date 2022-12-07
 * @author  mingzhou.zhang
 * @lastModify  2022-12-07
 */

import { useRef } from "react";

export const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};
