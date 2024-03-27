/**
 * @file 展示手机端的界面
 * @date 2024-03-07
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-07
 */

import { useEffect, useState } from "react";
import useEventListener from "./useEventListener";

export const useMobile = () => {
  const [show, setShow] = useState<boolean>();

  useEffect(() => {
    setShow(window.matchMedia("(max-width: 1024px)").matches);
  }, []);

  useEventListener("resize", () => {
    setShow(window.matchMedia("(max-width: 1024px)").matches);
  });
  return show;
};
