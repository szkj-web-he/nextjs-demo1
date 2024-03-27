/**
 * @file 页脚的相关数据
 * @date 2024-03-07
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-07
 */

import { navLinks } from "./navigationBar";

export const defaultProductsSet = [
  {
    label: "项目管理系统",
    link: navLinks.projectManager,
  },
  {
    label: "表单编辑系统",
    link: navLinks.qEditorDashboard,
  },
  {
    label: "样本分发系统",
    link: navLinks.dist,
  },
  {
    label: "表单数据处理系统",
    link: navLinks.dataProc,
  },
  {
    label: "表单插件系统",
    link: navLinks.plugin,
  },
];

export const defaultCompanySet = [
  {
    label: "我们提供的服务",
    link: `${navLinks.home}#service`,
  },
  {
    label: "我们的团队",

    link: `${navLinks.home}#teams`,
  },
  {
    label: "联系我们",
    link: `${navLinks.home}#contacts`,
  },
];

export const defaultResourcesSet = [
  {
    label: "市场",
    link: navLinks.market,
  },
  {
    label: "社区",
    link: navLinks.community,
  },
];

export const defaultRightLinkSet = [
  {
    label: "隐私政策",
    link: `${navLinks.home}policy`,
  },
  {
    label: "条款服务",
    link: `${navLinks.home}clause`,
  },
  {
    label: "数据与安全",
  },
  {
    label: "客户端管理设置",
  },
];

export const labelSet = [
  {
    label: "产品",
    data: defaultProductsSet,
  },
  {
    label: "公司",
    data: defaultCompanySet,
  },
  {
    label: "资源",
    data: defaultResourcesSet,
  },
];
