/**
 * @file 首屏 活跃的下标
 * @date 2024-03-06
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-06
 */
"use client";

import { createContext, useContext } from "react";

export const ActiveIndexContext = createContext(0);

export const useIndex = () => useContext(ActiveIndexContext);
