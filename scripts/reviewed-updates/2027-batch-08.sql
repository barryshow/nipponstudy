-- Reviewed batch 8 for 2027 (language schools). Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- Offline artifact only: no database connection, seed endpoint, or key access was used.
-- Controlled sync: three updates and one explicit insert for a reviewed local record missing remotely; no DELETE or schema changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug IN ('human', 'arc', 'kyoshin')) <> 3 THEN
    RAISE EXCEPTION 'Expected existing school records are missing; no updates applied';
  END IF;
  IF (SELECT count(*) FROM "LanguageSchool" WHERE slug = 'shinjuku-gyoen') <> 0 THEN
    RAISE EXCEPTION 'The reviewed missing record already exists; no updates applied';
  END IF;
END $$;
UPDATE "LanguageSchool" SET
  name = '修曼日本语学校',
  "nameJa" = 'ヒューマンアカデミー日本語学校',
  location = '东京 / 大阪 / 神户（官网入学受付页列示校区；其他据点待官网确认）',
  tuition = '2027年4月起长课：2年、1年9月、1年6月、1年3月、1年课程首年均为907,500日元（官网另列9个月课程701,250日元）；另收选考料27,500日元。相应课程总额为1,732,500 / 1,526,250 / 1,320,000 / 1,113,750 / 907,500日元。首年费用含入学金、授课费和教材费（选修课教材按实费另购）。课程仍标注为文部科学省认定申请中，计划可能调整。',
  "paymentTerm" = '入学前按学校指定日期缴纳授课费和教材费；具体分期安排待官网确认。',
  "attendanceRequirement" = '本批未核实官方出勤率要求。',
  duration = '9个月、1年、1年3月、1年6月、1年9月或2年',
  "visaRequirement" = '官网注明按入学时期不同可能有日语水平条件差异；申请资格按校区和官方要项确认。',
  "minimumStudyForVocational" = '本批未核实。',
  intake = '1月（对应1年3月课程）、4月（2年）、7月（1年9月）、10月（1年6月）；各期受理期与适用校区不同（如4月期为7/1–10/31，东京·大阪·神户）。',
  highlights = '官网公布2027年4月起长课收费和1/4/7/10月入学期；课程认定状态与适用校区须在申请前再次确认。',
  website = 'https://hajl.athuman.com/long/admission/?code=110531',
  "featuresJson" = '["2027长课","东京/大阪/神户","多种修业年限","课程认定申请中"]'::jsonb,
  "programsJson" = '[{"name":"长课（2027年4月起）","description":"官网列示1年、1年3月、1年6月、1年9月和2年课程；具体课程、校区及认定状态以申请时官方要项为准。"}]'::jsonb,
  "tuitionBreakdownJson" = '{"enrollmentFee":"首年费用已含入学金（官网未列单独金额）","annualTuition":"首年费用已含授课费","materialsFee":"首年费用已含教材等","totalFirstYear":"907,500日元","otherFees":"选考料27,500日元另收；官网另列9个月课程701,250日元；2027年课程仍在文部科学省认定申请中"}'::jsonb,
  "suitableForJson" = '["计划1/4/7/10月入学","比较不同修业年限","能接受认定状态待确认"]'::jsonb
WHERE slug = 'human';
UPDATE "LanguageSchool" SET
  name = 'ARC日本语学校',
  "nameJa" = 'ARC日本語学校',
  location = '东京都文京区后乐2-23-10（ARC东京日本语学校）',
  tuition = '仅核对ARC东京日本语学校2027年4月起含税费用：进学/就职课程2年总额各1,732,000日元、1年9月各1,528,000日元、1年6月各1,324,000日元；选考料30,000、入学金70,000、首年课费816,000日元，教材费依课程和学期另购。',
  "paymentTerm" = '初回授课费（1年分）入学时缴纳，第二回按修业年限在相应授课期开始2个月前的月底前缴纳；经校方认可可按6个月分纳。',
  "attendanceRequirement" = '本批未核实官方出勤率要求。',
  duration = '1年6月、1年9月或2年（进学2年另设アドバンス課程，费用相同）',
  "visaRequirement" = '申请资格按官方要项确认。',
  "minimumStudyForVocational" = '本批未核实。',
  intake = '本批仅核对2027年4月起费用；入学期以申请时官网为准。',
  highlights = '本条仅代表ARC东京日本语学校2027年4月起费用；官网另列同集团的ARC Academy新宿校与ARC京都日本语学校，费用未纳入本条。',
  website = 'https://arc.ac.jp/Tokyo/admission/schoolexpense202704/',
  "featuresJson" = '["ARC东京日本语学校","进学课程（含アドバンス）","就职课程","教材费按学期校内另购"]'::jsonb,
  "programsJson" = '[{"name":"进学课程","description":"含进学2年、进学2年アドバンス、进学1年9月、进学1年6月课程；2027年4月起各课程总额1,324,000–1,732,000日元。"},{"name":"就职课程","description":"含就职2年、就职1年9月、就职1年6月课程；2027年4月起各课程总额1,324,000–1,732,000日元。"}]'::jsonb,
  "tuitionBreakdownJson" = '{"enrollmentFee":"70,000日元","annualTuition":"首年课费816,000日元","materialsFee":"按课程和学期另购","totalFirstYear":"916,000日元（选考料30,000日元、入学金70,000日元及首年课费816,000日元）","otherFees":"官网本批仅核对东京校；教材费另收"}'::jsonb,
  "suitableForJson" = '["计划就读ARC东京校","比较进学与就职课程","可承担另购教材费"]'::jsonb
