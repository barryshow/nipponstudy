// ============================================================
// 大学院数据合并层
// 将 universities.ts（基本信息）与 university-graduate-programs.ts（研究科详情）合并
// ============================================================

import { nationalUniversities, publicUniversities, privateUniversities, type University } from "@/data/schools/universities";
import { universitiesGraduateData, type UniversityGraduateData } from "@/data/university-graduate-programs";

// ============================================================
// 合并后的大学院大学类型
// ============================================================

export interface CombinedGraduateUniversity extends University {
  /** 详细研究科数据（如果在此数据源中存在） */
  graduateDetail?: UniversityGraduateData;
  /** 是否有详细研究科·教授数据 */
  hasDetail: boolean;
  /** 研究科总数（优先来自graduateDetail，否则来自programs） */
  gradSchoolCount: number;
  /** 用于页面内搜索的关键词缓存 */
  searchText: string;
}

// ============================================================
// 合并
// ============================================================

/** 所有大学（国立+公立+私立） */
const allUniversities: University[] = [
  ...nationalUniversities,
  ...publicUniversities,
  ...privateUniversities,
];

/** 构建 universityId -> UniversityGraduateData 的查找表 */
const gradDataMap = new Map<string, UniversityGraduateData>();
for (const gd of universitiesGraduateData) {
  gradDataMap.set(gd.universityId, gd);
}

function buildSearchText(uni: University, detail?: UniversityGraduateData): string {
  const parts: string[] = [
    uni.name, uni.nameJa, uni.location,
    ...uni.features, ...uni.suitableFor,
  ];
  if (detail) {
    parts.push(detail.tier);
    for (const gs of detail.graduateSchools) {
      parts.push(gs.name, gs.nameJa, gs.nameEn ?? "");
      for (const prog of gs.programs) {
        parts.push(prog.name, prog.nameEn ?? "", prog.description ?? "");
        for (const prof of prog.professors) {
          parts.push(prof.name, prof.nameEn ?? "", prof.researchArea);
        }
      }
    }
  }
  return parts.join(" ").toLowerCase();
}

/** 获取所有合并后的大学院大学列表 */
export function getAllGraduateUniversities(): CombinedGraduateUniversity[] {
  return allUniversities.map((uni) => {
    const detail = gradDataMap.get(uni.id);
    const gradCount = detail
      ? detail.graduateSchools.length
      : uni.programs.filter(p => p.level === "graduate").length;
    return {
      ...uni,
      graduateDetail: detail,
      hasDetail: !!detail,
      gradSchoolCount: gradCount,
      searchText: buildSearchText(uni, detail),
    };
  });
}

/** 按ID获取单个合并大学 */
export function getGraduateUniversityById(id: string): CombinedGraduateUniversity | undefined {
  const uni = allUniversities.find(u => u.id === id);
  if (!uni) return undefined;
  const detail = gradDataMap.get(id);
  return {
    ...uni,
    graduateDetail: detail,
    hasDetail: !!detail,
    gradSchoolCount: detail
      ? detail.graduateSchools.length
      : uni.programs.filter(p => p.level === "graduate").length,
    searchText: buildSearchText(uni, detail),
  };
}

// ============================================================
// 页面内搜索
// ============================================================

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[()（）・/／,，\s-]+/g, "")
    .replace(/[ｧ-ﾝﾞﾟ]/g, (c) => {
      const mapping: Record<string, string> = {
        "ｧ": "ア", "ｨ": "イ", "ｩ": "ウ", "ｪ": "エ", "ｫ": "オ",
        "ｶ": "カ", "ｷ": "キ", "ｸ": "ク", "ｹ": "ケ", "ｺ": "コ",
        "ｻ": "サ", "ｼ": "シ", "ｽ": "ス", "ｾ": "セ", "ｿ": "ソ",
        "ﾀ": "タ", "ﾁ": "チ", "ﾂ": "ツ", "ﾃ": "テ", "ﾄ": "ト",
        "ﾅ": "ナ", "ﾆ": "ニ", "ﾇ": "ヌ", "ﾈ": "ネ", "ﾉ": "ノ",
        "ﾊ": "ハ", "ﾋ": "ヒ", "ﾌ": "フ", "ﾍ": "ヘ", "ﾎ": "ホ",
        "ﾏ": "マ", "ﾐ": "ミ", "ﾑ": "ム", "ﾒ": "メ", "ﾓ": "モ",
        "ﾔ": "ヤ", "ﾕ": "ユ", "ﾖ": "ヨ",
        "ﾗ": "ラ", "ﾘ": "リ", "ﾙ": "ル", "ﾚ": "レ", "ﾛ": "ロ",
        "ﾜ": "ワ", "ｦ": "ヲ", "ﾝ": "ン",
        "ﾞ": "゛", "ﾟ": "゜",
      };
      return mapping[c] || c;
    });
}

/**
 * 页面内搜索大学院大学
 * 搜索范围：校名、日文名、地区、特征、适合人群、研究科名、专攻名、教授名、研究领域
 */
export function searchGraduateUniversities(
  query: string,
  universities: CombinedGraduateUniversity[],
): CombinedGraduateUniversity[] {
  const q = normalize(query.trim());
  if (!q || q.length < 1) return universities;

  const scored = universities.map((uni) => {
    let score = 0;
    const searchTarget = normalize(uni.searchText);

    // 精确匹配校名
    if (normalize(uni.name) === q) score = 100;
    // 包含匹配
    else if (searchTarget.includes(q)) {
      // 查询出现在校名中
      if (normalize(uni.name).includes(q)) score = 80;
      else if (normalize(uni.nameJa).includes(q)) score = 75;
      // 查询出现在研究科/专攻/教授中
      else score = 60;
    }
    // 中日文部分匹配
    else if (q.length >= 2 && searchTarget.includes(q)) {
      score = 50;
    }

    return { uni, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.uni);
}