import { NavTool } from "@/components/navTool";
import { Navigation } from "@/components/navigation";
import { alipuhui, roboto } from "@/functions/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dataReachable",
  /**
   * seo
   * 长度 150-160 最优
   */
  description: "DataReachable",
  abstract: "DataReachable",
  /**
   * seo 关键词
   */
  keywords: [
    "dataReachable",
    "datareachable",
    "数据资产",
    "数字化",
    "数支",
    "数支互联",
    "数支互联科技",
    "数支（武汉）互联科技",
    "数支（武汉）互联科技有限公司",
  ],
  /**
   * 爬虫爬取的方式
   */
  robots: { index: true, follow: true },
  icons: [
    { rel: "icon", url: "'./favicon.ico'" },
    {
      rel: "apple-touch-icon",
      sizes: "192x192",
      url: "./icon.png",
      type: "image/png",
    },
  ],
  /**
   * 给爬虫提供网页相关信息
   *
   * 用于定义当网页内容被分享到使用 Open Graph 协议的社交媒体平台（如 Facebook, Twitter, Pinterest 等）时显示的标题。
   */
  openGraph: {
    // 网页类型
    type: "website",
    description: "DataReachable",
    siteName: "dataReachable",
    title: "dataReachable",
  },
};

interface RootLayoutProps {
  /**
   * 内容
   */
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      style={{
        fontSize: "10px",
      }}
    >
      <body
        style={{
          fontFamily: `${roboto.style.fontFamily},${alipuhui.style.fontFamily},-apple-system,
  BlinkMacSystemFont,
  "Helvetica",
  "Arial",
  "Calibri",
  "Segoe UI",
  "Ping Fang SC",
  "Microsoft Yahei"`,
        }}
      >
        <div id="root">
          <Navigation />
          {children}
          <NavTool />
        </div>
      </body>
    </html>
  );
}
