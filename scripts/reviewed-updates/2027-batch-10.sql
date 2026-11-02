-- Reviewed batch 10 for 2027 (language schools). Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Offline artifact only: no database connection, seed endpoint, or key access was used.
-- Controlled sync: explicit inserts for three reviewed local records verified absent remotely; no DELETE, bulk import, or schema changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN ('yoshida', 'toa', 'shinjuku-jls')) <> 0 THEN
    RAISE EXCEPTION 'One or more reviewed records already exist; no inserts applied';
  END IF;
END $$;
INSERT INTO "LanguageSchool" (
  slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement",
  duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website,
  "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson"
) VALUES (
  'yoshida', '吉田日本语学院', 'ヨシダ日本語学院', '东京都新宿区西早稻田1-23-14',
  '官网当前留学签本科课程首年843,000日元（选考25,000、入学98,000、授课684,000、教育运营36,000）；此后每6个月360,000日元。当前费用页未标注为2027年度价格，2027金额须以校方后续要项为准。', '选考料须在申请期限前缴纳；其余费用依校方缴费安排办理。首年后每6个月费用为360,000日元。', '本批未核实官方对在留资格维持的具体出勤率门槛。',
  '进学课程为1年、1年3月、1年6月、1年9月或2年；一般课程为6个月至2年', '完成12年以上学校教育或同等学历；申请1月入学的进学课程须具JLPT N3。', '本批未核实。',
  '进学与一般课程均为1月/4月/7月/10月入学。', '官网公开长课分项费用与1/4/7/10月入学；当前费用页未标注为2027定价，申请前应取得校方最新要项。', 'https://yosida.com/japanese/intensive-japanese/long-term-study',
  '["留学签长课","进学与一般课程","初级至高级分班","可准备JLPT/EJU"]'::jsonb, '[{"name":"进学课程","description":"以日本升学为目标；1月为1年3月、4月为1年或2年、7月为1年9月、10月为1年6月。"},{"name":"一般课程","description":"6个月至2年；以在日生活、就职或日语能力提升为学习目标。"}]'::jsonb, '{"enrollmentFee":"入学金98,000日元（另有选考料25,000日元）","annualTuition":"首年授课费684,000日元","materialsFee":"教育运营费36,000日元，含主教材、学生保险、课外活动、设施与体检等","totalFirstYear":"843,000日元（官网当前价，含选考料）","otherFees":"此后每6个月360,000日元；JLPT/EJU教材另计；金额含税"}'::jsonb,
  '["计划1/4/7/10月入学","需要进学或一般长课","能以官方最新要项确认2027费用"]'::jsonb
);
INSERT INTO "LanguageSchool" (
  slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement",
  duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website,
  "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson"
) VALUES (
  'toa', '东亚学院', '東亜学院', '东京都港区赤坂2-17-47 赤坂霞山大楼',
  '官网当前留学生进学课程的学业费用：4月/10月首年830,000日元（选考20,000、入学50,000、学费660,000、其他100,000）；网页另列来日初期3个月宿舍与入寮费，4月/10月来日前纳总额为1,050,000日元。当前页面未单列2027价格。', '首年费用来日前预缴；次年度起每6个月从本人邮政银行账户扣款。官网建议来日初期3个月入住学生宿舍，并将相应费用列入来日前纳额。', '官网说明会定期向经费支付人报告出勤和成绩；本批未核实统一出勤率门槛。',
  '2年、1年9月、1年6月或1年3月', '具体申请资格和在留手续须依申请时校方要项确认。', '本批未核实。',
  '4月（2年）、7月（1年9月）、10月（1年6月）、1月（1年3月）。', '官网列明各入学期的预缴费用与后续半年扣款；面向中国语圈留学生提供中文支持，但不以无来源的升学保证或统一门槛作宣传。', 'https://www.kazankai.org/toagakuin_jp/liuxue.html',
  '["留学生进学课程","按目标提供升学指导","中文支持","赤坂校址"]'::jsonb, '[{"name":"留学生进学课程","description":"按个人升学目标提供研究计划书、志望理由书、出愿材料与面试准备等指导。"}]'::jsonb, '{"enrollmentFee":"入学金50,000日元（另有选考料20,000日元）","annualTuition":"4月/10月首年学费660,000日元","materialsFee":"其他费用100,000日元（教材、行事活动、留学生保险、设施等）","totalFirstYear":"学业费用830,000日元；若依官网列示预纳3个月宿舍与入寮费，来日前总额1,050,000日元","otherFees":"次年度每6个月380,000日元；7月/1月入学首期金额不同；当前页面未标注2027价格"}'::jsonb,
  '["计划日本升学","需要中文支持","能确认宿舍预缴与2027最新费用"]'::jsonb
);
INSERT INTO "LanguageSchool" (
  slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement",
  duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website,
  "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson"
) VALUES (
  'shinjuku-jls', '新宿日本语学校', '新宿日本語学校', '东京都新宿区高田马场：1号馆2-9-7、2号馆1-14-15、3号馆西早稻田3-26-13',
  '官网当前留学签平日课程费用：4月1年990,000日元、10月1年6月1,415,800日元、4月2年1,840,000日元；当前长课费用页未标注为2027定价。另有2027年1/4/7月短期与其他在留资格课程要项。', '官网当前页未核实留学签课程的分期付款规则；短期/其他在留资格者修读3个月课程须一次付清。', '本批未核实官方对在留资格维持的具体出勤率门槛。',
  '留学签：1年、1年6月或2年；短期/其他在留资格课程可不足3个月或3个月', '留学签申请原则上须完成本国中等教育、满足校方规定的日语学习能力条件，并证明经费支付人的支付能力。', '本批未核实。',
  '留学签：4月（1年或2年）、10月（1年6月）；短期/其他在留资格课程：1月/4月/7月/10月。', '官网分别公开留学签、短期及其他在留资格的课程与费用；短期2027年1/4/7月要项已发布，但长课价格仍须以申请时官方信息确认。', 'https://www.sng.ac.jp/jp/admission/',
  '["高田马场三校舍","留学签平日课程","短期与其他在留资格课程","可选JLPT/EJU对策课程"]'::jsonb, '[{"name":"留学签平日课程","description":"4月入学为1年或2年，10月入学为1年6月；在留期间最长2年。"},{"name":"短期与其他在留资格课程","description":"每年1/4/7/10月开课；3个月课程现行合计265,000日元，不足3个月按55,000日元加每日授课费计。"}]'::jsonb, '{"enrollmentFee":"入学金40,000日元（另有选考料40,000日元）","annualTuition":"1年课程授课费840,000日元","materialsFee":"教材费60,000日元","totalFirstYear":"990,000日元（1年课程，另含留学生保险10,000日元）","otherFees":"1年6月合计1,415,800日元、2年合计1,840,000日元；国民健康保险另按居住地规定缴纳"}'::jsonb,
  '["计划高田马场学习","需要留学签或短期课程","能以申请时官网确认长课2027费用"]'::jsonb
);
COMMIT;
