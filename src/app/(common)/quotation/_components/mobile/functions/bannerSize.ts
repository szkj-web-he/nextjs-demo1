/**
 * @file banner的尺寸
 * @date 2024-03-08
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-08
 */
export const bannerSize = (isLess670: boolean) => {
  if (isLess670) {
    return {
      width: 279,
      height: 148,
    };
  }
  return {
    width: 488,
    height: 259,
  };
};
