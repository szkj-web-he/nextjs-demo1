/**
 * @file qeditor的明细
 * @date 2024-03-26
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from "react";
import Item from "../item";
import classNames from "@/functions/classNames";
import styles from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface TempProps {}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Temp: React.FC<TempProps> = () => {
  /* <------------------------------------ **** STATE START **** ------------------------------------ */
  /************* This section will include this component HOOK function *************/
  const [show, setShow] = useState(false);
  /* <------------------------------------ **** STATE END **** ------------------------------------ */
  /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
  /************* This section will include this component parameter *************/
  /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
  /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
  /************* This section will include this component general function *************/
  /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
  return (
    <Item
      index={1}
      icon={
        <div
          className={classNames(styles.page2_qEditorIconContainer, {
            [styles.page2_qEditorIconContainer__active]: show,
          })}
        >
          <div className={styles.page2_qEditorIconRect}>
            <svg
              width="21"
              height="11"
              viewBox="0 0 21 11"
              fill="none"
              className={styles.page2_qEditorIconLine}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9L5.75956 4.40687C5.87321 4.26802 6.0788 4.24974 6.21517 4.36636L11.4141 8.81249C11.5387 8.91904 11.7236 8.91419 11.8425 8.80126L19 2"
                stroke="white"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <svg
            width="34"
            height="22"
            viewBox="0 0 34 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.page2_qEditorIconRectBar}
          >
            <g filter="url(#filter0_ii_2_9891)">
              <path
                d="M4.52571 2.47735C4.86195 1.0269 6.15413 0 7.64304 0H26.357C27.8459 0 29.1381 1.0269 29.4743 2.47735L33.0907 18.0773C33.5557 20.0833 32.0325 22 29.9733 22H4.02668C1.96749 22 0.444319 20.0833 0.909343 18.0773L4.52571 2.47735Z"
                fill="url(#paint0_linear_2_9891)"
              />
            </g>
            <defs>
              <filter
                id="filter0_ii_2_9891"
                x="0.505195"
                y="-0.32"
                width="32.9896"
                height="22.64"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.32" dy="0.32" />
                <feGaussianBlur stdDeviation="0.16" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.806458 0 0 0 0 0.9875 0 0 0 0 0.941564 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_2_9891"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-0.32" dy="-0.32" />
                <feGaussianBlur stdDeviation="0.16" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0389584 0 0 0 0 0.77896 0 0 0 0 0.85 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_2_9891"
                  result="effect2_innerShadow_2_9891"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2_9891"
                x1="17"
                y1="0"
                x2="17"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3CBBC7" />
                <stop offset="1" stopColor="#67CDD6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      }
      handleEnter={() => {
        setShow(true);
      }}
      handleLeave={() => {
        setShow(false);
      }}
    >
      全球首创标准化专业数字化表单编辑器
    </Item>
  );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Temp;
