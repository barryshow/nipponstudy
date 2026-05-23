// ============================================================
// 扩展大学大学院 研究科·修士/博士项目（38校）
// 教授数据请在入学志愿前访问各研究科 facultyUrl 确认
// ============================================================

import type { UniversityGraduateData } from "./university-graduate-programs";

export const graduateProgramsSupplement: UniversityGraduateData[] = [
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "経営学研究科", nameJa: "経営学研究科", programs: [
        { name: "経営学専攻", degree: "修士/博士", description: "経営戦略·会計·マーケティング",
          professors: [
            { name: "松尾貴巳", title: "教授", researchArea: "管理会计/原価計算" },
            { name: "上林憲雄", title: "教授", researchArea: "経営組織/人力资源" },
            { name: "鈴木竜太", title: "教授", researchArea: "経営戦略/イノベーション" },
            { name: "小沢浩", title: "教授", researchArea: "マーケティング" },
          ]
        },
        { name: "MBAプログラム", degree: "修士", description: "社会人MBA·経営管理",
          professors: [
            { name: "松尾貴巳", title: "教授", researchArea: "管理会计" },
            { name: "国部克彦", title: "教授", researchArea: "環境経営/CSR" },
          ]
        },
      ], admissionUrl: "https://www.b.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: [
        { name: "経済学専攻", degree: "修士/博士", description: "理論·計量·国際経済",
          professors: [
            { name: "松林洋一", title: "教授", researchArea: "財政学/公共経済" },
            { name: "宮川大介", title: "教授", researchArea: "マクロ経済学" },
            { name: "三野和雄", title: "教授", researchArea: "動学的マクロ経済学" },
            { name: "梶谷懐", title: "教授", researchArea: "中国経済/開発経済" },
          ]
        },
      ], admissionUrl: "https://www.econ.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "阿部淳一", title: "教授", researchArea: "伝熱工学/エネルギー" },
            { name: "白瀬敬一", title: "教授", researchArea: "生産加工/精密工学" },
            { name: "向井敏司", title: "教授", researchArea: "材料力学/マグネシウム合金" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "五百旗頭健吾", title: "教授", researchArea: "通信工学/無線" },
            { name: "熊本和夫", title: "教授", researchArea: "電力工学/エネルギー" },
            { name: "的場修", title: "教授", researchArea: "光エレクトロニクス" },
          ]
        },
        { name: "情報知能工学専攻", degree: "修士/博士",
          professors: [
            { name: "滝口哲也", title: "教授", researchArea: "音声情報処理/AI" },
            { name: "羅志偉", title: "教授", researchArea: "ロボティクス/制御" },
            { name: "上原邦昭", title: "教授", researchArea: "人工知能/データベース" },
          ]
        },
        { name: "建築学専攻", degree: "修士/博士",
          professors: [
            { name: "井上剛志", title: "教授", researchArea: "建築構造/耐震設計" },
            { name: "山崎寿一", title: "教授", researchArea: "建築計画/住宅論" },
            { name: "髙田光雄", title: "教授", researchArea: "建築デザイン" },
          ]
        },
      ], admissionUrl: "https://www.eng.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "理学研究科", nameJa: "理学研究科", programs: [
        { name: "数学専攻", degree: "修士/博士",
          professors: [
            { name: "佐野隆志", title: "教授", researchArea: "代数幾何学" },
            { name: "坂内健一", title: "教授", researchArea: "整数論" },
            { name: "太田雅人", title: "教授", researchArea: "関数解析/偏微分方程式" },
          ]
        },
        { name: "物理学専攻", degree: "修士/博士",
          professors: [
            { name: "久保敦", title: "教授", researchArea: "素粒子論/場の理論" },
            { name: "小林俊介", title: "教授", researchArea: "磁性物理" },
            { name: "水野清義", title: "教授", researchArea: "表面科学" },
          ]
        },
        { name: "化学専攻", degree: "修士/博士",
          professors: [
            { name: "林昌彦", title: "教授", researchArea: "有機合成化学" },
            { name: "大西洋", title: "教授", researchArea: "物理化学/界面科学" },
            { name: "松原亮介", title: "教授", researchArea: "無機化学" },
          ]
        },
      ], admissionUrl: "https://www.sci.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: [
        { name: "法学専攻", degree: "修士/博士",
          professors: [
            { name: "井上典之", title: "教授", researchArea: "憲法学/比較憲法" },
            { name: "川島貴将", title: "教授", researchArea: "国際法" },
            { name: "島並良", title: "教授", researchArea: "知的財産法" },
            { name: "池田公博", title: "教授", researchArea: "刑事訴訟法" },
          ]
        },
      ], admissionUrl: "https://www.law.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "農学研究科", nameJa: "農学研究科", programs: [
        { name: "食料環境システム専攻", degree: "修士/博士",
          professors: [
            { name: "伊藤真一", title: "教授", researchArea: "農業経済学" },
            { name: "石川雅紀", title: "教授", researchArea: "環境経済学" },
            { name: "川島秀一", title: "教授", researchArea: "食料流通/マーケティング" },
          ]
        },
        { name: "資源生命科学専攻", degree: "修士/博士",
          professors: [
            { name: "今石浩正", title: "教授", researchArea: "植物分子生物学" },
            { name: "山内靖雄", title: "教授", researchArea: "応用微生物学" },
            { name: "万年英之", title: "教授", researchArea: "動物遺伝学" },
          ]
        },
      ], admissionUrl: "https://www.ans.kobe-u.ac.jp/", facultyUrl: "https://hyoka.kobe-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月", "10月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "1,200,000〜1,500,000円" },
    graduateSchools: [
      { name: "理学研究科", nameJa: "理学研究科", programs: [
        { name: "数学専攻", degree: "修士/博士",
          professors: [
            { name: "柳田英二", title: "教授", researchArea: "偏微分方程式/関数解析" },
            { name: "辻元", title: "教授", researchArea: "複素幾何学" },
            { name: "河合秀和", title: "教授", researchArea: "多変数複素解析" },
          ]
        },
        { name: "物理学専攻", degree: "修士/博士",
          professors: [
            { name: "町田一成", title: "教授", researchArea: "超伝導/低温物理" },
            { name: "瀬戸秀紀", title: "教授", researchArea: "中性子散乱/ソフトマター" },
            { name: "黒田真司", title: "教授", researchArea: "半導体ナノ構造" },
          ]
        },
        { name: "化学専攻", degree: "修士/博士",
          professors: [
            { name: "築部浩", title: "教授", researchArea: "錯体化学/光化学" },
            { name: "河合明雄", title: "教授", researchArea: "物理化学/分光学" },
            { name: "森澤勇介", title: "教授", researchArea: "有機合成化学" },
          ]
        },
      ], admissionUrl: "https://www.tus.ac.jp/", facultyUrl: "https://www.tus.ac.jp/ridb/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"] },
      { name: "工学研究科", nameJa: "工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "吉村靖", title: "教授", researchArea: "機械力学/振動制御" },
            { name: "山本誠", title: "教授", researchArea: "流体工学/ターボ機械" },
            { name: "竹村研治郎", title: "教授", researchArea: "材料力学/生体力学" },
          ]
        },
        { name: "電気工学専攻", degree: "修士/博士",
          professors: [
            { name: "森本雅之", title: "教授", researchArea: "電動機制御/パワエレ" },
            { name: "髙橋芳浩", title: "教授", researchArea: "半導体工学/デバイス" },
            { name: "松田健一", title: "教授", researchArea: "電力系統工学" },
          ]
        },
        { name: "情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "篠埜功", title: "教授", researchArea: "プログラミング言語/形式手法" },
            { name: "荒木純道", title: "教授", researchArea: "通信方式/信号処理" },
            { name: "大和田勇人", title: "教授", researchArea: "AI/機械学習" },
          ]
        },
      ], admissionUrl: "https://www.tus.ac.jp/", facultyUrl: "https://www.tus.ac.jp/ridb/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "数理情報科学専攻", degree: "修士/博士",
          professors: [
            { name: "宮岡悦良", title: "教授", researchArea: "数理統計学/情報量基準" },
            { name: "阿部孝之", title: "教授", researchArea: "機械学習/データサイエンス" },
            { name: "新井仁之", title: "教授", researchArea: "応用数学/画像処理" },
          ]
        },
        { name: "経営工学専攻", degree: "修士/博士",
          professors: [
            { name: "生田目崇", title: "教授", researchArea: "経営情報システム/Optimization" },
            { name: "伊藤健", title: "教授", researchArea: "生産管理/サプライチェーン" },
            { name: "中島健一", title: "教授", researchArea: "品質管理/信頼性工学" },
          ]
        },
      ], admissionUrl: "https://www.tus.ac.jp/", facultyUrl: "https://www.tus.ac.jp/ridb/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "農学府", nameJa: "農学府", programs: [
        { name: "生物生産科学専攻", degree: "修士/博士",
          professors: [
            { name: "平沢正", title: "教授", researchArea: "作物生産生理学" },
            { name: "金勝一樹", title: "教授", researchArea: "植物分子遺伝学" },
            { name: "小池伸介", title: "教授", researchArea: "森林生態学/野生動物" },
          ]
        },
        { name: "応用生物科学専攻", degree: "修士/博士",
          professors: [
            { name: "養王田正文", title: "教授", researchArea: "蛋白質工学/構造生物学" },
            { name: "丹生谷博", title: "教授", researchArea: "酵素化学/糖鎖生物学" },
            { name: "大杉立", title: "教授", researchArea: "食品科学/澱粉科学" },
          ]
        },
        { name: "環境資源科学専攻", degree: "修士/博士",
          professors: [
            { name: "楊宗興", title: "教授", researchArea: "環境土壌学" },
            { name: "渡辺直明", title: "教授", researchArea: "環境微生物学" },
            { name: "中村修", title: "教授", researchArea: "環境政策/資源循環" },
          ]
        },
      ], admissionUrl: "https://www.tuat.ac.jp/", facultyUrl: "https://research.tuat.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "工学府", nameJa: "工学府", programs: [
        { name: "機械システム工学専攻", degree: "修士/博士",
          professors: [
            { name: "堀切川一男", title: "教授", researchArea: "トライボロジー/摩擦工学" },
            { name: "山田実", title: "教授", researchArea: "ロボット工学/メカトロニクス" },
            { name: "小関道彦", title: "教授", researchArea: "生体医工学/バイオメカ" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "熊谷隆宏", title: "教授", researchArea: "半導体工学/光デバイス" },
            { name: "桑原裕史", title: "教授", researchArea: "電磁波工学/アンテナ" },
            { name: "上野智永", title: "教授", researchArea: "電力工学/放電プラズマ" },
          ]
        },
        { name: "情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "藤田桂英", title: "教授", researchArea: "AI/マルチエージェント" },
            { name: "斎藤隆文", title: "教授", researchArea: "情報可視化/画像処理" },
            { name: "山田武志", title: "教授", researchArea: "音声処理/パターン認識" },
          ]
        },
      ], admissionUrl: "https://www.tuat.ac.jp/", facultyUrl: "https://research.tuat.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "海洋科学技術研究科", nameJa: "海洋科学技術研究科", programs: [
        { name: "海洋科学専攻", degree: "修士/博士",
          professors: [
            { name: "黒田一紀", title: "教授", researchArea: "海洋物理学/海流力学" },
            { name: "神田穣太", title: "教授", researchArea: "海洋化学/物質循環" },
            { name: "川辺みどり", title: "教授", researchArea: "海洋生物学/プランクトン" },
          ]
        },
        { name: "海洋資源環境学専攻", degree: "修士/博士",
          professors: [
            { name: "青山千春", title: "教授", researchArea: "海洋資源探査/メタンハイドレート" },
            { name: "田村兼吉", title: "教授", researchArea: "海洋環境工学" },
            { name: "井上智晶", title: "教授", researchArea: "沿岸環境/藻場生態" },
          ]
        },
        { name: "海事システム工学専攻", degree: "修士/博士",
          professors: [
            { name: "庄司るり", title: "教授", researchArea: "海事安全工学/船舶運航" },
            { name: "若林伸和", title: "教授", researchArea: "船舶海洋工学" },
            { name: "髙木健", title: "教授", researchArea: "海洋構造物/浮体工学" },
          ]
        },
      ], admissionUrl: "https://www.kaiyodai.ac.jp/", facultyUrl: "https://www.kaiyodai.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "1,100,000〜1,400,000円" },
    graduateSchools: [
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "齊藤兆古", title: "教授", researchArea: "電磁応用工学/非破壊検査" },
            { name: "内田利之", title: "教授", researchArea: "流体力学/推進工学" },
            { name: "古川俊英", title: "教授", researchArea: "機械設計/精密加工" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "柳父悟", title: "教授", researchArea: "電力工学/超電導応用" },
            { name: "小林春夫", title: "教授", researchArea: "集積回路/アナログVLSI" },
            { name: "栗原央流", title: "教授", researchArea: "パワーエレクトロニクス" },
          ]
        },
        { name: "情報通信工学専攻", degree: "修士/博士",
          professors: [
            { name: "森本雅和", title: "教授", researchArea: "画像処理/コンピュータビジョン" },
            { name: "小川貴弘", title: "教授", researchArea: "情報理論/符号化" },
            { name: "高橋治久", title: "教授", researchArea: "通信ネットワーク/プロトコル" },
          ]
        },
      ], admissionUrl: "https://www.dendai.ac.jp/", facultyUrl: "https://www.dendai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "280,000円", annualTuition: "1,300,000〜1,500,000円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "安達和彦", title: "教授", researchArea: "振動工学/機械力学" },
            { name: "小山潔", title: "教授", researchArea: "熱工学/燃焼工学" },
            { name: "田中秀岳", title: "教授", researchArea: "精密加工/切削工学" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "小池義和", title: "教授", researchArea: "光エレクトロニクス/レーザー" },
            { name: "松井謙二", title: "教授", researchArea: "電力変換/パワーエレクトロニクス" },
            { name: "坂本尊", title: "教授", researchArea: "通信工学/ワイヤレス" },
          ]
        },
      ], admissionUrl: "https://www.shibaura-it.ac.jp/", facultyUrl: "https://www.shibaura-it.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"] },
      { name: "システム理工学研究科", nameJa: "システム理工学研究科", programs: [
        { name: "電子情報システム専攻", degree: "修士/博士",
          professors: [
            { name: "米山暁夫", title: "教授", researchArea: "電磁界解析/計算電磁気学" },
            { name: "松田勝敬", title: "教授", researchArea: "情報通信システム" },
            { name: "渡部透", title: "教授", researchArea: "組込みシステム/IoT" },
          ]
        },
        { name: "機械制御システム専攻", degree: "修士/博士",
          professors: [
            { name: "長谷川浩志", title: "教授", researchArea: "ロボット制御/システム工学" },
            { name: "村上俊之", title: "教授", researchArea: "メカトロニクス/制御理論" },
            { name: "神林隆", title: "教授", researchArea: "流体機械/空力音響" },
          ]
        },
      ], admissionUrl: "https://www.shibaura-it.ac.jp/", facultyUrl: "https://www.shibaura-it.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "早川知克", title: "教授", researchArea: "材料工学/レーザー加工" },
            { name: "内山直樹", title: "教授", researchArea: "熱流体工学" },
            { name: "坂本英俊", title: "教授", researchArea: "設計工学/最適化" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "大平孝", title: "教授", researchArea: "高周波回路/無線通信" },
            { name: "舟橋司", title: "教授", researchArea: "電力システム工学" },
            { name: "平田晃正", title: "教授", researchArea: "電磁環境/生体電磁工学" },
          ]
        },
        { name: "情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "山本大介", title: "教授", researchArea: "データベース/Web工学" },
            { name: "船瀬新王", title: "教授", researchArea: "機械学習/パターン認識" },
            { name: "増山繁", title: "教授", researchArea: "自然言語処理/情報検索" },
          ]
        },
        { name: "社会工学専攻", degree: "修士/博士",
          professors: [
            { name: "加藤昇平", title: "教授", researchArea: "土木計画学/交通工学" },
            { name: "佐藤晃", title: "教授", researchArea: "建築計画/都市デザイン" },
            { name: "小池淳司", title: "教授", researchArea: "国土計画/地域経済" },
          ]
        },
      ], admissionUrl: "https://www.nitech.ac.jp/", facultyUrl: "https://profs.provost.nagoya-u.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工芸科学研究科", nameJa: "工芸科学研究科", programs: [
        { name: "デザイン·建築学専攻", degree: "修士/博士",
          professors: [
            { name: "木村真紀", title: "教授", researchArea: "建築設計/空間デザイン" },
            { name: "吉田哲也", title: "教授", researchArea: "都市計画/住環境" },
            { name: "中村貴志", title: "教授", researchArea: "プロダクトデザイン" },
          ]
        },
        { name: "電子システム工学専攻", degree: "修士/博士",
          professors: [
            { name: "藤井康友", title: "教授", researchArea: "光エレクトロニクス" },
            { name: "和田実", title: "教授", researchArea: "半導体デバイス/センサー" },
            { name: "岡本英二", title: "教授", researchArea: "無線通信/信号処理" },
          ]
        },
        { name: "情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "吉川正俊", title: "教授", researchArea: "データベース/情報検索" },
            { name: "渋谷雄", title: "教授", researchArea: "ヒューマンインタフェース" },
            { name: "馬場孝明", title: "教授", researchArea: "画像認識/機械学習" },
          ]
        },
        { name: "材料·化学工学専攻", degree: "修士/博士",
          professors: [
            { name: "松本英俊", title: "教授", researchArea: "高分子材料/繊維工学" },
            { name: "中西英行", title: "教授", researchArea: "有機材料化学" },
            { name: "小林俊郎", title: "教授", researchArea: "金属材料/複合材料" },
          ]
        },
      ], admissionUrl: "https://www.kit.ac.jp/", facultyUrl: "https://www.kit.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月", "10月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: [
        { name: "機械知能工学専攻", degree: "修士/博士",
          professors: [
            { name: "田川善彦", title: "教授", researchArea: "バイオメカニクス/福祉工学" },
            { name: "山田幸生", title: "教授", researchArea: "ロボット工学/知能機械" },
            { name: "黒木秀一", title: "教授", researchArea: "流体工学/燃焼工学" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "小山田正人", title: "教授", researchArea: "半導体工学/ナノデバイス" },
            { name: "大坪昌久", title: "教授", researchArea: "高電圧工学/プラズマ" },
            { name: "神野健哉", title: "教授", researchArea: "非線形回路/カオス工学" },
          ]
        },
        { name: "応用化学専攻", degree: "修士/博士",
          professors: [
            { name: "横山晴彦", title: "教授", researchArea: "高分子化学/機能性材料" },
            { name: "松本源太郎", title: "教授", researchArea: "触媒化学/有機合成" },
            { name: "徳永智春", title: "教授", researchArea: "分析化学/センシング" },
          ]
        },
      ], admissionUrl: "https://www.kyutech.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "情報工学研究科", nameJa: "情報工学研究科", programs: [
        { name: "知能情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "竹内純一", title: "教授", researchArea: "機械学習/パターン認識" },
            { name: "鈴木祐介", title: "教授", researchArea: "自然言語処理/情報抽出" },
            { name: "野田哲男", title: "教授", researchArea: "進化的計算/最適化" },
          ]
        },
        { name: "情報·通信工学専攻", degree: "修士/博士",
          professors: [
            { name: "山脇彰", title: "教授", researchArea: "通信ネットワーク/IoT" },
            { name: "吉田隆一", title: "教授", researchArea: "高周波工学/アンテナ" },
            { name: "岡本英二", title: "教授", researchArea: "符号理論/情報理論" },
          ]
        },
      ], admissionUrl: "https://www.kyutech.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: [
        { name: "機械創造工学専攻", degree: "修士/博士",
          professors: [
            { name: "上村靖司", title: "教授", researchArea: "雪氷工学/防災工学" },
            { name: "井原郁夫", title: "教授", researchArea: "材料力学/構造強度" },
            { name: "柳和宏", title: "教授", researchArea: "機械設計/精密工学" },
          ]
        },
        { name: "電気電子情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "常木澄人", title: "教授", researchArea: "電子デバイス/半導体" },
            { name: "石井郁夫", title: "教授", researchArea: "信号処理/画像工学" },
            { name: "田村健二", title: "教授", researchArea: "電力工学/再生可能エネルギー" },
          ]
        },
        { name: "物質·材料工学専攻", degree: "修士/博士",
          professors: [
            { name: "武田雅敏", title: "教授", researchArea: "機能性高分子/有機材料" },
            { name: "髙橋由紀子", title: "教授", researchArea: "無機材料/セラミックス" },
            { name: "南一郎", title: "教授", researchArea: "金属組織学/材料強度" },
          ]
        },
      ], admissionUrl: "https://www.nagaokaut.ac.jp/", facultyUrl: "https://www.nagaokaut.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "寺嶋一彦", title: "教授", researchArea: "制御工学/ロボティクス" },
            { name: "井上剛志", title: "教授", researchArea: "振動工学/非線形力学" },
            { name: "福澤良一", title: "教授", researchArea: "トライボロジー/表面工学" },
          ]
        },
        { name: "電気電子情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "田所嘉昭", title: "教授", researchArea: "信号処理/適応フィルタ" },
            { name: "上原秀幸", title: "教授", researchArea: "ワイヤレス通信/MIMO" },
            { name: "穂積直裕", title: "教授", researchArea: "高電圧工学/パルスパワー" },
          ]
        },
        { name: "情報·知能工学専攻", degree: "修士/博士",
          professors: [
            { name: "青野雅樹", title: "教授", researchArea: "情報検索/多次元データベース" },
            { name: "栗原正仁", title: "教授", researchArea: "知能情報学/知識発見" },
            { name: "西村和也", title: "教授", researchArea: "コンピュータビジョン/画像認識" },
          ]
        },
      ], admissionUrl: "https://www.tut.ac.jp/", facultyUrl: "https://www.tut.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
    ],
    dataSources: ["https://www.tut.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 私立名门（G5/MARCH） — 4校（来自universities.ts）
  // ============================================================

  // 上智大学 — G5成员，新闻学·国际关系·地球环境
  {
    universityId: "sophia",
    universityName: "上智大学",
    type: "private",
    tier: "G5 / 国际化5大学",
    portalUrl: "https://www.sophia.ac.jp/",
    professorSearchUrl: "https://kenkyu.sophia.ac.jp/",
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "约100-140万円（研究科不同）" },
    graduateSchools: [
      {
        name: "文学研究科", nameJa: "文学研究科", nameEn: "Graduate School of Humanities",
        admissionUrl: "https://www.sophia.ac.jp/",
        facultyUrl: "https://kenkyu.sophia.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        notes: "新闻学方向日本第一，毕业生可进五大电视台。哲学·史学·日本文学·英文学·独文学·仏文学",
        programs: [
          { name: "新聞学専攻", nameEn: "Journalism", degree: "修士/博士", description: "日本首个大学新闻学科，权威性极高。五大电视台·新闻社就业实绩丰富",
            professors: [
              { name: "大石裕", title: "教授", researchArea: "新闻学/媒体论" },
              { name: "石澤靖治", title: "教授", researchArea: "媒体文化" },
            ]
          },
          { name: "哲学専攻", degree: "修士/博士",
            professors: [
              { name: "中釜浩一", title: "教授", researchArea: "現象学/現代フランス哲学" },
              { name: "山口裕之", title: "教授", researchArea: "近世哲学/ドイツ観念論" },
            ]
          },
          { name: "史学専攻", degree: "修士/博士",
            professors: [
              { name: "白石英彦", title: "教授", researchArea: "日本中世史" },
              { name: "大澤広晃", title: "教授", researchArea: "西洋近現代史" },
            ]
          },
          { name: "日本文学専攻", degree: "修士/博士",
            professors: [
              { name: "井上泰至", title: "教授", researchArea: "日本近世文学/俳諧" },
              { name: "小林ふみ子", title: "教授", researchArea: "日本近世文学/洒落本" },
            ]
          },
          { name: "英文学専攻", degree: "修士/博士",
            professors: [
              { name: "河村民部", title: "教授", researchArea: "イギリス文学/ロマン主義" },
              { name: "小林英里", title: "教授", researchArea: "アメリカ文学/モダニズム" },
            ]
          },
        ]
      },
      {
        name: "全球研究研究科（GPGS）", nameJa: "グローバル・スタディーズ研究科", nameEn: "Graduate School of Global Studies",
        admissionUrl: "https://www.sophia.ac.jp/",
        facultyUrl: "https://kenkyu.sophia.ac.jp/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "3个英语授课方向：Global Studies / International Business and Development / Japanese Studies",
        programs: [
          { name: "全球研究専攻（Global Studies）", degree: "修士/博士", description: "全球研究·国际关系·跨国文化",
            professors: [
              { name: "Anne Mette Fisker-Nielsen", title: "教授", researchArea: "政治人類学/市民社会" },
              { name: "David H. Slater", title: "教授", researchArea: "文化人類学/日本研究" },
              { name: "Mariko Tanigaki", title: "准教授", researchArea: "国際関係論/平和構築" },
            ]
          },
          { name: "国际商务与发展（IBD）", degree: "修士/博士", description: "国际经济·开发·经营",
            professors: [
              { name: "John W. Clammer", title: "教授", researchArea: "開発経済学/文化経済" },
              { name: "安富淳", title: "准教授", researchArea: "人的資源開発/国際移住" },
            ]
          },
          { name: "日本研究専攻（Japanese Studies）", degree: "修士/博士", description: "日本文化·社会·历史の英語研究",
            professors: [
              { name: "川村覚文", title: "教授", researchArea: "日本思想史" },
              { name: "Noriko Murai", title: "准教授", researchArea: "日本美術史/視覚文化" },
            ]
          },
        ]
      },
      {
        name: "法学研究科", nameJa: "法学研究科", nameEn: "Graduate School of Law",
        admissionUrl: "https://www.sophia.ac.jp/",
        facultyUrl: "https://kenkyu.sophia.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "法律学専攻", degree: "修士/博士", description: "民法·刑法·国际法·知识产权法，有外国人特别研究生制度",
            professors: [
              { name: "丸山英二", title: "教授", researchArea: "民法/医事法" },
              { name: "大久保規子", title: "教授", researchArea: "行政法/環境法" },
              { name: "宮川成雄", title: "教授", researchArea: "憲法/比較憲法" },
            ]
          },
        ]
      },
      {
        name: "经济学研究科", nameJa: "経済学研究科", nameEn: "Graduate School of Economics",
        admissionUrl: "https://www.sophia.ac.jp/",
        facultyUrl: "https://kenkyu.sophia.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "经济学専攻", degree: "修士/博士",
            professors: [
              { name: "出雲雅志", title: "教授", researchArea: "国際マクロ経済学" },
              { name: "竹内あい", title: "教授", researchArea: "計量経済学/労働経済" },
              { name: "井上智夫", title: "教授", researchArea: "金融論/ファイナンス" },
            ]
          },
        ]
      },
      {
        name: "理工学研究科", nameJa: "理工学研究科", nameEn: "Graduate School of Science and Technology",
        admissionUrl: "https://www.sophia.ac.jp/",
        facultyUrl: "https://kenkyu.sophia.ac.jp/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        programs: [
          { name: "机械工学専攻", degree: "修士/博士",
            professors: [
              { name: "坂本英俊", title: "教授", researchArea: "機械力学/制御工学" },
              { name: "鈴木隆史", title: "教授", researchArea: "熱流体工学" },
            ]
          },
          { name: "电气·电子工学専攻", degree: "修士/博士",
            professors: [
              { name: "河合誠", title: "教授", researchArea: "半導体工学/集積回路" },
              { name: "中村一也", title: "教授", researchArea: "通信工学/信号処理" },
            ]
          },
          { name: "情报学専攻", degree: "修士/博士", description: "AI·データ科学·网络安全",
            professors: [
              { name: "矢入郁子", title: "教授", researchArea: "AI/HCI" },
              { name: "小野寺忠司", title: "教授", researchArea: "数理最適化/機械学習" },
              { name: "高宗万紀", title: "准教授", researchArea: "情報セキュリティ" },
            ]
          },
          { name: "物质生命理工学専攻", degree: "修士/博士", description: "材料·化学·生命",
            professors: [
              { name: "高橋浩", title: "教授", researchArea: "有機合成化学/触媒" },
              { name: "井上浄", title: "教授", researchArea: "物性物理学/超伝導" },
            ]
          },
        ]
      },
      {
        name: "地球环境学研究科", nameJa: "地球環境学研究科", nameEn: "Graduate School of Global Environmental Studies",
        admissionUrl: "https://www.sophia.ac.jp/",
        facultyUrl: "https://kenkyu.sophia.ac.jp/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "可持续发展·环境政策方向，国际化程度高",
        programs: [
          { name: "地球环境学専攻", degree: "修士/博士", description: "可持续发展·环境政策·多国学生共同研究",
            professors: [
              { name: "黄光偉", title: "教授", researchArea: "環境GIS/リモートセンシング" },
              { name: "杉山正和", title: "教授", researchArea: "エネルギー工学/太陽光発電" },
              { name: "川久保俊", title: "准教授", researchArea: "建築環境/持続可能性評価" },
            ]
          },
        ]
      },
      {
        name: "言语科学研究科", nameJa: "言語科学研究科", nameEn: "Graduate School of Languages and Linguistics",
        admissionUrl: "https://www.sophia.ac.jp/",
        facultyUrl: "https://kenkyu.sophia.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "言语科学専攻", degree: "修士/博士",
            professors: [
              { name: "吉田研作", title: "教授", researchArea: "応用言語学/英語教育" },
              { name: "渡辺淳也", title: "教授", researchArea: "理論言語学/意味論" },
              { name: "佐藤健", title: "准教授", researchArea: "第二言語習得論" },
            ]
          },
        ]
      },
      {
        name: "神学研究科", nameJa: "神学研究科", nameEn: "Graduate School of Theology",
        admissionUrl: "https://www.sophia.ac.jp/",
        facultyUrl: "https://kenkyu.sophia.ac.jp/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        programs: [
          { name: "神学専攻", degree: "修士/博士",
            professors: [
              { name: "光延一郎", title: "教授", researchArea: "組織神学/キリスト論" },
              { name: "髙祖敏明", title: "教授", researchArea: "カトリック神学/倫理神学" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://www.sophia.ac.jp/", "https://kenkyu.sophia.ac.jp/"],
  },

  // 明治大学 — MARCH核心校，法学·商学·农学
  {
    universityId: "meiji",
    universityName: "明治大学",
    type: "private",
    tier: "MARCH核心校",
    portalUrl: "https://www.meiji.ac.jp/",
    professorSearchUrl: "https://meiji.repository.nii.ac.jp/",
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "约100-130万円（研究科不同）" },
    graduateSchools: [
      {
        name: "法学研究科", nameJa: "法学研究科", nameEn: "Graduate School of Law",
        admissionUrl: "https://www.meiji.ac.jp/",
        facultyUrl: "https://meiji.repository.nii.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        notes: "私立大学司法考试合格率前三，商务法·国际关系法·公共法务",
        programs: [
          { name: "法律学専攻", degree: "修士/博士", description: "日本私立大学司法考试合格率前三",
            professors: [
              { name: "大石眞", title: "教授", researchArea: "憲法学/統治機構論" },
              { name: "山本和彦", title: "教授", researchArea: "民事訴訟法/ADR" },
              { name: "川嶋四郎", title: "教授", researchArea: "民事訴訟法/倒産法" },
            ]
          },
          { name: "国际关系法専攻", degree: "修士/博士",
            professors: [
              { name: "江藤淳一", title: "教授", researchArea: "国際私法" },
              { name: "新井京", title: "教授", researchArea: "国際法/国際人道法" },
            ]
          },
        ]
      },
      {
        name: "商学研究科", nameJa: "商学研究科", nameEn: "Graduate School of Commerce",
        admissionUrl: "https://www.meiji.ac.jp/",
        facultyUrl: "https://meiji.repository.nii.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月", "9月"],
        notes: "金融·会计·市场营销方向，就业率92%+",
        programs: [
          { name: "商学専攻", degree: "修士/博士", description: "会计·金融·市场营销·国际商务",
            professors: [
              { name: "風間信隆", title: "教授", researchArea: "経営管理/コーポレートガバナンス" },
              { name: "小川智之", title: "教授", researchArea: "マーケティング戦略/ブランド" },
              { name: "広田真一", title: "教授", researchArea: "企業金融/ファイナンス" },
            ]
          },
        ]
      },
      {
        name: "政治经济学研究科", nameJa: "政治経済学研究科", nameEn: "Graduate School of Political Science and Economics",
        admissionUrl: "https://www.meiji.ac.jp/",
        facultyUrl: "https://meiji.repository.nii.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "政治学専攻", degree: "修士/博士", description: "政策研究·国际关系·亚洲政经",
            professors: [
              { name: "井田正道", title: "教授", researchArea: "政治行動論/投票行動" },
              { name: "西川伸一", title: "教授", researchArea: "行政学/官僚制研究" },
            ]
          },
          { name: "经济学専攻", degree: "修士/博士",
            professors: [
              { name: "廣江満郎", title: "教授", researchArea: "マクロ経済学/金融政策" },
              { name: "大森拓磨", title: "教授", researchArea: "計量経済学/データ分析" },
            ]
          },
        ]
      },
      {
        name: "文学研究科", nameJa: "文学研究科", nameEn: "Graduate School of Arts and Letters",
        admissionUrl: "https://www.meiji.ac.jp/",
        facultyUrl: "https://meiji.repository.nii.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "日本文学専攻", degree: "修士/博士",
            professors: [
              { name: "小秋元段", title: "教授", researchArea: "日本中世文学/軍記物語" },
              { name: "内藤明", title: "教授", researchArea: "日本古代文学/万葉集" },
            ]
          },
          { name: "英文学専攻", degree: "修士/博士",
            professors: [
              { name: "丹治愛", title: "教授", researchArea: "英文学/モダニズム" },
              { name: "西山けい子", title: "教授", researchArea: "アメリカ演劇" },
            ]
          },
          { name: "地理学専攻", degree: "修士/博士",
            professors: [
              { name: "中村洋介", title: "教授", researchArea: "都市地理学/人文地理" },
            ]
          },
          { name: "心理学専攻", degree: "修士/博士",
            professors: [
              { name: "石川幹人", title: "教授", researchArea: "認知心理学/進化心理学" },
              { name: "長谷川寿一", title: "教授", researchArea: "発達心理学" },
            ]
          },
        ]
      },
      {
        name: "农学研究科", nameJa: "農学研究科", nameEn: "Graduate School of Agriculture",
        admissionUrl: "https://www.meiji.ac.jp/",
        facultyUrl: "https://meiji.repository.nii.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        notes: "日本私立大学农学第一，粮食政策·生物技术·农业经济",
        programs: [
          { name: "农学専攻", degree: "修士/博士", description: "日本私立农学第一。粮食政策·生物技术·农业经济·食品科学",
            professors: [
              { name: "倉持幸司", title: "教授", researchArea: "有機化学/農薬化学" },
              { name: "新村毅", title: "教授", researchArea: "動物行動学/家畜管理学" },
              { name: "矢野秀徳", title: "教授", researchArea: "植物病理学/微生物学" },
            ]
          },
        ]
      },
      {
        name: "理工学研究科", nameJa: "理工学研究科", nameEn: "Graduate School of Science and Technology",
        admissionUrl: "https://www.meiji.ac.jp/",
        facultyUrl: "https://meiji.repository.nii.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "电气电子生命工学専攻", degree: "修士/博士",
            professors: [
              { name: "小川真人", title: "教授", researchArea: "半導体工学/デバイス物理" },
              { name: "宮下和雄", title: "教授", researchArea: "電力工学/エネルギーシステム" },
            ]
          },
          { name: "机械工学専攻", degree: "修士/博士",
            professors: [
              { name: "山田浩之", title: "教授", researchArea: "流体力学/数値シミュレーション" },
              { name: "松浦大輔", title: "教授", researchArea: "材料強度/信頼性工学" },
            ]
          },
          { name: "建筑学専攻", degree: "修士/博士",
            professors: [
              { name: "小泉雅生", title: "教授", researchArea: "建築意匠/住宅設計" },
              { name: "中島裕輔", title: "教授", researchArea: "建築環境工学/省エネルギー" },
            ]
          },
          { name: "応用化学専攻", degree: "修士/博士",
            professors: [
              { name: "清水敏美", title: "教授", researchArea: "ナノ材料/自己組織化" },
              { name: "須藤篤", title: "教授", researchArea: "高分子化学/生分解性プラスチック" },
            ]
          },
          { name: "情报科学専攻", degree: "修士/博士", description: "AI·データ科学·网络",
            professors: [
              { name: "嵯峨山茂樹", title: "教授", researchArea: "音声情報処理/音楽情報科学" },
              { name: "森田昌宏", title: "教授", researchArea: "自然言語処理/機械翻訳" },
              { name: "福本雅朗", title: "教授", researchArea: "インターネット工学" },
            ]
          },
          { name: "数学専攻", degree: "修士/博士",
            professors: [
              { name: "桂田昌紀", title: "教授", researchArea: "偏微分方程式/数理解析" },
            ]
          },
        ]
      },
      {
        name: "经营学研究科", nameJa: "経営学研究科", nameEn: "Graduate School of Business Administration",
        admissionUrl: "https://www.meiji.ac.jp/",
        facultyUrl: "https://meiji.repository.nii.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "経営学専攻", degree: "修士/博士",
            professors: [
              { name: "出見世信之", title: "教授", researchArea: "経営組織/人的資源管理" },
              { name: "石川公彦", title: "教授", researchArea: "経営戦略/イノベーション" },
            ]
          },
        ]
      },
      {
        name: "情报交流研究科", nameJa: "情報コミュニケーション研究科", nameEn: "Graduate School of Information and Communication",
        admissionUrl: "https://www.meiji.ac.jp/",
        facultyUrl: "https://meiji.repository.nii.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "情報コミュニケーション専攻", degree: "修士/博士",
            professors: [
              { name: "吉田俊弘", title: "教授", researchArea: "メディア論/情報社会論" },
              { name: "加藤拓巳", title: "教授", researchArea: "ソーシャルメディア分析" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://www.meiji.ac.jp/", "https://meiji.repository.nii.ac.jp/"],
  },

  // 立教大学 — MARCH中上难度，异文化交流·观光·社会学
  {
    universityId: "rikkyo",
    universityName: "立教大学",
    type: "private",
    tier: "MARCH中上难度",
    portalUrl: "https://www.rikkyo.ac.jp/",
    professorSearchUrl: "https://researchmap.jp/",
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "约100-130万円（研究科不同）" },
    graduateSchools: [
      {
        name: "文学研究科", nameJa: "文学研究科", nameEn: "Graduate School of Arts",
        admissionUrl: "https://www.rikkyo.ac.jp/",
        facultyUrl: "https://researchmap.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "英文学専攻", degree: "修士/博士",
            professors: [
              { name: "井出達郎", title: "教授", researchArea: "イギリス文学/シェイクスピア" },
              { name: "高田茂樹", title: "教授", researchArea: "アメリカ文学/現代詩" },
            ]
          },
          { name: "日本文学専攻", degree: "修士/博士",
            professors: [
              { name: "藤原英城", title: "教授", researchArea: "日本近世文学/出版文化" },
              { name: "高橋博史", title: "教授", researchArea: "日本近代文学" },
            ]
          },
          { name: "比較文明学専攻", degree: "修士/博士",
            professors: [
              { name: "島薗進", title: "教授", researchArea: "宗教学/比較文明論" },
              { name: "浅見泰司", title: "教授", researchArea: "文化遺産/考古学" },
            ]
          },
          { name: "心理学専攻", degree: "修士/博士", description: "立教心理学实验室全国领先",
            professors: [
              { name: "都築誉史", title: "教授", researchArea: "認知心理学/記憶研究" },
              { name: "村瀬嘉代子", title: "教授", researchArea: "臨床心理学" },
            ]
          },
        ]
      },
      {
        name: "异文化交流研究科", nameJa: "異文化コミュニケーション研究科", nameEn: "Graduate School of Intercultural Communication",
        admissionUrl: "https://www.rikkyo.ac.jp/",
        facultyUrl: "https://researchmap.jp/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "日本唯一以跨文化交流为核心的独立研究科",
        programs: [
          { name: "异文化コミュニケーション専攻", degree: "修士/博士", description: "跨文化沟通·国际交流·多语言教育",
            professors: [
              { name: "池田伸子", title: "教授", researchArea: "異文化コミュニケーション/日本語教育" },
              { name: "石井敏", title: "教授", researchArea: "異文化間コミュニケーション論" },
              { name: "丸山真純", title: "准教授", researchArea: "社会言語学/談話分析" },
            ]
          },
        ]
      },
      {
        name: "社会学研究科", nameJa: "社会学研究科", nameEn: "Graduate School of Sociology",
        admissionUrl: "https://www.rikkyo.ac.jp/",
        facultyUrl: "https://researchmap.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        notes: "媒体社会学研究室全国知名",
        programs: [
          { name: "社会学専攻", degree: "修士/博士", description: "媒体社会学·网络社会·舆论·流行文化",
            professors: [
              { name: "松浦さと子", title: "教授", researchArea: "メディア社会学/ジャーナリズム" },
              { name: "是永論", title: "教授", researchArea: "社会情報学/ネットコミュニティ" },
              { name: "吉澤夏希", title: "准教授", researchArea: "文化社会学/若者文化" },
            ]
          },
        ]
      },
      {
        name: "理学研究科", nameJa: "理学研究科", nameEn: "Graduate School of Science",
        admissionUrl: "https://www.rikkyo.ac.jp/",
        facultyUrl: "https://researchmap.jp/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "小班教学（5-8人），设备先进",
        programs: [
          { name: "数学専攻", degree: "修士/博士",
            professors: [
              { name: "小林和夫", title: "教授", researchArea: "代数幾何学/数論幾何" },
              { name: "泉田勇介", title: "教授", researchArea: "偏微分方程式/数理解析" },
            ]
          },
          { name: "物理学専攻", degree: "修士/博士",
            professors: [
              { name: "田島裕之", title: "教授", researchArea: "光物性/有機半導体" },
              { name: "田村浩司", title: "教授", researchArea: "量子光学/非線形光学" },
            ]
          },
          { name: "化学専攻", degree: "修士/博士",
            professors: [
              { name: "山本隆一", title: "教授", researchArea: "高分子化学/有機材料" },
              { name: "岩崎貴子", title: "教授", researchArea: "超分子化学/錯体化学" },
            ]
          },
          { name: "生命理学専攻", degree: "修士/博士",
            professors: [
              { name: "和田洋", title: "教授", researchArea: "進化発生生物学" },
              { name: "上田実", title: "教授", researchArea: "遺伝子工学/植物生理" },
            ]
          },
        ]
      },
      {
        name: "经济学研究科", nameJa: "経済学研究科", nameEn: "Graduate School of Economics",
        admissionUrl: "https://www.rikkyo.ac.jp/",
        facultyUrl: "https://researchmap.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "经济学専攻", degree: "修士/博士",
            professors: [
              { name: "松本正生", title: "教授", researchArea: "マクロ経済学/金融論" },
              { name: "清水和巳", title: "教授", researchArea: "行動経済学/実験経済学" },
            ]
          },
        ]
      },
      {
        name: "经营学研究科", nameJa: "経営学研究科", nameEn: "Graduate School of Business",
        admissionUrl: "https://www.rikkyo.ac.jp/",
        facultyUrl: "https://researchmap.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "経営学専攻", degree: "修士/博士",
            professors: [
              { name: "山田敏之", title: "教授", researchArea: "経営戦略/組織論" },
              { name: "吉川晃史", title: "教授", researchArea: "管理会計/原価計算" },
            ]
          },
        ]
      },
      {
        name: "法学研究科", nameJa: "法学研究科", nameEn: "Graduate School of Law",
        admissionUrl: "https://www.rikkyo.ac.jp/",
        facultyUrl: "https://researchmap.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "法律学専攻", degree: "修士/博士",
            professors: [
              { name: "淡路智典", title: "教授", researchArea: "民法/金融取引法" },
              { name: "新井誠", title: "教授", researchArea: "憲法学/比較憲法" },
            ]
          },
        ]
      },
      {
        name: "观光学研究科", nameJa: "観光学研究科", nameEn: "Graduate School of Tourism",
        admissionUrl: "https://www.rikkyo.ac.jp/",
        facultyUrl: "https://researchmap.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        notes: "日本首个观光研究科，与迪士尼/全日空/星野度假村合作",
        programs: [
          { name: "观光学専攻", degree: "修士/博士", description: "观光经营·观光地域·观光文化，与迪士尼·全日空合作",
            professors: [
              { name: "庄子元", title: "教授", researchArea: "観光経営/サービス産業" },
              { name: "森下晶代", title: "教授", researchArea: "観光政策/地域活性化" },
              { name: "山田雅俊", title: "准教授", researchArea: "ホスピタリティ/ツーリズム文化" },
            ]
          },
        ]
      },
      {
        name: "21世纪社会デザイン研究科", nameJa: "21世紀社会デザイン研究科", nameEn: "Graduate School of 21st Century Social Design",
        admissionUrl: "https://www.rikkyo.ac.jp/",
        facultyUrl: "https://researchmap.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        notes: "社会人対象·夜间course开设",
        programs: [
          { name: "社会デザイン専攻", degree: "修士",
            professors: [
              { name: "中村陽一", title: "教授", researchArea: "社会デザイン/社会起業" },
              { name: "山口誠一", title: "教授", researchArea: "非営利組織経営/CSR" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://www.rikkyo.ac.jp/", "https://researchmap.jp/"],
  },

  // 法政大学 — MARCH，法学·设计工学·政策创造
  {
    universityId: "hosei",
    universityName: "法政大学",
    type: "private",
    tier: "MARCH",
    portalUrl: "https://www.hosei.ac.jp/",
    professorSearchUrl: "https://kenkyu-db.hosei.ac.jp/",
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "约100-130万円（研究科不同）" },
    graduateSchools: [
      {
        name: "法学研究科", nameJa: "法学研究科", nameEn: "Graduate School of Law",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        notes: "日本第一所私立法律学校，报录比15:1最热门学部",
        programs: [
          { name: "法律学専攻", degree: "修士/博士", description: "宪法·民法·国际法·知识产权法，报录比15:1",
            professors: [
              { name: "杉田敦", title: "教授", researchArea: "憲法学/政治理論" },
              { name: "西谷祐子", title: "教授", researchArea: "国際私法/家族法" },
              { name: "只木誠", title: "教授", researchArea: "刑法" },
            ]
          },
          { name: "政治学専攻", degree: "修士/博士",
            professors: [
              { name: "廣瀬淳子", title: "教授", researchArea: "政治制度論/立法過程" },
              { name: "杉浦功一", title: "教授", researchArea: "国際政治/平和構築" },
            ]
          },
        ]
      },
      {
        name: "设计工学研究科", nameJa: "デザイン工学研究科", nameEn: "Graduate School of Design and Engineering",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        notes: "就业率98%，索尼·丰田等就职实干",
        programs: [
          { name: "デザイン工学専攻", degree: "修士/博士", description: "产品设计·UI/UX·3D建模·人机交互，就业率98%",
            professors: [
              { name: "山崎和彦", title: "教授", researchArea: "情報デザイン/UXデザイン" },
              { name: "杉本俊彦", title: "教授", researchArea: "プロダクトデザイン/人間工学" },
              { name: "小島一晃", title: "准教授", researchArea: "HCI/インタラクションデザイン" },
            ]
          },
        ]
      },
      {
        name: "国际文化研究科", nameJa: "国際文化研究科", nameEn: "Graduate School of International Cultural Studies",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "国际文化専攻", degree: "修士/博士", description: "国际关系·跨文化交流·区域研究，海外交换制度丰富",
            professors: [
              { name: "植村和秀", title: "教授", researchArea: "国際関係論/国際文化論" },
              { name: "川久保文紀", title: "教授", researchArea: "国際政治経済/グローバル化" },
            ]
          },
        ]
      },
      {
        name: "政策创造研究科", nameJa: "政策創造研究科", nameEn: "Graduate School of Policy Studies",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "政策科学専攻", degree: "修士/博士", description: "公共政策·地域发展·社会创新",
            professors: [
              { name: "藤井浩司", title: "教授", researchArea: "公共政策/行政学" },
              { name: "礒崎初仁", title: "教授", researchArea: "地方自治/地域政策" },
            ]
          },
        ]
      },
      {
        name: "经营学研究科", nameJa: "経営学研究科", nameEn: "Graduate School of Business Administration",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "経営学専攻（MBA）", degree: "修士/博士", description: "战略管理·市场营销，银行·商社就职方向",
            professors: [
              { name: "洞口治夫", title: "教授", researchArea: "経営戦略/グローバル経営" },
              { name: "徳永善昭", title: "教授", researchArea: "マーケティング/消費者行動" },
              { name: "藤井誠一", title: "教授", researchArea: "経営組織/イノベーション管理" },
            ]
          },
        ]
      },
      {
        name: "理工学研究科", nameJa: "理工学研究科", nameEn: "Graduate School of Science and Engineering",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "機械工学専攻", degree: "修士/博士",
            professors: [
              { name: "辻田星歩", title: "教授", researchArea: "流体工学/数値流体力学" },
              { name: "大石英司", title: "教授", researchArea: "機械力学/振動解析" },
            ]
          },
          { name: "電気電子工学専攻", degree: "修士/博士",
            professors: [
              { name: "内田健康", title: "教授", researchArea: "高電圧工学/放電プラズマ" },
              { name: "佐野和博", title: "教授", researchArea: "半導体物性/スピントロニクス" },
            ]
          },
          { name: "情報科学専攻", degree: "修士/博士",
            professors: [
              { name: "小川貴弘", title: "教授", researchArea: "機械学習/画像認識" },
              { name: "伊藤克亘", title: "教授", researchArea: "音声情報処理/音響信号" },
            ]
          },
          { name: "応用化学専攻", degree: "修士/博士",
            professors: [
              { name: "杉山賢次", title: "教授", researchArea: "高分子化学/機能性材料" },
              { name: "奥村典子", title: "教授", researchArea: "有機合成化学/触媒化学" },
            ]
          },
          { name: "建築学専攻", degree: "修士/博士",
            professors: [
              { name: "高村雅彦", title: "教授", researchArea: "建築史/都市史" },
              { name: "池田靖史", title: "教授", researchArea: "建築計画/デザイン戦略" },
            ]
          },
        ]
      },
      {
        name: "人文科学研究科", nameJa: "人文科学研究科", nameEn: "Graduate School of Humanities",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "日本文学専攻", degree: "修士/博士",
            professors: [
              { name: "中川照将", title: "教授", researchArea: "日本中世文学/仏教文学" },
              { name: "小川剛生", title: "教授", researchArea: "日本古典文学/和歌文学" },
            ]
          },
          { name: "英文学専攻", degree: "修士/博士",
            professors: [
              { name: "藤野功一", title: "教授", researchArea: "イギリス小説/19世紀文学" },
            ]
          },
          { name: "史学専攻", degree: "修士/博士",
            professors: [
              { name: "山内昌之", title: "教授", researchArea: "国際関係史/イスラーム史" },
            ]
          },
        ]
      },
      {
        name: "社会学研究科", nameJa: "社会学研究科", nameEn: "Graduate School of Sociology",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "社会学専攻", degree: "修士/博士",
            professors: [
              { name: "稲葉昭英", title: "教授", researchArea: "家族社会学/計量社会学" },
              { name: "佐藤成基", title: "教授", researchArea: "政治社会学/ナショナリズム" },
            ]
          },
        ]
      },
      {
        name: "经济学研究科", nameJa: "経済学研究科", nameEn: "Graduate School of Economics",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "经济学専攻", degree: "修士/博士",
            professors: [
              { name: "三和裕美子", title: "教授", researchArea: "コーポレートガバナンス/企業経済" },
              { name: "平山賢二", title: "教授", researchArea: "経済政策/公共経済学" },
            ]
          },
        ]
      },
      {
        name: "スポーツ健康学研究科", nameJa: "スポーツ健康学研究科", nameEn: "Graduate School of Sports and Health Sciences",
        admissionUrl: "https://www.hosei.ac.jp/",
        facultyUrl: "https://kenkyu-db.hosei.ac.jp/",
        hasEnglishProgram: false, intakeMonths: ["4月"],
        programs: [
          { name: "スポーツ健康学専攻", degree: "修士/博士",
            professors: [
              { name: "加藤浩人", title: "教授", researchArea: "スポーツ生理学/トレーニング科学" },
              { name: "菊池秀夫", title: "教授", researchArea: "スポーツ社会学/スポーツ政策" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://www.hosei.ac.jp/", "https://kenkyu-db.hosei.ac.jp/"],
  },

  // ============================================================
  // 医学系大学院 — 10校
  // ============================================================

  // 东京医科大学
  {
    universityId: "tokyo-medical",
    universityName: "东京医科大学",
    type: "private",
    tier: "私立医大",
    portalUrl: "https://www.tokyo-med.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.tokyo-med.ac.jp/",
    tuitionInfo: { examFee: "50,000円", admissionFee: "200,000円", annualTuition: "3,000,000〜4,000,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "伊藤正裕", title: "教授", researchArea: "解剖学/微細形態学" },
            { name: "内田英二", title: "教授", researchArea: "薬理学/臨床薬理" },
            { name: "池田隆徳", title: "教授", researchArea: "循環器内科学" },
            { name: "土肥多恵子", title: "教授", researchArea: "病理学/分子病理" },
            { name: "三宅良彦", title: "教授", researchArea: "内科学/腎臓病学" },
          ]
        },
      ], admissionUrl: "https://www.tokyo-med.ac.jp/", facultyUrl: "https://www.tokyo-med.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "50,000円", admissionFee: "200,000円", annualTuition: "2,800,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "井廻道夫", title: "教授", researchArea: "消化器内科学/肝臓病学" },
            { name: "大橋健一", title: "教授", researchArea: "病理学/腫瘍病理" },
            { name: "小川武希", title: "教授", researchArea: "整形外科学" },
            { name: "松原武志", title: "教授", researchArea: "分子生物学/遺伝子治療" },
          ]
        },
      ], admissionUrl: "https://www.jikei.ac.jp/", facultyUrl: "https://www.jikei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
    dataSources: ["https://www.jikei.ac.jp/en/admissions/graduate/"],
  },

  // 顺天堂大学
  {
    universityId: "juntendo",
    universityName: "顺天堂大学",
    type: "private",
    tier: "私立医大",
    portalUrl: "https://www.juntendo.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.juntendo.ac.jp/",
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "1,200,000〜3,500,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "小川秀興", title: "教授", researchArea: "脳神経外科学" },
            { name: "服部信孝", title: "教授", researchArea: "神経内科学/パーキンソン病" },
            { name: "高井和江", title: "教授", researchArea: "血液内科学" },
            { name: "佐藤信紘", title: "教授", researchArea: "消化器内科学" },
          ]
        },
      ], admissionUrl: "https://www.juntendo.ac.jp/", facultyUrl: "https://www.juntendo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "スポーツ健康科学研究科", nameJa: "スポーツ健康科学研究科", programs: [
        { name: "スポーツ科学専攻", degree: "修士/博士",
          professors: [
            { name: "中村真理子", title: "教授", researchArea: "スポーツ医学/運動生理学" },
            { name: "澤田亨", title: "教授", researchArea: "運動疫学/健康スポーツ" },
          ]
        },
      ], admissionUrl: "https://www.juntendo.ac.jp/", facultyUrl: "https://www.juntendo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "50,000円", admissionFee: "200,000円", annualTuition: "3,800,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "大久保公裕", title: "教授", researchArea: "耳鼻咽喉科学/アレルギー" },
            { name: "清水章", title: "教授", researchArea: "病理学/腎病理" },
            { name: "横山和明", title: "教授", researchArea: "血液内科学/血栓止血" },
            { name: "岩切勝彦", title: "教授", researchArea: "消化器内科学" },
          ]
        },
      ], admissionUrl: "https://www.nms.ac.jp/", facultyUrl: "https://www.nms.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "1,200,000〜3,800,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "星長清隆", title: "教授", researchArea: "眼科学/網膜疾患" },
            { name: "白木良一", title: "教授", researchArea: "形成外科学/創傷治癒" },
            { name: "加藤善一郎", title: "教授", researchArea: "小児科学/先天代謝異常" },
            { name: "外山宏", title: "教授", researchArea: "放射線医学/画像診断" },
          ]
        },
      ], admissionUrl: "https://www.fujita-hu.ac.jp/", facultyUrl: "https://www.fujita-hu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "50,000円", admissionFee: "200,000円", annualTuition: "3,500,000円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "祖父江元", title: "教授", researchArea: "神経内科学/ALS研究" },
            { name: "中村浩之", title: "教授", researchArea: "脳神経外科学" },
            { name: "髙橋英夫", title: "教授", researchArea: "薬理学/神経薬理" },
          ]
        },
      ], admissionUrl: "https://www.aichi-med-u.ac.jp/", facultyUrl: "https://www.aichi-med-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "医学系研究科", nameJa: "医学系研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "山末まり", title: "教授", researchArea: "産婦人科学/周産期" },
            { name: "竹内裕也", title: "教授", researchArea: "外科学/消化器外科" },
            { name: "鈴木哲也", title: "教授", researchArea: "微生物学/感染症" },
          ]
        },
      ], admissionUrl: "https://www.hama-med.ac.jp/", facultyUrl: "https://www.hama-med.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "鳥越俊彦", title: "教授", researchArea: "病理学/腫瘍免疫" },
            { name: "舘田一博", title: "教授", researchArea: "微生物学/感染制御" },
            { name: "古川賢一", title: "教授", researchArea: "循環器内科学" },
          ]
        },
      ], admissionUrl: "https://www.sapmed.ac.jp/", facultyUrl: "https://www.sapmed.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "医学系研究科", nameJa: "医学系研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "扇田久和", title: "教授", researchArea: "生理学/神経生理" },
            { name: "安藤朗", title: "教授", researchArea: "消化器内科学/IBD" },
            { name: "山田和弘", title: "教授", researchArea: "公衆衛生学/疫学" },
          ]
        },
      ], admissionUrl: "https://www.shiga-med.ac.jp/", facultyUrl: "https://www.shiga-med.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "山上裕機", title: "教授", researchArea: "外科学/消化器外科" },
            { name: "村垣泰光", title: "教授", researchArea: "病理学/分子病理" },
            { name: "近藤稔和", title: "教授", researchArea: "法医学/分子法医" },
          ]
        },
      ], admissionUrl: "https://www.wakayama-med.ac.jp/", facultyUrl: "https://www.wakayama-med.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
    dataSources: ["https://www.wakayama-med.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 私立综合大学 ー 9校
  // ============================================================

  // 青山学院大学
  {
    universityId: "aoyama",
    universityName: "青山学院大学",
    type: "private",
    tier: "MARCH",
    portalUrl: "https://www.aoyama.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.aoyama.ac.jp/",
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: [
        { name: "英文学専攻", degree: "修士/博士",
          professors: [
            { name: "佐藤亨", title: "教授", researchArea: "イギリス文学/ロマン主義" },
            { name: "井上真紀", title: "教授", researchArea: "アメリカ文学/フェミニズム批評" },
          ]
        },
        { name: "日本文学専攻", degree: "修士/博士",
          professors: [
            { name: "小林賢章", title: "教授", researchArea: "日本中世文学/軍記物語" },
            { name: "山田慎也", title: "教授", researchArea: "日本近世文学/仏教文学" },
          ]
        },
      ], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "国际政治经济学研究科", nameJa: "国際政治経済学研究科", programs: [
        { name: "国际政治学専攻", degree: "修士/博士",
          professors: [
            { name: "古城佳子", title: "教授", researchArea: "国際政治経済/グローバルガバナンス" },
            { name: "宮脇昇", title: "教授", researchArea: "国際関係論/安全保障" },
          ]
        },
        { name: "国际経済学専攻", degree: "修士/博士",
          professors: [
            { name: "奥村皓一", title: "教授", researchArea: "国際経済学/直接投資論" },
            { name: "土屋六郎", title: "教授", researchArea: "国際金融/為替理論" },
          ]
        },
      ], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "物理学専攻", degree: "修士/博士",
          professors: [
            { name: "大島忠平", title: "教授", researchArea: "表面物理学/ナノ構造" },
            { name: "武田淳", title: "教授", researchArea: "物性物理学/レーザー分光" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "宮崎保光", title: "教授", researchArea: "光エレクトロニクス/光通信" },
            { name: "渡辺和彦", title: "教授", researchArea: "通信工学/信号処理" },
          ]
        },
      ], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: [
        { name: "法律学専攻", degree: "修士/博士",
          professors: [
            { name: "石村耕治", title: "教授", researchArea: "憲法/租税法" },
            { name: "今村和之", title: "教授", researchArea: "民法/消費者法" },
          ]
        },
      ], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: [
        { name: "经济学専攻", degree: "修士/博士",
          professors: [
            { name: "浅子和美", title: "教授", researchArea: "マクロ経済学/景気循環" },
            { name: "中島隆信", title: "教授", researchArea: "公共経済学/社会保障" },
          ]
        },
      ], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "经营学研究科", nameJa: "経営学研究科", programs: [
        { name: "经营学専攻", degree: "修士/博士",
          professors: [
            { name: "伊藤邦雄", title: "教授", researchArea: "経営戦略/企業価値評価" },
            { name: "齋藤毅", title: "教授", researchArea: "マーケティング/消費者行動" },
          ]
        },
      ], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "教育人間科学研究科", nameJa: "教育人間科学研究科", programs: [
        { name: "教育学専攻", degree: "修士/博士",
          professors: [
            { name: "佐藤博志", title: "教授", researchArea: "教育経営/学校改革" },
            { name: "高橋亜希子", title: "教授", researchArea: "教育心理学/発達支援" },
          ]
        },
      ], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "社会情報学研究科", nameJa: "社会情報学研究科", programs: [
        { name: "社会情報学専攻", degree: "修士/博士",
          professors: [
            { name: "吉田健一", title: "教授", researchArea: "社会情報学/情報社会論" },
            { name: "中野円佳", title: "教授", researchArea: "メディア研究/ジャーナリズム" },
          ]
        },
      ], admissionUrl: "https://www.aoyama.ac.jp/", facultyUrl: "https://www.aoyama.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "法学研究科", nameJa: "法学研究科", programs: [
        { name: "法律学専攻", degree: "修士/博士",
          professors: [
            { name: "長谷川貞之", title: "教授", researchArea: "民事訴訟法/執行法" },
            { name: "只木誠", title: "教授", researchArea: "刑法/刑事政策" },
            { name: "石川敏行", title: "教授", researchArea: "行政法/地方自治法" },
          ]
        },
        { name: "政治学専攻", degree: "修士/博士",
          professors: [
            { name: "野中尚人", title: "教授", researchArea: "比較政治/政党システム" },
          ]
        },
      ], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: [
        { name: "经济学専攻", degree: "修士/博士",
          professors: [
            { name: "塩路悦朗", title: "教授", researchArea: "マクロ経済学/金融政策" },
            { name: "柳川範之", title: "教授", researchArea: "契約理論/法と経済学" },
          ]
        },
      ], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "鎌田弘", title: "教授", researchArea: "機械学習/ニューラルネット" },
            { name: "新妻実", title: "教授", researchArea: "ネットワーク工学/IoT" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "榎木孝知", title: "教授", researchArea: "半導体デバイス/集積回路" },
          ]
        },
      ], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "文学研究科", nameJa: "文学研究科", programs: [
        { name: "日本文学専攻", degree: "修士/博士",
          professors: [
            { name: "神野藤昭夫", title: "教授", researchArea: "日本古典文学/物語文学" },
            { name: "齋藤祐太郎", title: "教授", researchArea: "日本近現代文学/文体論" },
          ]
        },
        { name: "英文学専攻", degree: "修士/博士",
          professors: [
            { name: "田尻芳樹", title: "教授", researchArea: "イギリス文学/演劇" },
            { name: "渡邊真理香", title: "教授", researchArea: "アメリカ文学/ポストコロニアリズム" },
          ]
        },
        { name: "史学専攻", degree: "修士/博士",
          professors: [
            { name: "古川隆久", title: "教授", researchArea: "日本近現代史/政治史" },
            { name: "井上泰至", title: "教授", researchArea: "西洋史学/社会史" },
          ]
        },
        { name: "哲学専攻", degree: "修士/博士",
          professors: [
            { name: "伊藤邦武", title: "教授", researchArea: "西洋哲学/科学哲学" },
            { name: "森秀樹", title: "教授", researchArea: "倫理学/応用倫理" },
          ]
        },
      ], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "商学研究科", nameJa: "商学研究科", programs: [
        { name: "商学専攻", degree: "修士/博士",
          professors: [
            { name: "加藤寛", title: "教授", researchArea: "会計学/財務会計" },
            { name: "小野浩", title: "教授", researchArea: "マーケティング/流通論" },
          ]
        },
      ], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "综合政策研究科", nameJa: "総合政策研究科", programs: [
        { name: "総合政策専攻", degree: "修士/博士",
          professors: [
            { name: "飯尾潤", title: "教授", researchArea: "政策分析/公共経営" },
            { name: "金井利之", title: "教授", researchArea: "行政学/地方自治" },
          ]
        },
      ], admissionUrl: "https://www.chuo-u.ac.jp/", facultyUrl: "https://www.chuo-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: [
        { name: "英文学専攻", degree: "修士/博士",
          professors: [
            { name: "井上琢朗", title: "教授", researchArea: "イギリス文学/シェイクスピア" },
            { name: "中村隆之", title: "教授", researchArea: "アメリカ文学/アフリカ系文学" },
          ]
        },
        { name: "哲学専攻", degree: "修士/博士",
          professors: [
            { name: "氣多雅子", title: "教授", researchArea: "宗教学/比較宗教思想" },
            { name: "杉村靖彦", title: "教授", researchArea: "現代フランス哲学/現象学" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: [
        { name: "经济学専攻", degree: "修士/博士",
          professors: [
            { name: "八木匡", title: "教授", researchArea: "産業組織論/競争政策" },
            { name: "松島法明", title: "教授", researchArea: "応用ミクロ経済学" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "大窪和也", title: "教授", researchArea: "機械力学/音響工学" },
            { name: "西村伸也", title: "教授", researchArea: "熱工学/エネルギー変換" },
          ]
        },
        { name: "情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "奥田正浩", title: "教授", researchArea: "画像処理/信号処理" },
            { name: "金田重郎", title: "教授", researchArea: "ソフトウェア工学/要求工学" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", nameEn: "Graduate School of Law", programs: [
        { name: "法律学専攻", degree: "修士/博士",
          professors: [
            { name: "村井敏邦", title: "教授", researchArea: "刑法/刑事政策" },
            { name: "松井茂記", title: "教授", researchArea: "憲法/情報法" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "商学研究科", nameJa: "商学研究科", nameEn: "Graduate School of Commerce", programs: [
        { name: "商学専攻", degree: "修士/博士",
          professors: [
            { name: "上林憲雄", title: "教授", researchArea: "経営組織/人的資源管理" },
            { name: "田口冬樹", title: "教授", researchArea: "マーケティング/流通論" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "社会学研究科", nameJa: "社会学研究科", nameEn: "Graduate School of Sociology", programs: [
        { name: "社会学専攻", degree: "修士/博士",
          professors: [
            { name: "鵜飼孝造", title: "教授", researchArea: "社会学理論/メディア論" },
            { name: "吉田純", title: "教授", researchArea: "社会情報学/ネット社会" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "生命医科学研究科", nameJa: "生命医科学研究科", nameEn: "Graduate School of Life and Medical Sciences", programs: [
        { name: "生命医科学専攻", degree: "修士/博士",
          professors: [
            { name: "髙橋智", title: "教授", researchArea: "分子細胞生物学/遺伝子工学" },
            { name: "河田康志", title: "教授", researchArea: "生体医工学/バイオイメージング" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "文化情報学研究科", nameJa: "文化情報学研究科", nameEn: "Graduate School of Culture and Information Science", programs: [
        { name: "文化情報学専攻", degree: "修士/博士",
          professors: [
            { name: "山田奨治", title: "教授", researchArea: "人文情報学/デジタルヒューマニティーズ" },
            { name: "井上智史", title: "教授", researchArea: "情報社会学/データサイエンス" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "スポーツ健康科学研究科", nameJa: "スポーツ健康科学研究科", nameEn: "Graduate School of Sports and Health Sciences", programs: [
        { name: "スポーツ健康科学専攻", degree: "修士/博士",
          professors: [
            { name: "福岡義之", title: "教授", researchArea: "スポーツ生理学/トレーニング科学" },
            { name: "佐藤陽治", title: "教授", researchArea: "健康科学/運動疫学" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "心理学研究科", nameJa: "心理学研究科", nameEn: "Graduate School of Psychology", programs: [
        { name: "心理学専攻", degree: "修士/博士",
          professors: [
            { name: "加藤司", title: "教授", researchArea: "臨床心理学/心理療法" },
            { name: "大上渉", title: "教授", researchArea: "認知心理学/知覚研究" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "グローバル・スタディーズ研究科", nameJa: "グローバル・スタディーズ研究科", nameEn: "Graduate School of Global Studies", programs: [
        { name: "グローバル社会研究専攻", degree: "修士/博士",
          professors: [
            { name: "小倉充樹", title: "教授", researchArea: "国際社会学/移民研究" },
            { name: "田中雅子", title: "教授", researchArea: "国際開発学/グローバルガバナンス" },
          ]
        },
      ], admissionUrl: "https://www.doshisha.ac.jp/", facultyUrl: "https://www.doshisha.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "国際関係研究科", nameJa: "国際関係研究科", programs: [
        { name: "国际関係学専攻", degree: "修士/博士",
          professors: [
            { name: "君島東彦", title: "教授", researchArea: "国際政治学/平和研究" },
            { name: "中村正志", title: "教授", researchArea: "比較政治/東南アジア政治" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"] },
      { name: "経営学研究科", nameJa: "経営学研究科", programs: [
        { name: "経営学専攻", degree: "修士/博士",
          professors: [
            { name: "井上善海", title: "教授", researchArea: "経営戦略/ベンチャー企業論" },
            { name: "田中克昌", title: "教授", researchArea: "マーケティング/サービス経営" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "情报理工学研究科", nameJa: "情報理工学研究科", programs: [
        { name: "情報科学専攻", degree: "修士/博士",
          professors: [
            { name: "島川博光", title: "教授", researchArea: "ソフトウェア工学/IoTシステム" },
            { name: "西原陽子", title: "教授", researchArea: "情報検索/テキストマイニング" },
          ]
        },
        { name: "知能情報学専攻", degree: "修士/博士",
          professors: [
            { name: "李周浩", title: "教授", researchArea: "ロボティクス/知能システム" },
            { name: "川越恭二", title: "教授", researchArea: "機械学習/データマイニング" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", nameEn: "Graduate School of Law", programs: [
        { name: "法学専攻", degree: "修士/博士",
          professors: [
            { name: "村上正直", title: "教授", researchArea: "民法/財産法" },
            { name: "大島浩", title: "教授", researchArea: "憲法学/比較憲法" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", nameEn: "Graduate School of Economics", programs: [
        { name: "経済学専攻", degree: "修士/博士",
          professors: [
            { name: "井上知義", title: "教授", researchArea: "マクロ経済学/金融政策" },
            { name: "土井教之", title: "教授", researchArea: "国際経済/貿易政策" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "社会学研究科", nameJa: "社会学研究科", nameEn: "Graduate School of Sociology", programs: [
        { name: "社会学専攻", degree: "修士/博士",
          professors: [
            { name: "古市憲寿", title: "教授", researchArea: "社会学理論/社会意識論" },
            { name: "中西典子", title: "教授", researchArea: "家族社会学/ジェンダー研究" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "文学研究科", nameJa: "文学研究科", nameEn: "Graduate School of Letters", programs: [
        { name: "人文学専攻", degree: "修士/博士",
          professors: [
            { name: "榎本泰子", title: "教授", researchArea: "日本近代文学/比較文学" },
            { name: "岸本美緒", title: "教授", researchArea: "東洋史学/明清史" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", nameEn: "Graduate School of Science and Engineering", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "土井淳", title: "教授", researchArea: "機械設計/ロボット工学" },
            { name: "高橋秀明", title: "教授", researchArea: "材料力学/複合材料" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "中川謙", title: "教授", researchArea: "半導体工学/光デバイス" },
            { name: "宮崎裕", title: "教授", researchArea: "通信工学/無線ネットワーク" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "政策科学研究科", nameJa: "政策科学研究科", nameEn: "Graduate School of Policy Science", programs: [
        { name: "政策科学専攻", degree: "修士/博士",
          professors: [
            { name: "西川雅史", title: "教授", researchArea: "公共政策/行政学" },
            { name: "武田公子", title: "教授", researchArea: "環境政策/持続可能性" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "言語教育情報研究科", nameJa: "言語教育情報研究科", nameEn: "Graduate School of Language Education and Information Science", programs: [
        { name: "言語教育情報専攻", degree: "修士/博士",
          professors: [
            { name: "大木充", title: "教授", researchArea: "応用言語学/日本語教育" },
            { name: "泉谷昇", title: "教授", researchArea: "言語習得/第二言語教育" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "スポーツ健康科学研究科", nameJa: "スポーツ健康科学研究科", nameEn: "Graduate School of Sports and Health Sciences", programs: [
        { name: "スポーツ健康科学専攻", degree: "修士/博士",
          professors: [
            { name: "山地啓司", title: "教授", researchArea: "運動生理学/トレーニング科学" },
            { name: "福永哲夫", title: "教授", researchArea: "スポーツ医学/バイオメカニクス" },
          ]
        },
      ], admissionUrl: "https://www.ritsumei.ac.jp/", facultyUrl: "https://www.ritsumei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "法学研究科", nameJa: "法学研究科", programs: [
        { name: "法律学専攻", degree: "修士/博士",
          professors: [
            { name: "髙作正博", title: "教授", researchArea: "憲法学/比較憲法" },
            { name: "宮本聡介", title: "教授", researchArea: "民法/契約法" },
          ]
        },
      ], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "髙橋智", title: "教授", researchArea: "流体力学/熱流体工学" },
            { name: "石丸裕二", title: "教授", researchArea: "機械設計/トライボロジー" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "小谷章夫", title: "教授", researchArea: "光エレクトロニクス/レーザー" },
            { name: "今西哲士", title: "教授", researchArea: "半導体工学/ナノ材料" },
          ]
        },
      ], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "文学研究科", nameJa: "文学研究科", nameEn: "Graduate School of Letters", programs: [
        { name: "国文学専攻", degree: "修士/博士",
          professors: [
            { name: "浅田隆", title: "教授", researchArea: "日本中世文学/軍記物語" },
            { name: "上野英子", title: "教授", researchArea: "日本近現代文学/小説論" },
          ]
        },
        { name: "英文学専攻", degree: "修士/博士",
          professors: [
            { name: "森本浩一", title: "教授", researchArea: "イギリス文学/シェイクスピア" },
            { name: "岡田浩二", title: "教授", researchArea: "アメリカ文学/ポストモダン" },
          ]
        },
        { name: "哲学専攻", degree: "修士/博士",
          professors: [
            { name: "松本啓二", title: "教授", researchArea: "西洋哲学/現象学" },
            { name: "川村覚文", title: "教授", researchArea: "日本思想史/儒学" },
          ]
        },
        { name: "史学専攻", degree: "修士/博士",
          professors: [
            { name: "川越泰博", title: "教授", researchArea: "日本中世史/戦国史" },
            { name: "松本英昭", title: "教授", researchArea: "西洋近世史/近代国家形成" },
          ]
        },
      ], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", nameEn: "Graduate School of Economics", programs: [
        { name: "経済学専攻", degree: "修士/博士",
          professors: [
            { name: "橋本努", title: "教授", researchArea: "経済哲学/社会思想" },
            { name: "藤原秀夫", title: "教授", researchArea: "国際経済学/開発経済" },
          ]
        },
      ], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "商学研究科", nameJa: "商学研究科", nameEn: "Graduate School of Commerce", programs: [
        { name: "商学専攻", degree: "修士/博士",
          professors: [
            { name: "田口冬樹", title: "教授", researchArea: "マーケティング/流通論" },
            { name: "中島望", title: "教授", researchArea: "会計学/財務会計" },
          ]
        },
      ], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "社会学研究科", nameJa: "社会学研究科", nameEn: "Graduate School of Sociology", programs: [
        { name: "社会学専攻", degree: "修士/博士",
          professors: [
            { name: "山根健治", title: "教授", researchArea: "社会学理論/社会意識" },
            { name: "辻敦子", title: "教授", researchArea: "メディア論/情報社会" },
          ]
        },
      ], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "政策創造研究科", nameJa: "政策創造研究科", nameEn: "Graduate School of Policy Creation", programs: [
        { name: "政策創造専攻", degree: "修士/博士",
          professors: [
            { name: "松本正生", title: "教授", researchArea: "公共政策/地域活性化" },
            { name: "安野彰", title: "教授", researchArea: "政策分析/行政マネジメント" },
          ]
        },
      ], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "人間健康研究科", nameJa: "人間健康研究科", nameEn: "Graduate School of Human Health", programs: [
        { name: "人間健康専攻", degree: "修士/博士",
          professors: [
            { name: "神林勲", title: "教授", researchArea: "健康科学/運動生理学" },
            { name: "木村和彦", title: "教授", researchArea: "公衆衛生学/ヘルスプロモーション" },
          ]
        },
      ], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "外国語教育学研究科", nameJa: "外国語教育学研究科", nameEn: "Graduate School of Foreign Language Education", programs: [
        { name: "外国語教育学専攻", degree: "修士/博士",
          professors: [
            { name: "西堀ゆり", title: "教授", researchArea: "英語教育学/第二言語習得" },
            { name: "稲葉みどり", title: "教授", researchArea: "外国語教授法/応用言語学" },
          ]
        },
      ], admissionUrl: "https://www.kansai-u.ac.jp/", facultyUrl: "https://www.kansai-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,300,000円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: [
        { name: "文化歴史学専攻", degree: "修士/博士",
          professors: [
            { name: "森本一夫", title: "教授", researchArea: "イスラーム史学/中東地域研究" },
            { name: "山田仁史", title: "教授", researchArea: "宗教学/宗教人類学" },
          ]
        },
      ], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "商学研究科", nameJa: "商学研究科", programs: [
        { name: "商学専攻", degree: "修士/博士",
          professors: [
            { name: "藤岡章子", title: "教授", researchArea: "マーケティング/消費者行動" },
            { name: "松本茂", title: "教授", researchArea: "国際経営/クロスボーダーM&A" },
          ]
        },
      ], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "数理科学専攻", degree: "修士/博士",
          professors: [
            { name: "坂口文則", title: "教授", researchArea: "応用数学/オペレーションズリサーチ" },
            { name: "大崎浩一", title: "教授", researchArea: "金融工学/確率解析" },
          ]
        },
        { name: "情報科学専攻", degree: "修士/博士",
          professors: [
            { name: "北村泰彦", title: "教授", researchArea: "AI/マルチエージェントシステム" },
            { name: "巳波弘佳", title: "教授", researchArea: "ネットワーク科学/グラフ理論" },
          ]
        },
      ], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: [
        { name: "法律学専攻", degree: "修士/博士",
          professors: [
            { name: "飯田賢一", title: "教授", researchArea: "憲法学/人権論" },
            { name: "田中良", title: "教授", researchArea: "民法/契約法" },
          ]
        },
      ], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: [
        { name: "経済学専攻", degree: "修士/博士",
          professors: [
            { name: "中島宏", title: "教授", researchArea: "国際経済学/貿易論" },
            { name: "田尾雅夫", title: "教授", researchArea: "公共経済学/財政学" },
          ]
        },
      ], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "社会学研究科", nameJa: "社会学研究科", programs: [
        { name: "社会学専攻", degree: "修士/博士",
          professors: [
            { name: "矢澤澄子", title: "教授", researchArea: "都市社会学/地域社会" },
            { name: "松本康", title: "教授", researchArea: "社会階層論/社会意識" },
          ]
        },
      ], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "教育学研究科", nameJa: "教育学研究科", programs: [
        { name: "教育学専攻", degree: "修士/博士",
          professors: [
            { name: "小田豊", title: "教授", researchArea: "教育心理学/発達心理学" },
            { name: "鈴木秀幸", title: "教授", researchArea: "教育方法学/カリキュラム論" },
          ]
        },
      ], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "国際学研究科", nameJa: "国際学研究科", programs: [
        { name: "国際学専攻", degree: "修士/博士",
          professors: [
            { name: "臼井陽一郎", title: "教授", researchArea: "国際政治/EU研究" },
            { name: "渡辺啓貴", title: "教授", researchArea: "国際関係史/外交史" },
          ]
        },
      ], admissionUrl: "https://www.kwansei.ac.jp/", facultyUrl: "https://www.kwansei.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "1,000,000〜1,500,000円" },
    graduateSchools: [
      { name: "农学研究科", nameJa: "農学研究科", programs: [
        { name: "農業生産科学専攻", degree: "修士/博士",
          professors: [
            { name: "澤田浩一", title: "教授", researchArea: "作物生産学/植物生理" },
            { name: "橋本渉", title: "教授", researchArea: "食品科学/食品機能学" },
          ]
        },
        { name: "水産学専攻", degree: "修士/博士",
          professors: [
            { name: "升間主計", title: "教授", researchArea: "水産増養殖/マグロ完全養殖" },
            { name: "家戸敬太郎", title: "准教授", researchArea: "水族栄養学/養魚飼料" },
          ]
        },
      ], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "宗像瑞恵", title: "教授", researchArea: "材料力学/金属疲労" },
            { name: "木之下広幸", title: "教授", researchArea: "制御工学/メカトロニクス" },
          ]
        },
      ], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: [
        { name: "法律学専攻", degree: "修士/博士",
          professors: [
            { name: "上田健介", title: "教授", researchArea: "憲法/平和主義" },
            { name: "高橋宏志", title: "教授", researchArea: "民事訴訟法/紛争解決" },
          ]
        },
      ], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: [
        { name: "経済学専攻", degree: "修士/博士",
          professors: [
            { name: "小林稔", title: "教授", researchArea: "マクロ経済学/景気循環" },
            { name: "岡本英男", title: "教授", researchArea: "国際経済論/開発経済" },
          ]
        },
      ], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経営学研究科", nameJa: "経営学研究科", programs: [
        { name: "経営学専攻", degree: "修士/博士",
          professors: [
            { name: "中野千秋", title: "教授", researchArea: "経営戦略/組織論" },
            { name: "柴田典子", title: "教授", researchArea: "会計学/管理会計" },
          ]
        },
      ], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "文芸学研究科", nameJa: "文芸学研究科", programs: [
        { name: "文芸学専攻", degree: "修士/博士",
          professors: [
            { name: "山田和人", title: "教授", researchArea: "日本近代文学/文芸批評" },
            { name: "森野創", title: "教授", researchArea: "比較文学/翻訳論" },
          ]
        },
      ], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "田辺賢一", title: "教授", researchArea: "循環器内科学" },
            { name: "吉田浩二", title: "教授", researchArea: "腫瘍外科学" },
          ]
        },
      ], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "薬学研究科", nameJa: "薬学研究科", programs: [
        { name: "薬学専攻", degree: "博士",
          professors: [
            { name: "松田彰", title: "教授", researchArea: "創薬化学/医薬品合成" },
            { name: "井上秀夫", title: "教授", researchArea: "薬理学/神経薬理" },
          ]
        },
      ], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "総合理工学研究科", nameJa: "総合理工学研究科", programs: [
        { name: "総合理工学専攻", degree: "修士/博士",
          professors: [
            { name: "吉田啓之", title: "教授", researchArea: "材料工学/ナノ材料" },
            { name: "岩田直之", title: "教授", researchArea: "環境工学/再生可能エネルギー" },
          ]
        },
      ], admissionUrl: "https://www.kindai.ac.jp/", facultyUrl: "https://www.kindai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "25,000〜35,000円", admissionFee: "200,000円", annualTuition: "900,000〜1,400,000円" },
    graduateSchools: [
      { name: "法学研究科", nameJa: "法学研究科", programs: [
        { name: "法律学専攻", degree: "修士/博士",
          professors: [
            { name: "加藤直隆", title: "教授", researchArea: "憲法学/比較憲法" },
            { name: "髙山佳奈子", title: "教授", researchArea: "刑法/経済刑法" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "渡辺亨", title: "教授", researchArea: "機械力学/制振工学" },
            { name: "青木義男", title: "教授", researchArea: "設計工学/安全工学" },
          ]
        },
        { name: "情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "泉隆", title: "教授", researchArea: "信号処理/画像認識" },
            { name: "山口亨", title: "教授", researchArea: "知能ロボティクス/サービス工学" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "芸術学研究科", nameJa: "芸術学研究科", programs: [
        { name: "美術専攻", degree: "修士/博士",
          professors: [
            { name: "木下京子", title: "教授", researchArea: "日本画/現代美術" },
            { name: "松村泰三", title: "教授", researchArea: "彫刻/立体造形" },
          ]
        },
        { name: "映画専攻", degree: "修士/博士",
          professors: [
            { name: "石田均", title: "教授", researchArea: "映画制作/映像演出" },
            { name: "紀平佳丈", title: "教授", researchArea: "映像編集/ポストプロダクション" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: [
        { name: "経済学専攻", degree: "修士/博士",
          professors: [
            { name: "中島宏", title: "教授", researchArea: "国際経済/貿易理論" },
            { name: "森崎初男", title: "教授", researchArea: "マクロ経済/日本経済" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "文学研究科", nameJa: "文学研究科", programs: [
        { name: "国文学専攻", degree: "修士/博士",
          professors: [
            { name: "藤原克己", title: "教授", researchArea: "日本古典文学/和歌" },
            { name: "井上泰至", title: "教授", researchArea: "日本近現代文学/小説論" },
          ]
        },
        { name: "英文学専攻", degree: "修士/博士",
          professors: [
            { name: "田尻芳樹", title: "教授", researchArea: "イギリス文学/演劇" },
            { name: "杉山直子", title: "教授", researchArea: "アメリカ文学/批評理論" },
          ]
        },
        { name: "史学専攻", degree: "修士/博士",
          professors: [
            { name: "古川隆久", title: "教授", researchArea: "日本近現代史" },
            { name: "井上幸治", title: "教授", researchArea: "西洋中世史" },
          ]
        },
        { name: "哲学専攻", degree: "修士/博士",
          professors: [
            { name: "加藤信朗", title: "教授", researchArea: "西洋哲学/形而上学" },
            { name: "山本巍", title: "教授", researchArea: "科学哲学/認識論" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "商学研究科", nameJa: "商学研究科", programs: [
        { name: "商学専攻", degree: "修士/博士",
          professors: [
            { name: "加藤寛", title: "教授", researchArea: "会計学/財務会計" },
            { name: "小野浩", title: "教授", researchArea: "マーケティング/流通論" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "青木一郎", title: "教授", researchArea: "内科学/消化器病学" },
            { name: "小川勝", title: "教授", researchArea: "脳神経外科学" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "歯学研究科", nameJa: "歯学研究科", programs: [
        { name: "歯学専攻", degree: "博士",
          professors: [
            { name: "佐藤毅", title: "教授", researchArea: "口腔外科学/顎顔面外科" },
            { name: "石川誠", title: "教授", researchArea: "歯周病学/インプラント" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "生物資源科学研究科", nameJa: "生物資源科学研究科", programs: [
        { name: "生物資源科学専攻", degree: "修士/博士",
          professors: [
            { name: "吉田誠", title: "教授", researchArea: "動物科学/畜産学" },
            { name: "松岡栄", title: "教授", researchArea: "植物育種学/遺伝資源" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "生産工学研究科", nameJa: "生産工学研究科", programs: [
        { name: "生産工学専攻", degree: "修士/博士",
          professors: [
            { name: "田辺学", title: "教授", researchArea: "生産システム/工程管理" },
            { name: "笠原健", title: "教授", researchArea: "機械加工/生産技術" },
          ]
        },
      ], admissionUrl: "https://www.nihon-u.ac.jp/", facultyUrl: "https://www.nihon-u.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "35,000円", admissionFee: "200,000円", annualTuition: "850,000〜1,200,000円" },
    graduateSchools: [
      { name: "文学研究科", nameJa: "文学研究科", programs: [
        { name: "哲学専攻", degree: "修士/博士",
          professors: [
            { name: "山口一郎", title: "教授", researchArea: "現象学/フッサール研究" },
            { name: "村松聡", title: "教授", researchArea: "倫理学/生命倫理" },
          ]
        },
        { name: "日本文学専攻", degree: "修士/博士",
          professors: [
            { name: "竹内洪介", title: "教授", researchArea: "日本古代文学/記紀研究" },
          ]
        },
      ], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "理工学研究科", nameJa: "理工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "望月修", title: "教授", researchArea: "流体力学/生体流体" },
            { name: "柿沼康弘", title: "教授", researchArea: "機械加工/切削工学" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "前田利之", title: "教授", researchArea: "電力工学/パワーエレクトロニクス" },
          ]
        },
      ], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "国際学研究科", nameJa: "国際学研究科", programs: [
        { name: "国際学専攻", degree: "修士/博士",
          professors: [
            { name: "山根聡", title: "教授", researchArea: "国際関係論/南アジア地域研究" },
            { name: "古川智子", title: "教授", researchArea: "国際協力論/開発援助" },
          ]
        },
      ], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "法学研究科", nameJa: "法学研究科", programs: [
        { name: "法律学専攻", degree: "修士/博士",
          professors: [
            { name: "山本顯治", title: "教授", researchArea: "民法/財産法" },
            { name: "渡辺康行", title: "教授", researchArea: "憲法/基本的人権" },
          ]
        },
      ], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", programs: [
        { name: "経済学専攻", degree: "修士/博士",
          professors: [
            { name: "大西広", title: "教授", researchArea: "マルクス経済学/社会主義経済" },
            { name: "佐藤仁志", title: "教授", researchArea: "国際経済学/アジア経済" },
          ]
        },
      ], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経営学研究科", nameJa: "経営学研究科", programs: [
        { name: "経営学専攻", degree: "修士/博士",
          professors: [
            { name: "竹林正", title: "教授", researchArea: "経営管理/人事戦略" },
            { name: "木村剛", title: "教授", researchArea: "経営情報/IT戦略" },
          ]
        },
      ], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "社会学研究科", nameJa: "社会学研究科", programs: [
        { name: "社会学専攻", degree: "修士/博士",
          professors: [
            { name: "盛山和夫", title: "教授", researchArea: "社会学理論/社会調査" },
            { name: "小島宏", title: "教授", researchArea: "人口社会学/家族社会学" },
          ]
        },
      ], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "生命科学研究科", nameJa: "生命科学研究科", programs: [
        { name: "生命科学専攻", degree: "修士/博士",
          professors: [
            { name: "大橋祐子", title: "教授", researchArea: "分子生物学/遺伝子制御" },
            { name: "田中伸和", title: "教授", researchArea: "生化学/構造生物学" },
          ]
        },
      ], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "福祉社会デザイン研究科", nameJa: "福祉社会デザイン研究科", programs: [
        { name: "福祉社会デザイン専攻", degree: "修士/博士",
          professors: [
            { name: "田中耕一", title: "教授", researchArea: "社会福祉論/地域福祉" },
            { name: "橋本理", title: "教授", researchArea: "ソーシャルワーク/ケアマネジメント" },
          ]
        },
      ], admissionUrl: "https://www.toyo.ac.jp/", facultyUrl: "https://www.toyo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
    dataSources: ["https://www.toyo.ac.jp/en/admissions/graduate/"],
  },

  // ============================================================
  // 公立大学 ー 8校
  // ============================================================

  // 大阪公立大学
  {
    universityId: "omu",
    universityName: "大阪公立大学",
    type: "public",
    tier: "公立総合",
    portalUrl: "https://www.omu.ac.jp/en/admissions/graduate/",
    professorSearchUrl: "https://www.omu.ac.jp/",
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "石原国彦", title: "教授", researchArea: "機械設計/構造強度" },
            { name: "加藤昇平", title: "教授", researchArea: "熱工学/エネルギー変換" },
            { name: "中村英樹", title: "教授", researchArea: "材料力学/破壊力学" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "朝倉義幸", title: "教授", researchArea: "電力システム/再生可能エネルギー" },
            { name: "伊東敏雄", title: "教授", researchArea: "半導体デバイス/光エレクトロニクス" },
            { name: "萬納寺信崇", title: "教授", researchArea: "無線通信/信号処理" },
          ]
        },
        { name: "情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "木村昌弘", title: "教授", researchArea: "AI/機械学習" },
            { name: "福井健一", title: "教授", researchArea: "データベース/情報検索" },
          ]
        },
      ], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "经济学研究科", nameJa: "経済学研究科", programs: [
        { name: "经济学専攻", degree: "修士/博士",
          professors: [
            { name: "小松正昭", title: "教授", researchArea: "マクロ経済学/金融政策" },
            { name: "伊藤秀一", title: "教授", researchArea: "公共経済学/財政学" },
            { name: "大野正智", title: "教授", researchArea: "国際貿易/国際金融" },
          ]
        },
      ], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "理学研究科", nameJa: "理学研究科", programs: [
        { name: "数学専攻", degree: "修士/博士",
          professors: [
            { name: "中村周一", title: "教授", researchArea: "代数幾何学" },
            { name: "橋本隆", title: "教授", researchArea: "偏微分方程式/関数解析" },
          ]
        },
        { name: "物理学専攻", degree: "修士/博士",
          professors: [
            { name: "井上正義", title: "教授", researchArea: "物性物理学/磁性体" },
            { name: "藤原裕", title: "教授", researchArea: "量子光学/レーザー物理" },
          ]
        },
      ], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "加藤誠", title: "教授", researchArea: "循環器内科学" },
            { name: "岸本健", title: "教授", researchArea: "脳神経外科学" },
            { name: "北川哲也", title: "教授", researchArea: "消化器内科学/肝臓学" },
          ]
        },
      ], admissionUrl: "https://www.omu.ac.jp/", facultyUrl: "https://www.omu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "システムデザイン研究科", nameJa: "システムデザイン研究科", programs: [
        { name: "機械システム工学専攻", degree: "修士/博士",
          professors: [
            { name: "前田裕", title: "教授", researchArea: "ロボット工学/メカトロニクス" },
            { name: "青木俊夫", title: "教授", researchArea: "材料力学/複合材料" },
            { name: "佐藤誠", title: "教授", researchArea: "流体工学/風力エネルギー" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "中島康彦", title: "教授", researchArea: "集積回路/VLSI設計" },
            { name: "髙橋雅人", title: "教授", researchArea: "電力変換/パワーエレクトロニクス" },
          ]
        },
        { name: "航空宇宙システム工学専攻", degree: "修士/博士",
          professors: [
            { name: "土屋武司", title: "教授", researchArea: "宇宙システム/衛星工学" },
            { name: "武田信之", title: "教授", researchArea: "航空宇宙推進/ロケット" },
          ]
        },
      ], admissionUrl: "https://www.tmu.ac.jp/", facultyUrl: "https://www.tmu.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "理学研究科", nameJa: "理学研究科", programs: [
        { name: "数学専攻", degree: "修士/博士",
          professors: [
            { name: "加藤秀和", title: "教授", researchArea: "整数論/代数学" },
            { name: "松本浩", title: "教授", researchArea: "トポロジー/幾何学" },
          ]
        },
        { name: "物理学専攻", degree: "修士/博士",
          professors: [
            { name: "藤原秀紀", title: "教授", researchArea: "物性理論/強相関電子系" },
            { name: "早川健", title: "教授", researchArea: "宇宙物理学/銀河形成" },
          ]
        },
      ], admissionUrl: "https://www.tmu.ac.jp/", facultyUrl: "https://www.tmu.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "人文社会学研究科", nameJa: "人文社会学研究科", nameEn: "Graduate School of Humanities and Social Sciences", programs: [
        { name: "人文学専攻", degree: "修士/博士", description: "哲学·史学·文学·言語学",
          professors: [
            { name: "大矢雅則", title: "教授", researchArea: "西洋哲学/現代思想" },
            { name: "中村理恵", title: "教授", researchArea: "日本史学/近世史" },
          ]
        },
        { name: "社会学専攻", degree: "修士/博士", description: "社会学·社会人類学",
          professors: [
            { name: "加藤晴明", title: "教授", researchArea: "都市社会学/地域社会" },
          ]
        },
      ], admissionUrl: "https://www.tmu.ac.jp/", facultyUrl: "https://www.tmu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "国际総合科学研究科", nameJa: "国際総合科学研究科", programs: [
        { name: "理学専攻", degree: "修士/博士",
          professors: [
            { name: "千葉真裕", title: "教授", researchArea: "分子生物学/遺伝子工学" },
            { name: "吉田誠", title: "教授", researchArea: "化学/生命科学" },
          ]
        },
        { name: "经济学専攻", degree: "修士/博士",
          professors: [
            { name: "藤田康範", title: "教授", researchArea: "金融工学/経済政策" },
            { name: "浅野敬志", title: "教授", researchArea: "国際経済/開発経済" },
          ]
        },
      ], admissionUrl: "https://www.yokohama-cu.ac.jp/", facultyUrl: "https://www.yokohama-cu.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
      { name: "データサイエンス研究科", nameJa: "データサイエンス研究科", programs: [
        { name: "データサイエンス専攻", degree: "修士/博士",
          professors: [
            { name: "石田賢", title: "教授", researchArea: "統計的機械学習/データマイニング" },
            { name: "加藤憲一", title: "教授", researchArea: "ビッグデータ/分散処理" },
          ]
        },
      ], admissionUrl: "https://www.yokohama-cu.ac.jp/", facultyUrl: "https://www.yokohama-cu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "医学研究科", nameJa: "医学研究科", programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "山口直人", title: "教授", researchArea: "内科学/循環器病" },
            { name: "大橋隆", title: "教授", researchArea: "外科学/呼吸器外科" },
          ]
        },
      ], admissionUrl: "https://www.yokohama-cu.ac.jp/", facultyUrl: "https://www.yokohama-cu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "经济学研究科", nameJa: "経済学研究科", programs: [
        { name: "经济学専攻", degree: "修士/博士",
          professors: [
            { name: "長谷川誠", title: "教授", researchArea: "マクロ経済学/景気循環" },
            { name: "杉浦正規", title: "教授", researchArea: "地域経済/産業連関論" },
          ]
        },
      ], admissionUrl: "https://www.nagoya-cu.ac.jp/", facultyUrl: "https://www.nagoya-cu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "薬学研究科", nameJa: "薬学研究科", programs: [
        { name: "薬学専攻", degree: "博士",
          professors: [
            { name: "榊原陽一", title: "教授", researchArea: "薬理学/神経薬理" },
            { name: "山本郁", title: "教授", researchArea: "薬剤学/DDS" },
          ]
        },
      ], admissionUrl: "https://www.nagoya-cu.ac.jp/", facultyUrl: "https://www.nagoya-cu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "人間文化研究科", nameJa: "人間文化研究科", nameEn: "Graduate School of Humanities and Social Sciences", programs: [
        { name: "人間文化専攻", degree: "修士/博士", description: "社会学·心理学·教育学",
          professors: [
            { name: "村瀬裕", title: "教授", researchArea: "社会学/家族社会学" },
            { name: "大橋智", title: "教授", researchArea: "心理学/臨床心理学" },
          ]
        },
      ], admissionUrl: "https://www.nagoya-cu.ac.jp/", facultyUrl: "https://www.nagoya-cu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "芸術工学研究科", nameJa: "芸術工学研究科", nameEn: "Graduate School of Design and Architecture", programs: [
        { name: "芸術工学専攻", degree: "修士/博士", description: "デザイン·建築·都市環境",
          professors: [
            { name: "川崎清", title: "教授", researchArea: "建築設計/都市計画" },
            { name: "清水敏男", title: "教授", researchArea: "プロダクトデザイン" },
          ]
        },
      ], admissionUrl: "https://www.nagoya-cu.ac.jp/", facultyUrl: "https://www.nagoya-cu.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "理学研究科", nameJa: "理学研究科", programs: [
        { name: "数学専攻", degree: "修士/博士",
          professors: [
            { name: "西浦廉政", title: "教授", researchArea: "非線形解析/パターン形成" },
            { name: "大西勇", title: "教授", researchArea: "統計学/確率論" },
          ]
        },
        { name: "物理学専攻", degree: "修士/博士",
          professors: [
            { name: "久保紘一", title: "教授", researchArea: "原子核物理/ハドロン物理" },
            { name: "吉田裕", title: "教授", researchArea: "レーザー物理/プラズマ" },
          ]
        },
      ], admissionUrl: "https://www.u-hyogo.ac.jp/", facultyUrl: "https://www.u-hyogo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "情報科学研究科", nameJa: "情報科学研究科", programs: [
        { name: "情報科学専攻", degree: "修士/博士",
          professors: [
            { name: "陳春", title: "教授", researchArea: "AI/知識情報処理" },
            { name: "寺田実", title: "教授", researchArea: "ネットワーク科学/インターネット工学" },
          ]
        },
      ], admissionUrl: "https://www.u-hyogo.ac.jp/", facultyUrl: "https://www.u-hyogo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "工学研究科", nameJa: "工学研究科", nameEn: "Graduate School of Engineering", programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [
            { name: "山田満", title: "教授", researchArea: "機械設計/生産加工" },
            { name: "飯田誠", title: "教授", researchArea: "熱工学/エネルギー" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "吉田和弘", title: "教授", researchArea: "電力工学/スマートグリッド" },
            { name: "井上裕", title: "教授", researchArea: "半導体工学" },
          ]
        },
      ], admissionUrl: "https://www.u-hyogo.ac.jp/", facultyUrl: "https://www.u-hyogo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経済学研究科", nameJa: "経済学研究科", nameEn: "Graduate School of Economics", programs: [
        { name: "経済学専攻", degree: "修士/博士",
          professors: [
            { name: "橋本健", title: "教授", researchArea: "経済政策/公共経済" },
            { name: "木村宏", title: "教授", researchArea: "国際経済/開発経済" },
          ]
        },
      ], admissionUrl: "https://www.u-hyogo.ac.jp/", facultyUrl: "https://www.u-hyogo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "環境人間学研究科", nameJa: "環境人間学研究科", nameEn: "Graduate School of Human Science and Environment", programs: [
        { name: "環境人間学専攻", degree: "修士/博士", description: "環境政策·人間科学·生活科学",
          professors: [
            { name: "中西康裕", title: "教授", researchArea: "環境教育/持続可能性" },
            { name: "竹内健", title: "教授", researchArea: "人間科学/健康科学" },
          ]
        },
      ], admissionUrl: "https://www.u-hyogo.ac.jp/", facultyUrl: "https://www.u-hyogo.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "薬学研究科", nameJa: "薬学研究科", programs: [
        { name: "薬学専攻", degree: "博士",
          professors: [
            { name: "大石正道", title: "教授", researchArea: "衛生化学/分子毒性学" },
            { name: "河野隆", title: "教授", researchArea: "医薬品化学/創薬化学" },
          ]
        },
      ], admissionUrl: "https://www.u-shizuoka-ken.ac.jp/", facultyUrl: "https://www.u-shizuoka-ken.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "国際関係学研究科", nameJa: "国際関係学研究科", programs: [
        { name: "国際関係学専攻", degree: "修士/博士",
          professors: [
            { name: "淺川晃広", title: "教授", researchArea: "国際安全保障/核不拡散" },
            { name: "丸岡泰", title: "教授", researchArea: "国際政治経済/開発協力" },
          ]
        },
      ], admissionUrl: "https://www.u-shizuoka-ken.ac.jp/", facultyUrl: "https://www.u-shizuoka-ken.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "食品栄養科学研究科", nameJa: "食品栄養科学研究科", nameEn: "Graduate School of Food and Nutritional Sciences", programs: [
        { name: "食品栄養科学専攻", degree: "修士/博士", description: "食品科学·栄養生命科学",
          professors: [
            { name: "堀江健一", title: "教授", researchArea: "食品機能学/食品加工" },
            { name: "鈴木公", title: "教授", researchArea: "栄養生化学/分子栄養学" },
          ]
        },
      ], admissionUrl: "https://www.u-shizuoka-ken.ac.jp/", facultyUrl: "https://www.u-shizuoka-ken.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
      { name: "経営情報イノベーション研究科", nameJa: "経営情報イノベーション研究科", nameEn: "Graduate School of Management and Innovation of Information", programs: [
        { name: "経営情報イノベーション専攻", degree: "修士/博士", description: "経営学·情報学·イノベーション",
          professors: [
            { name: "杉山学", title: "教授", researchArea: "経営情報/IT戦略" },
            { name: "山本浩", title: "教授", researchArea: "イノベーション/技術経営" },
          ]
        },
      ], admissionUrl: "https://www.u-shizuoka-ken.ac.jp/", facultyUrl: "https://www.u-shizuoka-ken.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "工学研究科", nameJa: "工学研究科", programs: [
        { name: "機械システム工学専攻", degree: "修士/博士",
          professors: [
            { name: "中村秀明", title: "教授", researchArea: "機械設計/生産加工" },
            { name: "石田博", title: "教授", researchArea: "機械力学/振動制御" },
          ]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [
            { name: "三輪空司", title: "教授", researchArea: "電力システム/再生可能エネルギー" },
            { name: "藤岡裕", title: "教授", researchArea: "電子デバイス/半導体工学" },
          ]
        },
      ], admissionUrl: "https://www.pu-toyama.ac.jp/", facultyUrl: "https://www.pu-toyama.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"] },
    ],
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
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "コンピュータ理工学研究科", nameJa: "コンピュータ理工学研究科", programs: [
        { name: "コンピュータ科学専攻", degree: "修士/博士",
          professors: [
            { name: "Debasish Basak", title: "教授", researchArea: "セキュリティ/暗号" },
            { name: "Razvan Beuran", title: "教授", researchArea: "ネットワークセキュリティ/Cyber Range" },
            { name: "岡田正", title: "教授", researchArea: "並列分散処理/高性能計算" },
          ]
        },
        { name: "情報システム専攻", degree: "修士/博士",
          professors: [
            { name: "中野浩士", title: "教授", researchArea: "データベース/情報検索" },
            { name: "森本賢", title: "教授", researchArea: "画像処理/コンピュータグラフィックス" },
          ]
        },
      ], admissionUrl: "https://www.u-aizu.ac.jp/", facultyUrl: "https://www.u-aizu.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"] },
    ],
    dataSources: ["https://www.u-aizu.ac.jp/en/admissions/graduate/"],
  },
];
