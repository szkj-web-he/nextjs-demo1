/**
 * @file 全局样式文件
 * @date 2024-02-27
 * @author xuejie.he
 * @lastModify xuejie.he 2024-02-27
 */

interface Window extends Window {
  clinkWebchatOptions:
    | {
        options: {
          accessId?: string;
          language?: string;
        };
      }
    | undefined;

  ClinkChatWeb:
    | {
        openSessionWindow: () => void;
      }
    | undefined;
}

declare module "*.png" {
  const value: string;
  export = value;
}
