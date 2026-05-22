// ============================================================
// 背景测评工具 — 类型定义
// ============================================================

// 申请阶段
export type ApplicationStage = "undergraduate" | "graduate";

// ============================================================
// 本科 / 学部表单
// ============================================================

export interface UndergraduateForm {
  stage: "undergraduate";
  ejuJapanese: number | null;       // EJU 日语分数
  ejuMath: number | null;           // EJU 数学分数
  ejuGeneral: number | null;        // EJU 综合科目 / 理科分数
  jlpt: "N1" | "N2" | "N3" | "none";
  englishType: "TOEFL" | "TOEIC" | "IELTS" | "none";
  englishScore: number | null;
  targetMajor: string;              // 目标专业方向
  targetRegion: string;             // 目标地区
  acceptPrivate: boolean;           // 是否接受私立大学
  preferHighlySkilled: boolean;     // 是否关注高度人才签证加分校
  budget: "low" | "medium" | "high" | "any";
}

// ============================================================
// 大学院 / 修士表单
// ============================================================

export interface GraduateForm {
  stage: "graduate";
  undergradTier: "985" | "211" | "double-first-class" | "regular" | "overseas" | "college-upgrade" | "other";
  gpa: number | null;               // GPA 或均分 (0-100 或 0-4.0)
  gpaScale: "100" | "4.0";
  undergradMajor: string;           // 本科专业
  targetResearch: string;            // 目标研究方向
  jlpt: "N1" | "N2" | "N3" | "none";
  englishType: "TOEFL" | "TOEIC" | "IELTS" | "none";
  englishScore: number | null;
  hasResearchProposal: boolean;     // 是否有研究计划书
  hasPublications: boolean;         // 是否有论文 / 科研 / 项目经历
  targetRegion: string;             // 目标地区
  acceptPrivate: boolean;           // 是否接受私立大学
  preferHighlySkilled: boolean;     // 是否关注高度人才签证加分校
  budget: "low" | "medium" | "high" | "any";
}

export type StudentForm = UndergraduateForm | GraduateForm;

// ============================================================
// 得分分解
// ============================================================

export interface ScoreBreakdownItem {
  label: string;       // 评分项名称
  score: number;       // 得分
  maxScore: number;    // 满分
  detail: string;      // 评分说明
}

export interface ScoreBreakdown {
  items: ScoreBreakdownItem[];
  total: number;       // 总分
  maxTotal: number;    // 满分
}

// ============================================================
// 学校匹配结果
// ============================================================

export type MatchCategory = "reach" | "match" | "safety";

export interface MatchedSchool {
  id: string;
  name: string;
  nameJa: string;
  type: "national" | "public" | "private";
  region: string;
  category: MatchCategory;
  difficultyScore: number;
  isHighlySkilled: boolean;
  reasons: string[];
  risks: string[];
  website?: string;
}