/**
 * @file 自定义发送的事件类型
 * @date 2024-02-27
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-27
 */
/**
 * 改变展示状态
 */
interface CustomChangeShowEvent {
  event: "changeShow";
  id: string;
}

/**
 * 点击和右击的事件
 */
interface ClickEvent {
  event: "click" | "contextmenu";
  id: string;
  eventId: string;
  todo: boolean;
}

/**
 * 移入/移出
 * 获焦/失焦
 * 的事件
 */
interface MouseEvent {
  event: "mouseenter" | "mouseleave" | "focus" | "blur";
  id: string;
  eventId: string;
}

export type CustomEventAction = MouseEvent | CustomChangeShowEvent | ClickEvent;
