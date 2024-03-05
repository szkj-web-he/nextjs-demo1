/**
 * @file 安装字体
 * @date 2024-02-24
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-24
 */

import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  subsets: [
    "latin",
    "latin-ext",
    "greek-ext",
    "vietnamese",
    "greek",
    "cyrillic",
    "cyrillic-ext",
  ],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const alipuhui = localFont({
  src: [
    {
      path: "../assets/font/puhui/Alibaba-PuHuiTi-Light.ttf",
      weight: "300",
    },
    {
      path: "../assets/font/puhui/Alibaba-PuHuiTi-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/font/puhui/Alibaba-PuHuiTi-Medium.ttf",
      weight: "500",
    },
    {
      path: "../assets/font/puhui/Alibaba-PuHuiTi-Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/font/puhui/Alibaba-PuHuiTi-Heavy.ttf",
      weight: "900",
    },
  ],
  variable: "--font-alipuhui",
  display: "swap",
});

export { roboto, alipuhui };
