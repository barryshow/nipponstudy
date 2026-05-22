// ============================================================
// 背景测评工具 — 学校匹配引擎
// 完全本地规则，不调用任何外部 API
// 基于学校名称/类型的难度推断（不修改现有数据）
// ============================================================

import { heightTalentSchools, type HeightTalentSchool } from "@/data/height-talent-schools";
import type { StudentForm, MatchedSchool, MatchCategory } from "./types";
import { generateReasons, generateRisks } from "./labels";

// ============================================================
// 难度推断（基于学校名称/类型的默认规则）
// ============================================================

// 已知学校ID的精确难度值（根据历史数据和日本大学层级）
const precisionDifficultyMap: Record<string, number> = {
  // 旧帝大（含东工大→东京科学大学）
  utokyo: 98,
  "kyoto-u": 96,
  osaka: 94,
  tohoku: 93,
  nagoya: 92,
  hokkaido: 92,
  kyushu: 91,
  titech: 95,
  hitotsubashi: 93,
  tsukuba: 88,

  // 顶尖私立
  waseda: 89,
  keio: 88,
  sophia: 84,
  icu: 83,

  // MARCH（含部分偏差值较高）
  meiji: 78,
  aoyama: 77,
  rikkyo: 76,
  chuo: 75,
  hosei: 73,

  // 关关同立
  kwansei: 76,
  doshisha: 78,
  ritsumei: 75,
  kansai: 73,

  // 重要国公立
  "kobe-u": 82,
  yokohama: 80,
  "yokohama-city": 76,
  tmu: 76,
  omu: 75,
  "nagoya-city": 72,
  chiba: 78,
  saitama: 74,
  niigata: 72,
  kanazawa: 74,
  okayama: 73,
  hiroshima: 80,
  shinshu: 70,
  gifu: 68,
  mie: 65,
  ehime: 66,
  kagoshima: 65,
  kumamoto: 68,
  nagasaki: 65,
  oita: 63,
  miyazaki: 62,
  saga: 62,
  totori: 63,
  shimane: 63,
  yamaguchi: 67,
  tokushima: 64,
  kochi: 63,
  gunma: 66,
  ibaraki: 67,
  utsunomiya: 65,
  yamanashi: 65,
  toyama: 65,
  fukui: 66,
  shizuoka: 68,
  hirosaki: 63,
  akita: 63,
  yamagata: 64,
  fukushima: 64,
  ryukyu: 62,
  aizu: 72,

  // 其他私立
  tokai: 65,
  teikyo: 62,
  kinki: 72,
  nihon: 68,
  toyo: 67,
  soka: 65,
  ryukoku: 70,

  // 理工系
  tus: 82,
  tuat: 76,
  tum: 74,
  shibaura: 78,
  denki: 70,
  nitech: 74,
  kit: 72,
  kyutech: 72,
  nagaoka: 69,
  toyohashi: 69,
  kogakuin: 72,
  "tokyo-city": 71,
  "tokyo-tech-p": 70,
  "osaka-institute": 68,
  "okayama-science": 66,

  // 医学系
  "tokyo-medical": 85,
  jikei: 84,
  juntendo: 83,
  nms: 83,
  fujita: 78,
  "aichi-medical": 73,
  "hama-med": 71,
  "sapporo-medical": 69,
  "shiga-medical": 70,
  "wakayama-medical": 68,
  "hyogo-medical": 71,
  "kansai-medical": 72,
  "dokkyo-medical": 68,
  "osaka-medical": 71,
  "kyoto-pu-medical": 68,
  kurume: 65,
  kitasato: 72,
  uoeh: 65,
  "saitama-medical": 70,

  // 其他
  apu: 70,
  meijo: 68,
  tokyo: 74,
  nodai: 64,
  hyogo: 68,
};

// 地域关键词映射
const regionKeywords: Record<string, string[]> = {
  "北海道": ["北海道", "札幌", "函館", "旭川"],
  "東北": ["青森", "岩手", "宮城", "秋田", "山形", "福島", "弘前"],
  "関東": ["東京", "神奈川", "千葉", "埼玉", "茨城", "栃木", "群馬", "横浜", "青山", "慶應", "早稲田", "上智", "明治", "法政", "中央", "立教", "東海", "帝京", "創価"],
  "中部": ["愛知", "岐阜", "静岡", "長野", "新潟", "富山", "石川", "福井", "山梨", "名古屋", "金沢", "浜松", "豊橋", "長岡"],
  "近畿": ["大阪", "京都", "兵庫", "奈良", "滋賀", "和歌山", "神戸", "関西", "同志社", "立命館", "近畿", "龍谷"],
  "中国": ["広島", "岡山", "山口", "島根", "鳥取"],
  "四国": ["香川", "徳島", "愛媛", "高知"],
  "九州": ["福岡", "佐賀", "長崎", "熊本", "大分", "宮崎", "鹿児島", "久留米"],
  "沖縄": ["沖縄", "琉球"],
};

