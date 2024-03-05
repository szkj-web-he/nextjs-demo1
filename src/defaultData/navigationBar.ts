export interface LinkProps {
  /**
   * 官网
   */
  home: string;
  /**
   * 专家委员会
   */
  expertPanel: string;
  /**
   * 报价
   */
  quotation: string;
  /**
   * 注册
   */
  signUp: string;
  /**
   * 登录
   */
  signIn: string;

  profile: string;
  dashboard: string;
  projectManager: string;
  qEditor: string;
  qEditorDashboard: string;
  dist: string;
  plugin: string;
  market: string;
  community: string;
  analysis: string;
  dataProc: string;
  dataCollect: string;
  userInfo: string;
  organization: string;
  contract: string;
}

let defaultLink: LinkProps = {
  home: "https://dev.datareachable.cn/",
  signUp: "https://dev-signup.datareachable.cn/v2/dev",
  signIn: "https://dev-dashboard.datareachable.cn/v2/dev",

  profile: "https://dev-profile.datareachable.cn/v2/dev",
  dashboard: "https://dev-dashboard.datareachable.cn/v2/dev",
  projectManager: "https://dev-spm.datareachable.cn/v2/dev",
  qEditor: "https://dev-qeditor.datareachable.cn/v2/dev",
  qEditorDashboard: "https://dev-qdashboard.datareachable.cn/v2/dev",
  dist: "https://dev-dist.datareachable.cn/v2/dev",
  plugin: "https://dev-plugin-system.datareachable.cn/v2-dev",
  market: "https://dev-market.datareachable.cn/v2/dev",
  community: "https://dev-cmty.datareachable.cn/v2/dev",
  analysis: "", //停用的项目
  dataProc: "https://dev-data-proc.datareachable.cn/v2/dev",

  dataCollect: "https://dev-datacoll.datareachable.cn/v2/dev",
  userInfo: "https://dev-profile.datareachable.cn/v2/dev/profile/user",
  organization:
    "https://dev-profile.datareachable.cn/v2/dev/profile/organization",
  contract: "https://dev-profile.datareachable.cn/v2/dev/profile/contract",

  expertPanel: "https://dev.datareachable.cn/committeeOfExperts",
  quotation: "https://dev.datareachable.cn/quotation",
};

switch (process.env.ENV) {
  case "v2_dev":
    defaultLink = Object.assign(
      {},
      { ...defaultLink },
      {
        home: "https://dev.datareachable.cn/",
        signUp: "https://dev-signup.datareachable.cn/v2/dev",

        profile: "https://dev-profile.datareachable.cn/v2/dev",
        dashboard: "https://dev-dashboard.datareachable.cn/v2/dev",
        projectManager: "https://dev-spm.datareachable.cn/v2/dev",
        qEditor: "https://dev-qeditor.datareachable.cn/v2/dev",
        qEditorDashboard: "https://dev-qdashboard.datareachable.cn/v2/dev",
        dist: "https://dev-dist.datareachable.cn/v2/dev",
        plugin: "https://dev-plugin-system.datareachable.cn/v2-dev",
        market: "https://dev-market.datareachable.cn/v2/dev",
        community: "https://dev-cmty.datareachable.cn/v2/dev",
        analysis: "", //停用的项目
        dataProc: "https://dev-data-proc.datareachable.cn/v2/dev",

        dataCollect: "https://dev-datacoll.datareachable.cn/v2/dev",
        userInfo: "https://dev-profile.datareachable.cn/v2/dev/profile/user",
        organization:
          "https://dev-profile.datareachable.cn/v2/dev/profile/organization",
        contract:
          "https://dev-profile.datareachable.cn/v2/dev/profile/contract",
        expertPanel: "https://dev.datareachable.cn/committeeOfExperts",
        quotation: "https://dev.datareachable.cn/quotation",
      }
    );
    break;

  case "production":
    defaultLink = Object.assign(
      {},
      { ...defaultLink },
      {
        home: "https://www.datareachable.cn/",
        signUp: "https://signup.datareachable.cn/v2/stable",
        signIn: "https://dashboard.datareachable.cn/v2/stable",
        profile: "https://profile.datareachable.cn/v2/stable",
        dashboard: "https://dashboard.datareachable.cn/v2/stable",
        projectManager: "https://spm.datareachable.cn/v2/stable",
        qEditor: "https://qeditor.datareachable.cn/v2/stable",
        qEditorDashboard: "https://qdashboard.datareachable.cn/v2/stable",
        dist: "https://dist.datareachable.cn/v2/stable",
        plugin: "https://plugin-system.datareachable.cn/v2-stable",
        market: "https://market.datareachable.cn/v2/stable",
        community: "https://cmty.datareachable.cn/v2/stable",
        analysis: "", //停用的项目
        dataProc: "https://data-proc.datareachable.cn/v2/stable",

        dataCollect: "https://datacoll.datareachable.cn/v2/stable",
        userInfo: "https://profile.datareachable.cn/v2/stable/profile/user",
        organization:
          "https://profile.datareachable.cn/v2/stable/profile/organization",
        contract: "https://profile.datareachable.cn/v2/stable/profile/contract",
        expertPanel: "https://www.datareachable.cn/committeeOfExperts",
        quotation: "https://www.datareachable.cn/quotation",
      }
    );
    break;
  case "v2_test":
    defaultLink = Object.assign(
      {},
      { ...defaultLink },
      {
        home: "https://test.datareachable.cn/",
        signUp: "https://dev-signup.datareachable.cn/v2/test",
        signIn: "https://dev-dashboard.datareachable.cn/v2/test",
        profile: "https://dev-profile.datareachable.cn/v2/test",
        dashboard: "https://dev-dashboard.datareachable.cn/v2/test",
        projectManager: "https://dev-spm.datareachable.cn/v2/test",
        qEditor: "https://dev-qeditor.datareachable.cn/v2/test",
        qEditorDashboard: "https://dev-qdashboard.datareachable.cn/v2/test",
        dist: "https://dev-dist.datareachable.cn/v2/test",
        plugin: "https://dev-plugin-system.datareachable.cn/v2-test",
        market: "https://dev-market.datareachable.cn/v2/test",
        community: "https://dev-cmty.datareachable.cn/v2/test",
        analysis: "", //停用的项目
        dataProc: "https://dev-data-proc.datareachable.cn/v2/test",

        dataCollect: "https://dev-datacoll.datareachable.cn/v2/test",
        userInfo: "https://dev-profile.datareachable.cn/v2/test/profile/user",
        organization:
          "https://dev-profile.datareachable.cn/v2/test/profile/organization",
        contract:
          "https://dev-profile.datareachable.cn/v2/test/profile/contract",
        expertPanel: "https://test.datareachable.cn/committeeOfExperts",
        quotation: "https://test.datareachable.cn/quotation",
      }
    );
    break;
  default:
    break;
}

defaultLink.market = `${defaultLink.market as string}/tourist`;
defaultLink.community = `${defaultLink.community as string}/tourist`;

export const navLinks = defaultLink;

export interface SubMenuProps {
  label: string;
  key:
    | "ProjectManager"
    | "QEditor"
    | "Distribution"
    | "AnalysisReport"
    | "PlugInEditor";
}

/**
 * "产品"下的二级导航
 */
export const subMenus: Array<SubMenuProps> = [
  { label: "项目管理", key: "ProjectManager" },
  { label: "表单编辑系统", key: "QEditor" },
  { label: "样本分发系统", key: "Distribution" },
  { label: "表单数据处理系统", key: "AnalysisReport" },
  { label: "表单插件系统", key: "PlugInEditor" },
];
