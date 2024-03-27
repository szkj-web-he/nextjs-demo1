/**
 * @file
 * @date 2024-03-07
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-07
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from "react";
import { Footer } from "./_components/footer";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
