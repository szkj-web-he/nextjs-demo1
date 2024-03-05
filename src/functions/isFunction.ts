/**
 * @file 判断是否是方法
 * @date 2024-02-26
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-26
 */

export const isFunction = (value: unknown): value is Function =>
  typeof value === "function";
