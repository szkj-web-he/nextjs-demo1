/**
 * @file 改变活跃的index
 * @date 2024-03-06
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-06
 */
"use client";
import { createContext, useContext } from "react";

export const ChangeActiveIndexContext = createContext<(num: number) => void>(
  () => undefined
);

export const useChangeIndex = () => useContext(ChangeActiveIndexContext);
