-- Reviewed batch 9 for 2027 (language schools). Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Pure UPDATE: no INSERT, DELETE, schema changes, or public import endpoint.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN ('sendagaya', 'kudanjapan', 'unitus', 'meros')) <> 4 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "LanguageSchool" SET
  name = '千驮谷日本语学校',
  "nameJa" = '千駄ヶ谷日本語学校',
  location = '东京都新宿区下落合1-1-6（Sendagaya Japanese College；距高田马场站步行范围）',
  tuition = '官网现行表（2025年4月起入学者）仅适用于4月2年、10月1年6月的Academic Japanese Course：首年896,000日元，2年全程1,666,000日元、1年6月全程1,281,000日元。2027费用尚未见校方单独公布，不将旧的“约88万/年”作为2027报价。',
  "paymentTerm" = '首年后按6个月分两次缴纳（每次385,000日元，含授课费与教材费）；适用金额以校方最新账单为准。',
  "attendanceRequirement" = '本批未核实官网公布的具体出勤率阈值。',
  duration = '4月入学2年，或10月入学1年6月',
  "visaRequirement" = '该校为文部科学省认定准备教育课程；10或11年学校教育背景者可通过准备教育课程取得大学报考资格，个别申请条件须向校方确认。',
  "minimumStudyForVocational" = '本批未核实。',
  intake = '4月或10月（Academic Japanese Course）',
  highlights = '官网当前课程为升入日本大学或专门学校准备的Academic Japanese Course；费用页明确标注现行价格自2025年4月入学者起，2027金额仍应以学校后续公告为准。',
  website = 'https://group.jp-sji.org/en/sjs-2/',
  "featuresJson" = '["文部科学省认定准备教育课程","2024年入管适正校Class I","EJU/JLPT与校内考准备","可选基础科目课程"]'::jsonb,
  "programsJson" = '[{"name":"Academic Japanese Course","description":"面向大学或专门学校升学，提供综合日语、EJU/JLPT与校内考准备；可按目标选修基础科目。"}]'::jsonb,
  "tuitionBreakdownJson" = '{"enrollmentFee":"入学报名费20,000日元 + 注册费60,000日元","annualTuition":"首年授课费740,000日元","materialsFee":"首年教材费30,000日元","totalFirstYear":"896,000日元（2025年4月起入学者的现行表）","otherFees":"设施费40,000日元、保险6,000日元；第二、三次各6个月缴授课费370,000日元及教材费15,000日元"}'::jsonb,
  "suitableForJson" = '["计划4月或10月入学","需要大学/专门学校升学准备","10或11年教育背景且需要准备教育路径"]'::jsonb
WHERE slug = 'sendagaya';
UPDATE "LanguageSchool" SET
  name = '九段日本文化研究所',
  "nameJa" = '九段日本文化研究所日本語学院',
  location = '东京都千代田区神田三崎町2-7-10 帝都三崎町大楼1F',
  tuition = '官网已发布2027年4月留学签长课与缴费流程，但费用页未公开该长课的具体金额；仅列出注册费、授课费、设施维持费及课外活动费等项目。旧“约85万日元/年”无当前官方依据，已不再作为报价。',
  "paymentTerm" = '按2027签证流程，在留资格认定证明书发出后由学校开具费用账单；各入学期的付款时点约为入学前一个月。',
  "attendanceRequirement" = '校方要求工作日每天出席并维持留学签证所需出勤率，但本批未核实具体百分比。',
  duration = '1—2年',
  "visaRequirement" = '2027年4月生长课要求年满18岁、高中或以上教育毕业、日语达到JLPT N5相当；N5以下初学者目前不受理留学签申请。',
  "minimumStudyForVocational" = '本批未核实。',
  intake = '1月/4月/7月/10月',
  highlights = '2027年4月生可按目标选择上午日语会话或下午综合日语；官网未披露长课2027总费用，本站保留为待校方确认而非沿用旧区间。',
  website = 'https://www.kudan-japanese-school.com/jp/visa/precollege.php',
  "featuresJson" = '["2027年4月留学签长课已开放咨询","日语会话与综合日语两轨","每周20课时","入管适正校Class I"]'::jsonb,
  "programsJson" = '[{"name":"日语会话课程","description":"上午授课，面向日常生活、升学、就职和工作所需的实用会话与听解；官网列A1—B2五个级别。"},{"name":"综合日语课程","description":"下午授课，均衡学习读写听说，并安排每周两次汉字课程。"}]'::jsonb,
  "tuitionBreakdownJson" = '{"enrollmentFee":"2027长期课程具体金额待校方账单/报价","annualTuition":"2027长期课程具体金额待校方公布","materialsFee":"本批未核实","totalFirstYear":"2027长期课程费用未在官网公开列额","otherFees":"校方2027流程列注册费、设施维持费和课外活动费，金额须向招生处确认"}'::jsonb,
  "suitableForJson" = '["可满足N5相当日语基础","计划1—2年留学签课程","希望在会话或综合日语间选择"]'::jsonb
