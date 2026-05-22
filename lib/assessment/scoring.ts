// ============================================================
// 背景测评工具 — 本地打分规则
// 全部为确定性规则，不调用任何外部 API 或 AI
// ============================================================

import type {
  UndergraduateForm,
  GraduateForm,
  StudentForm,
  ScoreBreakdown,
  ScoreBreakdownItem,
} from "./types";

// ============================================================
// 本科 / 学部打分（满分 100）
// ============================================================

export function scoreUndergraduate(form: UndergraduateForm): ScoreBreakdown {
  const items: ScoreBreakdownItem[] = [];

  // 1. EJU 总分：最高 45 分
  const ejuTotal = (form.ejuJapanese ?? 0) + (form.ejuMath ?? 0) + (form.ejuGeneral ?? 0);
  let ejuScore: number;
  let ejuDetail: string;
  if (ejuTotal === 0) {
    ejuScore = 0;
    ejuDetail = "未填写 EJU 分数，无法评估";
  } else if (ejuTotal >= 700) {
    ejuScore = 45;
    ejuDetail = `EJU 总分 ${ejuTotal}，属于高分（700+），对应旧帝大/SGU Tier S 水平`;
  } else if (ejuTotal >= 650) {
    ejuScore = 38;
    ejuDetail = `EJU 总分 ${ejuTotal}，属于中上（650-699），可申多数国公立和关关同立以上私立`;
  } else if (ejuTotal >= 600) {
    ejuScore = 30;
    ejuDetail = `EJU 总分 ${ejuTotal}，属于中等（600-649），可申地方国立和 MARCH 水平`;
  } else if (ejuTotal >= 550) {
    ejuScore = 22;
    ejuDetail = `EJU 总分 ${ejuTotal}，属于中等偏下（550-599）`;
  } else {
    ejuScore = 12;
    ejuDetail = `EJU 总分 ${ejuTotal}，建议提升 EJU 成绩以获得更多选择`;
  }
  items.push({ label: "EJU 总分", score: ejuScore, maxScore: 45, detail: ejuDetail });

  // 2. 日语等级：最高 15 分
  let jlptScore: number;
  let jlptDetail: string;
  switch (form.jlpt) {
    case "N1": jlptScore = 15; jlptDetail = "N1 合格，满足绝大多数大学日语要求"; break;
    case "N2": jlptScore = 10; jlptDetail = "N2 合格，满足多数大学基础日语门槛，部分名校需 N1"; break;
    case "N3": jlptScore = 5; jlptDetail = "N3 可申部分私立大学，建议继续提升至 N2+"; break;
    default: jlptScore = 0; jlptDetail = "无日语等级，建议尽早规划日语学习"; break;
  }
  items.push({ label: "日语等级", score: jlptScore, maxScore: 15, detail: jlptDetail });

  // 3. 英语成绩：最高 15 分
  let englishScore = 0;
  let englishDetail = "无英语成绩，部分学校可能不要求英语";
  if (form.englishType !== "none" && form.englishScore != null) {
    const s = form.englishScore;
    switch (form.englishType) {
      case "TOEFL":
        if (s >= 100) { englishScore = 15; englishDetail = `TOEFL ${s}，满足所有大学英语要求`; }
        else if (s >= 90) { englishScore = 13; englishDetail = `TOEFL ${s}，满足大多数大学英语要求`; }
        else if (s >= 80) { englishScore = 11; englishDetail = `TOEFL ${s}，满足多数国公立英语门槛`; }
        else if (s >= 70) { englishScore = 7; englishDetail = `TOEFL ${s}，满足部分大学英语要求`; }
        else { englishScore = 3; englishDetail = `TOEFL ${s}，分数偏低，建议提升`; }
        break;
      case "TOEIC":
        if (s >= 800) { englishScore = 14; englishDetail = `TOEIC ${s}，满足绝大多数大学英语要求`; }
        else if (s >= 700) { englishScore = 12; englishDetail = `TOEIC ${s}，满足多数大学英语门槛`; }
        else if (s >= 600) { englishScore = 8; englishDetail = `TOEIC ${s}，满足部分大学英语要求`; }
        else if (s >= 500) { englishScore = 4; englishDetail = `TOEIC ${s}，分数偏低`; }
        else { englishScore = 2; englishDetail = `TOEIC ${s}，建议提升`; }
        break;
      case "IELTS":
        if (s >= 7.5) { englishScore = 15; englishDetail = `IELTS ${s}，满足所有大学英语要求`; }
        else if (s >= 7.0) { englishScore = 14; englishDetail = `IELTS ${s}，满足大多数大学英语要求`; }
        else if (s >= 6.5) { englishScore = 13; englishDetail = `IELTS ${s}，满足多数国公立英语门槛`; }
        else if (s >= 6.0) { englishScore = 10; englishDetail = `IELTS ${s}，满足部分大学英语要求`; }
        else if (s >= 5.5) { englishScore = 6; englishDetail = `IELTS ${s}，分数偏低`; }
        else { englishScore = 3; englishDetail = `IELTS ${s}，建议提升`; }
        break;
      default:
        englishScore = 0;
    }
  }
  items.push({ label: "英语成绩", score: englishScore, maxScore: 15, detail: englishDetail });

  // 4. 目标专业明确度：最高 10 分
  const majorScore = form.targetMajor && form.targetMajor.trim().length > 0 ? 10 : 2;
  const majorDetail = majorScore === 10
    ? `目标专业 "${form.targetMajor}" 已明确，有利于精准选校`
    : "未填写目标专业，建议明确方向";
  items.push({ label: "专业明确度", score: majorScore, maxScore: 10, detail: majorDetail });

  // 5. 地区/学校类型开放度：最高 10 分
  let opennessScore = 0;
  const opennessReasons: string[] = [];
  if (form.acceptPrivate) { opennessScore += 5; opennessReasons.push("接受私立大学"); }
  if (form.budget !== "low") { opennessScore += 3; opennessReasons.push("预算较灵活"); }
  if (form.targetRegion && form.targetRegion !== "不限") {
    opennessScore += 2;
    opennessReasons.push(`明确目标地区 ${form.targetRegion}`);
  } else {
    opennessScore += 1;
    opennessReasons.push("地区不限，选择空间大");
  }
  items.push({
    label: "地区/类型开放度",
    score: Math.min(opennessScore, 10),
    maxScore: 10,
    detail: opennessReasons.join("；") || "选择范围有限",
  });

  // 6. 高度人才加分校偏好匹配：最高 5 分
  const highlySkilledScore = form.preferHighlySkilled ? 5 : 0;
  const highlySkilledDetail = form.preferHighlySkilled
    ? "关注高度人才签证加分校，有利于长期留日规划"
    : "未关注高度人才加分校";
  items.push({ label: "高度人才偏好", score: highlySkilledScore, maxScore: 5, detail: highlySkilledDetail });

  const total = items.reduce((sum, i) => sum + i.score, 0);
  return { items, total, maxTotal: 100 };
}