function inferRegion(school: HeightTalentSchool): string {
  return school.region;
}

function matchesRegionQuery(schoolRegion: string, targetRegion: string): boolean {
  if (!targetRegion || targetRegion === "不限" || targetRegion === "") return true;
  const normalizedQuery = targetRegion.toLowerCase();
  // 直接匹配地域
  if (schoolRegion === targetRegion) return true;
  // 中文地域名匹配
  const regionMap: Record<string, string> = {
    "北海道": "北海道", "东北": "東北", "关东": "関東", "中部": "中部",
    "近畿": "近畿", "中国": "中国", "四国": "四国", "九州": "九州", "冲绳": "沖縄",
    "關東": "関東",
  };
  const mapped = regionMap[targetRegion];
  if (mapped && schoolRegion === mapped) return true;
  // 关键词部分匹配
  const keywords = regionKeywords[schoolRegion] || [];
  return keywords.some(kw => kw.includes(targetRegion) || targetRegion.includes(kw));
}

function inferDifficulty(school: HeightTalentSchool): number {
  // 已精确匹配
  if (precisionDifficultyMap[school.id] !== undefined) {
    return precisionDifficultyMap[school.id];
  }

  // 按类型+名称关键词推断
  const name = school.name + school.nameJa;

  // 国立大学默认偏高
  if (school.type === "national") {
    if (name.includes("大学院") || name.includes("研究")) return 75;
    if (name.includes("教育") || name.includes("师范")) return 65;
    return 68;
  }

  // 公立大学
  if (school.type === "public") {
    if (name.includes("医科") || name.includes("医学")) return 70;
    if (name.includes("県立") || name.includes("市立")) return 67;
    return 65;
  }

  // 私立大学
  if (school.type === "private") {
    if (name.includes("医科") || name.includes("医学")) return 73;
    if (name.includes("工業") || name.includes("理工")) return 68;
    if (name.includes("国際") || name.includes("外国語")) return 66;
    return 62;
  }

  return 60;
}

// ============================================================
// 冲稳保分类
// ============================================================

function classifyCategory(studentScore: number, difficultyScore: number): MatchCategory {
  if (difficultyScore >= studentScore + 8) return "reach";
  if (difficultyScore >= studentScore - 8) return "match";
  return "safety";
}

// ============================================================
// 主匹配函数
// ============================================================

export interface MatchOptions {
  studentScore: number;
  form: StudentForm;
  maxPerCategory?: number;
}

export function matchSchools(options: MatchOptions): { reach: MatchedSchool[]; match: MatchedSchool[]; safety: MatchedSchool[] } {
  const { studentScore, form, maxPerCategory = 6 } = options;

  const scored: MatchedSchool[] = [];

  for (const school of heightTalentSchools) {
    // 过滤私立
    if (!form.acceptPrivate && school.type === "private") continue;

    const difficultyScore = inferDifficulty(school);
    const category = classifyCategory(studentScore, difficultyScore);
    const regionMatch = matchesRegionQuery(inferRegion(school), form.targetRegion);

    const reasons = generateReasons(
      school.name,
      category,
      regionMatch,
      true, // isHighlySkilled — all heightTalentSchools are
      form.preferHighlySkilled,
    );

    const risks = generateRisks(category, !!school.website);

    scored.push({
      id: school.id,
      name: school.name,
      nameJa: school.nameJa,
      type: school.type,
      region: school.region,
      category,
      difficultyScore,
      isHighlySkilled: true,
      reasons,
      risks,
      website: school.website,
    });
  }

  // 排序：同类别内按地区匹配优先，然后按难度
  function sortByPreference(a: MatchedSchool, b: MatchedSchool): number {
    const aRegionMatch = form.targetRegion && matchesRegionQuery(a.region, form.targetRegion) ? 0 : 1;
    const bRegionMatch = form.targetRegion && matchesRegionQuery(b.region, form.targetRegion) ? 0 : 1;
    if (aRegionMatch !== bRegionMatch) return aRegionMatch - bRegionMatch;
    if (form.preferHighlySkilled) {
      if (a.isHighlySkilled !== b.isHighlySkilled) return a.isHighlySkilled ? -1 : 1;
    }
    // 冲刺：难度低的优先（差距小），稳妥：难度接近的优先，保底：难度高的优先（更安全）
    if (a.category === "reach") return b.difficultyScore - a.difficultyScore;
    if (a.category === "safety") return b.difficultyScore - a.difficultyScore;
    return Math.abs(a.difficultyScore - studentScore) - Math.abs(b.difficultyScore - studentScore);
  }

  const reach = scored
    .filter(s => s.category === "reach")
    .sort(sortByPreference)
    .slice(0, maxPerCategory);

  const match = scored
    .filter(s => s.category === "match")
    .sort(sortByPreference)
    .slice(0, maxPerCategory);

  const safety = scored
    .filter(s => s.category === "safety")
    .sort(sortByPreference)
    .slice(0, maxPerCategory);

  return { reach, match, safety };
}