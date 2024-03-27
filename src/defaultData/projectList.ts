/**
 * @file 项目列表
 * @date 2024-03-27
 * @author xuejie.he
 * @lastModify xuejie.he 2024-03-27
 */
import iconType from "@/components/icon/unit/customFontIcon";
export const projectList: Array<{
  icon: keyof typeof iconType;
  content: string;
}> = [
  {
    icon: "projectRelated",
    content: "项目管理系统",
  },
  {
    icon: "pen",
    content: "表单编辑系统",
  },
  {
    icon: "plugin1",
    content: "表单插件系统",
  },
  {
    icon: "share1",
    content: "样本分发系统",
  },
  {
    icon: "plugin",
    content: "表单数据收集系统",
  },
  {
    icon: "analysis1",
    content: "表单数据处理系统",
  },
];
