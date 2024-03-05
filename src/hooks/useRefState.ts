/**
 * @file 合并useRef和useState
 * @date 2024-02-24
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-24
 */

import {
  MutableRefObject,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";

export const useRefState = <T>(
  state: T
): [T, MutableRefObject<T>, (res: SetStateAction<T>) => void] => {
  const valueRef = useRef<T>(
    (() => {
      if (typeof state === "function") {
        return state();
      }
      return state;
    })()
  );

  const [value, setValue] = useState(state);

  valueRef.current = value;

  const changeFn = useCallback((params: SetStateAction<T>) => {
    setValue(params);
    if (typeof params === "function") {
      const val = (params as (prevState: T | undefined) => T)(valueRef.current);
      valueRef.current = val;
      return;
    }

    valueRef.current = structuredClone(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value, valueRef, changeFn];
};