// ============================================================
// 大学院 / 修士打分（满分 100）
// ============================================================

export function scoreGraduate(form: GraduateForm): ScoreBreakdown {
  const items: ScoreBreakdownItem[] = [];

  // 1. 本科院校层次：最高 20 分
  let tierScore: number;
  let tierDetail: string;
  switch (form.undergradTier) {
    case "985": tierScore = 20; tierDetail = "985 院校，日本教授认可度高"; break;
    case "211": tierScore = 17; tierDetail = "211 院校，基础较好"; break;
    case "double-first-class": tierScore = 16; tierDetail = "双一流院校，有一定认可度"; break;
    case "overseas": tierScore = 14; tierDetail = "海外本科，需具体看国家和学校"; break;
    case "regular": tierScore = 10; tierDetail = "普通本科，研究计划书和 GPA 将成为关键加分项"; break;
    case "college-upgrade": tierScore = 6; tierDetail = "专升本背景，建议通过研究生（预科）路径过渡"; break;
    default: tierScore = 5; tierDetail = "其他背景，建议以研究计划书质量为突破口"; break;
  }
  items.push({ label: "本科院校层次", score: tierScore, maxScore: 20, detail: tierDetail });

  // 2. GPA / 均分：最高 20 分
  let gpaScore: number;
  let gpaDetail: string;
  if (form.gpa == null) {
    gpaScore = 8;
    gpaDetail = "未填写 GPA，默认给基础分，建议补充";
  } else if (form.gpaScale === "4.0") {
    if (form.gpa >= 3.5) { gpaScore = 20; gpaDetail = `GPA ${form.gpa}/4.0，高分段`; }
    else if (form.gpa >= 3.0) { gpaScore = 16; gpaDetail = `GPA ${form.gpa}/4.0，中等偏上`; }
    else if (form.gpa >= 2.5) { gpaScore = 11; gpaDetail = `GPA ${form.gpa}/4.0，中等水平`; }
    else { gpaScore = 6; gpaDetail = `GPA ${form.gpa}/4.0，偏低，研究计划书和科研经历更重要`; }
  } else {
    // 100-scale
    if (form.gpa >= 85) { gpaScore = 20; gpaDetail = `均分 ${form.gpa}，高分段`; }
    else if (form.gpa >= 75) { gpaScore = 16; gpaDetail = `均分 ${form.gpa}，中等偏上`; }
    else if (form.gpa >= 65) { gpaScore = 11; gpaDetail = `均分 ${form.gpa}，中等水平`; }
    else { gpaScore = 6; gpaDetail = `均分 ${form.gpa}，偏低`; }
  }
  items.push({ label: "GPA / 均分", score: gpaScore, maxScore: 20, detail: gpaDetail });

  // 3. 日语等级：最高 15 分
  let jlptScore: number;
  let jlptDetail: string;
  switch (form.jlpt) {
    case "N1": jlptScore = 15; jlptDetail = "N1 合格，满足绝大多数大学院日语要求"; break;
    case "N2": jlptScore = 10; jlptDetail = "N2 合格，多数文科大学院最低门槛为 N1，理工科可接受 N2"; break;
    case "N3": jlptScore = 4; jlptDetail = "N3，建议继续提升，大学院通常要求 N2 以上"; break;
    default: jlptScore = 0; jlptDetail = "无日语等级，建议尽早规划；可选英文项目（SGU）但名额极少"; break;
  }
  items.push({ label: "日语等级", score: jlptScore, maxScore: 15, detail: jlptDetail });

  // 4. 英语成绩：最高 15 分
  let englishScore = 0;
  let englishDetail = "无英语成绩，部分研究科可能不要求英语";
  if (form.englishType !== "none" && form.englishScore != null) {
    const s = form.englishScore;
    switch (form.englishType) {
      case "TOEFL":
        if (s >= 100) { englishScore = 15; englishDetail = `TOEFL ${s}，满足所有大学院英语要求`; }
        else if (s >= 90) { englishScore = 13; englishDetail = `TOEFL ${s}，满足大多数大学院英语要求`; }
        else if (s >= 80) { englishScore = 11; englishDetail = `TOEFL ${s}，满足多数国公立英语门槛`; }
        else if (s >= 70) { englishScore = 7; englishDetail = `TOEFL ${s}，满足部分学校要求`; }
        else { englishScore = 3; englishDetail = `TOEFL ${s}，分数偏低`; }
        break;
      case "TOEIC":
        if (s >= 800) { englishScore = 14; englishDetail = `TOEIC ${s}，满足绝大多数大学院英语要求`; }
        else if (s >= 700) { englishScore = 12; englishDetail = `TOEIC ${s}，满足多数大学院英语门槛`; }
        else if (s >= 600) { englishScore = 8; englishDetail = `TOEIC ${s}，满足部分学校要求`; }
        else if (s >= 500) { englishScore = 4; englishDetail = `TOEIC ${s}，分数偏低`; }
        else { englishScore = 2; englishDetail = `TOEIC ${s}，建议提升`; }
        break;
      case "IELTS":
        if (s >= 7.5) { englishScore = 15; englishDetail = `IELTS ${s}，满足所有大学院英语要求`; }
        else if (s >= 7.0) { englishScore = 14; englishDetail = `IELTS ${s}，满足大多数大学院英语要求`; }
        else if (s >= 6.5) { englishScore = 13; englishDetail = `IELTS ${s}，满足多数国公立英语门槛`; }
        else if (s >= 6.0) { englishScore = 10; englishDetail = `IELTS ${s}，满足部分学校要求`; }
        else if (s >= 5.5) { englishScore = 6; englishDetail = `IELTS ${s}，分数偏低`; }
        else { englishScore = 3; englishDetail = `IELTS ${s}，建议提升`; }
        break;
    }
  }
  items.push({ label: "英语成绩", score: englishScore, maxScore: 15, detail: englishDetail });

  // 5. 研究方向明确度：最高 10 分
  const researchScore = form.targetResearch && form.targetResearch.trim().length > 0 ? 10 : 2;
  const researchDetail = researchScore === 10
    ? `研究方向 "${form.targetResearch}" 已明确，有利于精准匹配教授`
    : "未填写研究方向，建议明确方向以便选教授";
  items.push({ label: "研究方向明确度", score: researchScore, maxScore: 10, detail: researchDetail });

  // 6. 研究计划书：最高 10 分
  const proposalScore = form.hasResearchProposal ? 10 : 0;
  const proposalDetail = form.hasResearchProposal
    ? "已有研究计划书，申请准备工作充分"
    : "尚未准备研究计划书——这是大学院申请的核心材料，建议尽早开始";
  items.push({ label: "研究计划书", score: proposalScore, maxScore: 10, detail: proposalDetail });

  // 7. 科研 / 项目经历：最高 5 分
  const pubScore = form.hasPublications ? 5 : 0;
  const pubDetail = form.hasPublications
    ? "有论文/科研/项目经历，竞争加分"
    : "无论文/科研经历，不影响多数学校申请，但顶尖大学院有加分可能";
  items.push({ label: "科研/项目经历", score: pubScore, maxScore: 5, detail: pubDetail });

  // 8. 地区/学校类型开放度：最高 5 分
  let opennessScore = 0;
  const opennessReasons: string[] = [];
  if (form.acceptPrivate) { opennessScore += 2; opennessReasons.push("接受私立大学"); }
  if (form.budget !== "low") { opennessScore += 2; opennessReasons.push("预算较灵活"); }
  if (form.targetRegion && form.targetRegion !== "不限") {
    opennessScore += 1;
    opennessReasons.push(`明确目标地区 ${form.targetRegion}`);
  }
  items.push({
    label: "地区/类型开放度",
    score: Math.min(opennessScore, 5),
    maxScore: 5,
    detail: opennessReasons.join("；") || "选择范围有限",
  });

  const total = items.reduce((sum, i) => sum + i.score, 0);
  return { items, total, maxTotal: 100 };
}

export function calculateScore(form: StudentForm): ScoreBreakdown {
  if (form.stage === "undergraduate") {
    return scoreUndergraduate(form);
  }
  return scoreGraduate(form);
}