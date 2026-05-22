// ============================================================
// 日本高度人才加分校 121 校完整主名单
// 来源：日本出入国在留管理庁「高度専門職」ポイント計算表（指定校）
// 包含：中国語常用名、日本語名、大学ID、区分
// 本文件为主名单，所有其他数据文件应引用此处的ID
// ============================================================

export interface HeightTalentSchool {
  id: string;
  name: string;       // 中文常用名
  nameJa: string;     // 日文官方名
  type: "national" | "public" | "private";
  region: string;     // 地域（北海道・東北・関東・中部・近畿・中国・四国・九州・沖縄）
  website?: string;   // 官网
}

export const heightTalentSchools: HeightTalentSchool[] = [
  // ============================================================
  // A-C
  // ============================================================
  { id: "aichi-medical",  name: "爱知医科大学",       nameJa: "愛知医科大学",         type: "private", region: "中部" },
  { id: "akita-u",        name: "秋田大学",           nameJa: "秋田大学",             type: "national", region: "東北" },
  { id: "aoyama",         name: "青山学院大学",       nameJa: "青山学院大学",         type: "private", region: "関東" },
  { id: "chiba-tech",     name: "千叶工业大学",       nameJa: "千葉工業大学",         type: "private", region: "関東" },
  { id: "chiba-u",        name: "千叶大学",           nameJa: "千葉大学",             type: "national", region: "関東" },
  { id: "chubu-u",        name: "中部大学",           nameJa: "中部大学",             type: "private", region: "中部" },
  { id: "chuo",           name: "中央大学",           nameJa: "中央大学",             type: "private", region: "関東" },

  // ============================================================
  // D-H
  // ============================================================
  { id: "dokkyo-medical", name: "独协医科大学",       nameJa: "獨協医科大学",         type: "private", region: "関東" },
  { id: "doshisha",       name: "同志社大学",         nameJa: "同志社大学",           type: "private", region: "近畿" },
  { id: "ehime-u",        name: "爱媛大学",           nameJa: "愛媛大学",             type: "national", region: "四国" },
  { id: "fujita",         name: "藤田医科大学",       nameJa: "藤田医科大学",         type: "private", region: "中部" },
  { id: "gifu-u",         name: "岐阜大学",           nameJa: "岐阜大学",             type: "national", region: "中部" },
  { id: "gunma-u",        name: "群马大学",           nameJa: "群馬大学",             type: "national", region: "関東" },
  { id: "hama-med",       name: "滨松医科大学",       nameJa: "浜松医科大学",         type: "national", region: "中部" },
  { id: "hirosaki-u",     name: "弘前大学",           nameJa: "弘前大学",             type: "national", region: "東北" },
  { id: "hiroshima-u",    name: "广岛大学",           nameJa: "広島大学",             type: "national", region: "中国" },
  { id: "hitotsubashi",   name: "一桥大学",           nameJa: "一橋大学",             type: "national", region: "関東" },
  { id: "hokkaido-u",     name: "北海道大学",         nameJa: "北海道大学",           type: "national", region: "北海道" },
  { id: "hosei",          name: "法政大学",           nameJa: "法政大学",             type: "private", region: "関東" },
  { id: "hyogo-medical",  name: "兵库医科大学",       nameJa: "兵庫医科大学",         type: "private", region: "近畿" },

  // ============================================================
  // I-K
  // ============================================================
  { id: "ibaraki-u",      name: "茨城大学",           nameJa: "茨城大学",             type: "national", region: "関東" },
  { id: "icu",            name: "国际基督教大学",     nameJa: "国際基督教大学",       type: "private", region: "関東" },
  { id: "jikei",          name: "东京慈惠会医科大学", nameJa: "東京慈恵会医科大学",   type: "private", region: "関東" },
  { id: "juntendo",       name: "顺天堂大学",         nameJa: "順天堂大学",           type: "private", region: "関東" },
  { id: "kagawa-u",       name: "香川大学",           nameJa: "香川大学",             type: "national", region: "四国" },
  { id: "kagoshima-u",    name: "鹿儿岛大学",         nameJa: "鹿児島大学",           type: "national", region: "九州" },
  { id: "kanagawa-u",     name: "神奈川大学",         nameJa: "神奈川大学",           type: "private", region: "関東" },
  { id: "kanazawa-u",     name: "金泽大学",           nameJa: "金沢大学",             type: "national", region: "中部" },
  { id: "kansai-medical", name: "关西医科大学",       nameJa: "関西医科大学",         type: "private", region: "近畿" },
  { id: "kansai",         name: "关西大学",           nameJa: "関西大学",             type: "private", region: "近畿" },
  { id: "keio",           name: "庆应义塾大学",       nameJa: "慶應義塾大学",         type: "private", region: "関東" },
  { id: "kinki",          name: "近畿大学",           nameJa: "近畿大学",             type: "private", region: "近畿" },
  { id: "kitasato",       name: "北里大学",           nameJa: "北里大学",             type: "private", region: "関東" },
  { id: "kobe-u",         name: "神户大学",           nameJa: "神戸大学",             type: "national", region: "近畿" },
  { id: "kochi-u",        name: "高知大学",           nameJa: "高知大学",             type: "national", region: "四国" },
  { id: "kochi-tech",     name: "高知工科大学",       nameJa: "高知工科大学",         type: "private", region: "四国" },
  { id: "kogakuin",       name: "工学院大学",         nameJa: "工学院大学",           type: "private", region: "関東" },
  { id: "kumamoto-u",     name: "熊本大学",           nameJa: "熊本大学",             type: "national", region: "九州" },
  { id: "kurume-u",       name: "久留米大学",         nameJa: "久留米大学",           type: "private", region: "九州" },
  { id: "kwansei",        name: "关西学院大学",       nameJa: "関西学院大学",         type: "private", region: "近畿" },
  { id: "kit",            name: "京都工艺纤维大学",   nameJa: "京都工芸繊維大学",     type: "national", region: "近畿" },
  { id: "kyoto-pu-medical", name: "京都府立医科大学", nameJa: "京都府立医科大学",     type: "public",  region: "近畿" },
  { id: "kyoto-u",        name: "京都大学",           nameJa: "京都大学",             type: "national", region: "近畿" },
  { id: "kyutech",        name: "九州工业大学",       nameJa: "九州工業大学",         type: "national", region: "九州" },
  { id: "kyushu-u",       name: "九州大学",           nameJa: "九州大学",             type: "national", region: "九州" },

  // ============================================================
  // M-N
  // ============================================================
  { id: "meiji",          name: "明治大学",           nameJa: "明治大学",             type: "private", region: "関東" },
  { id: "meijo",          name: "名城大学",           nameJa: "名城大学",             type: "private", region: "中部" },
  { id: "mie-u",          name: "三重大学",           nameJa: "三重大学",             type: "national", region: "近畿" },
  { id: "muroran-tech",   name: "室兰工业大学",       nameJa: "室蘭工業大学",         type: "national", region: "北海道" },
  { id: "nagaoka",        name: "长冈技术科学大学",   nameJa: "長岡技術科学大学",     type: "national", region: "中部" },
  { id: "nagasaki-u",     name: "长崎大学",           nameJa: "長崎大学",             type: "national", region: "九州" },
  { id: "nagoya-city",    name: "名古屋市立大学",     nameJa: "名古屋市立大学",       type: "public",  region: "中部" },
  { id: "nitech",         name: "名古屋工业大学",     nameJa: "名古屋工業大学",       type: "national", region: "中部" },
  { id: "nagoya-u",       name: "名古屋大学",         nameJa: "名古屋大学",           type: "national", region: "中部" },
  { id: "nihon",          name: "日本大学",           nameJa: "日本大学",             type: "private", region: "関東" },
  { id: "niigata-u",      name: "新潟大学",           nameJa: "新潟大学",             type: "national", region: "中部" },
  { id: "nms",            name: "日本医科大学",       nameJa: "日本医科大学",         type: "private", region: "関東" },

  // ============================================================
  // O-R
  // ============================================================
  { id: "ocha",           name: "御茶水女子大学",     nameJa: "お茶の水女子大学",     type: "national", region: "関東" },
  { id: "oita-u",         name: "大分大学",           nameJa: "大分大学",             type: "national", region: "九州" },
  { id: "okayama-u",      name: "冈山大学",           nameJa: "岡山大学",             type: "national", region: "中国" },
  { id: "okayama-science", name: "冈山理科大学",      nameJa: "岡山理科大学",         type: "private", region: "中国" },
  { id: "oist",           name: "冲绳科学技术大学院大学", nameJa: "沖縄科学技術大学院大学", type: "private", region: "沖縄" },
  { id: "osaka-institute", name: "大阪工业大学",      nameJa: "大阪工業大学",         type: "private", region: "近畿" },
  { id: "osaka-medical",  name: "大阪医科药科大学",   nameJa: "大阪医科薬科大学",     type: "private", region: "近畿" },
  { id: "omu",            name: "大阪公立大学",       nameJa: "大阪公立大学",         type: "public",  region: "近畿" },
  { id: "osaka-u",        name: "大阪大学",           nameJa: "大阪大学",             type: "national", region: "近畿" },
  { id: "rikkyo",         name: "立教大学",           nameJa: "立教大学",             type: "private", region: "関東" },
  { id: "apu",            name: "立命馆亚洲太平洋大学", nameJa: "立命館アジア太平洋大学", type: "private", region: "九州" },
  { id: "ritsumei",       name: "立命馆大学",         nameJa: "立命館大学",           type: "private", region: "近畿" },
  { id: "ryukoku",        name: "龙谷大学",           nameJa: "龍谷大学",             type: "private", region: "近畿" },

  // ============================================================
  // S
  // ============================================================
  { id: "saga-u",         name: "佐贺大学",           nameJa: "佐賀大学",             type: "national", region: "九州" },
  { id: "saitama-medical", name: "埼玉医科大学",      nameJa: "埼玉医科大学",         type: "private", region: "関東" },
  { id: "saitama-u",      name: "埼玉大学",           nameJa: "埼玉大学",             type: "national", region: "関東" },
  { id: "sapporo-medical", name: "札幌医科大学",      nameJa: "札幌医科大学",         type: "public",  region: "北海道" },
  { id: "titech",         name: "东京科学大学",       nameJa: "東京科学大学",         type: "national", region: "関東" },
  { id: "shibaura",       name: "芝浦工业大学",       nameJa: "芝浦工業大学",         type: "private", region: "関東" },
  { id: "shiga-medical",  name: "滋贺医科大学",       nameJa: "滋賀医科大学",         type: "national", region: "近畿" },
  { id: "shimane-u",      name: "岛根大学",           nameJa: "島根大学",             type: "national", region: "中国" },
  { id: "shinshu-u",      name: "信州大学",           nameJa: "信州大学",             type: "national", region: "中部" },
  { id: "shizuoka-u",     name: "静冈大学",           nameJa: "静岡大学",             type: "national", region: "中部" },
  { id: "soka",           name: "创价大学",           nameJa: "創価大学",             type: "private", region: "関東" },
  { id: "sophia",         name: "上智大学",           nameJa: "上智大学",             type: "private", region: "関東" },

  // ============================================================
  // T
  // ============================================================
  { id: "teikyo",         name: "帝京大学",           nameJa: "帝京大学",             type: "private", region: "関東" },
  { id: "sokendai",       name: "综合研究大学院大学", nameJa: "総合研究大学院大学",   type: "national", region: "関東" },
  { id: "uec",            name: "电气通信大学",       nameJa: "電気通信大学",         type: "national", region: "関東" },
  { id: "utokyo",         name: "东京大学",           nameJa: "東京大学",             type: "national", region: "関東" },
  { id: "toho",           name: "东邦大学",           nameJa: "東邦大学",             type: "private", region: "関東" },
  { id: "tohoku",         name: "东北大学",           nameJa: "東北大学",             type: "national", region: "東北" },
  { id: "tokai",          name: "东海大学",           nameJa: "東海大学",             type: "private", region: "関東" },
  { id: "tokushima-u",    name: "德岛大学",           nameJa: "徳島大学",             type: "national", region: "四国" },
  { id: "tokyo-city",     name: "东京都市大学",       nameJa: "東京都市大学",         type: "private", region: "関東" },
  { id: "denki",          name: "东京电机大学",       nameJa: "東京電機大学",         type: "private", region: "関東" },
  { id: "tmdu",           name: "东京医科齿科大学",   nameJa: "東京医科歯科大学",     type: "national", region: "関東" },
  { id: "tokyo-medical",  name: "东京医科大学",       nameJa: "東京医科大学",         type: "private", region: "関東" },
  { id: "tmu",            name: "东京都立大学",       nameJa: "東京都立大学",         type: "public",  region: "関東" },
  { id: "nodai",          name: "东京农业大学",       nameJa: "東京農業大学",         type: "private", region: "関東" },
  { id: "tuat",           name: "东京农工大学",       nameJa: "東京農工大学",         type: "national", region: "関東" },
  { id: "tum",            name: "东京海洋大学",       nameJa: "東京海洋大学",         type: "national", region: "関東" },
  { id: "tus",            name: "东京理科大学",       nameJa: "東京理科大学",         type: "private", region: "関東" },
  { id: "tokyo-tech",     name: "东京工科大学",       nameJa: "東京工科大学",         type: "private", region: "関東" },
  { id: "tottori-u",      name: "鸟取大学",           nameJa: "鳥取大学",             type: "national", region: "中国" },
  { id: "toyama-pu",      name: "富山县立大学",       nameJa: "富山県立大学",         type: "public",  region: "中部" },
  { id: "toyo",           name: "东洋大学",           nameJa: "東洋大学",             type: "private", region: "関東" },
  { id: "toyohashi",      name: "丰桥技术科学大学",   nameJa: "豊橋技術科学大学",     type: "national", region: "中部" },

  // ============================================================
  // U-W-Y
  // ============================================================
  { id: "aizu",           name: "会津大学",           nameJa: "会津大学",             type: "public",  region: "東北" },
  { id: "fukui-u",        name: "福井大学",           nameJa: "福井大学",             type: "national", region: "中部" },
  { id: "hyogo",          name: "兵库县立大学",       nameJa: "兵庫県立大学",         type: "public",  region: "近畿" },
  { id: "miyazaki-u",     name: "宫崎大学",           nameJa: "宮崎大学",             type: "national", region: "九州" },
  { id: "uoeh",           name: "产业医科大学",       nameJa: "産業医科大学",         type: "private", region: "九州" },
  { id: "shizuoka-pu",    name: "静冈县立大学",       nameJa: "静岡県立大学",         type: "public",  region: "中部" },
  { id: "ryukyu-u",       name: "琉球大学",           nameJa: "琉球大学",             type: "national", region: "沖縄" },
  { id: "toyama-u",       name: "富山大学",           nameJa: "富山大学",             type: "national", region: "中部" },
  { id: "tsukuba",        name: "筑波大学",           nameJa: "筑波大学",             type: "national", region: "関東" },
  { id: "yamanashi-u",    name: "山梨大学",           nameJa: "山梨大学",             type: "national", region: "中部" },
  { id: "utsunomiya-u",   name: "宇都宫大学",         nameJa: "宇都宮大学",           type: "national", region: "関東" },
  { id: "wakayama-medical", name: "和歌山县立医科大学", nameJa: "和歌山県立医科大学", type: "public",  region: "近畿" },
  { id: "waseda",         name: "早稻田大学",         nameJa: "早稲田大学",           type: "private", region: "関東" },
  { id: "yamagata-u",     name: "山形大学",           nameJa: "山形大学",             type: "national", region: "東北" },
  { id: "yamaguchi-u",    name: "山口大学",           nameJa: "山口大学",             type: "national", region: "中国" },
  { id: "yokohama-city",  name: "横滨市立大学",       nameJa: "横浜市立大学",         type: "public",  region: "関東" },
  { id: "ynu",            name: "横滨国立大学",       nameJa: "横浜国立大学",         type: "national", region: "関東" },
];