WHERE slug = 'arc';
UPDATE "LanguageSchool" SET
  name = '京进语言学院',
  "nameJa" = '京進ランゲージアカデミー',
  location = '东京新宿、OLJ（丰岛）、DBC（日暮里）；名古屋北、びわこ、京都中央、大阪中央、大阪なにわ、神户',
  tuition = '2027年4月入学期以后全年费用979,000日元（含税）：检定30,000、入学70,000、学费680,000、设施50,000、活动/教材50,000、保险/体检10,000及税89,000日元。半年首缴544,500日元，半年后434,500日元。',
  "paymentTerm" = '半年首缴544,500日元，半年后434,500日元（含税）。',
  "attendanceRequirement" = '本批未核实官方出勤率要求。',
  duration = '1年3月、1年6月、1年9月或2年',
  "visaRequirement" = '申请资格按招募要项和校区确认。',
  "minimumStudyForVocational" = '本批未核实。',
  intake = '1月/4月/7月/10月；びわこ校仅4月/10月，1月不设初级班。',
  highlights = '官网2027年4月以后要项列出九校、全年含税费用及分期支付；不将未列的福冈、上野等旧校区表述为当前适用校区。',
  website = 'https://www.kla.ac/ja/admissions/tuition/',
  "featuresJson" = '["2027年4月以后要项","九个校区","可半年缴费","入学期按校区不同"]'::jsonb,
  "programsJson" = '[{"name":"长期日语课程","description":"1/4/7/10月入学，对应1年3月、1年6月、1年9月或2年；实际开课与初级班设置依校区确认。"},{"name":"升学方向课程（官网课程一览）","description":"官网课程页列大学、大学院、专门学校方向及美术、短期课程；具体开设校区与学费需在申请时确认。"}]'::jsonb,
  "tuitionBreakdownJson" = '{"enrollmentFee":"70,000日元","annualTuition":"680,000日元","materialsFee":"活动/教材50,000日元","totalFirstYear":"979,000日元（含税）","otherFees":"检定30,000、设施50,000、保险/体检10,000及税89,000日元"}'::jsonb,
  "suitableForJson" = '["希望多校区选择","需要半年付款安排","可按校区确认入学期"]'::jsonb
WHERE slug = 'kyoshin';
INSERT INTO "LanguageSchool" (
  slug, name, "nameJa", location, tuition, "paymentTerm", "attendanceRequirement",
  duration, "visaRequirement", "minimumStudyForVocational", intake, highlights, website,
  "featuresJson", "programsJson", "tuitionBreakdownJson", "suitableForJson"
) VALUES (
  'shinjuku-gyoen', '新宿御苑学院', '新宿御苑学院', '东京都新宿区新宿2-3-13 新宿通り大橋ビル3F', '2027年4月以后入学的进学课程最初12个月873,000日元（含选考料22,000）；课程修了前总额为：进学2年1,644,000、1年9月1,473,000、1年6月1,288,000、1年3月1,091,000日元。各费用为含税价，官网注明可能变更。',
  '先缴纳最初12个月费用；剩余期间费用在该期间开始1个月前缴纳（选考料在出愿时缴纳，入学手续时缴纳除选考料外的金额）。', '本批未核实官方出勤率要求。', '进学2年（24个月）、1年9月（21个月）、1年6月（18个月）、1年3月（15个月）',
  '官网列课程别日语基准：进学2年A1相当（JLPT N5或BJT300分等10种考试目安）、1年9月与1年6月A2相当、1年3月B1相当；无证书者可参加本校面试确认。', '本批未核实。', '全年1/4/7/10月；当前募集4月进学2年、7月1年9月、10月1年6月、1月1年3月。出愿期限：4月期为前年10月、7月期为2月、10月期为5月中旬、1月期为8月中旬。',
  '官网列示单一东京校址与进学四课程；2027年4月以后入学者适用最初12个月873,000日元的新学费及公开分项，残期费用按时缴纳。', 'https://gyoen.co.jp/attendcourses/', '["单一东京校址","进学课程四课程","2027年4月起新学费873,000","分课程日语基准公开"]'::jsonb, '[{"name":"进学课程","description":"面向大学/大学院/专门学校升学；当前募集4月2年、7月1年9月、10月1年6月、1月1年3月课程，并提供个别升学咨询与面试练习。"}]'::jsonb,
  '{"enrollmentFee":"入学金80,000日元（有效期2年）","annualTuition":"授课费685,000日元","materialsFee":"教材费64,000日元","totalFirstYear":"873,000日元（最初12个月，含选考料22,000）","otherFees":"保险费12,000日元、健康管理费10,000日元；残期费用另计（2年次771,000日元等）"}'::jsonb, '["计划东京进学课程","对应1/7/10月或次年1月入学","可按时提交出愿材料"]'::jsonb
);
COMMIT;
