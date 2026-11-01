export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export const applicationProcess: ProcessStep[] = [
  {
    step: 1,
    title: "免费咨询",
    description:
      "与留学顾问一对一沟通，了解你的学历背景、语言水平、留学目标及预算，为你量身定制留学方案。",
    duration: "1-2天",
  },
  {
    step: 2,
    title: "方案定制",
    description:
      "根据咨询结果推荐3-5所最适合的学校，详细对比各校优势、费用、地理位置等信息，协助你做出最优选择。",
    duration: "3-7天",
  },
  {
    step: 3,
    title: "学校申请",
    description:
      "准备出愿材料（履历书、毕业证明、成绩单等），向日方学校提交申请，安排面试并全程跟进，直到获得入学许可。",
    duration: "2-4周",
  },
  {
    step: 4,
    title: "在留资格",
    description:
      "协助准备在留资格认定证明书申请材料，包括经费支付证明、亲属关系公证等，递交入国管理局审批。",
    duration: "2-3个月",
  },
  {
    step: 5,
    title: "签证办理",
    description:
      "获得在留资格后，指导办理护照和留学签证，提供签证申请表填写指导、材料清单核对及面签模拟。",
    duration: "1-2周",
  },
  {
    step: 6,
    title: "赴日入学",
    description:
      "协助预定机票和住宿，提供行前指导（行李清单、在日生活指南等），赴日后持续提供学习和生活支持。",
    duration: "入学前准备",
  },
];

export const whyChooseUs = [
  {
    title: "日本现地团队",
    description: "东京设有办公室，与学校保持紧密联系，第一时间获取最新招生信息和政策变动。",
  },
  {
    title: "100%成功率",
    description: "凭借多年经验和精准的方案匹配，已帮助数千名学生成功赴日留学，零拒签记录。",
  },
  {
    title: "透明收费",
    description: "所有费用明细公开，无隐藏收费。部分语言学校申请零中介费，最大限度减轻留学负担。",
  },
  {
    title: "个性化方案",
    description: "拒绝模板化方案，根据每位学生的背景、目标和预算，量身定制专属留学计划。",
  },
  {
    title: "签证专家",
    description: "持有日本行政书士资格的专业团队负责在留资格和签证申请，确保材料合规、一次通过。",
  },
  {
    title: "全程陪伴",
    description: "从前期咨询到赴日后的生活支持，我们提供2年以上的持续跟踪服务，让你留学无忧。",
  },
];

// JASSO public averages; first-year academic fees include admission fees.
// Living estimate: 105,000 JPY/month × 12. Not a school-specific 2027 quotation.
export const costEstimates = [
  { schoolType: "国立大学 · 本科", tuition: "约82万日元", living: "约126万日元 / 年", total: "208", note: "学费与入学金为官方概算；部分大学收费高于此参考值。" },
  { schoolType: "公立大学 · 本科", tuition: "约91万日元", living: "约126万日元 / 年", total: "217", note: "入学金可能因居住地不同而变化，请按学校确认。" },
  { schoolType: "私立大学 · 本科", tuition: "约130万日元", living: "约126万日元 / 年", total: "256", note: "不含医、齿、药学等高费用专业。" },
];