// 按地域分组
export const schoolsByRegion = {
  "北海道":     heightTalentSchools.filter(s => s.region === "北海道"),
  "東北":       heightTalentSchools.filter(s => s.region === "東北"),
  "関東":       heightTalentSchools.filter(s => s.region === "関東"),
  "中部":       heightTalentSchools.filter(s => s.region === "中部"),
  "近畿":       heightTalentSchools.filter(s => s.region === "近畿"),
  "中国":       heightTalentSchools.filter(s => s.region === "中国"),
  "四国":       heightTalentSchools.filter(s => s.region === "四国"),
  "九州":       heightTalentSchools.filter(s => s.region === "九州"),
  "沖縄":       heightTalentSchools.filter(s => s.region === "沖縄"),
} as const;

// 按区分组
export const schoolsByType = {
  national: heightTalentSchools.filter(s => s.type === "national"),
  public:   heightTalentSchools.filter(s => s.type === "public"),
  private:  heightTalentSchools.filter(s => s.type === "private"),
} as const;

// ============================================================
// 已有数据状态追踪
// ============================================================

// 已在 detailed data files 中有完整数据的 universityId 列表
export const existingDetailIds: string[] = [
  // 12 核心 SGU Top Type A（admissions.ts + faculties.ts + graduate-programs.ts）
  "utokyo", "kyoto-u", "titech", "osaka-u", "tohoku", "nagoya-u",
  "hokkaido-u", "kyushu-u", "tsukuba", "hiroshima-u", "waseda", "keio",
  // 38 扩展（admissions-supplement + faculties-supplement + grad-programs-supplement）
  "kobe-u", "tus", "tuat", "tum", "denki", "shibaura", "nitech", "kit",
  "kyutech", "nagaoka", "toyohashi", "tokyo-medical", "jikei", "juntendo",
  "nms", "fujita", "aichi-medical", "hama-med", "sapporo-medical",
  "shiga-medical", "wakayama-medical", "aoyama", "chuo", "doshisha",
  "ritsumei", "kansai", "kwansei", "kinki", "nihon", "toyo",
  "omu", "tmu", "yokohama-city", "nagoya-city", "hyogo", "shizuoka-pu",
  "toyama-pu", "aizu",
  // 仅在 grad-programs-supplement 中有数据
  "sophia", "meiji", "rikkyo", "hosei",
];

// 完全缺失（所有 detailed data files 都没有数据）
export const missingDetailIds: string[] = heightTalentSchools
  .filter(s => !existingDetailIds.includes(s.id))
  .map(s => s.id);

// 缺失学校详情
export const missingSchools: HeightTalentSchool[] = heightTalentSchools
  .filter(s => !existingDetailIds.includes(s.id));

// 统计
export const countStats = {
  total: heightTalentSchools.length,
  withDetailData: existingDetailIds.length,
  missingDetailData: missingDetailIds.length,
};
