// ============================================================
// 日本高度人才加分校（SGU Top Type A类全12校 + 扩展38校）大学院入試データ
// 按各大学官网2026年实际募集要项整理，每条数据标注来源URL
// 教授名单为动态数据，标注各校研究室检索入口及受入状况确认方法
// 数据采集日期：2026年5月，各大学官网 + KAKEN + researchmap
// ============================================================

import { graduateAdmissionsSupplement } from "./university-admissions-supplement";

export interface GraduateAdmissionInfo {
  universityId: string;
  universityName: string;
  type: "national" | "private" | "public";
  tier: string;
  portalUrl: string;
  aaoSystem?: string;
  professorSearchUrl: string; // 全学教授检索入口
  professorAcceptanceInfo: string; // 教授受入状况确认方法（哪些教授在招学生）
  applicationSystem: string;
  researchStudentInfo: string;
  examTypes: string[];
  tuitionInfo: {
    examFee: string;
    admissionFee: string;
    annualTuition: string;
  };
  graduateSchools: {
    name: string;
    nameJa: string;
    programs: string[];
    admissionUrl: string;
    facultyUrl: string; // 该研究科教员一览URL
    hasEnglishProgram: boolean;
    hasResearchStudent: boolean;
    intakeMonths: string[];
  }[];
  notes: string[];
  dataSources: string[];
}

