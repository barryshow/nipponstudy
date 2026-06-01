// ============================================================
// 扩展大学大学院入試データ（38校）
// Focus: 研究科列表、入试方式、学费、教授检索入口
// ============================================================

import type { GraduateAdmissionInfo } from "./university-admissions";

export const graduateAdmissionsSupplement: GraduateAdmissionInfo[] = [
  // ============================================================
  // 神戸大学
  // ============================================================
  {
    universityId: "kobe-u",
    universityName: "神戸大学",
    type: "national",
    tier: "Top Type (B)",
    portalUrl: "https://www.kobe-u.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://hyoka.kobe-u.ac.jp/",
    professorAcceptanceInfo: "神戸大学研究者データベース（hyoka.kobe-u.ac.jp）检索全学教员。経営学研究科是最强研究科之一。各研究科主页有教员列表。",
    applicationSystem: "各研究科独立系统",
    researchStudentInfo: "多数研究科接受研究生（预科旁听生·无学位）。需教授内诺。入学料84,600円，授業料178,200円/半年。",
    examTypes: ["一般入试", "外国人留学生特别选考（部分研究科）", "社会人特别选抜"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "経営学研究科", nameJa: "経営学研究科", programs: ["経営学", "会計学", "商学"], admissionUrl: "https://www.b.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: ["経済学", "国際経済学"], admissionUrl: "https://www.econ.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: ["法学", "政治学"], admissionUrl: "https://www.law.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: ["機械工学", "電気電子", "情報知能", "応用化学", "建築", "市民工学"], admissionUrl: "https://www.eng.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "理学研究科", nameJa: "理学研究科", programs: ["数学", "物理学", "化学", "生物学", "惑星科学"], admissionUrl: "https://www.sci.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学", "医科学"], admissionUrl: "https://www.med.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "農学研究科", nameJa: "農学研究科", programs: ["食料環境システム", "資源生命科学", "生命機能科学"], admissionUrl: "https://www.ans.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "国際協力研究科", nameJa: "国際協力研究科", programs: ["国際開発", "国際協力政策"], admissionUrl: "https://www.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "人間発達環境学研究科", nameJa: "人間発達環境学研究科", programs: ["心理学", "教育学", "人間環境"], admissionUrl: "https://www.h.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["经营学研究科是神户大学最强研究科——日本国立大学中独立经营学研究科极为稀少", "神户是日本三大都市圈之一"],
    dataSources: ["https://www.kobe-u.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 东京理科大学
  // ============================================================
  {
    universityId: "tus",
    universityName: "东京理科大学",
    type: "private",
    tier: "理工系私立",
    portalUrl: "https://www.tus.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.tus.ac.jp/ridb/",
    professorAcceptanceInfo: "TUS研究者DB（ridb）检索全学教员。各研究科主页有教员一覧。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000〜260,000円", annualTuition: "1,200,000〜1,500,000円" },
    graduateSchools: [
      { name: "理学研究科", nameJa: "理学研究科", programs: ["数学", "物理学", "化学", "応用物理学"], admissionUrl: "https://www.tus.ac.jp/", facultyUrl: "https://www.tus.ac.jp/ridb/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: ["機械工学", "電気工学", "情報工学", "工業化学", "建築学"], admissionUrl: "https://www.tus.ac.jp/", facultyUrl: "https://www.tus.ac.jp/ridb/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["数理情報", "物理", "土木", "建築", "機械", "電気電子", "経営工学"], admissionUrl: "https://www.tus.ac.jp/", facultyUrl: "https://www.tus.ac.jp/ridb/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "経営学研究科", nameJa: "経営学研究科", programs: ["経営学", "MBA"], admissionUrl: "https://www.tus.ac.jp/", facultyUrl: "https://www.tus.ac.jp/ridb/", hasEnglishProgram: false, hasResearchStudent: false, intakeMonths: ["4月"] },
    ],
    notes: ["私立理工系最高峰之一，数学教育に定評", "Tokyo Kagaku Daigaku — 日本唯一的理科大学"],
    dataSources: ["https://www.tus.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 东京农工大学
  // ============================================================
  {
    universityId: "tuat",
    universityName: "东京农工大学",
    type: "national",
    tier: "Top Type (B)",
    portalUrl: "https://www.tuat.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://research.tuat.ac.jp/",
    professorAcceptanceInfo: "TUAT研究者DB（research.tuat.ac.jp）检索全学教员。农学·工学各系教员列表完整。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "外国人留学生特别选考", "英語プログラム"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "農学府", nameJa: "農学府", programs: ["生物生産", "応用生物科学", "環境資源科学", "地域生態システム"], admissionUrl: "https://www.tuat.ac.jp/", facultyUrl: "https://research.tuat.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "工学府", nameJa: "工学府", programs: ["機械システム", "電気電子", "情報工学", "応用化学", "化学システム"], admissionUrl: "https://www.tuat.ac.jp/", facultyUrl: "https://research.tuat.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["少数精锐教育，农工系国立大学", "府中·小金井キャンパス"],
    dataSources: ["https://www.tuat.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 东京海洋大学
  // ============================================================
  {
    universityId: "tum",
    universityName: "东京海洋大学",
    type: "national",
    tier: "Top Type (B)",
    portalUrl: "https://www.kaiyodai.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.kaiyodai.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一覧。海洋科学専攻中心。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "海洋科学技術研究科", nameJa: "海洋科学技術研究科", programs: ["海洋科学", "海洋資源環境", "海事システム"], admissionUrl: "https://www.kaiyodai.ac.jp/", facultyUrl: "https://www.kaiyodai.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["日本唯一の海洋系国立大学院", "品川·越中島キャンパス"],
    dataSources: ["https://www.kaiyodai.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 东京电机大学
  // ============================================================
  {
    universityId: "denki",
    universityName: "东京电机大学",
    type: "private",
    tier: "理工系私立",
    portalUrl: "https://www.dendai.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.dendai.ac.jp/",
    professorAcceptanceInfo: "各研究科有教员一覧。研究室主页可确认受入状况。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "1,100,000〜1,400,000円" },
    graduateSchools: [
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["機械", "電気電子", "情報通信", "ロボット", "応用化学"], admissionUrl: "https://www.dendai.ac.jp/", facultyUrl: "https://www.dendai.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: ["機械", "電気", "情報", "建築"], admissionUrl: "https://www.dendai.ac.jp/", facultyUrl: "https://www.dendai.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["実学重視の伝統、就職率98%"],
    dataSources: ["https://www.dendai.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 芝浦工业大学
  // ============================================================
  {
    universityId: "shibaura",
    universityName: "芝浦工业大学",
    type: "private",
    tier: "理工系私立",
    portalUrl: "https://www.shibaura-it.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.shibaura-it.ac.jp/",
    professorAcceptanceInfo: "各学院主页有教员一覧。研究室主页確認要。",
    applicationSystem: "一般入试 + 英語プログラム（IGP）",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "IGP英語プログラム"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "280,000円", annualTuition: "1,300,000〜1,500,000円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: ["機械", "電気", "電子", "情報通信", "材料"], admissionUrl: "https://www.shibaura-it.ac.jp/", facultyUrl: "https://www.shibaura-it.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "システム理工学研究科", nameJa: "システム理工学研究科", programs: ["電子情報", "機械制御", "環境システム", "生命科学", "数理"], admissionUrl: "https://www.shibaura-it.ac.jp/", facultyUrl: "https://www.shibaura-it.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
    ],
    notes: ["私立理工系4大トップ、豊洲キャンパス", "IGP英語プログラムあり"],
    dataSources: ["https://www.shibaura-it.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 名古屋工业大学
  // ============================================================
  {
    universityId: "nitech",
    universityName: "名古屋工业大学",
    type: "national",
    tier: "Top Type (B)",
    portalUrl: "https://www.nitech.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://profs.provost.nagoya-u.ac.jp/",
    professorAcceptanceInfo: "名古屋大学と共通の研究者DBで检索可能。各専攻主页有教员一覧。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "外国人留学生特别选考", "推薦入试"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: ["機械", "電気電子", "情報工学", "化学·生命", "社会工学"], admissionUrl: "https://www.nitech.ac.jp/", facultyUrl: "https://profs.provost.nagoya-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["中部圏ものづくり産業の中心", "就職率約100%（トヨタ等）"],
    dataSources: ["https://www.nitech.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 京都工艺纤维大学
  // ============================================================
  {
    universityId: "kit",
    universityName: "京都工艺纤维大学",
    type: "national",
    tier: "Top Type (B)",
    portalUrl: "https://www.kit.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.kit.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。デザイン·建筑分野が特色。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工艺科学研究科", nameJa: "工芸科学研究科", programs: ["デザイン·建筑", "电子システム", "情报工学", "材料·化学", "机械工学", "繊维学"], admissionUrl: "https://www.kit.ac.jp/", facultyUrl: "https://www.kit.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["デザイン·建筑教育有名"],
    dataSources: ["https://www.kit.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 九州工业大学
  // ============================================================
  {
    universityId: "kyutech",
    universityName: "九州工业大学",
    type: "national",
    tier: "Top Type (B)",
    portalUrl: "https://www.kyutech.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search",
    professorAcceptanceInfo: "九州大学と共通システム。各专攻主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: ["机械知能", "电气电子", "应用化学", "土木建筑"], admissionUrl: "https://www.kyutech.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "情报工学研究科", nameJa: "情報工学研究科", programs: ["知能情报", "情报·通信", "メディア情报"], admissionUrl: "https://www.kyutech.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["九州地区最大の工科系国立大学"],
    dataSources: ["https://www.kyutech.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 长冈技术科学大学
  // ============================================================
  {
    universityId: "nagaoka",
    universityName: "长冈技术科学大学",
    type: "national",
    tier: "Top Type (B)",
    portalUrl: "https://www.nagaokaut.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.nagaokaut.ac.jp/",
    professorAcceptanceInfo: "各专攻主页有教员一览。实践的技术者教育。",
    applicationSystem: "各专攻独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "推荐入试"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: ["机械创造", "电气电子情报", "物质·材料", "环境社会基盘", "情报·经营システム"], admissionUrl: "https://www.nagaokaut.ac.jp/", facultyUrl: "https://www.nagaokaut.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["技学理念—实践的技术者育成"],
    dataSources: ["https://www.nagaokaut.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 丰桥技术科学大学
  // ============================================================
  {
    universityId: "toyohashi",
    universityName: "丰桥技术科学大学",
    type: "national",
    tier: "Top Type (B)",
    portalUrl: "https://www.tut.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.tut.ac.jp/",
    professorAcceptanceInfo: "各专攻主页有教员一览。",
    applicationSystem: "各专攻独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "推荐入试"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: ["机械", "电气电子情报", "应用化学·生命", "建筑·土木", "情报·知能"], admissionUrl: "https://www.tut.ac.jp/", facultyUrl: "https://www.tut.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["长冈と並ぶ技科大"],
    dataSources: ["https://www.tut.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 医学医科类 — 10校
  // ============================================================

  // 东京医科大学
  {
    universityId: "tokyo-medical",
    universityName: "东京医科大学",
    type: "private",
    tier: "私立医大",
    portalUrl: "https://www.tokyo-med.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.tokyo-med.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。医学系研究科中心。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受。需教授内诺。",
    examTypes: ["一般入试", "社会人特别选抜"],
    tuitionInfo: { examFee: "50,000円", admissionFee: "200,000円", annualTuition: "3,000,000〜4,000,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学", "医科学"], admissionUrl: "https://www.tokyo-med.ac.jp/", facultyUrl: "https://www.tokyo-med.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["私立医大の伝統校"],
    dataSources: ["https://www.tokyo-med.ac.jp/en/admissions/graduate/"],
  },

  // 东京慈惠会医科大学
  {
    universityId: "jikei",
    universityName: "东京慈惠会医科大学",
    type: "private",
    tier: "私立医大",
    portalUrl: "https://www.jikei.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.jikei.ac.jp/",
    professorAcceptanceInfo: "各讲座主页有教授一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受。",
    examTypes: ["一般入试", "社会人特别选抜"],
    tuitionInfo: { examFee: "50,000円", admissionFee: "200,000円", annualTuition: "2,800,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学", "医科学"], admissionUrl: "https://www.jikei.ac.jp/", facultyUrl: "https://www.jikei.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["慈惠会グループの総合病院ネットワーク"],
    dataSources: ["https://www.jikei.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 顺天堂大学
  // ============================================================
  {
    universityId: "juntendo",
    universityName: "顺天堂大学",
    type: "private",
    tier: "私立医大",
    portalUrl: "https://www.juntendo.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.juntendo.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。スポーツ医学著名。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "1,200,000〜3,500,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学", "医科学"], admissionUrl: "https://www.juntendo.ac.jp/", facultyUrl: "https://www.juntendo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "スポーツ健康科学研究科", nameJa: "スポーツ健康科学研究科", programs: ["スポーツ科学", "スポーツ医学"], admissionUrl: "https://www.juntendo.ac.jp/", facultyUrl: "https://www.juntendo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["日本最大級の病院グループ", "スポーツ医学有名"],
    dataSources: ["https://www.juntendo.ac.jp/en/admissions/graduate/"],
  },

  // 日本医科大学
  {
    universityId: "nms",
    universityName: "日本医科大学",
    type: "private",
    tier: "私立医大",
    portalUrl: "https://www.nms.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.nms.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受。",
    examTypes: ["一般入试"],
    tuitionInfo: { examFee: "50,000円", admissionFee: "200,000円", annualTuition: "3,800,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学"], admissionUrl: "https://www.nms.ac.jp/", facultyUrl: "https://www.nms.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["日本最古の私立医大（1876年）", "国家試験合格率高い"],
    dataSources: ["https://www.nms.ac.jp/en/admissions/graduate/"],
  },

  // 藤田医科大学
  {
    universityId: "fujita",
    universityName: "藤田医科大学",
    type: "private",
    tier: "私立医大",
    portalUrl: "https://www.fujita-hu.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.fujita-hu.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受。",
    examTypes: ["一般入试"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "1,200,000〜3,800,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学"], admissionUrl: "https://www.fujita-hu.ac.jp/", facultyUrl: "https://www.fujita-hu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["中部圏最大級の病院", "免疫·がん研究有名"],
    dataSources: ["https://www.fujita-hu.ac.jp/en/admissions/graduate/"],
  },

  // 爱知医科大学
  {
    universityId: "aichi-medical",
    universityName: "爱知医科大学",
    type: "private",
    tier: "私立医大",
    portalUrl: "https://www.aichi-med-u.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.aichi-med-u.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受。",
    examTypes: ["一般入试"],
    tuitionInfo: { examFee: "50,000円", admissionFee: "200,000円", annualTuition: "3,500,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学", "医科学"], admissionUrl: "https://www.aichi-med-u.ac.jp/", facultyUrl: "https://www.aichi-med-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["名古屋医科大学が前身", "地域医療に強い"],
    dataSources: ["https://www.aichi-med-u.ac.jp/en/admissions/graduate/"],
  },

  // 浜松医科大学
  {
    universityId: "hama-med",
    universityName: "浜松医科大学",
    type: "national",
    tier: "国立医大",
    portalUrl: "https://www.hama-med.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.hama-med.ac.jp/",
    professorAcceptanceInfo: "各专攻主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "医学系研究科", nameJa: "医学系研究科", programs: ["医学", "医科学", "看護学"], admissionUrl: "https://www.hama-med.ac.jp/", facultyUrl: "https://www.hama-med.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["国立医大のため私立より格安", "浜松は医療機器産業集積"],
    dataSources: ["https://www.hama-med.ac.jp/en/admissions/graduate/"],
  },

  // 札幌医科大学
  {
    universityId: "sapporo-medical",
    universityName: "札幌医科大学",
    type: "public",
    tier: "公立医大",
    portalUrl: "https://www.sapmed.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.sapmed.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学", "医科学"], admissionUrl: "https://www.sapmed.ac.jp/", facultyUrl: "https://www.sapmed.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["北海道唯一の公立医大", "寒冷地医療研究特色"],
    dataSources: ["https://www.sapmed.ac.jp/en/admissions/graduate/"],
  },

  // 滋贺医科大学
  {
    universityId: "shiga-medical",
    universityName: "滋贺医科大学",
    type: "national",
    tier: "国立医大",
    portalUrl: "https://www.shiga-med.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.shiga-med.ac.jp/",
    professorAcceptanceInfo: "各专攻主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "医学系研究科", nameJa: "医学系研究科", programs: ["医学"], admissionUrl: "https://www.shiga-med.ac.jp/", facultyUrl: "https://www.shiga-med.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["国立医大·学費格安", "琵琶湖を臨む環境"],
    dataSources: ["https://www.shiga-med.ac.jp/en/admissions/graduate/"],
  },

  // 和歌山县立医科大学
  {
    universityId: "wakayama-medical",
    universityName: "和歌山县立医科大学",
    type: "public",
    tier: "公立医大",
    portalUrl: "https://www.wakayama-med.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.wakayama-med.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学", "看護学"], admissionUrl: "https://www.wakayama-med.ac.jp/", facultyUrl: "https://www.wakayama-med.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["和歌山唯一の医大", "公立のため学費安い"],
    dataSources: ["https://www.wakayama-med.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 著名私立综合大学 — 9校
  // ============================================================

  // 青山学院大学
  {
    universityId: "aoyama",
    universityName: "青山学院大学",
    type: "private",
    tier: "MARCH",
    portalUrl: "https://www.aoyama.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.aoyama.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。国际政治经济学研究科有名。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: ["英文学", "フランス文学", "日本文学", "史学", "比较芸術"], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学"], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "国际政治经济学研究科", nameJa: "国際政治経済学研究科", programs: ["国际政治", "国际经济", "国际コミュニケーション"], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["物理学", "化学·生命", "電気電子", "機械", "経営システム", "情報"], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["MARCHの中でも国際色豊か", "渋谷キャンパス好立地"],
    dataSources: ["https://www.aoyama.ac.jp/en/admissions/graduate/"],
  },

  // 中央大学
  {
    universityId: "chuo",
    universityName: "中央大学",
    type: "private",
    tier: "MARCH",
    portalUrl: "https://www.chuo-u.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.chuo-u.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。法学研究科有名。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "法学研究科", nameJa: "法学研究科", programs: ["法律", "政治"], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学", "国际经济"], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "商学研究科", nameJa: "商学研究科", programs: ["商学", "会计"], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["数学", "物理", "情报", "电气电子", "应用化学", "経営システム", "都市環境"], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["法の中央——法学研究科有名", "多摩キャンパス"],
    dataSources: ["https://www.chuo-u.ac.jp/en/admissions/graduate/"],
  },

  // 同志社大学
  {
    universityId: "doshisha",
    universityName: "同志社大学",
    type: "private",
    tier: "関関同立",
    portalUrl: "https://www.doshisha.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.doshisha.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: ["英文学", "哲学", "美学", "文化史", "国文学"], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学"], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "商学研究科", nameJa: "商学研究科", programs: ["商学"], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: ["法律", "政治"], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["数理", "机械", "电气电子", "化学", "情报"], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["関西私立トップ（関関同立最上位）", "今出川キャンパス京都中心"],
    dataSources: ["https://www.doshisha.ac.jp/en/admissions/graduate/"],
  },

  // 立命馆大学
  {
    universityId: "ritsumei",
    universityName: "立命馆大学",
    type: "private",
    tier: "関関同立",
    portalUrl: "https://www.ritsumei.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.ritsumei.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。国際関係研究科有名。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "国際関係研究科", nameJa: "国際関係研究科", programs: ["国际关系"], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学"], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "経営学研究科", nameJa: "経営学研究科", programs: ["経営学"], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["数学", "物理", "机械", "电气电子", "情报", "化学"], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "情报理工学研究科", nameJa: "情報理工学研究科", programs: ["情报科学", "知能情报", "生命情报"], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["国際関係研究科有名", "APUも運営"],
    dataSources: ["https://www.ritsumei.ac.jp/en/admissions/graduate/"],
  },

  // 关西大学
  {
    universityId: "kansai",
    universityName: "关西大学",
    type: "private",
    tier: "関関同立",
    portalUrl: "https://www.kansai-u.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.kansai-u.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。社会学研究科有名。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "社会学研究科", nameJa: "社会学研究科", programs: ["社会学"], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: ["法律", "政治"], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学"], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["数学", "物理", "机械", "电气电子", "化学", "环境都市"], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["関関同立の一つ", "千里山キャンパス"],
    dataSources: ["https://www.kansai-u.ac.jp/en/admissions/graduate/"],
  },

  // 关西学院大学
  {
    universityId: "kwansei",
    universityName: "关西学院大学",
    type: "private",
    tier: "関関同立",
    portalUrl: "https://www.kwansei.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.kwansei.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: ["文化历史", "心理", "文学言语"], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学"], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "商学研究科", nameJa: "商学研究科", programs: ["商学"], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["数理", "物理", "化学", "情报", "人間システム"], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["関関同立·キリスト教系"],
    dataSources: ["https://www.kwansei.ac.jp/en/admissions/graduate/"],
  },

  // 近畿大学
  {
    universityId: "kinki",
    universityName: "近畿大学",
    type: "private",
    tier: "私立総合",
    portalUrl: "https://www.kindai.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.kindai.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。农学研究科有名。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "1,000,000〜1,500,000円" },
    graduateSchools: [
      { name: "农学研究科", nameJa: "農学研究科", programs: ["农业生産", "水产", "生物機能", "食品栄養"], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学", "国际经济"], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["数学", "物理", "化学", "机械", "电气电子", "情报", "建筑"], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学"], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, hasResearchStudent: false, intakeMonths: ["4月"] },
    ],
    notes: ["西日本最大級の私立総合大学", "农学研究科マグロ養殖有名"],
    dataSources: ["https://www.kindai.ac.jp/en/admissions/graduate/"],
  },

  // 日本大学
  {
    universityId: "nihon",
    universityName: "日本大学",
    type: "private",
    tier: "私立総合",
    portalUrl: "https://www.nihon-u.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.nihon-u.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。16学部を有する大規模大学。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "25,000〜35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,400,000円" },
    graduateSchools: [
      { name: "法学研究科", nameJa: "法学研究科", programs: ["法律", "政治"], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学"], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["数学", "物理", "化学", "机械", "电气", "电子", "情报", "土木", "建筑"], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学"], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: false, intakeMonths: ["4月"] },
      { name: "芸術学研究科", nameJa: "芸術学研究科", programs: ["写真", "映画", "美術", "音楽"], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["日本最大の私立大学（学生数約7万名）", "芸術学研究科（日芸）有名"],
    dataSources: ["https://www.nihon-u.ac.jp/en/admissions/graduate/"],
  },

  // 东洋大学
  {
    universityId: "toyo",
    universityName: "东洋大学",
    type: "private",
    tier: "首都圏私立",
    portalUrl: "https://www.toyo.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.toyo.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "部分研究科接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "850,000〜1,200,000円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: ["哲学", "日本文学", "英语", "史学", "教育"], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学", "国际经济"], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "経営学研究科", nameJa: "経営学研究科", programs: ["経営学"], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["机械", "电气电子", "应用化学", "情报", "建筑"], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "国際学研究科", nameJa: "国際学研究科", programs: ["国际学", "国际観光"], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["国際化推進", "首都圏私立·留学生受入積極的"],
    dataSources: ["https://www.toyo.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 公立大学与特色大学 — 8校
  // ============================================================

  // 大阪公立大学
  {
    universityId: "omu",
    universityName: "大阪公立大学",
    type: "public",
    tier: "公立総合",
    portalUrl: "https://www.omu.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.omu.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。2022年統合大規模公立大学。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: ["人間文化", "言語文化"], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学"], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: ["机械", "电气电子", "情报", "応用化学", "建筑", "都市"], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "理学研究科", nameJa: "理学研究科", programs: ["数学", "物理", "化学", "生物", "地球"], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "农学研究科", nameJa: "農学研究科", programs: ["农学", "兽医"], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学", "看護"], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["2022年統合·日本最大規模公立大学", "国公立並み学費"],
    dataSources: ["https://www.omu.ac.jp/en/admissions/graduate/"],
  },

  // 东京都立大学
  {
    universityId: "tmu",
    universityName: "东京都立大学",
    type: "public",
    tier: "公立総合",
    portalUrl: "https://www.tmu.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.tmu.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "法学研究科", nameJa: "法学研究科", programs: ["法律"], admissionUrl: "https://www.tmu.ac.jp/", facultyUrl: "https://www.tmu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济", "経営", "金融"], admissionUrl: "https://www.tmu.ac.jp/", facultyUrl: "https://www.tmu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理学研究科", nameJa: "理学研究科", programs: ["数学", "物理", "化学", "生物"], admissionUrl: "https://www.tmu.ac.jp/", facultyUrl: "https://www.tmu.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "システムデザイン研究科", nameJa: "システムデザイン研究科", programs: ["机械系統", "电气电子", "情報通信", "航空宇宙"], admissionUrl: "https://www.tmu.ac.jp/", facultyUrl: "https://www.tmu.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["東京都運営", "国公立並み学費で都心近接"],
    dataSources: ["https://www.tmu.ac.jp/en/admissions/graduate/"],
  },

  // 横滨市立大学
  {
    universityId: "yokohama-city",
    universityName: "横滨市立大学",
    type: "public",
    tier: "公立総合",
    portalUrl: "https://www.yokohama-cu.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.yokohama-cu.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。データサイエンス研究科注目。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。需教授内诺。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "国际総合科学研究科", nameJa: "国際総合科学研究科", programs: ["国际教養", "理学", "経済·経営"], admissionUrl: "https://www.yokohama-cu.ac.jp/", facultyUrl: "https://www.yokohama-cu.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "生命医科学研究科", nameJa: "生命医科学研究科", programs: ["生命科学", "医科学"], admissionUrl: "https://www.yokohama-cu.ac.jp/", facultyUrl: "https://www.yokohama-cu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "データサイエンス研究科", nameJa: "データサイエンス研究科", programs: ["データサイエンス"], admissionUrl: "https://www.yokohama-cu.ac.jp/", facultyUrl: "https://www.yokohama-cu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["データサイエンス研究科注目", "公立のため学費安い"],
    dataSources: ["https://www.yokohama-cu.ac.jp/en/admissions/graduate/"],
  },

  // 名古屋市立大学
  {
    universityId: "nagoya-city",
    universityName: "名古屋市立大学",
    type: "public",
    tier: "公立総合",
    portalUrl: "https://www.nagoya-cu.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.nagoya-cu.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学", "経営学"], admissionUrl: "https://www.nagoya-cu.ac.jp/", facultyUrl: "https://www.nagoya-cu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "人文社会学研究科", nameJa: "人文社会学研究科", programs: ["人間文化", "社会学"], admissionUrl: "https://www.nagoya-cu.ac.jp/", facultyUrl: "https://www.nagoya-cu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "薬学研究科", nameJa: "薬学研究科", programs: ["薬学"], admissionUrl: "https://www.nagoya-cu.ac.jp/", facultyUrl: "https://www.nagoya-cu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "医学研究科", nameJa: "医学研究科", programs: ["医学"], admissionUrl: "https://www.nagoya-cu.ac.jp/", facultyUrl: "https://www.nagoya-cu.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["名古屋市の公立大学", "薬学研究科有名"],
    dataSources: ["https://www.nagoya-cu.ac.jp/en/admissions/graduate/"],
  },

  // 兵庫県立大学
  {
    universityId: "hyogo",
    universityName: "兵庫县立大学",
    type: "public",
    tier: "公立総合",
    portalUrl: "https://www.u-hyogo.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.u-hyogo.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "理学研究科", nameJa: "理学研究科", programs: ["数学", "物理", "化学", "生命"], admissionUrl: "https://www.u-hyogo.ac.jp/", facultyUrl: "https://www.u-hyogo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: ["机械", "电气电子", "情報", "応用化学", "建筑"], admissionUrl: "https://www.u-hyogo.ac.jp/", facultyUrl: "https://www.u-hyogo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "情報科学研究科", nameJa: "情報科学研究科", programs: ["情報科学"], admissionUrl: "https://www.u-hyogo.ac.jp/", facultyUrl: "https://www.u-hyogo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["兵庫県の公立大学"],
    dataSources: ["https://www.u-hyogo.ac.jp/en/admissions/graduate/"],
  },

  // 静岡県立大学
  {
    universityId: "shizuoka-pu",
    universityName: "静岡县立大学",
    type: "public",
    tier: "公立総合",
    portalUrl: "https://www.u-shizuoka-ken.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.u-shizuoka-ken.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。薬学研究科有名。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "薬学研究科", nameJa: "薬学研究科", programs: ["薬学"], admissionUrl: "https://www.u-shizuoka-ken.ac.jp/", facultyUrl: "https://www.u-shizuoka-ken.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "国際関係学研究科", nameJa: "国際関係学研究科", programs: ["国際関係"], admissionUrl: "https://www.u-shizuoka-ken.ac.jp/", facultyUrl: "https://www.u-shizuoka-ken.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "食品栄養科学研究科", nameJa: "食品栄養科学研究科", programs: ["食品生命", "栄養生命"], admissionUrl: "https://www.u-shizuoka-ken.ac.jp/", facultyUrl: "https://www.u-shizuoka-ken.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["静岡県の公立大学", "薬学研究科有名"],
    dataSources: ["https://www.u-shizuoka-ken.ac.jp/en/admissions/graduate/"],
  },

  // 富山県立大学
  {
    universityId: "toyama-pu",
    universityName: "富山県立大学",
    type: "public",
    tier: "公立工科",
    portalUrl: "https://www.pu-toyama.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.pu-toyama.ac.jp/",
    professorAcceptanceInfo: "各研究科主页有教员一览。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: ["机械系統", "电气电子", "情報", "環境·社会"], admissionUrl: "https://www.pu-toyama.ac.jp/", facultyUrl: "https://www.pu-toyama.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "生物工学研究科", nameJa: "生物工学研究科", programs: ["生物工学"], admissionUrl: "https://www.pu-toyama.ac.jp/", facultyUrl: "https://www.pu-toyama.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["北陸の公立工科系大学", "生活費日本最低クラス"],
    dataSources: ["https://www.pu-toyama.ac.jp/en/admissions/graduate/"],
  },

  // 会津大学
  {
    universityId: "aizu",
    universityName: "会津大学",
    type: "public",
    tier: "公立特色",
    portalUrl: "https://www.u-aizu.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.u-aizu.ac.jp/",
    professorAcceptanceInfo: "各研究室主页有教员一览。コンピュータ専門大学。",
    applicationSystem: "各研究科独立",
    researchStudentInfo: "接受研究生（预科旁听生·无学位）。",
    examTypes: ["一般入试", "英語プログラム"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "コンピュータ理工学研究科", nameJa: "コンピュータ理工学研究科", programs: ["コンピュータ科学", "情報システム"], admissionUrl: "https://www.u-aizu.ac.jp/", facultyUrl: "https://www.u-aizu.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["日本初のコンピュータ専門公立大学", "英語プログラム充実"],
    dataSources: ["https://www.u-aizu.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 一橋大学
  // ============================================================
  {
    universityId: "hitotsubashi",
    universityName: "一桥大学",
    type: "national",
    tier: "Top Type (B)",
    portalUrl: "https://www.hit-u.ac.jp/eng/academics/graduate/",
    professorSearchUrl: "https://hri.ad.hit-u.ac.jp/",
    professorAcceptanceInfo: "一桥大学研究者检索：hermes-ir.lib.hit-u.ac.jp（学术成果库）+ HUMAP学术ポートフォリオ。各研究科主页有教员一览及研究方向。出愿前务必邮件联系教授确认收生意愿。商学研究科·经济学研究科竞争激烈，建议提前6个月联系教授。",
    applicationSystem: "各研究科独立出愿系统",
    researchStudentInfo: "各研究科接受研究生（预科旁听生·无学位·私费）。需获教授内诺。入学料282,000円，授業料535,800円/年（29,200円/月）。研究生期间可旁听课程，准备大学院入试。",
    examTypes: ["一般入试（书类选考+专业科目笔试+面试）", "外国人留学生特别选考（部分研究科）", "ICS英语MBA选拔（GMAT/GRE+书类+面试）"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "経済学研究科", nameJa: "経済学研究科", programs: ["経済学"], admissionUrl: "https://www.econ.hit-u.ac.jp/", facultyUrl: "https://www.econ.hit-u.ac.jp/faculty/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "商学研究科", nameJa: "商学研究科", programs: ["商学", "MBA", "会計学"], admissionUrl: "https://www.commerce.hit-u.ac.jp/", facultyUrl: "https://www.commerce.hit-u.ac.jp/faculty/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: ["法学", "国際関係", "法科大学院(JD)"], admissionUrl: "https://www.law.hit-u.ac.jp/", facultyUrl: "https://www.law.hit-u.ac.jp/faculty/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "社会学研究科", nameJa: "社会学研究科", programs: ["社会学", "人间科学", "社会政策"], admissionUrl: "https://www.soc.hit-u.ac.jp/", facultyUrl: "https://www.soc.hit-u.ac.jp/faculty/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "言語社会研究科", nameJa: "言語社会研究科", programs: ["日語教育", "英語学", "言語学", "比較文化"], admissionUrl: "https://www.cls.hit-u.ac.jp/", facultyUrl: "https://www.cls.hit-u.ac.jp/faculty/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "社会データ科学研究科", nameJa: "社会データ科学研究科", programs: ["社会データ科学", "統計学", "機械学習"], admissionUrl: "https://www.sds.hit-u.ac.jp/", facultyUrl: "https://www.sds.hit-u.ac.jp/faculty/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "国際企業戦略研究科（ICS）", nameJa: "国際企業戦略研究科", programs: ["MBA", "DBA", "経営管理"], admissionUrl: "https://www.ics.hit-u.ac.jp/en/admissions/", facultyUrl: "https://www.ics.hit-u.ac.jp/en/faculty/", hasEnglishProgram: true, hasResearchStudent: false, intakeMonths: ["9月"] },
    ],
    notes: [
      "纯文系国立——7个研究科全部社科类，无理工/医学",
      "ICS为唯一全英文项目（MBA/DBA），丸の内校区，9月入学",
      "社会データ科学研究科2023年新设——社科×AI交叉学科",
      "入学金282,000円（非标准国立84,600円）——一桥独立法人化",
      "教授内诺为录取关键——商学/经济学研究科尤其重要",
      "法科大学院（JD）与学术型法学研究科分开选拔",
    ],
    dataSources: ["https://www.hit-u.ac.jp/eng/academics/graduate/", "https://www.econ.hit-u.ac.jp/", "https://www.commerce.hit-u.ac.jp/", "https://www.law.hit-u.ac.jp/", "https://www.soc.hit-u.ac.jp/", "https://www.ics.hit-u.ac.jp/en/"],
  },
];
