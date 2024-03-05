/**
 * @file 二级菜单是否打开
 * @date 2024-03-01
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-01
 */

import { createContext, useContext } from "react";

export const OpenSubMenus = createContext(false);

export const useOpenSubMenus = () => useContext(OpenSubMenus);

/**
 * 改变二级弹窗的打开状态
 */
export const ChangeOpenSubMenus = createContext<(status: boolean) => void>(
  () => undefined
);

export const useChangeOpenSubMenus = () => useContext(ChangeOpenSubMenus);
