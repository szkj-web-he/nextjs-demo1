/**
 * @file 价格 界面的相关数据
 * @date 2024-03-07
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-07
 */

import { Button } from "@/components/btn";
import { Icon } from "@/components/icon";
import Link from "next/link";
import { navLinks } from "./navigationBar";
import styles from "@/app/(common)/quotation/_components/desk/components/pricingTable/style.module.scss";
import classNames from "@/functions/classNames";

export const priceList = (handleRedirectWebchat: () => void) => [
  {
    funcName: "总价",
    free: (
      <>
        <h3
          className={classNames(
            styles.quotation_ch3,
            styles.quotation_colorPrimary600
          )}
        >
          免费
        </h3>
        <Link
          href={navLinks.signIn}
          className={classNames(
            styles.quotation_gradientButton,
            styles.quotation_linkText
          )}
        >
          免费使用
        </Link>
      </>
    ),
    advanced: (
      <>
        <h3
          className={classNames(
            styles.quotation_ch3,
            styles.quotation_colorPrimary600
          )}
        >
          41999元/年
        </h3>
        <Button
          onClick={handleRedirectWebchat}
          className={styles.quotation_gradientButton}
        >
          咨询开通
        </Button>
      </>
    ),
    enterprise: (
      <>
        <h3
          className={classNames(
            styles.quotation_ch3,
            styles.quotation_colorPrimary600
          )}
        >
          69999元/年
        </h3>
        <Button
          onClick={handleRedirectWebchat}
          className={styles.quotation_gradientButton}
        >
          咨询开通
        </Button>
      </>
    ),
    customization: (
      <>
        <h3
          className={classNames(
            styles.quotation_ch3,
            styles.quotation_colorTextGradient
          )}
        >
          人数*单价
        </h3>
        <Button
          onClick={handleRedirectWebchat}
          className={styles.quotation_otherGradientButton}
        >
          咨询定制
        </Button>
      </>
    ),
  },
  {
    funcName: "自建脚本",
    free: <Icon type="notHave" color="#FF525D" />,
    advanced: <Icon type="notHave" color="#FF525D" />,
    enterprise: <Icon type="have" color="#3CBBC7" />,
    customization: <Icon type="have" color="#3CBBC7" />,
  },
  {
    funcName: "免费插件使用次数",
    free: <Icon type="notHave" color="#FF525D" />,
    advanced: <Icon type="have" color="#3CBBC7" />,
    enterprise: <Icon type="have" color="#3CBBC7" />,
    customization: <Icon type="have" color="#3CBBC7" />,
  },
  {
    funcName: "分类分级模板",
    free: <Icon type="notHave" color="#FF525D" />,
    advanced: <Icon type="have" color="#3CBBC7" />,
    enterprise: <Icon type="have" color="#3CBBC7" />,
    customization: <Icon type="have" color="#3CBBC7" />,
  },
  {
    funcName: "数据授权功能",
    free: <Icon type="notHave" color="#FF525D" />,
    advanced: <Icon type="have" color="#3CBBC7" />,
    enterprise: <Icon type="have" color="#3CBBC7" />,
    customization: <Icon type="have" color="#3CBBC7" />,
  },
  {
    funcName: "自定义链接功能",
    free: <Icon type="notHave" color="#FF525D" />,
    advanced: "3000次/年",
    enterprise: "1万次/年",
    customization: "3万次/年",
  },
  {
    funcName: "数据处理工作刷新时间可使用等级",
    free: "24小时及以上",
    advanced: "6小时及以上",
    enterprise: "1小时及以上",
    customization: "10分钟及以上",
  },
  {
    funcName: "数据处理工作刷新次数",
    free: "300次/年",
    advanced: "12000次/年",
    enterprise: "15000次/年",
    customization: <b className={styles.quotation_colorTextGradient}>定制化</b>,
  },
  {
    funcName: "储存空间",
    free: "累积5G以内",
    advanced: "累积80G以内",
    enterprise: "累积150G以内",
    customization: "累积200G以内",
  },
  {
    funcName: "短信",
    free: "200条/年",
    advanced: "6000条/年",
    enterprise: "12000条/年",
    customization: <b className={styles.quotation_colorTextGradient}>定制化</b>,
  },
  {
    funcName: "邮件",
    free: "1000封/年",
    advanced: "2万封/年",
    enterprise: "10万封/年",
    customization: <b className={styles.quotation_colorTextGradient}>定制化</b>,
  },
  {
    funcName: "视频储存空间",
    free: "2GB/年",
    advanced: "100GB/年",
    enterprise: "240GB/年",
    customization: <b className={styles.quotation_colorTextGradient}>定制化</b>,
  },
  {
    funcName: "视频转码时长",
    free: "200min/年",
    advanced: "4000min/年",
    enterprise: "9600min/年",
    customization: <b className={styles.quotation_colorTextGradient}>定制化</b>,
  },
  {
    funcName: "视频点播流量",
    free: "10GB/年",
    advanced: "800GB/年",
    enterprise: "2000GB/年",
    customization: <b className={styles.quotation_colorTextGradient}>定制化</b>,
  },
];

