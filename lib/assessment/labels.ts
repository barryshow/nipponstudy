// ============================================================
// 背景测评工具 — 文本模板 / 标签
// ============================================================

// 地域显示名
export const regionLabels: Record<string, string> = {
  "北海道": "北海道",
  "東北": "东北",
  "関東": "关东",
  "中部": "中部",
  "近畿": "近畿",
  "中国": "中国",
  "四国": "四国",
  "九州": "九州",
  "沖縄": "冲绳",
};

// 学校类型显示名
export const typeLabels: Record<string, string> = {
  national: "国立",
  public: "公立",
  private: "私立",
};

// 分类显示信息
export const categoryDisplay: Record<string, { label: string; emoji: string; className: string }> = {
  reach: { label: "冲刺", emoji: "🔴", className: "border-red-200 bg-red-50" },
  match: { label: "稳妥", emoji: "🟡", className: "border-yellow-200 bg-yellow-50" },
  safety: { label: "保底", emoji: "🟢", className: "border-green-200 bg-green-50" },
};

// 建匹配理由模板
export function generateReasons(
  schoolName: string,
  category: "reach" | "match" | "safety",
  regionMatch: boolean,
  isHighlySkilled: boolean,
  preferHighlySkilled: boolean,
): string[] {
  const reasons: string[] = [];

  if (regionMatch) {
    reasons.push("该校与你的目标地区较匹配。");
  }

  if (isHighlySkilled && preferHighlySkilled) {
    reasons.push("该校属于高度人才签证加分校，符合你的长期留日规划偏好。");
  }

  switch (category) {
    case "reach":
      reasons.push("该校难度高于当前背景评分，建议作为冲刺目标。");
      break;
    case "match":
      reasons.push("该校与当前背景评分接近，可作为稳妥申请对象。");
      break;
    case "safety":
      reasons.push("该校难度低于当前背景评分，可作为保底选择之一。");
      break;
  }

  return reasons;
}

// 建风险提示
export function generateRisks(category: "reach" | "match" | "safety", hasWebsite: boolean): string[] {
  const risks: string[] = [];
  if (category === "reach") {
    risks.push("该校为冲刺目标，录取不确定性较高，请务必同时准备稳妥和保底选项。");
  }
  if (category === "match") {
    risks.push("该校为稳妥目标，竞争情况因年度和专攻而异，仍存在一定不确定性。");
  }
  if (category === "safety") {
    risks.push("该校为保底选择，但日本大学有各自独特的出愿条件和截止日期，不可掉以轻心。");
  }
  if (!hasWebsite) {
    risks.push("该校具体 EJU、英语、出愿要求需以学校官网最新信息为准。");
  }
  return risks;
}

// 免责声明
export const DISCLAIMER = "测评结果仅供早期选校参考，不代表录取承诺。日本大学、大学院的申请要求会因年度、学部、研究科和入试方式变化，具体信息请以学校官网最新公布内容为准。";

// 结果不足说明
export const FEW_RESULTS_HINT = "当前条件下结果较少，建议放宽地区或学校类型限制。";

// 无结果说明
export const NO_RESULTS_HINT = "当前条件下未找到匹配学校，请尝试放宽地区限制或选择「接受私立大学」以获得更多选项。";

// 下一步建议
export const NEXT_STEPS = [
  "查看目标学校官网确认最新出愿条件和截止日期",
  "准备研究计划书 / EJU 考试 / 语言成绩",
  "提前联系目标教授（大学院申请）或参加学校说明会",
  "咨询留学顾问制定详细申请时间表",
];