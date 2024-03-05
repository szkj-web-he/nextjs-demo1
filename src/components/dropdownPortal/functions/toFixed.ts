/**
 * @file 保留3位小数
 * @date 2024-02-27
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-27
 */

export const toFixed = (val: number): number => {
  return Math.round(val * 1000) / 1000;
};
