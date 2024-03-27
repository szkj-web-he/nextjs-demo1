/**
 * @file 图片预览的工具
 * @date 2023-12-13
 * @author xuejie.he
 * @lastModify xuejie.he 2023-12-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { Icon } from "@/components/icon";
import React from "react";
import Btn from "../btn";
import styles from "./style.module.scss";
import {
  ImgTransformEvents,
  ImgTransformProps,
} from "../../hooks/useImgTransform";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {
  /**
   * 转化属性
   */
  transform?: ImgTransformProps;
  /**
   *
   */
  dispatch: ImgTransformEvents;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = ({ transform, dispatch }) => {
  return (
    <div className={styles.imageViewer_tools}>
      <Btn
        tipsText={"镜像"}
        onClick={() => {
          dispatch.mirror();
        }}
        active={transform?.isMirror}
      >
        <Icon type="mirror" />
      </Btn>
      <Btn
        tipsText={"旋转"}
        active={!!transform?.rotate}
        onClick={() => {
          dispatch.rotate();
        }}
      >
        <Icon type="rotate" />
      </Btn>
      <Btn
        tipsText={"缩小"}
        disabled={
          typeof transform?.scale.y === "number" && transform.scale.y <= 1
        }
        onClick={() => {
          dispatch.shrink();
        }}
      >
        <Icon
          icon={{
            iconName: "shrink",
            icon: [20, 21, [], "shrink123456", ""],
            pathList: [
              {
                d: "M5.52413 8.02577C5.17345 8.02577 4.88917 8.30379 4.88917 8.64675C4.88917 8.98971 5.17345 9.26773 5.52413 9.26773H11.8737C12.2244 9.26773 12.5087 8.98971 12.5087 8.64675C12.5087 8.30379 12.2244 8.02577 11.8737 8.02577H5.52413Z",
              },
              {
                d: "M8.69897 17.1538C10.7583 17.1538 12.6504 16.454 14.1404 15.2843L18.9163 19.9575C19.1642 20.2 19.5662 20.2 19.8141 19.9575C20.062 19.7149 20.062 19.3216 19.8141 19.0791L15.071 14.438C16.5149 12.9194 17.3979 10.8838 17.3979 8.64658C17.3979 3.9482 13.5033 0.139404 8.69897 0.139404C3.89466 0.139404 0 3.9482 0 8.64658C0 13.345 3.89466 17.1538 8.69897 17.1538ZM8.69897 15.9118C12.802 15.9118 16.128 12.659 16.128 8.64658C16.128 4.63414 12.802 1.38136 8.69897 1.38136C4.59599 1.38136 1.26992 4.63414 1.26992 8.64658C1.26992 12.659 4.59599 15.9118 8.69897 15.9118Z",
                fillRule: "evenodd",
                clipRule: "evenodd",
              },
            ],
          }}
        />
      </Btn>
      <div className={styles.imageViewer_scaleValue}>
        {Math.round((transform?.scale.y ?? 1) * 100)}%
      </div>

      <Btn
        tipsText={"放大"}
        onClick={() => {
          dispatch.enlarge();
        }}
        active={
          typeof transform?.scale.y === "number" && transform?.scale.y > 1
        }
      >
        <Icon type={"enlarge"} fontSize="1.9rem" />
      </Btn>
      <Btn
        tipsText={"原始大小"}
        onClick={() => {
          dispatch.reset();
        }}
      >
        <Icon type="magnify" fontSize="1.8rem" />
      </Btn>
    </div>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