export const graduateAdmissions: GraduateAdmissionInfo[] = [
  // ============================================================
  // 国立大学 Top Type (S) — 10校
  // ============================================================

  {
    universityId: "utokyo",
    universityName: "东京大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.u-tokyo.ac.jp/ja/prospective-students/graduate.html",
    professorSearchUrl: "https://www.u-tokyo.ac.jp/en/research/faculty.html",
    professorAcceptanceInfo:
      "EEIS电子电气系guidebook直接标注教授受入状态：* = 2026年不收学生，+ = 只收博士不收修士。先端学際工学(AIS)教员列表中[*1]标记 = 不收新学生。其余研究科需直接查看各研究室主页确认「学生募集中」或邮件联系教授确认。https://www.eeis.t.u-tokyo.ac.jp/en/education/guidebook/",
    applicationSystem: "各研究科独立系统（T-cens等）",
    researchStudentInfo: "多数研究科接受外国人研究生（预科旁听生·无学位，私费），需获教授内诺。入学时期4月/10月。具体：http://ois.t.u-tokyo.ac.jp/admission/index.html",
    examTypes: ["一般入试（日语笔试+面试·夏8月/冬2月）", "外国人特别选考（部分研究科）", "英语プログラム（IME/GSGC等）"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "人文社会系研究科", nameJa: "人文社会系研究科", programs: ["哲学", "史学", "言語文化", "社会学", "心理学"], admissionUrl: "https://www.l.u-tokyo.ac.jp/", facultyUrl: "https://www.l.u-tokyo.ac.jp/eng/teacher/index_d.html", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "教育学研究科", nameJa: "教育学研究科", programs: ["教育学", "教育心理学"], admissionUrl: "https://www.p.u-tokyo.ac.jp/", facultyUrl: "https://www.p.u-tokyo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "法学政治学研究科", nameJa: "法学政治学研究科", programs: ["法学", "政治学", "公共政策"], admissionUrl: "https://www.j.u-tokyo.ac.jp/", facultyUrl: "https://www.j.u-tokyo.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["经济学", "经营学", "统计学"], admissionUrl: "https://www.student.e.u-tokyo.ac.jp/grad/", facultyUrl: "https://www.e.u-tokyo.ac.jp/fservice/faculty/viewrfe.html", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "综合文化研究科", nameJa: "総合文化研究科", programs: ["言語情報科学", "超域文化科学", "地域文化研究", "国際社会科学"], admissionUrl: "https://www.c.u-tokyo.ac.jp/", facultyUrl: "https://www.c.u-tokyo.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "理学系研究科", nameJa: "理学系研究科", programs: ["物理学", "天文学", "地球惑星科学", "化学", "生物科学"], admissionUrl: "https://www.s.u-tokyo.ac.jp/en/admission/graduate.html", facultyUrl: "https://www.s.u-tokyo.ac.jp/en/people/index.html", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "工学系研究科", nameJa: "工学系研究科", programs: ["土木工学", "建築学", "機械工学", "電気電子", "化学システム", "マテリアル工学", "航空宇宙", "システム創成学"], admissionUrl: "https://www.t.u-tokyo.ac.jp/en/study-at-utokyo/soe", facultyUrl: "https://www.t.u-tokyo.ac.jp/en/soe/faculty", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "農学生命科学研究科", nameJa: "農学生命科学研究科", programs: ["農学", "生命科学", "獣医学", "水圏生物科学"], admissionUrl: "https://www.a.u-tokyo.ac.jp/", facultyUrl: "https://www.a.u-tokyo.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "医学系研究科", nameJa: "医学系研究科", programs: ["医学", "医科学", "保健学", "国際保健学"], admissionUrl: "https://www.m.u-tokyo.ac.jp/", facultyUrl: "https://www.m.u-tokyo.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "薬学系研究科", nameJa: "薬学系研究科", programs: ["薬科学", "創薬科学"], admissionUrl: "https://www.f.u-tokyo.ac.jp/", facultyUrl: "https://www.f.u-tokyo.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "数理科学研究科", nameJa: "数理科学研究科", programs: ["数理科学"], admissionUrl: "https://www.ms.u-tokyo.ac.jp/", facultyUrl: "https://www.ms.u-tokyo.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "情報理工学系研究科", nameJa: "情報理工学系研究科", programs: ["コンピュータ科学", "数理情報学", "電子情報学", "知能機械情報学", "創造情報学"], admissionUrl: "https://www.i.u-tokyo.ac.jp/edu/entra/entra_e.shtml", facultyUrl: "https://www.i.u-tokyo.ac.jp/edu/stud/teach_e.shtml", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "新領域創成科学研究科", nameJa: "新領域創成科学研究科", programs: ["環境学", "先端生命科学", "情報生命科学", "自然環境学", "海洋技術"], admissionUrl: "https://www.k.u-tokyo.ac.jp/en/education/education_program/", facultyUrl: "https://www.k.u-tokyo.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["2025年10月起启用AI初筛系统，材料需双认证", "EEIS电气电子系guidebook直接标注各教授受入可否（*不收学生/+只收博士），极为稀有", "各研究科一般入试日程不同，分夏入试（8月）和冬入试（2月）", "教授内诺为录取关键，研究计划书与教授方向匹配度决定成败"],
    dataSources: ["https://www.u-tokyo.ac.jp/ja/prospective-students/graduate.html", "https://www.i.u-tokyo.ac.jp/edu/entra/entra_e.shtml", "https://www.t.u-tokyo.ac.jp/en/soe/faculty", "https://www.eeis.t.u-tokyo.ac.jp/en/education/guidebook/", "https://www.s.u-tokyo.ac.jp/en/people/index.html"],
  },

  {
    universityId: "kyoto-u",
    universityName: "京都大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.kyoto-u.ac.jp/ja/admissions/graduate",
    professorSearchUrl: "https://kdb.iimc.kyoto-u.ac.jp/",
    professorAcceptanceInfo:
      "KDB（京都大学教育研究活动データベース）是全学统一研究者数据库，可按研究科/关键词检索所有教员。理学研究科各专攻公开的PDF教员列表中，#标记 = 2026年度末退官（不收新学生）。其余研究科无中央受入标记系统，需查研究室主页「メンバー募集」或直接邮件联系教授。出愿前务必通过AAO系统联系教授。",
    aaoSystem: "AAO（Admissions Assistance Office）事前审查：海外大学出身者必须在线提交成绩单、研究计划书等通过审查后才能联系教授。https://www.kyoto-u.ac.jp/ja/admissions/aao 处理约需2-4周",
    applicationSystem: "各研究科独立系统",
    researchStudentInfo: "多数研究科接受研究生（预科旁听生·无学位）。需先通过AAO审查→获教授内诺→出愿。入学时期4月/10月",
    examTypes: ["一般入试（夏入试8月/冬入试2月）", "AAO事前审查→教授内诺→出愿", "AO入试（海外在住者向け特別選考·部分研究科）"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: ["哲学", "史学", "文学", "言語学", "社会学", "心理学"], admissionUrl: "https://www.bun.kyoto-u.ac.jp/", facultyUrl: "https://www.ceschi.bun.kyoto-u.ac.jp/db/en/app/home/public/facet/1/12/2/39", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "教育学研究科", nameJa: "教育学研究科", programs: ["教育学", "教育心理学", "臨床教育学"], admissionUrl: "https://www.educ.kyoto-u.ac.jp/", facultyUrl: "https://kdb.iimc.kyoto-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: ["法学", "政治学"], admissionUrl: "https://www.law.kyoto-u.ac.jp/", facultyUrl: "https://kdb.iimc.kyoto-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: ["経済学", "経営学"], admissionUrl: "https://www.econ.kyoto-u.ac.jp/", facultyUrl: "http://www.econ.kyoto-u.ac.jp/en/faculty-members/professor/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "理学研究科", nameJa: "理学研究科", programs: ["数学", "物理学", "化学", "生物科学", "地球惑星科学"], admissionUrl: "https://www.sci.kyoto-u.ac.jp/", facultyUrl: "https://sci.kyoto-u.ac.jp/en/admissions/laboratories", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: ["機械理工学", "電気工学", "材料工学", "建築学", "都市環境工学", "化学工学"], admissionUrl: "https://www.t.kyoto-u.ac.jp/en/admissions/graduate/exam1", facultyUrl: "https://www.t.kyoto-u.ac.jp/en/research/people", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "農学研究科", nameJa: "農学研究科", programs: ["農学", "森林科学", "水産科学", "食品科学", "地域環境科学"], admissionUrl: "https://www.agri.kyoto-u.ac.jp/", facultyUrl: "https://kdb.iimc.kyoto-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "情報学研究科", nameJa: "情報学研究科", programs: ["知能情報学", "社会情報学", "データ科学", "通信情報システム"], admissionUrl: "https://web.i.kyoto-u.ac.jp/en/admission/application.html", facultyUrl: "https://www.i.kyoto-u.ac.jp/en/faculty/professor/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "人間・環境学研究科", nameJa: "人間・環境学研究科", programs: ["文化学", "言語科学", "数理科学", "生命科学", "環境学"], admissionUrl: "https://www.h.kyoto-u.ac.jp/", facultyUrl: "https://kdb.iimc.kyoto-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "エネルギー科学研究科", nameJa: "エネルギー科学研究科", programs: ["エネルギー社会·環境科学", "エネルギー基礎科学", "エネルギー変換科学"], admissionUrl: "https://www.energy.kyoto-u.ac.jp/", facultyUrl: "https://kdb.iimc.kyoto-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "生命科学研究科", nameJa: "生命科学研究科", programs: ["統合生命科学", "高次生命科学"], admissionUrl: "https://www.lif.kyoto-u.ac.jp/", facultyUrl: "https://kdb.iimc.kyoto-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["AAO制度是最大特色和首要关卡，需提前至少1-2月准备", "KDB（kdb.iimc.kyoto-u.ac.jp）是最完整的全学研究者検索ツール", "理学研究科教员PDF中 # = 2026年度末退官（不收新学生）", "研究计划书与教授研究方向匹配度是录取核心标准"],
    dataSources: ["https://www.kyoto-u.ac.jp/ja/admissions/aao", "https://kdb.iimc.kyoto-u.ac.jp/", "https://www.t.kyoto-u.ac.jp/en/research/people", "https://www.i.kyoto-u.ac.jp/en/faculty/professor/", "https://sci.kyoto-u.ac.jp/en/admissions/laboratories"],
  },

  {
    universityId: "titech",
    universityName: "东京科学大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://admissions.isct.ac.jp",
    professorSearchUrl: "https://search.star.titech.ac.jp/",
    professorAcceptanceInfo:
      "STAR Search（search.star.titech.ac.jp）可检索全学研究者。各学院网站有教员列表页（例：工学院 https://www.titech.ac.jp/english/prospective-students/faculty/ee）。IGP程序入学时英语成绩2025年度起改为「任意」（不再强制提交TOEFL/IELTS）。实验室层面：Ohue研（情报理工）、Fujii研（土木）等直接在官网标注「学生募集中」。",
    applicationSystem: "IGP (A)/(B)/(C) 三轨制",
    researchStudentInfo: "接受研究生（预科旁听生·无学位，私费）。2025年9月入学：出愿5/15-29。入学料84,600円，授業料178,200円/半年。https://g-www.jim.titech.ac.jp/english/student/prospective-students/non-degree/privately-funded",
    examTypes: ["IGP (A) テーマ重点型（9月入学·MEXT奖学金）", "IGP (B) 協働型", "IGP (C) 一般型（4月/9月入学·留学生最常用）", "一般入试（日语笔试+面试）", "渡日前特別推薦（環境·社会理工学院·不需赴日）"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "635,400円" },
    graduateSchools: [
      { name: "理学院", nameJa: "理学院", programs: ["数学", "物理学", "化学", "地球惑星科学"], admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://search.star.titech.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "工学院", nameJa: "工学院", programs: ["機械", "電気電子", "情報通信", "システム制御", "経営工学"], admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://www.titech.ac.jp/english/prospective-students/faculty/ee", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "物質理工学院", nameJa: "物質理工学院", programs: ["材料", "応用化学"], admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://educ.titech.ac.jp/mat/eng/faculty/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "情報理工学院", nameJa: "情報理工学院", programs: ["情報工学", "数理·計算科学"], admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://search.star.titech.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "環境·社会理工学院", nameJa: "環境·社会理工学院", programs: ["建築学", "土木工学", "都市工学", "社会·人間科学"], admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://educ.titech.ac.jp/tse/eng/faculty/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
    ],
    notes: ["2025年度起英语成绩（TOEFL/IELTS）提交改为'任意'！", "2024年10月由东工大+东京医科齿科大学合并成立", "IGP (C) 为留学生最常用路径，覆盖6学院18专攻", "新设「渡日前特別推薦」：环境社会理工学院可海外直接申请", "被选为MEXT国际卓越研究大学（2025年12月，最高25年10兆日元基金支援）"],
    dataSources: ["https://admissions.isct.ac.jp", "https://search.star.titech.ac.jp/", "https://www.titech.ac.jp/english/prospective-students/faculty/ee", "https://educ.titech.ac.jp/mat/eng/faculty/"],
  },

  {
    universityId: "osaka-u",
    universityName: "大阪大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.osaka-u.ac.jp/en/admissions/graduate",
    professorSearchUrl: "https://rd.iai.osaka-u.ac.jp/",
    professorAcceptanceInfo:
      "全学研究者总览RD（rd.iai.osaka-u.ac.jp）可按研究科检索。情报科学研究科是教员列表最完整的研究科（https://www.ist.osaka-u.ac.jp/english/researcher/list.php）。经济学研究科有清晰英文faculty列表。AAD（Dragon Gate系统）是事前审查必须经由的入口，处理约3周。",
    aaoSystem: "AAD（Admissions Assistance Desk）：Dragon Gate系统，海外大学出身者必须通过AAD联系教授。https://www.osaka-u.ac.jp/en/international/inbound/dragongate 处理约3周",
    applicationSystem: "各研究科独立系统 + AAD事前审查",
    researchStudentInfo: "多数研究科接受研究生（预科旁听生·无学位）。需AAD审查→教授内诺→出愿。基础工学研究科：https://www.es.osaka-u.ac.jp/en/admission-aid/Non-degree/index.html",
    examTypes: ["一般入试（夏/冬）", "外国人留学生特别选考", "英语学位プログラム（部分研究科）"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: ["哲学", "史学", "文学", "人間科学", "芸術学"], admissionUrl: "https://www.let.osaka-u.ac.jp/", facultyUrl: "https://rd.iai.osaka-u.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: ["機械工学", "電気電子", "材料工学", "情報科学", "環境·エネルギー工学", "ビジネスエンジニアリング"], admissionUrl: "https://www.eng.osaka-u.ac.jp/en/entrance/f_admissions/", facultyUrl: "https://www.eng.osaka-u.ac.jp/en/school/ug_divisions/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "基礎工学研究科", nameJa: "基礎工学研究科", programs: ["数理科学", "物理工学", "化学工学", "生物工学", "情報工学", "システム科学"], admissionUrl: "https://www.es.osaka-u.ac.jp/en/admission-aid/graduate-admissions/", facultyUrl: "https://www.es.osaka-u.ac.jp/en/faculty-research/index.html", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "情報科学研究科", nameJa: "情報科学研究科", programs: ["情報基礎数学", "情報数理学", "コンピュータサイエンス", "情報システム工学", "情報ネットワーク学", "マルチメディア工学", "バイオ情報工学"], admissionUrl: "https://www.ist.osaka-u.ac.jp/english/examinees/admission/guidelines2026.php", facultyUrl: "https://www.ist.osaka-u.ac.jp/english/researcher/list.php", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "理学研究科", nameJa: "理学研究科", programs: ["数学", "物理学", "化学", "生物科学", "高分子科学", "地球宇宙科学"], admissionUrl: "https://www.sci.osaka-u.ac.jp/en/", facultyUrl: "https://rd.iai.osaka-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: ["経済学", "経営学（Sustainable Economy Program英语可）"], admissionUrl: "https://www.econ.osaka-u.ac.jp/en/en-graduate/en-g-notice/", facultyUrl: "https://www.econ.osaka-u.ac.jp/en/en-faculty/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "生命機能研究科", nameJa: "生命機能研究科", programs: ["生命機能（5年一貫博士）"], admissionUrl: "https://www.fbs.osaka-u.ac.jp/en/application/guideline/", facultyUrl: "https://www.fbs.osaka-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: false, intakeMonths: ["4月", "10月"] },
      { name: "国際公共政策研究科", nameJa: "国際公共政策研究科", programs: ["国際公共政策", "比較公共政策"], admissionUrl: "https://www.osipp.osaka-u.ac.jp/", facultyUrl: "https://rd.iai.osaka-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["AAD（Dragon Gate系统）类似京大AAO，必须提前至少1月申请", "2025年英语名称改为The University of Osaka", "2027年度入试起工学研究科选抜方法有变更", "情报科学研究科研究者リスト最完整：ist.osaka-u.ac.jp/english/researcher/list.php"],
    dataSources: ["https://www.osaka-u.ac.jp/en/international/inbound/dragongate", "https://www.ist.osaka-u.ac.jp/english/researcher/list.php", "https://www.econ.osaka-u.ac.jp/en/en-faculty/", "https://www.es.osaka-u.ac.jp/en/faculty-research/index.html"],
  },

  {
    universityId: "tohoku",
    universityName: "东北大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.tohoku.ac.jp/en/admissions/graduate.html",
    professorSearchUrl: "https://www.r-info.tohoku.ac.jp/",
    professorAcceptanceInfo:
      "全学研究者数据库R-info（www.r-info.tohoku.ac.jp）可按研究科检索所有教员。国際文化研究科是最完整的faculty列表（www.intcul.tohoku.ac.jp/en/faculty），按部门分类一目了然。工学研究科335名教员（教授114+准教授95+讲师助手126，2025年4月统计）。工学系研究生（预科旁听生·无学位）需提前至少6个月联系教授获内诺。",
    applicationSystem: "TAO（The Admissions Office）在线出愿系统",
    researchStudentInfo: "多数研究科广泛接受研究生（预科旁听生·无学位）。需事前获教授内诺。入学料84,600円，授業料178,200円/半年。各研究科研究生（预科旁听生）教务独立",
    examTypes: ["一般入试（秋季8月/春季2-3月）", "英语プログラム（IGPLS/G2SD/GPEM等）", "外国人留学生特别选考"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: ["日本文学", "史学", "哲学", "社会学", "言語学"], admissionUrl: "https://www.sal.tohoku.ac.jp/", facultyUrl: "https://www.r-info.tohoku.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "情報科学研究科", nameJa: "情報科学研究科", programs: ["数学·计算机科学", "系统情報科学", "人类社会情報科学", "应用情報科学"], admissionUrl: "https://www.is.tohoku.ac.jp/en/entrance/exam.html", facultyUrl: "https://www.r-info.tohoku.ac.jp/en/f62dd6d021e1e3b9ddee4276ab2e93c6.html", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: ["機械工学", "電気·通信工学", "材料科学（金属材料世界第一）", "土木工学", "化学工学"], admissionUrl: "https://www.eng.tohoku.ac.jp/", facultyUrl: "https://www.eng.tohoku.ac.jp/english/research/search/?id=9", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "生命科学研究科", nameJa: "生命科学研究科", programs: ["分子生命科学", "脳生命科学", "生態生命科学"], admissionUrl: "https://www.lifesci.tohoku.ac.jp/en/admission/schedule/", facultyUrl: "https://www.r-info.tohoku.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "国際文化研究科", nameJa: "国際文化研究科", programs: ["IGPLS（言語科学）", "G2SD（全球治理与可持续发展）"], admissionUrl: "https://www.intcul.tohoku.ac.jp/en/contents/admission_info", facultyUrl: "https://www.intcul.tohoku.ac.jp/en/faculty", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "経済経営学研究科", nameJa: "経済経営学研究科", programs: ["GPEM英语プログラム（10月入学）"], admissionUrl: "http://www.econ.tohoku.ac.jp/en/gpem/gpem-admission", facultyUrl: "https://www.r-info.tohoku.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "環境科学研究科", nameJa: "環境科学研究科", programs: ["Human Security and Environment（英語）", "環境科学"], admissionUrl: "https://www.kankyo.tohoku.ac.jp/", facultyUrl: "https://www.r-info.tohoku.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "医工学研究科", nameJa: "医工学研究科", programs: ["医工学"], admissionUrl: "https://www.bme.tohoku.ac.jp/english/information/international/", facultyUrl: "https://www.r-info.tohoku.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "教育学研究科", nameJa: "教育学研究科", programs: ["教育学（I-GES英语プログラム）"], admissionUrl: "https://www.sed.tohoku.ac.jp/course/i-ges/admission/", facultyUrl: "https://www.r-info.tohoku.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["10月"] },
    ],
    notes: ["Tier A校中的材料科学世界第一，科研力连续5年THE日本第一", "国際文化研究科有最完整的faculty列表页", "8个英语授课大学院プログラム均有秋季入学", "仙台生活成本约东京60%"],
    dataSources: ["https://www.tohoku.ac.jp/en/admissions/graduate.html", "https://www.r-info.tohoku.ac.jp/", "https://www.intcul.tohoku.ac.jp/en/faculty", "https://www.eng.tohoku.ac.jp/english/research/search/?id=9", "https://www.is.tohoku.ac.jp/en/entrance/exam.html"],
  },

  {
    universityId: "nagoya-u",
    universityName: "名古屋大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.nagoya-u.ac.jp/admission/",
    professorSearchUrl: "https://profs.provost.nagoya-u.ac.jp/",
    professorAcceptanceInfo:
      "全学研究者数据库（profs.provost.nagoya-u.ac.jp）覆盖所有研究科。工学研究科约303名研究者，情报学研究科约97名。土木工学专攻有最完整的英文教员列表（www.civil.nagoya-u.ac.jp/introduction/teacher-e.html）。研究生（预科旁听生·无学位）申请需事前获教授内诺。",
    applicationSystem: "NU-AAS（Nagoya University Admission Assistance System）",
    researchStudentInfo: "多数研究科接受研究生（预科旁听生·无学位），出愿通过NU-AAS系统。工学研究生（预科旁听生·无学位）：https://int-office.engg.nagoya-u.ac.jp/prospectivestudents/rs/ 入学料84,600円，授業料178,200円/半年",
    examTypes: ["一般入试（日语笔试+面试）", "G30国際プログラム（英语）", "留学生特別選抜（部分研究科）"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "人文学研究科", nameJa: "人文学研究科", programs: ["人文学", "言語学", "史学", "哲学"], admissionUrl: "https://www.hum.nagoya-u.ac.jp/en/admissions/", facultyUrl: "https://profs.provost.nagoya-u.ac.jp/search?m=affiliation&l=en&a2=1000553", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: ["機械工学", "電気電子", "材料科学", "化学工学", "土木工学"], admissionUrl: "https://int-office.engg.nagoya-u.ac.jp/prospectivestudents/rs/", facultyUrl: "https://profs.provost.nagoya-u.ac.jp/search?m=affiliation&l=en&a2=0000044", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "情報学研究科", nameJa: "情報学研究科", programs: ["情報学", "数理情報", "複雑系科学", "知能科学"], admissionUrl: "https://www.i.nagoya-u.ac.jp/en/gs/entranceexamination/admission02/", facultyUrl: "https://profs.provost.nagoya-u.ac.jp/search?m=affiliation&l=en&a2=1000631", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "環境学研究科", nameJa: "環境学研究科", programs: ["地球環境科学", "都市環境学", "社会環境学"], admissionUrl: "https://falcon.env.nagoya-u.ac.jp/english/admission/", facultyUrl: "https://profs.provost.nagoya-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "理学研究科", nameJa: "理学研究科", programs: ["物理学", "化学", "生物学", "地球惑星科学"], admissionUrl: "https://www.sci.nagoya-u.ac.jp/", facultyUrl: "https://profs.provost.nagoya-u.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: ["経済学", "経営学"], admissionUrl: "https://www2.soec.nagoya-u.ac.jp/", facultyUrl: "https://profs.provost.nagoya-u.ac.jp/search?m=affiliation&l=en&a2=0000043", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["G30国際プログラム：http://admissions.g30.nagoya-u.ac.jp/apply/", "人文学研究科研究生（预科旁听生·无学位）要求JLPT N1 150分+", "丰田汽车总部所在地，工学就业资源丰富", "研究者数据库profs.provost.nagoya-u.ac.jp覆盖全学所有研究科"],
    dataSources: ["https://profs.provost.nagoya-u.ac.jp/", "https://int-office.engg.nagoya-u.ac.jp/prospectivestudents/rs/", "https://www.civil.nagoya-u.ac.jp/introduction/teacher-e.html", "https://www.i.nagoya-u.ac.jp/en/gs/entranceexamination/admission02/"],
  },

  {
    universityId: "hokkaido-u",
    universityName: "北海道大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.hokudai.ac.jp/admission/graduate/",
    professorSearchUrl: "https://researchers.general.hokudai.ac.jp/",
    professorAcceptanceInfo:
      "全学研究者总览HU Researcher Database（researchers.general.hokudai.ac.jp）覆盖全教员。農学院有清晰英文faculty列表（www.agr.hokudai.ac.jp/en/r/faculty）。生命科学院明确公布2026年4月研究生（预科旁听生·无学位）申请流程。環境科学院有「スペシャルグラント」全額免除+RA岗位，每年明确公示招募信息。",
    applicationSystem: "各研究科独立系统",
    researchStudentInfo: "多数研究科接受研究生（预科旁听生·无学位）。需事前联系教授获内诺。入学料84,600円，授業料178,200円/半年",
    examTypes: ["一般入试", "外国人留学生特别选考", "英語プログラム（ISP/MJSP/IGP等）"],
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "農学院", nameJa: "農学院", programs: ["農学", "森林科学", "水産科学", "食品科学", "生命科学IGP"], admissionUrl: "https://www.agr.hokudai.ac.jp/", facultyUrl: "https://www.agr.hokudai.ac.jp/en/r/faculty", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "国際広報メディア·観光学院", nameJa: "国際広報メディア·観光学院", programs: ["メディア学", "観光学", "国際コミュニケーション"], admissionUrl: "https://www.imc.hokudai.ac.jp/", facultyUrl: "https://www.imc.hokudai.ac.jp/english/academics/faculty_profiles/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "医理工学院", nameJa: "医理工学院", programs: ["医理工学"], admissionUrl: "https://www.amc.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "生命科学院", nameJa: "生命科学院", programs: ["生命科学", "IGP特別枠（MEXT奖学金）"], admissionUrl: "https://www.lfsci.hokudai.ac.jp/en/info/c/admission-information", facultyUrl: "https://life.sci.hokudai.ac.jp/en/tl/lab/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "環境科学院", nameJa: "環境科学院", programs: ["環境科学", "スペシャルグラントプログラム（全額免除+RA）"], admissionUrl: "https://www.ees.hokudai.ac.jp/?page_id=2783", facultyUrl: "https://www.ees.hokudai.ac.jp/kigaku/?page_id=38&lang=en", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "保健科学院", nameJa: "保健科学院", programs: ["保健科学（修士面接日本語/博士書類のみ）"], admissionUrl: "https://www.hs.hokudai.ac.jp/e/admission/graduate-admissions/application-guidelines", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "獣医学院", nameJa: "獣医学院", programs: ["獣医学（国際学生向け博士課程MEXT有）"], admissionUrl: "https://www.vetmed.hokudai.ac.jp/en/about/pgp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
    ],
    notes: ["环境科学院提供スペシャルグラント：4年总支援约450万円", "札幌生活品质高，成本约东京60%", "出愿前至少6个月联系教授为佳", "生命科学院2026年4月研究生（预科旁听生·无学位）指南已公布"],
    dataSources: ["https://researchers.general.hokudai.ac.jp/", "https://www.agr.hokudai.ac.jp/en/r/faculty", "https://www.imc.hokudai.ac.jp/english/academics/faculty_profiles/", "https://www.ees.hokudai.ac.jp/?page_id=2783"],
  },

  {
    universityId: "kyushu-u",
    universityName: "九州大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.kyushu-u.ac.jp/en/admission/",
    professorSearchUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search",
    professorAcceptanceInfo:
      "全学研究者评价数据库（hyoka.ofc.kyushu-u.ac.jp/search）覆盖全学。可按研究科/分野/关键词检索所有教员。総合理工学府（IGSES）是留学生最常用入口。経済学府IPG有英文Academic Staff列表。艺术工学府有清晰的Faculty list（www.design.kyushu-u.ac.jp/en/faculty/）。",
    applicationSystem: "TAO / 各研究科独立系统",
    researchStudentInfo: "多数研究科接受研究生（预科旁听生·无学位）。IGSES研究生（预科旁听生·无学位）：https://www.tj.kyushu-u.ac.jp/en/exam/research_student.php 入学料84,600円",
    examTypes: ["一般入试", "外国人留学生特别选考", "国際修士/博士プログラム（IGSES英语）"],
    tuitionInfo: { examFee: "30,000円（研究生（预科旁听）9,800円）", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "総合理工学府（IGSES）", nameJa: "総合理工学府", programs: ["国際修士（4月/10月入学）", "博士（4月/10月入学）"], admissionUrl: "https://www.tj.kyushu-u.ac.jp/en/exam/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "医学系学府", nameJa: "医学系学府", programs: ["博士課程（国際教育研究コース，年2回入试）"], admissionUrl: "http://www.grad.med.kyushu-u.ac.jp/english/prospective/ph/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "芸術工学府", nameJa: "芸術工学府", programs: ["デザイン（成績優秀者選抜+一般入試）"], admissionUrl: "https://www.design.kyushu-u.ac.jp/en/admission/", facultyUrl: "https://www.design.kyushu-u.ac.jp/en/faculty/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "経済学府", nameJa: "経済学府", programs: ["IPPE", "IPFBE", "IPMA（3国际プログラム）"], admissionUrl: "https://www.econ.kyushu-u.ac.jp/english/pa_index/pa_index2/pa_15/", facultyUrl: "https://www.econ.kyushu-u.ac.jp/english/pa_index/pa_index2/pa_14/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["10月"] },
      { name: "人間環境学府", nameJa: "人間環境学府", programs: ["持続可能な建築·都市システム（国際修士）"], admissionUrl: "https://arch.kyushu-u.ac.jp/saus/how-to-apply/master/", facultyUrl: "https://www.hues.kyushu-u.ac.jp/profile/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "統合新領域学府", nameJa: "統合新領域学府", programs: ["自動車科学（外国人留学生特別選抜）"], admissionUrl: "http://www.ifs.kyushu-u.ac.jp/pages/eng/ams/admission/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["10月"] },
    ],
    notes: ["福冈多次被评全球最宜居城市", "艺术工学府2026年起英语能力证明必须化", "IGSES是留学生最常用入口，覆盖工学全领域", "全学研究者数据库 hyoka.ofc.kyushu-u.ac.jp/search 涵盖全教员"],
    dataSources: ["https://hyoka.ofc.kyushu-u.ac.jp/search", "https://www.design.kyushu-u.ac.jp/en/faculty/", "https://www.econ.kyushu-u.ac.jp/english/pa_index/pa_index2/pa_14/", "https://www.hues.kyushu-u.ac.jp/profile/"],
  },

  {
    universityId: "tsukuba",
    universityName: "筑波大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://eng.ap-graduate.tsukuba.ac.jp/",
    professorSearchUrl: "https://trios.tsukuba.ac.jp/en/",
    professorAcceptanceInfo:
      "TRIOS（筑波大学研究者情报系统 trios.tsukuba.ac.jp）是全学统一研究者数据库，覆盖所有学位プログラム教员。筑波采用学位プログラム制（2020年起），教授隶属学术院/研究群。出愿前需要志望教授的内诺+「リファレンス番号（Reference Number）」，无此编号无法进行Web Entry。多数プログラム在网站列出コア教員（core faculty）列表。",
    applicationSystem: "独自Web Entry System + 书类邮送",
    researchStudentInfo: "研究生（预科旁听生·无学位）需获教授内诺+リファレンス番号后通过Web申请系统出愿。入学料84,600円，授業料月额29,700円（年额356,400円）。选考方法：书类选考のみ（不需来日）。最长在籍2年。https://www.tsukuba.ac.jp/en/academics/international-research-students/",
    examTypes: ["一般入试（年复数回：7月/8月/10月/1-2月）", "推荐入试（博士前期）", "外国学校経験者特別入試（2025年度新设·国籍不问·海外在学期間8年以上）", "英語プログラム（13プログラム·GRE不要多）", "社会人特别选抜"],
    tuitionInfo: { examFee: "30,000円（研究生（预科旁听）9,800円）", admissionFee: "282,000円（研究生（预科旁听）84,600円）", annualTuition: "535,800円（2027年度起留学生608,800円）" },
    graduateSchools: [
      { name: "人文社会科学研究群", nameJa: "人文社会科学研究群", programs: ["人文学（哲学·史学·文学·言語学）", "国際公共政策（IPP）", "国際日本研究"], admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "数理物質科学研究群", nameJa: "数理物質科学研究群", programs: ["数学", "物理学", "化学", "応用理工学（材料·物理工学）"], admissionUrl: "https://grad.pas.tsukuba.ac.jp/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "システム情報工学研究群", nameJa: "システム情報工学研究群", programs: ["社会工学", "サービス工学", "リスク工学", "情報理工（计算机科学）", "知能機能システム", "構造エネルギー工学"], admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "生命地球科学研究群", nameJa: "生命地球科学研究群", programs: ["生物学", "生物資源科学", "農学", "地球科学（Geosciences）", "山岳科学"], admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "人間総合科学研究群", nameJa: "人間総合科学研究群", programs: ["教育学", "心理学", "障害科学", "看護科学", "栄養科学", "体育科学", "芸術学", "デザイン学", "世界遺産学", "医学", "情報学（Informatics）"], admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "ビジネス科学研究群", nameJa: "ビジネス科学研究群", programs: ["法学", "経営学", "MBA in International Business（东京campus）"], admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["2020年起全面学位プログラム制（3学術院6研究群）", "2025年度新设「外国学校経験者特別入試」（整合原私费外国人+归国子女入试）", "2027年度起留学生學費涨至608,800円（2026年度前入学者不适用）", "2027年度新设G-SIGMA研究科（生命科学创新博士課程集約）", "研究生（预科旁听生·无学位）申请需教授リファレンス番号+Web Entry", "英语プログラム13个，GRE多数不要"],
    dataSources: ["https://eng.ap-graduate.tsukuba.ac.jp/", "https://trios.tsukuba.ac.jp/en/", "https://www.tsukuba.ac.jp/en/academics/international-research-students/", "https://ac.tsukuba.ac.jp/examinations/application-guidelines/"],
  },

  {
    universityId: "hiroshima-u",
    universityName: "広島大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.hiroshima-u.ac.jp/en/nyugaku",
    professorSearchUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en",
    professorAcceptanceInfo:
      "Seeds（研究者総覧 seeds.office.hiroshima-u.ac.jp）覆盖约1,900名研究者，可按トピック/SDGs/分野/五十音/关键词检索。HU-IAAS（International Admissions Assistant System）是留学生事前审查必须经由的入口——IAAS登録→書類審査（2-4週間）→教員コンタクト許可→内諾取得→Approval Number受領→正式出願。Approval Numberなしでは出願不可。経済学プログラム和医系科学研究科不通过IAO（需直接联系）。",
    aaoSystem: "HU-IAAS（International Admissions Assistant System）：留学生必须通过IAO（国際入試オフィス）事前审查。https://www.iao.hiroshima-u.ac.jp/ 处理2-4周。例外：经济学/医系科学研究科IAO非対応",
    applicationSystem: "UCARO在线出愿（https://prod.shutsugan.ucaro.jp/hiroshima-u-gr/top）+ IAAS事前审查",
    researchStudentInfo: "研究生（预科旁听生·无学位）需获教授内诺后出愿。入学料84,600円，授業料356,400円/年。中国出身者需提交学信网（CHSI）学历认证。各研究科语言要求不同：理工系TOEIC 420+/TOEFL 43+/JLPT N2+；教育/文科系JLPT N1(100点+)/TOEFL 80+/IELTS 6.0+",
    examTypes: ["一般選抜（日本人+日本在住外国人·年复数回）", "外国人留学生特別選抜（海外在住·在线面试中心）", "推薦入試（特定プログラム）", "社会人特別選抜"],
    tuitionInfo: { examFee: "30,000円（研究生（预科旁听）9,800円）", admissionFee: "282,000円（研究生（预科旁听）84,600円）", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "人間社会科学研究科", nameJa: "人間社会科学研究科", programs: ["人間文化（哲学·倫理学·美学·美術史）", "言語科学", "人間行動科学（認知·生理心理学）", "スポーツ健康科学", "地域研究（欧州史·日本文化史·東アジア史）", "国際平和共生（IPCS）", "国際経済開発（IEDP）", "国際教育開発", "教育学", "心理学", "教育データサイエンス", "日本語教育"], admissionUrl: "https://www.hiroshima-u.ac.jp/en/gshs/about/", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "先進理工系科学研究科", nameJa: "先進理工系科学研究科", programs: ["数学", "物理学", "地球惑星システム学", "化学", "応用化学", "化学工学", "電気システム制御工学", "機械工学", "輸送·環境システム", "建築学", "社会基盤環境工学", "情報データ科学", "量子物質", "スマートイノベーション"], admissionUrl: "https://www.hiroshima-u.ac.jp/en/adse/", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "統合生命科学研究科", nameJa: "統合生命科学研究科", programs: ["生物工学", "食料農生命科学", "生物資源科学", "生命環境科学", "基礎生物学", "数理生命科学", "生物医科学", "ゲノム編集フロンティア開発"], admissionUrl: "https://www.hiroshima-u.ac.jp/en/ilife", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
      { name: "医系科学研究科", nameJa: "医系科学研究科", programs: ["健康科学（看護学/理学療法学/作業療法学/口腔保健学）", "医薬科学", "公衆衛生学", "医学物理士", "生物医科学"], admissionUrl: "https://www.hiroshima-u.ac.jp/en/bhs/", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "スマートソサイエティ実践科学研究院", nameJa: "スマートソサイエティ実践科学研究院", programs: ["Smart Society（英語で学位取得可·修士/博士）"], admissionUrl: "https://www.hiroshima-u.ac.jp/index.php/en/smart_society/", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "10月"] },
    ],
    notes: ["HU-IAAS（事前連絡システム）是海外在住留学生出愿的必须入口", "Approval Number制：无IAO的Approval Number无法进入UCARO正式出愿", "经济学/医系科学研究科不通过IAO，需直接联系", "WPI-SKCM²プログラム：授業料全額免除+生活費支給（超高待遇）", "中国出身者需提交学信网（CHSI）学历认证", "2020年起从11研究科再编为4研究科+2研究院体制"],
    dataSources: ["https://www.hiroshima-u.ac.jp/en/nyugaku", "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", "https://www.iao.hiroshima-u.ac.jp/", "https://www.hiroshima-u.ac.jp/en/adse/", "https://www.hiroshima-u.ac.jp/en/ilife"],
  },

  // ============================================================
  // 私立大学 Top Type (S) — 2校
  // ============================================================

  {
    universityId: "waseda",
    universityName: "早稻田大学",
    type: "private",
    tier: "Top Type (S)·私立",
    portalUrl: "https://www.waseda.jp/inst/admission/graduate/",
    professorSearchUrl: "https://w-rdb.waseda.jp/",
    professorAcceptanceInfo:
      "全学研究者数据库w-rdb（w-rdb.waseda.jp）覆盖全教员，可按所属研究科检索。政治学研究科（GSPS）faculty列表按专攻领域分类（方法论/政治思想史/比较政治/国際関係）。経済学研究科（GSE）faculty列表包含40+教授。アジア太平洋研究科（GSAPS）Project Research页面列出各教授的研究主题。情報生産システム研究科（IPS）2026年入试起语言要求严格化（不接受在家托福/雅思）。",
    applicationSystem: "TAO（The Admissions Office）在线出愿，书类不需邮寄",
    researchStudentInfo: "部分研究科接受科目等履修生/研究生（预科旁听生·无学位）。各研究科规定不同。https://www.waseda.jp/inst/admission/graduate/japanese/",
    examTypes: ["一般入试（日语笔试+面试）", "留学生入试（部分研究科）", "英语学位プログラム（英語のみで修了可）"],
    tuitionInfo: { examFee: "35,000円（海外5,000円）", admissionFee: "200,000〜282,000円", annualTuition: "约100-160万円（学部·研究科不同）" },
    graduateSchools: [
      { name: "政治学研究科", nameJa: "政治学研究科", programs: ["政治学", "ジャーナリズム", "国際関係"], admissionUrl: "https://www.waseda.jp/fpse/gsps/", facultyUrl: "https://www.waseda.jp/fpse/gsps/en/about/faculty/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: ["経済学", "国際政治経済学", "経済ジャーナリズム"], admissionUrl: "https://www.waseda.jp/fpse/gse/", facultyUrl: "https://www.waseda.jp/fpse/gse/en/about/faculty/#anc_1", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "商学研究科", nameJa: "商学研究科", programs: ["経営学", "会計学", "マーケティング"], admissionUrl: "https://www.waseda.jp/fcom/gsc/", facultyUrl: "https://w-rdb.waseda.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "社会科学研究科", nameJa: "社会科学研究科", programs: ["社会学", "政策科学", "メディア研究"], admissionUrl: "https://www.waseda.jp/fsss/gsss/", facultyUrl: "https://w-rdb.waseda.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "アジア太平洋研究科（GSAPS）", nameJa: "アジア太平洋研究科", programs: ["国際関係", "地域研究", "国際協力政策"], admissionUrl: "https://www.waseda.jp/fsci/gips/en/applicants/admission/", facultyUrl: "https://www.waseda.jp/fire/gsaps/en/admissions/project#anc_2", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "情報生産システム研究科", nameJa: "情報生産システム研究科", programs: ["システム工学", "情報アーキテクチャ", "ロボティクス"], admissionUrl: "https://www.waseda.jp/fsci/gips/", facultyUrl: "https://w-rdb.waseda.jp/search?m=affiliation&l=en&a2=0000008&a3=0000046", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "先進理工学研究科", nameJa: "先進理工学研究科", programs: ["生命理工学", "ナノ理工学", "環境·エネルギー"], admissionUrl: "https://www.waseda.jp/fsci/grad-ase/", facultyUrl: "https://w-rdb.waseda.jp/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "経営管理研究科（MBA/WBS）", nameJa: "経営管理研究科", programs: ["MBA（経営管理修士）", "MSc in Finance"], admissionUrl: "https://www.waseda.jp/fcom/wbs/en/admission", facultyUrl: "https://www.waseda.jp/fcom/wbs/tag/faculty-en", hasEnglishProgram: true, hasResearchStudent: false, intakeMonths: ["9月"] },
    ],
    notes: ["留学生数日本最多（11,727人）", "出愿通过TAO在线系统，不需邮寄书类", "IPS: 2025年7月起不接受在家托福/雅思+MyBest Scores", "GSE经济学研究科：2026年9月入学起英语成绩必须化", "日本語ベース大学院はJLPT N1必须", "全学研究者DB w-rdb.waseda.jp 可检索全体教员"],
    dataSources: ["https://www.waseda.jp/inst/admission/graduate/japanese/", "https://w-rdb.waseda.jp/", "https://www.waseda.jp/fpse/gsps/en/about/faculty/", "https://www.waseda.jp/fpse/gse/en/about/faculty/", "https://www.waseda.jp/fire/gsaps/en/admissions/project"],
  },

  {
    universityId: "keio",
    universityName: "庆应义塾大学",
    type: "private",
    tier: "Top Type (S)·私立",
    portalUrl: "https://www.keio.ac.jp/ja/admissions/graduate/",
    professorSearchUrl: "https://k-ris.keio.ac.jp/",
    professorAcceptanceInfo:
      "K-RIS（庆应义塾研究者情报システム k-ris.keio.ac.jp）是全学研究者数据库，可按所属研究科检索。**教授決定制是庆应最大特色**：各研究科对事前获得教授内诺的要求不同——SFC政策媒体研究科最严格（出願前に教授の署名入り「受入確認書」必須，不可同时联系多位教授）；商学研究科可选但推荐事前联系（专设事前联系表格）；理工学研究科有清晰faculty列表（keio.ac.jp/en/st/faculty 287名）。经济学研究科faculty列表中*标记=大学院委員（核心指导教授）。",
    applicationSystem: "各研究科独立系统（オンライン登録→書類郵送）",
    researchStudentInfo: "部分研究科接受。理工学研究科研究生（预科旁听生·无学位）：https://www.keio.ac.jp/en/st/admissions-en/research_students/ 入学料80,000円，研究料390,000円/年",
    examTypes: ["一般入试（各研究科独立笔试+面试）", "外国人留学生入试（部分研究科）", "英语プログラム（SFC政策·媒体研究科等）"],
    tuitionInfo: { examFee: "10,000〜35,000円", admissionFee: "200,000〜260,000円", annualTuition: "约100-170万円（研究科不同）" },
    graduateSchools: [
      { name: "法学研究科", nameJa: "法学研究科", programs: ["民事法学", "公法学", "政治学（含新闻学/公共政策专修）"], admissionUrl: "https://www.law.keio.ac.jp/graduate/", facultyUrl: "https://k-ris.keio.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: ["経済学", "金融·计量经济学"], admissionUrl: "https://www.econ.keio.ac.jp/en/about/faculty-list", facultyUrl: "https://www.econ.keio.ac.jp/en/about/faculty-list", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "商学研究科", nameJa: "商学研究科", programs: ["経営学", "会計学", "商業学"], admissionUrl: "https://www.gakuji.keio.ac.jp/hiyoshi/gs/", facultyUrl: "https://fbc.keio.ac.jp/en/faculty/index.html", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "文学研究科", nameJa: "文学研究科", programs: ["哲学", "史学", "文学", "図書館·情報学"], admissionUrl: "https://www.let.keio.ac.jp/graduate/", facultyUrl: "https://k-ris.keio.ac.jp/", hasEnglishProgram: false, hasResearchStudent: true, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: ["機械工学", "電気電子", "情報工学", "応用化学"], admissionUrl: "https://www.st.keio.ac.jp/graduate/", facultyUrl: "https://www.keio.ac.jp/en/st/faculty/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "政策·メディア研究科（SFC）", nameJa: "政策·メディア研究科", programs: ["政策科学", "メディアデザイン", "IT政策"], admissionUrl: "https://www.sfc.keio.ac.jp/gsmg/", facultyUrl: "https://www.keio.ac.jp/en/sfc-pem/faculty/gsmg/", hasEnglishProgram: true, hasResearchStudent: true, intakeMonths: ["4月", "9月"] },
      { name: "経営管理研究科（KBS）", nameJa: "経営管理研究科", programs: ["MBA（経営管理修士）"], admissionUrl: "https://www.kbs.keio.ac.jp/", facultyUrl: "https://www.kbs.keio.ac.jp/en/faculty/", hasEnglishProgram: true, hasResearchStudent: false, intakeMonths: ["4月", "9月"] },
    ],
    notes: ["教授決定制：各研究科对教授事前内诺要求不同，SFC最严格", "SFC政策媒体研究科：出願前に教授署名入り受入確認書必須、複数教授同時連絡不可", "経済学研究科：faculty列表中 * = 大学院委員会委員（核心指导教授）", "文学研究科2025年度起废止留学生特别入试", "理工学研究科287名教员列表 keio.ac.jp/en/st/faculty/"],
    dataSources: ["https://www.keio.ac.jp/ja/admissions/graduate/", "https://k-ris.keio.ac.jp/", "https://www.keio.ac.jp/en/st/faculty/", "https://www.econ.keio.ac.jp/en/about/faculty-list", "https://www.keio.ac.jp/en/sfc-pem/faculty/gsmg/"],
  },
  ...graduateAdmissionsSupplement,
];

export const professorSearchGuide = {
  title: "教授检索指南",
  description: "教授名单为动态数据，每年变动（退休、转任、新聘）。以下为各校官方检索入口及确认教授受入状况的方法。",
  tips: [
    "访问各大学全学研究者数据库（下记），按研究科/关键词检索→进入研究室主页查看「学生募集中」「メンバー募集」等招募信息",
    "出愿前务必向志望教授发送邮件（附CV+研究计划书概要），确认是否接受学生以及研究方向匹配度",
    "部分大学有明确的受入标记系统：东京大EEIS（* = 不收學生）、京大理学研究科PDF（# = 退官）、东京大AIS（[*1] = 不收新学生）",
    "利用KAKEN（科学研究費助成事業データベース）检索教授研究课题：https://kaken.nii.ac.jp/",
    "利用researchmap检索日本全国研究者：https://researchmap.jp/",
    "利用J-GLOBAL（科学技术振兴机构）检索研究者·论文·专利：https://jglobal.jst.go.jp/",
    "出愿前务必确认教授是否在籍、是否收学生（定年退官/移动/休職等）",
    "研究生（预科旁听生·无学位）申请普遍需要事前内诺（教授同意接收的邮件或書面），至少提前6个月开始联系",
  ],
  universityPortals: [
    { university: "东京大学", url: "https://www.u-tokyo.ac.jp/en/research/faculty.html", description: "UTokyo People Search + EEIS guidebook标注教授受入可否" },
    { university: "京都大学", url: "https://kdb.iimc.kyoto-u.ac.jp/", description: "KDB京都大学教育研究活动データベース（全学统一·最完整）" },
    { university: "东京科学大学", url: "https://search.star.titech.ac.jp/", description: "STAR Search + RDC研究者紹介" },
    { university: "大阪大学", url: "https://rd.iai.osaka-u.ac.jp/", description: "大阪大学研究者総覧RD" },
    { university: "东北大学", url: "https://www.r-info.tohoku.ac.jp/", description: "東北大学研究者检索R-info" },
    { university: "名古屋大学", url: "https://profs.provost.nagoya-u.ac.jp/", description: "名古屋大学研究者数据库" },
    { university: "北海道大学", url: "https://researchers.general.hokudai.ac.jp/", description: "北海道大学研究者総覧" },
    { university: "九州大学", url: "https://hyoka.ofc.kyushu-u.ac.jp/search", description: "九州大学研究者评价数据库" },
    { university: "筑波大学", url: "https://trios.tsukuba.ac.jp/en/", description: "TRIOS筑波大学研究者情报系统" },
    { university: "広島大学", url: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", description: "Seeds広島大学研究者総覧（1,900名）" },
    { university: "一橋大学", url: "https://hri.ad.hit-u.ac.jp/", description: "一橋大学研究者情報検索システム（hri.ad.hit-u.ac.jp）" },
    { university: "早稻田大学", url: "https://w-rdb.waseda.jp/", description: "早稻田大学研究者数据库w-rdb" },
    { university: "庆应义塾大学", url: "https://k-ris.keio.ac.jp/", description: "K-RIS庆应义塾研究者情报系统" },
  ],
  nationalsDatabase: [
    { name: "KAKEN（科研费数据库）", url: "https://kaken.nii.ac.jp/", description: "日本所有科研费获得者检索，可按关键词/大学/研究领域搜索" },
    { name: "researchmap", url: "https://researchmap.jp/", description: "日本最大研究者数据库，250,000+研究者注册" },
    { name: "J-GLOBAL", url: "https://jglobal.jst.go.jp/", description: "科学技术振兴机构研究者·论文·专利综合检索" },
  ],
  acceptanceCheckMethods: [
    {
      university: "东京大学",
      method: "EEIS电气电子系guidebook：* = 不收学生，+ = 只收博士 https://www.eeis.t.u-tokyo.ac.jp/en/education/guidebook/；AIS先端学際：[*1] = 不收新学生 https://www.ais.rcast.u-tokyo.ac.jp/en/about/facultylist.html"
    },
    {
      university: "京都大学",
      method: "理学研究科教员PDF：＃ = 2026年度末退官 https://sci.kyoto-u.ac.jp/en/admissions/laboratories；其余研究科通过KDB检索后查研究室主页"
    },
    {
      university: "庆应义塾大学",
      method: "経済学研究科faculty列表中 * = 大学院委員会委員（核心指导教授）https://www.econ.keio.ac.jp/en/about/faculty-list；SFC事前需要教授签署受入確認書"
    },
    {
      university: "其他大学",
      method: "无统一受入标记系统。通过各大学研究者数据库检索→进入研究室主页确认「学生募集中」→邮件联系教授确认"
    },
  ],
};