WHERE slug = 'kudanjapan';
UPDATE "LanguageSchool" SET
  name = '优尼塔斯日本语学校',
  "nameJa" = 'ユニタス日本語学校',
  location = '东京校：东京都新宿区大久保2-2-9 22山京大楼3F；甲府校：山梨县甲府市宝1-20-22',
  tuition = '官网当前留学课程含税价：甲府校全年800,000日元、东京校全年860,000日元；均含选考、入学、学费、杂费和保险。官网当前页未标注为2027费用，2027金额须以校方后续要项为准。',
  "paymentTerm" = '可按半年支付，但校方注明部分国籍可能不适用，须先确认。',
  "attendanceRequirement" = '本批未核实官网公布的具体出勤率阈值。',
  duration = '1年3月（或1年）至2年',
  "visaRequirement" = '留学课程申请资格为完成12年以上学校教育；所需材料以招生要项为准。',
  "minimumStudyForVocational" = '本批未核实。',
  intake = '4月（2年或1年）、7月（1年9月）、10月（1年6月）、1月（1年3月）',
  highlights = '官网明确区分东京和甲府校的当前全年费用及半年付款额；不再保留“帝京大学集团”“全日本最低学费”等无本批官方来源的宣传性说法。',
  website = 'https://www.unitas-ej.com/course/',
  "featuresJson" = '["东京与甲府两校","升学课程与一般课程","可咨询半年付款","短期课程另设"]'::jsonb,
  "programsJson" = '[{"name":"升学课程","description":"以大学、大学院或专门学校升学准备为主要目的的留学签综合日语课程。"},{"name":"一般课程","description":"以就职或日语学习为主要目的的留学签综合日语课程。"}]'::jsonb,
  "tuitionBreakdownJson" = '{"enrollmentFee":"甲府/东京均为入学金60,000日元（另有选考料20,000日元）","annualTuition":"甲府610,000日元；东京670,000日元","materialsFee":"杂费100,000日元，含教材、课外活动和设施费","totalFirstYear":"甲府800,000日元；东京860,000日元（官网当前价）","otherFees":"保险10,000日元；甲府首半年465,000/后半年375,000，东京495,000/405,000日元"}'::jsonb,
  "suitableForJson" = '["比较东京与甲府校区","需要升学或一般日语课程","可按国籍确认半年付款资格"]'::jsonb
WHERE slug = 'unitus';
UPDATE "LanguageSchool" SET
  name = '美罗斯言语学院',
  "nameJa" = 'メロス言語学院',
  location = '东京都丰岛区东池袋2-45-7（1号馆）；另有2-50-12、2-45-4校舍',
  tuition = '官网2026学费图表：日本语综合课程全程总额为2年1,706,000日元、1年9月1,501,500日元、1年6月1,297,000日元、1年3月1,092,500日元、1年888,000日元；2027费用尚未由该页单独公布。旧“约89万日元/年”已停止作为2027报价。',
  "paymentTerm" = '留学签申请通过后，入学约1个半月前确认缴纳授课等费用；2027分期规则本批未核实。',
  "attendanceRequirement" = '本批未核实官网公布的具体出勤率阈值。',
  duration = '日本语综合课程：2年、1年9月、1年6月、1年3月或1年',
  "visaRequirement" = '日本语综合课程面向完成12年教育或具同等学力者；准备教育课程另面向高中毕业但本国教育年限不足12年者。',
  "minimumStudyForVocational" = '本批未核实。',
  intake = '日本语综合课程为1月/4月/7月/10月；准备教育课程为4月/10月',
  highlights = '官网列出日本语综合与准备教育课程，并公开2026全程费用图表；2027费用未单列，本站不将2026价格当作2027承诺。',
  website = 'https://meros.ac.jp/course_info_menu/tuitionfee/',
  "featuresJson" = '["文部科学省认定日本语教育机构","准备教育课程","EJU/JLPT、大学院、美大等目的别课程","官网已迁移至meros.ac.jp"]'::jsonb,
  "programsJson" = '[{"name":"日本语综合课程","description":"分1/4/7/10月入学，面向进学所需的读写听说能力培养。"},{"name":"准备教育课程","description":"为本国教育年限不足12年的高中毕业者取得大学入学资格及升学基础学力，4月或10月入学。"},{"name":"目的别课程","description":"官网列日本留学考试、大学院、JLPT、商务会话和名门美大进学等课程；开设与费用须向校方确认。"}]'::jsonb,
  "tuitionBreakdownJson" = '{"enrollmentFee":"入学金50,000日元（官网2026表）","annualTuition":"2年课程总授课费1,456,000日元；随修业年限变化","materialsFee":"教材和外部考试费不含在官网2026学费表中","totalFirstYear":"官网未单列首年；2年课程全程总额1,706,000日元（2026表）","otherFees":"选考料20,000日元；2年课程其他费用180,000日元。4月入学1年国际学生另列保险10,000日元"}'::jsonb,
  "suitableForJson" = '["计划东京池袋地区学习","需要综合日语或准备教育课程","会在申请前确认2027最新费用"]'::jsonb
WHERE slug = 'meros';
COMMIT;
