/**
 * @file
 * @date 2022-12-07
 * @author mingzhou.zhang
 * @lastModify  2022-12-07
 */

import { useEffect } from "react";
import { isFunction } from "@/functions/isFunction";
import { isDev } from "@/functions/isDev";
import { useLatest } from "./useLatest";

export const useUnmount = (fn: () => void) => {
  if (isDev && !isFunction(fn)) {
    console.error(
      `useUnmount expected parameter is a function, got ${typeof fn}`
    );
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};
