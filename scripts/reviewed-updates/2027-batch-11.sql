-- Reviewed batch 11 for 2027 (language schools). Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Offline artifact only: no database connection, seed endpoint, or key access was used.
-- Controlled sync: explicit inserts for three reviewed local records verified absent remotely; no DELETE, bulk import, or schema changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN ('osaka-ymca', 'kyoto-minsai', 'kobe-commu')) <> 0 THEN
    RAISE EXCEPTION 'One or more reviewed records already exist; no inserts applied';
  END IF;
END $$;
INSERT INTO "LanguageSchool" (
  slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement",
  duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website,
  "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson"
) VALUES (
  'osaka-ymca', '大阪YMCA日本语学校', '大阪YMCA日本語学校', '大阪市天王寺区南河堀町9-52',
  '官网当前（2025年4月起）进学日语科总额：1年915,000日元、1年6月1,312,600日元、2年1,710,000日元；职业发展实用日语科分别875,000、1,252,600、1,630,000日元。公开资料未标注为2027费用，2027金额须以校方最新要项为准。', '可经银行转账或Flywire缴费；1年以上长课可申请半年分纳，须在入学手续前与学校咨询。', '本批未核实官方对在留资格维持的具体出勤率门槛。',
  '进学日语科与职业发展实用日语科均有1年、1年6月、2年课程', '入学所需日语学习经历与证明依申请学科、起始级别和校方当期要项确认；不以统一N5替代。', '本批未核实。',
  '进学日语科：4月（1/2年）或10月（1年6月）；职业发展实用日语科：1月/4月/7月/10月。', '官网按两学科分别公开课程年限和费用；进学学科与职业发展学科的开课月份、学时及通学定期适用情况不同。', 'https://osakaymca.ac.jp/nihongo/tuition/',
  '["进学日语科","职业发展实用日语科","可申请半年分纳","日本人志愿者交流"]'::jsonb, '[{"name":"进学日语科","description":"面向大学、专门学校或大学院升学；4月开1年/2年、10月开1年6月课程，年875学时。"},{"name":"职业发展实用日语科","description":"面向日语工作、商务日语或能力提升；1/4/7/10月开课，年760学时。"}]'::jsonb, '{"enrollmentFee":"入学金100,000日元（另有选考料20,000日元）","annualTuition":"进学日语科1年授课费780,000日元；职业发展实用日语科1年740,000日元","materialsFee":"打印费1年8,000日元；教科书按实费（每学期约5,000日元）","totalFirstYear":"进学日语科1年915,000日元；职业发展实用日语科1年875,000日元（均为官网当前价）","otherFees":"含学生24小时共济加入费；需准备教育课程者另收集中讲义60,000日元"}'::jsonb, '["计划大阪升学或职业日语课程","需要比较两类课程","能以申请时要项确认2027费用"]'::jsonb
);
INSERT INTO "LanguageSchool" (
  slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement",
  duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website,
  "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson"
) VALUES (
  'kyoto-minsai', '京都民际日本语学校', '京都民際日本語学校', '京都府京都市右京区西京极北大入町69',
  '官网公开校规的首年总额为982,000日元（选考33,000、入学55,000、授课750,000、设施30,000、国保18,000、课外活动20,000、教材50,000、留学生保险11,000、检定15,000）。公开校规未标为2027费用，2027金额须以校方当期要项为准。', '选考料33,000日元不可退；COE结果后依校方账单在期限内缴费。仅第二年学费可选3个月、6个月或1年分纳，另有分期手续费。', '官网未公开统一出勤率门槛；95%为神田静奖学金的选拔条件之一，并非全体学生的通用签证标准。',
  '进学课程1年3月、1年6月、1年9月或2年；就职课程2年；日语文化课程2年', '须具A1程度或相当150小时日语学习经历；计划升入日本高等教育机构者须完成12年正规教育。', '本批未核实。',
  '进学与日语文化课程：1月/4月/7月/10月；就职课程：4月/10月。', '官网明确三类长课、入学月、日语学习经历和公开校规费用；95%出勤只用于特定奖学金遴选，未被表述为统一要求。', 'https://kyotominsai.co.jp/ja/long-term-program',
  '["进学、就职、日语文化三类课程","A1或150小时学习经历","第二年可分期","多语言咨询支持"]'::jsonb, '[{"name":"进学课程","description":"1至2年，面向大学院、大学或专门学校升学；1/4/7/10月入学。"},{"name":"就职课程","description":"2年，面向在日就业、创业或海外日系企业就职所需日语与商务能力；4/10月入学。"},{"name":"日语文化课程","description":"2年，学习日语与日本文化；1/4/7/10月入学。"}]'::jsonb, '{"enrollmentFee":"入学金55,000日元（另有选考料33,000日元）","annualTuition":"首年授课费750,000日元","materialsFee":"首年教材费50,000日元","totalFirstYear":"982,000日元（官网公开校规的首年总额）","otherFees":"设施30,000、国保18,000、课外活动20,000、留学生保险11,000、检定15,000日元；课程余期按入学月另计"}'::jsonb, '["计划京都升学、就职或文化课程","已有A1或150小时学习经历","能按当期要项确认2027费用"]'::jsonb
);
INSERT INTO "LanguageSchool" (
  slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement",
  duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website,
  "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson"
) VALUES (
  'kobe-commu', '神户コミュニカ学院', '神戸コミュニカ学院', '兵库县神户市中央区东町116-2（各线三宫站步行约7分钟）',
  '官网2027–2028总合日语课程：选考料30,000、入学金70,000；首年按两个半年期缴462,500与452,500日元，首年计划缴费合计1,015,000日元（未含教材和保险）。教材约每3个月7,000–10,000日元，留学生保险另计。', '选考料在出愿时、入学金在COE申请时缴纳；第一学年与第二学年均按每6个月费用表缴纳。', '本批未核实官方对在留资格维持的具体出勤率门槛。',
  '6个月至24个月', '学校代办COE申请；申请人及经费支付人须按官网提交学历、学习经历（如有）和资金证明等材料。', '本批未核实。',
  '4月/7月/10月/1月；每期可学习6至24个月。', '官网已公开2027–2028年长课日程、分期费用和COE申请材料；教材与保险另缴，未将其隐藏在首年总额中。', 'https://www.communica-institute.org/longterm.html',
  '["2027–2028总合日语课程","四季入学","半年缴费表","三宫站步行约7分钟"]'::jsonb, '[{"name":"总合日语课程（留学签）","description":"6至24个月，4/7/10/1月入学；学校代办COE申请，费用按每6个月列示。"}]'::jsonb, '{"enrollmentFee":"入学金70,000日元（另有选考料30,000日元）","annualTuition":"首年授课费800,000日元（每6个月400,000日元）","materialsFee":"教材另缴，约每3个月7,000–10,000日元","totalFirstYear":"1,015,000日元（含选考、入学、首年两期授课/设备/活动/健康维持管理费；不含教材与保险）","otherFees":"设备费每半年32,500日元、活动费每半年20,000日元；留学生保险另缴"}'::jsonb, '["计划2027年起神户长课","需要四季入学","希望按半年费用表规划预算"]'::jsonb
);
COMMIT;
