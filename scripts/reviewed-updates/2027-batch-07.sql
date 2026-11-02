-- Reviewed batch 7 for 2027. Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('aoyama', 'chuo', 'nihon', 'toyo')) <> 4 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "University" SET
  tuition = '2027届学部入学金统一为80,000日元，设施费并入学费；在籍基本料120,000日元/年。各学部/学科首年合计不同，须按官方2027学费表逐项确认，不使用旧“约90–150万日元/年”区间。',
  "gpaRequirement" = '2027学部外国留学生选拔未设全校统一GPA门槛；资格与成绩材料依志望学部要项确认。',
  "japaneseRequirement" = '2027要项未设全校统一JLPT门槛；日语和考试科目依志望学部/学科的选拔要项确认。',
  "englishRequirement" = '2027要项未设全校统一TOEFL或IELTS门槛；外语要求依志望学部/学科确认。',
  highlights = '2027学部外国留学生选拔面向完成海外12年教育者，涵盖文学、教育人间科学、经济、法、经营、国际政治经济、综合文化政策、理工与社会信息等学部/学科。',
  "featuresJson" = '["2027学部留学生选拔","海外12年教育","学部别要项","费用按学科确认"]'::jsonb,
  "programsJson" = '[{"name":"学部外国留学生选拔（2027）","level":"undergraduate","description":"面向完成海外12年教育者；可报文学、教育人间科学、经济、法、经营、国际政治经济、综合文化政策、理工、社会信息等指定学部/学科。","features":["海外12年教育","学部别资格","2027要项"]}]'::jsonb,
  "examFormat" = '2027学部外国留学生选拔：理工以外的资格咨询截止2026-07-21，理工学部截止2026-09-02；其余申请、考试与语言条件按志望学部要项确认。',
  "sguNote" = '',
  website = 'https://www.aoyama.ac.jp/admission/undergraduate/examination/exam_foreign_student.html'
WHERE slug = 'aoyama';
UPDATE "University" SET
  tuition = '2027届首年费用：法学部1,413,700、经济1,375,700、商1,378,700、三理工学部各1,927,800、文1,360,700、综合政策1,680,900、国际经营1,538,300、国际信息1,631,200日元。通过外国留学生入试者免父母联络会费。',
  "gpaRequirement" = '2027要项未设全校统一GPA门槛；资格、材料与成绩依学部及选拔方式确认。',
  "japaneseRequirement" = '一般资格为外国国籍、境外12年教育及指定期次EJU；EJU日语与JLPT替代的适用范围均依学部/方式而异。',
  "englishRequirement" = '外语成绩和适用方式依学部而异；2027要项未支持全校统一TOEFL或IELTS分数线。',
  highlights = '2027外国留学生本科选拔覆盖法、经济、商、三理工、文、综合政策、国际经营、国际信息与体育信息等学部；EJU和外语条件按学部/方式分别规定。',
  "featuresJson" = '["2027学部留学生选拔","境外12年教育","EJU","学部别外语要求"]'::jsonb,
  "programsJson" = '[{"name":"学部外国留学生入学考试（2027）","level":"undergraduate","description":"覆盖法、经济、商、三理工、文、综合政策、国际经营、国际信息与体育信息等；EJU、外语和选考方式依学部/方式确定。","features":["学部别要求","EJU","外国留学生选拔"]}]'::jsonb,
  "examFormat" = '2027外国留学生选拔检定费35,000日元，另收系统费1,350日元；例如法学部申请2026-10-26至10-30、面试2027-01-13，国际经营A方式申请2026-10-19至10-23、笔试英语和面试2026-12-05。其余日程按学部要项确认。',
  "sguNote" = '',
  website = 'https://www.chuo-u.ac.jp/connect/admission/special/guide/'
WHERE slug = 'chuo';
UPDATE "University" SET
  tuition = '2027届首年费用为学部/学科制：法学部1,260,000、经济/商各1,240,000、理工1,690,000–1,730,000、艺术1,750,000–1,950,000日元等；须按志望学部/学科的官方表确认。',
  "gpaRequirement" = '2027总要项未设全校统一GPA门槛；资格和成绩要求依学部/方式确认。',
  "japaneseRequirement" = '不是全校单一门槛：法学部与国际关系学部要求JLPT N2+；艺术学部可用JLPT N2+，或指定期次EJU日语读解/听解听读解240+且记述35+。',
  "englishRequirement" = '2027总要项未设全校统一TOEFL或IELTS门槛；外语要求依志望学部/方式确认。',
  highlights = '2027年4月入学外国留学生统一要项覆盖法、文理、经济、商、艺术、国际关系、体育科学、理工、生産工、工、牙、生物资源等学部；部分采用EJU，其他采用本校考试。',
  "featuresJson" = '["2027年4月入学","学部别选拔","EJU或本校考试","费用按学科"]'::jsonb,
  "programsJson" = '[{"name":"学部外国留学生入学试验（2027年4月）","level":"undergraduate","description":"覆盖法、文理、经济、商、艺术、国际关系、体育科学、理工、生産工、工、牙、生物资源等学部；部分采用EJU，艺术/牙/生物资源等采用本校考试。","features":["2027年4月","EJU或本校考试","学部别资格"]}]'::jsonb,
  "examFormat" = '2027外国留学生统一要项按学部/方式规定；请依志望学部确认申请期、EJU或本校考试、材料与语言要求。',
  "sguNote" = '',
  website = 'https://www.nihon-u.ac.jp/admission_info/guideline/digital_pamphlet/'
WHERE slug = 'nihon';
UPDATE "University" SET
  tuition = '2027届首年纳付金为校方“予定”：文学/经济1,265,000、国际学部1,335,000、信息连携1,675,000、理工1,690,000、环境创新1,730,000、生命科学1,715,000日元等；以最终要项为准。',
  "gpaRequirement" = '2027在线入试要项未设全校统一GPA门槛；资格与成绩材料依轨道和志望学部确认。',
  "japaneseRequirement" = 'Type B为日语轨道，日语要求依志望学部确认；Type A为英语轨道，但国际地域学科Global Track仍含日语科目，不能视为全程纯英语课程。',
  "englishRequirement" = 'Type A英语轨道：TOEFL iBT 79+（2026-01-20前旧量表）或4.5+（2026-01-21起新量表）、IELTS 6.0+或TOEIC L&R 780+。',
  highlights = '2027年4月外国留学生在线入试分Type A英语轨道与Type B日语轨道，可在境外线上完成选拔；Type A涵盖国际学部全球创新与国际地域学科Global Track等。',
  "featuresJson" = '["2027年4月","在线入试","Type A英语轨道","Type B日语轨道"]'::jsonb,
  "programsJson" = '[{"name":"Type A 英语轨道（2027年4月）","level":"undergraduate","description":"外国留学生在线入试英语轨道；包括国际学部全球创新和国际地域学科Global Track等，具体课程结构以学部要项为准。","features":["英语成绩要求","线上选拔","2027年4月"]},{"name":"Type B 日语轨道（2027年4月）","level":"undergraduate","description":"外国留学生在线入试日语轨道；日语、科目和资格要求依志望学部确认。","features":["日语轨道","线上选拔","学部别要求"]}]'::jsonb,
  "examFormat" = '2027年4月在线入试Type A申请2026-09-22至09-25，文件审查/必要时在线面试，2026-11-22公布结果，入学手续截止12-11；申请费10,000日元。Type B按官方要项确认。',
  "sguNote" = '',
  website = 'https://www.toyo.ac.jp/nyushi/international-student/'
WHERE slug = 'toyo';
COMMIT;