/**
 * 其它费用
 */
export const otherExpenses = [
  {
    index: 1,
    module: "自建脚本",
    des: {
      content:
        "在表单设计与数据预处理阶段，可根据需求自定义编辑脚本，以支持各种需求场景。",
    },
  },
  {
    index: "2",
    module: "免费插件使用次数",
    des: {
      content:
        "当设计表单时可使用免费插件提升数据收集效率，该表单每填写一次算作免费插件使用一次。",
      tips: "使用完毕后可额外购买，售价为0.0475元/次",
    },
  },
  {
    index: "3",
    module: "分类分级模版",
    des: {
      content:
        "使用分类模板，对表单中的数据做精细的标签化管理；分级模板可以定义数据的敏感级别。",
      tips: "仅对高级及以上版本开放",
    },
  },
  {
    index: "4",
    module: "数据授权功能",
    des: {
      content:
        "在样本分发阶段，编辑数据授权条款。开启数据授权功能后，代表收集的数据经由“被试”许可。",
      tips: "仅对高级及以上版本开放",
    },
  },
  {
    index: "5",
    module: "自定义链接功能",
    des: {
      content: "自定义收集样本的“开放链接”及“测试链接”的URL链接",
      tips: "仅对高级及以上版本开放",
    },
  },
  {
    index: "6",
    module: "数据处理工作刷新时间可用等级",
    des: {
      content: "自动获取已收集到的表单数据频率，最短时间间隔为每10分钟获取一次",
      tips: "仅对高级及以上版本开放",
    },
  },
  {
    index: "7",
    module: "数据处理工作刷新次数",
    des: {
      content:
        "可根据预设刷新时间间隔，自动获取已收集到的表单数据，并将其作为数据处理的数据源。",
      tips: "使用完毕后可额外购买，售价为0.195元/次",
    },
  },
  {
    index: "8",
    module: "储存空间",
    des: {
      content: "包含表单数据、数据处理文件的存储空间",
      tips: "使用完毕后可额外购买，售价为3元/GB",
    },
  },
  {
    index: "9",
    module: "短信",
    des: {
      content: "可用于发送短信验证码和业务通知类型的短信",
      tips: "使用完毕后可额外购买，售价为0.1元/条",
    },
  },
  {
    index: "10",
    module: "邮件",
    des: {
      content: "可用于发送短信验证码和业务邮件推送提醒的邮件",
      tips: "使用完毕后可额外购买，售价为0.003元/条",
    },
  },
  {
    index: "11",
    module: "视频储存空间",
    des: {
      content: "用来储存已上传的视频",
      tips: "使用完毕后可额外购买，售价为5元/GB",
    },
  },
  {
    index: "12",
    module: "视频转码时长",
    des: {
      content: "可对已上传的视频进行多码率转码，原视频时长即为视频转码时长。",
      tips: "使用完毕后可额外购买，售价为0.1元/分钟",
    },
  },
  {
    index: "13",
    module: "视频点播流量",
    des: {
      content: "在视频分发播放时，视频加载流量即为视频点播流量。",
      tips: "使用完毕后可额外购买，售价为0.6元/GB",
    },
  },
];

export const quoteSliderList = [
  {
    id: 0,
    text: "免费",
    version: "免费版",
    message: "限1个组织使用",
    bg: `linear-gradient(105.72deg, #ebebeb 0%, #bdbdbd 100%),
        linear-gradient(105.72deg, #76dde6 0%, #3cbbc7 100%)`,
    /**
     * 标识文字颜色不同
     */
    fontColor: "different",
  },
  {
    id: 1,
    text: "41999元/年",
    version: "高级版",
    message: "最多3个组织使用",
    bg: `linear-gradient(105.72deg, #76DDE6 0%, #3CBBC7 100%)`,
    /**
     * 标识文字颜色为白色
     */
    fontColor: "white",
  },
  {
    id: 2,
    text: "69999元/年",
    version: "企业版",
    message: "最多5个组织使用",
    bg: `linear-gradient(276.24deg, #22A6B3 0.56%, #50DAE5 99.55%)`,
    /**
     * 标识文字颜色为白色
     */
    fontColor: "white",
  },
  {
    id: 3,
    text: "人数*单价",
    version: "定制版",
    message: "大型企业",
    bg: `linear-gradient(270deg, #FF8F0F 0%, #FF7745 36.68%, #F2C94C 100%)`,
    /**
     * 标识文字颜色为白色
     */
    fontColor: "white",
    tips: (
      <div className={styles.quotation_pricingTableHeadTips}>
        <p>
          额外费用 <b>8</b> 折
        </p>
        <Icon type="queryLinear" />
      </div>
    ),
  },
];
