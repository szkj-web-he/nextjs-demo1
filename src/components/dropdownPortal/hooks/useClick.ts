/**
 * @file 处理从btn传过来的点击事件
 * @date 2023-03-08
 * @author xuejie.he
 * @lastModify xuejie.he 2023-03-08
 */

import { useDropdownMsgId } from "@/components/dropdown";
import { joinMsgId } from "@/components/dropdownBtn/functions/joinStr";
import {
  ClickEvent,
  DropdownMsgType,
} from "@/components/dropdownBtn/functions/type";
import { useLatest } from "@/hooks/useLatest";
import { useEffect } from "react";

export const useBtnClick = (
  needToDo: boolean,
  show: boolean,
  btnDisable: boolean,
  changeVisible: (res: boolean) => void,
  setBtnId: (res: string) => void,
  btnId?: string,
  eventId?: string
) => {
  const msgId = useDropdownMsgId();

  const btnDisableRef = useLatest(btnDisable);

  const changeVisibleRef = useLatest(changeVisible);

  const showRef = useLatest(show);

  const setBtnIdRef = useLatest(setBtnId);

  const btnIdRef = useLatest(btnId);

  useEffect(() => {
    /**
     * 接收 从btn那里传过来的 click事件
     */
    const fn = (e: Event) => {
      const detailData = (e as CustomEvent<ClickEvent>).detail;
      /**
       * 事件类型相同时
       *
       * 当btn被禁用
       * 不能展开
       * 可以关闭
       *
       */
      if (detailData.event === DropdownMsgType.click) {
        if (btnDisableRef.current) {
          if (showRef.current) {
            changeVisibleRef.current(false);
          }
        } else {
          if (btnIdRef.current === detailData.id) {
            changeVisibleRef.current(!showRef.current);
          } else {
            changeVisibleRef.current(true);
          }

          /**
           * 当不被禁用时
           * 每次点击的btn id得覆盖
           */
          setBtnIdRef.current(detailData.id);
        }
      }
    };

    const msgName = joinMsgId(msgId, eventId);
    if (needToDo) {
      document.addEventListener(msgName, fn);
    }
    return () => {
      document.removeEventListener(msgName, fn);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId, msgId, needToDo]);
};
