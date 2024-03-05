/**
 * @file 下拉悬浮框的通用参数
 * @date 2024-02-27
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-27
 */

import { OffsetProps } from "@/components/dropdown/types/offset";
import { Placement } from "@/components/dropdown/types/placement";
import { TriangleProps } from "@/components/dropdown/types/triangle";

export interface PortalCommonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 挂载元素
   * 没有的话,会默认创建一个#r_portal的节点
   */
  mount?: Element;
  /**
   * 组件内容
   */
  children?: React.ReactNode;

  /**
   * width : 三角形的宽度
   * height : 三角形的高度
   * color : 三角形的背景色
   * offset : 三角形的偏移属性
   */
  triangle?: TriangleProps;
  /**
   * 悬浮框在原来位置上的偏移属性
   */
  offset?: OffsetProps;

  /**
   * 起点位置
   */
  placement?: Placement;
  /**
   * 主轴
   * 是垂直展开的 还是水平展开
   */
  direction?: "vertical" | "horizontal";
  /**
   * 当过渡动画结束时
   */
  handleTransitionEnd?: () => void;
  /**
   * 当过渡动画开始时
   */
  handleTransitionStart?: () => void;
  /**
   * 当过渡动画取消时
   */
  handleTransitionCancel?: () => void;
  /**
   * 动画类型，
   * 是否是 淡入淡出
   */
  animate?: "fade";
  /**
   * 悬浮框的 body的className
   */
  bodyClassName?: string;
}
