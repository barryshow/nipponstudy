export interface LanguageSchool {
  id: string;
  name: string;
  nameJa: string;
  location: string;
  tuition: string;
  tuitionBreakdown: {
    enrollmentFee: string;
    annualTuition: string;
    materialsFee: string;
    totalFirstYear: string;
  };
  paymentTerm: string;
  attendanceRequirement: string;
  duration: string;
  visaRequirement: string;
  minimumStudyForVocational: string;
  intake: string;
  features: string[];
  highlights: string;
  programs: { name: string; description: string }[];
  suitableFor: string[];
  website?: string;
}

export const languageSchools: LanguageSchool[] = [
  {
    id: "isi",
    name: "ISI日本语学校",
    nameJa: "ISI日本語学校",
    location: "东京（高田马场/新宿/涩谷/池袋/原宿）",
    tuition: "83.3万～101.4万日元/年（校区不同）",
    tuitionBreakdown: {
      enrollmentFee: "5.5万",
      annualTuition: "73.0万～91.1万",
      materialsFee: "4.8万",
      totalFirstYear: "83.3万～101.4万",
    },
    paymentTerm: "支持半年付（部分校区）",
    attendanceRequirement: "90%安全线 / 80%在留更新底线",
    duration: "1年～2年（入学1月/4月/7月/10月）",
    visaRequirement: "需JLPT N5或同等证书（2026年起）",
    minimumStudyForVocational: "需在籍1年以上方可申请专门学校",
    intake: "1月/4月/7月/10月",
    features: [
      "日本规模最大的语言学校集团之一",
      "设施豪华，国际化程度高（欧美学生约30%）",
      "升学+商务日语+就职支援一条龙",
      "涩谷/原宿校专注就职方向",
      "校内设有私塾，升学辅导完善",
      "支持半年付学费",
    ],
    highlights: "追求国际化环境、希望一站式解决升学和就职的理想选择",
    programs: [
      { name: "升学课程", description: "针对EJU和大学校内考的完整辅导体系，历年东大、京大、早庆合格者多数" },
      { name: "商务日语课程", description: "面向在日就职的日语强化+商务礼仪+企业实习对接" },
      { name: "就职支援课程", description: "涩谷/原宿校专属，简历指导、模拟面试、企业说明会定期举办" },
      { name: "一般日语课程", description: "全面提升听说读写能力，适合体验日本文化和生活的学生" },
    ],
    suitableFor: ["追求国际化环境的学生", "希望一站式解决升学/就职", "预算灵活"],
  },
  {
    id: "human",
    name: "修曼日本语学校",
    nameJa: "ヒューマンアカデミー日本語学校",
    location: "东京（新宿）/ 大阪",
    tuition: "约93.5万日元/年",
    tuitionBreakdown: {
      enrollmentFee: "5.5万",
      annualTuition: "84.0万",
      materialsFee: "4.0万",
      totalFirstYear: "93.5万",
    },
    paymentTerm: "支持半年付",
    attendanceRequirement: "90%安全线 / 80%在留更新底线",
    duration: "1年～2年（入学1月/4月/7月/10月）",
    visaRequirement: "需JLPT N5或同等证书（2026年起）",
    minimumStudyForVocational: "需在籍1年以上方可申请专门学校",
    intake: "1月/4月/7月/10月",
    features: [
      "老牌优良校，背靠大型人力资源公司Human Holdings",
      "就职内推资源丰富，定期举办企业说明会",
      "EJU课程、大学院升学、商务日语全覆盖",
      "高考成绩优秀者给予奖学金奖励",
      "校内设有私塾",
      "支持半年付学费",
    ],
    highlights: "就职内推最强，性价比高，适合目标明确的学生",
    programs: [
      { name: "大学院升学课程", description: "研究计划书指导、教授联络辅导、笔试面试对策，针对文理科分别开班" },
      { name: "EJU考试对策课程", description: "针对学部（本科）升学的EJU日语、数学、综合科目/理科辅导" },
      { name: "商务就职课程", description: "背靠人力资源公司，提供企业内推、商务日语、就职礼仪、模拟面试" },
      { name: "一般日语课程", description: "从初级到高级的系统日语教学，听说读写均衡发展" },
    ],
    suitableFor: ["目标明确的升学者", "希望就职的学生", "大规模优良校"],
  },
  {
    id: "sendagaya",
    name: "千驮谷日本语学校",
    nameJa: "千駄ヶ谷日本語学校",
    location: "东京（高田马场）",
    tuition: "约88万日元/年",
    tuitionBreakdown: {
      enrollmentFee: "6.0万",
      annualTuition: "78.0万",
      materialsFee: "4.0万",
      totalFirstYear: "88.0万",
    },
    paymentTerm: "本校仅限一年付 / 西校支持半年付",
    attendanceRequirement: "90%安全线 / 80%在留更新底线",
    duration: "1年～2年（本校4月/10月入学、西校1月/4月/7月/10月入学）",
    visaRequirement: "需JLPT N5或同等证书（2026年起）",
    minimumStudyForVocational: "需在籍1年以上方可申请专门学校",
    intake: "本校 4月/10月；西校 1月/4月/7月/10月",
    features: [
      "日本语教育界'名校'，帝京大学集团旗下",
      "本校为学校法人，可办学生月票",
      "双轨体制：本校→高中生考学部，西校→本科生考大学院",
      "管理严格，强制收手机，学习氛围极强",
      "国公立&早庆合格人数常年霸榜",
      "西校支持半年付学费",
    ],
    highlights: "冲刺名校首选，管理严格出成绩，升学实绩最强",
    programs: [
      { name: "本校·学部升学课程", description: "专为高中生设计的EJU全科辅导+校内考对策，历年国公立和早庆合格者全国领先" },
      { name: "西校·大学院升学课程", description: "研究计划书一对一指导+教授联络策略+笔试面试模拟，本科生考研专属通道" },
      { name: "就职课程", description: "面向希望在日本就职的学生，提供商务日语和企业对接" },
    ],
    suitableFor: ["目标冲刺名校", "需要严格管理", "高中生考学部（本校）", "本科生考大学院（西校）"],
  },
  {
    id: "kudanjapan",
    name: "九段日本文化研究所",
    nameJa: "九段日本文化研究所日本語学院",
    location: "东京（千代田区）",
    tuition: "约85万日元/年",
    tuitionBreakdown: {
      enrollmentFee: "5.0万",
      annualTuition: "76.0万",
      materialsFee: "4.0万",
      totalFirstYear: "85.0万",
    },
    paymentTerm: "仅限一年付",
    attendanceRequirement: "90%安全线 / 80%在留更新底线",
    duration: "1年～2年（入学1月/4月/7月/10月）",
    visaRequirement: "需JLPT N5或同等证书（2026年起）",
    minimumStudyForVocational: "需在籍1年以上方可申请专门学校",
    intake: "1月/4月/7月/10月",
    features: [
      "学校法人，位于皇居附近黄金地段",
      "日本文化体验课程丰富（茶道、花道、书法等）",
      "提供学生宿舍，生活便利",
      "小班制教学，师生关系紧密",
      "与多所大学有推荐入学合作",
    ],
    highlights: "文化体验丰富，适合想深入了解日本传统文化的学生",
    programs: [
      { name: "升学课程", description: "针对大学/大学院升学的日语能力培养+EJU对策" },
      { name: "日本文化体验课程", description: "茶道、花道、书道、和服等传统文化体验与日语学习结合" },
      { name: "一般日语课程", description: "从初级到高级的系统日语学习" },
    ],
    suitableFor: ["喜欢日本传统文化", "希望在安静环境中学习", "对住宿有需求的学生"],
  },
  {
    id: "arc",
    name: "ARC日本语学校",
    nameJa: "ARC日本語学校",
    location: "东京（新宿/池袋）/ 大阪 / 京都",
    tuition: "约86万日元/年",
    tuitionBreakdown: {
      enrollmentFee: "5.0万",
      annualTuition: "77.0万",
      materialsFee: "4.0万",
      totalFirstYear: "86.0万",
    },
    paymentTerm: "仅限一年付",
    attendanceRequirement: "90%安全线 / 80%在留更新底线",
    duration: "1年～2年（入学1月/4月/7月/10月）",
    visaRequirement: "需JLPT N5或同等证书（2026年起）",
    minimumStudyForVocational: "需在籍1年以上方可申请专门学校",
    intake: "1月/4月/7月/10月",
    features: [
      "多校区选择（东京/大阪/京都）",
      "商务日语课程知名度高",
      "就职支援体系完善",
      "国际化学生比例均衡",
      "学费相对亲民",
    ],
    highlights: "多城市选择，商务日语知名度高，性价比优秀",
    programs: [
      { name: "大学升学课程", description: "EJU对策+校内考面试辅导" },
      { name: "大学院升学课程", description: "研究计划书指导+教授联络辅导" },
      { name: "商务日语课程", description: "以就职为目标的日语强化+商务礼仪" },
      { name: "一般日语课程", description: "系统的日语能力培养" },
    ],
    suitableFor: ["想在多城市中选择校区", "商务日语方向", "预算有限的学生"],
  },
  {
    id: "unitus",
    name: "优尼塔斯日本语学校",
    nameJa: "ユニタス日本語学校",
    location: "东京（新宿）/ 甲府",
    tuition: "约86万日元/年",
    tuitionBreakdown: {
      enrollmentFee: "5.5万",
      annualTuition: "76.5万",
      materialsFee: "4.0万",
      totalFirstYear: "86.0万",
    },
    paymentTerm: "支持半年付",
    attendanceRequirement: "90%安全线 / 80%在留更新底线",
    duration: "1年～2年（入学1月/4月/7月/10月）",
    visaRequirement: "需JLPT N5或同等证书（2026年起）",
    minimumStudyForVocational: "需在籍1年以上方可申请专门学校",
    intake: "1月/4月/7月/10月",
    features: [
      "帝京大学集团成员校",
      "甲府校区学费+生活费极低",
      "可推荐入学帝京大学（免试/减免学费）",
      "东京校位于新宿，交通便利",
      "支持半年付学费",
    ],
    highlights: "帝京大学推荐入学通道，支持半年付，性价比优秀",
    programs: [
      { name: "升学课程", description: "大学/大学院升学指导，帝京大学推荐入学制度" },
      { name: "一般日语课程", description: "综合日语能力提升" },
    ],
    suitableFor: ["想保底有大学上的学生", "帝京大学目标者", "预算有限（甲府校）"],
  },
  {
    id: "kyoshin",
    name: "京进语言学院",
    nameJa: "京進ランゲージアカデミー",
    location: "东京（新宿/上野）/ 京都 / 大阪 / 神户 / 名古屋 / 福冈",
    tuition: "约97.9万日元/年",
    tuitionBreakdown: {
      enrollmentFee: "6.6万",
      annualTuition: "87.3万",
      materialsFee: "4.0万",
      totalFirstYear: "97.9万",
    },
    paymentTerm: "支持半年付",
    attendanceRequirement: "90%安全线 / 80%在留更新底线",
    duration: "1年～2年（入学1月/4月/7月/10月）",
    visaRequirement: "需JLPT N5或同等证书（2026年起）",
    minimumStudyForVocational: "需在籍1年以上方可申请专门学校",
    intake: "1月/4月/7月/10月",
    features: [
      "全国多校区，选择灵活",
      "升学实绩优秀，名校合格率高",
      "集团旗下有私塾品牌",
      "宿舍配套齐全",
      "支持半年付学费",
    ],
    highlights: "全国校区最多，支持半年付，适合想在不同城市学习的学生",
    programs: [
      { name: "学部升学课程", description: "EJU全科辅导+志愿校对策" },
      { name: "大学院升学课程", description: "研究计划书辅导+教授联络+笔试面试" },
      { name: "美术升学课程", description: "针对美术大学升学的作品集指导和实技训练" },
      { name: "一般日语课程", description: "综合日语学习" },
    ],
    suitableFor: ["想在不同城市中选择", "美术生升学", "需要配套宿舍"],
  },
  {
    id: "meros",
    name: "美罗斯言语学院",
    nameJa: "メロス言語学院",
    location: "东京（池袋）",
    tuition: "约89万日元/年",
    tuitionBreakdown: {
      enrollmentFee: "5.0万",
      annualTuition: "80.0万",
      materialsFee: "4.0万",
      totalFirstYear: "89.0万",
    },
    paymentTerm: "仅限一年付",
    attendanceRequirement: "90%安全线 / 80%在留更新底线",
    duration: "1年～2年（入学1月/4月/7月/10月）",
    visaRequirement: "需JLPT N5或同等证书（2026年起）",
    minimumStudyForVocational: "需在籍1年以上方可申请专门学校",
    intake: "1月/4月/7月/10月",
    features: [
      "美术升学辅导全国领先",
      "多摩美/武藏野美术大学合格实绩丰富",
      "与多所艺术类大学有合作",
      "池袋地区生活便利",
    ],
    highlights: "美术生首选的日本语言学校，艺术升学辅导最强",
    programs: [
      { name: "美术大学升学课程", description: "素描、色彩、作品集指导、小论文对策，多摩美/武藏美合格者多数" },
      { name: "大学升学课程", description: "EJU对策+校内考面试" },
      { name: "大学院升学课程", description: "研究计划书+教授联络辅导" },
      { name: "一般日语课程", description: "综合日语学习" },
    ],
    suitableFor: ["美术/设计类学生", "目标多摩美/武藏美", "艺术方向升学"],
  },
];

