/**
 * @file
 * @date 2023-12-12
 * @author xuejie.he
 * @lastModify xuejie.he 2023-12-12
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { forwardRef, useImperativeHandle, useState } from "react";
import { CoverCore } from "../CoverCore";
import Main from "./components/main";
import styles from "./style.module.scss";
import { ImportImageProps } from "@/types/image";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface ImageViewerProps {
  /**
   * 图片链接
   */
  src: ImportImageProps;
  /**
   * 图片名称
   */
  name?: string;
}

export interface ImageViewerEvents {
  /**
   * 打开
   */
  open: () => void;
  /**
   * 关闭
   */
  close: () => void;
}

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const ImageViewer = forwardRef<
  ImageViewerEvents | null,
  ImageViewerProps
>(({ src, name }, events) => {
  ImageViewer.displayName = "ImageViewer";
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  /**
   * 弹框打开状态
   */
  const [open, setOpen] = useState(false);

  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/

  useImperativeHandle(events, () => {
    return {
      open: () => {
        setOpen(true);
      },
      close: () => {
        setOpen(false);
      },
    };
  });

  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/

  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <CoverCore
      show={open}
      removeOnHidden
      handleBgClick={() => {
        setOpen(false);
      }}
      zIndex={99}
      className={styles.imageViewer_wrapper}
    >
      <Main
        close={() => {
          setOpen(false);
        }}
        src={src}
        name={name}
      />
    </CoverCore>
  );
});
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
ImageViewer.displayName = "ImageViewer";
