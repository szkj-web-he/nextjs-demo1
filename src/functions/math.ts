/**
 * @file 解决 IEEE 754导致的精度丢失的bug
 * @date 2023-01-16
 * @author xuejie.he
 * @lastModify xuejie.he 2023-01-16
 */

/**
 * 找出最小的number
 */
const findMin = (arr: Array<number>) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    if (val < min) {
      min = val;
    }
  }
  return min;
};

/**
 * 获取小数位
 * @param args
 */
const fetchDecimal = (num: number) => {
  const numStr = num.toString();
  return numStr.includes(".") ? numStr.split(".")[1].length : 0;
};

/**
 * 将所有的数字扩大相应的倍数
 *
 * 产生新的数字
 */

const toBigForNumber = (arr: Array<number>, type: "+" | "-") => {
  const minVal = findMin(arr);
  const length = fetchDecimal(minVal);
  const expansion = 10 ** length;

  let total = arr[0] * expansion;
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i] * expansion;
    if (type === "-") {
      total -= value;
    } else {
      total += value;
    }
  }
  return total / expansion;
};

/**
 * 相加
 */
const sum = (...args: Array<number>) => {
  return toBigForNumber(args, "+");
};

/**
 * 相减
 */
const sub = (...args: Array<number>) => {
  return toBigForNumber(args, "-");
};

/**
 * 解决部分 ieee 754丢失精度
 *  加
 */
export const mathSum = sum;
/**
 * 解决部分 ieee 754丢失精度
 * 减
 */
export const mathSub = sub;