/**
 * 2026年度语言学校费用与政策汇总
 *
 * 关键背景：
 * - 2026年4月起学费全面上涨，东京地区多数突破90万日元/年
 * - 出勤率要求：90%校内安全线，80%签证危险线（低于80%影响在留更新）
 * - 半年付趋势：越来越多学校取消半年付，改为一年付
 * - 2026年起申请必须提交JLPT N5或同等证书（单纯学时证明不再接受）
 * - 专门学校路径：2025年4月起需在语言学校学习至少1年
 */
export const COST_SUMMARY = {
  /** 学费区间（第一年含入学金+学费+教材费） */
  tuitionRange: "83.3万～101.4万日元",

  /** 生活费估算（东京地区含住宿、伙食、交通、通信等） */
  livingCostsMonthly: "约10～12万日元/月（东京地区）",

  /** 第一年总费用估算（学费 + 1年生活费） */
  totalFirstYearEstimate: "约203万～245万日元",

  /** 关键政策与注意事项 */
  policies: [
    {
      title: "学费全面上涨",
      detail: "2026年4月起，东京地区语言学校学费多数突破90万日元/年，少数热门校已突破100万日元。地方校区（如甲府、大阪部分校区）仍有70～80万日元/年的选项。",
    },
    {
      title: "出勤率红线",
      detail: "校内通常要求90%以上出勤率方可正常升学/毕业推荐。入管局在留更新审核时，低于80%将严重影响签证续签，可能导致在留资格不被更新。",
    },
    {
      title: "半年付 vs 一年付",
      detail: "近年趋势为越来越多学校取消半年付，仅支持一年付。目前仍支持半年付的学校包括：ISI（部分校区）、修曼、千驮谷西校、优尼塔斯、京进。选择半年付可降低初期资金压力，但总费用不变。",
    },
    {
      title: "签证申请新规（2026年起）",
      detail: "所有语言学校申请者必须提交JLPT N5合格证书或同等日语能力证明（如J.TEST F级、NAT-TEST 5级等）。单纯的日语学时证明不再被入管局接受。建议提前3～6个月准备日语考试。",
    },
    {
      title: "专门学校升学路径",
      detail: "2025年4月起，语言学校学生需在籍满1年以上方可申请专门学校。此前允许半年在籍后申请的政策已废止。计划走专门学校路径的学生需规划至少1年语言学校期间。",
    },
  ],

  /** 支持半年付的学校列表 */
  halfYearPaymentSchools: [
    "ISI日本语学校（部分校区）",
    "修曼日本语学校",
    "千驮谷日本语学校（西校）",
    "优尼塔斯日本语学校",
    "京进语言学院",
  ],

  /** 学费最低的学校（第一年含全部费用） */
  lowestTuitionSchools: [
    { name: "九段日本文化研究所", total: "85.0万" },
    { name: "ARC日本语学校", total: "86.0万" },
    { name: "优尼塔斯日本语学校", total: "86.0万" },
    { name: "千驮谷日本语学校", total: "88.0万" },
    { name: "美罗斯言语学院", total: "89.0万" },
  ],
};
