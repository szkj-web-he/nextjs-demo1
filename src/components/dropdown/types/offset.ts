/**
 * @file 偏移属性
 * @date 2024-02-27
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-27
 */

export interface OffsetProps {
  x?:
    | number
    | ((
        val: number,
        width: { triangle: number; root: number; kite: number }
      ) => number);
  y?:
    | number
    | ((
        val: number,
        height: { triangle: number; root: number; kite: number }
      ) => number);
}
