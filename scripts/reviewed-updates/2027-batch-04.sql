-- Reviewed batch 4 for 2027. Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('waseda', 'keio', 'sophia', 'ritsumei')) <> 4 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "University" SET
  tuition = '2027英语本科各学部收费不同，须以官方费用表及录取学部通知为准',
  "gpaRequirement" = '未公布统一GPA分数线；材料随学部与教育体系而异',
  "japaneseRequirement" = '2027英语本科申请时不要求日语；个别项目规则以要项为准',
  "englishRequirement" = '英语及标准化考试材料随学部、教育体系而异',
  highlights = '2027英语学位本科覆盖6个学部；项目、专业与要项均由学部独立公布',
  "featuresJson" = '["2027英语本科","6个学部","申请时不要求日语","材料按学部规定"]'::jsonb,
  "programsJson" = '[{"name":"政治经济学部（SPSE）","level":"undergraduate","description":"Political Science、Economics、Global Political Economy 三个英语本科项目。","features":["2027年9月入学","英语学位本科"]},{"name":"社会科学部（TAISI）","level":"undergraduate","description":"Transnational and Interdisciplinary Studies in Social Innovation Program。","features":["2027年9月入学","英语学位本科"]},{"name":"国际教养学部（SILS）","level":"undergraduate","description":"International Liberal Studies；英语本科可于4月或9月入学。","features":["4月/9月入学","英语学位本科"]},{"name":"文化构想学部（JCulP）","level":"undergraduate","description":"Transcultural Studies 与 Global Studies in Japanese Cultures Program。","features":["英语学位本科","2027年9月入学"]},{"name":"基础理工学部","level":"undergraduate","description":"Mathematical Sciences、Computer Science and Communications Engineering。","features":["英语学位本科","2027年9月入学"]},{"name":"创造理工学部","level":"undergraduate","description":"Mechanical Engineering、Civil and Environmental Engineering。","features":["英语学位本科","2027年9月入学"]}]'::jsonb,
  "examFormat" = '英语本科由各学部独立发布2027要项；除SILS春季入学外，9月入学项目通常在1—2月出愿，须以该学部要项为准。',
  "sguNote" = '本次仅核对英语本科；研究生与日语授课项目仍待逐项核对。',
  website = 'https://www.waseda.jp/inst/admission/en/undergraduate/english/'
WHERE slug = 'waseda';
UPDATE "University" SET
  tuition = 'PEARL 2027申请费35,000日元；入学及学费金额须以2027官方入学手续资料为准',
  "gpaRequirement" = 'PEARL按提交材料综合审查，官网未公布统一GPA分数线',
  "japaneseRequirement" = 'PEARL须以英文申请；英语本科另有GIGA，其他日语授课本科的要求另行确认',
  "englishRequirement" = 'PEARL须提交IB或SAT，并提交TOEFL iBT或IELTS Academic',
  highlights = 'PEARL为经济学部全英文BA，2027年9月22日入学、约100人、4年制',
  "featuresJson" = '["PEARL经济学全英文","GIGA英语本科","2027年9月入学","材料审查"]'::jsonb,
  "programsJson" = '[{"name":"PEARL（经济学部）","level":"undergraduate","description":"Bachelor of Arts in Economics；全英文授课、4年制，2027年9月22日入学。","features":["约100人","材料审查","英文申请"]},{"name":"GIGA（SFC）","level":"undergraduate","description":"政策管理学部／环境情报学部的英语学位本科项目；本批未核定2027招生日期与费用。","features":["英语本科","SFC"]}]'::jsonb,
  "examFormat" = 'PEARL 2027分三期：2026-10-21至12-02、2026-12-04至2027-01-27、2027-02-24至04-07（日本时间）；不设面试。',
  "sguNote" = '本次仅核对PEARL完整2027要项及GIGA项目存在；研究生、其他本科与GIGA日期待逐项核对。',
  website = 'https://www.keio.ac.jp/en/admissions/faculty/examinations/pearl/'
WHERE slug = 'keio';
UPDATE "University" SET
  tuition = '2027：FLA首年约1,669,000日元、次年起1,442,000日元；SPSF首年约1,645,000日元、次年起1,442,000日元',
  "gpaRequirement" = '各项目书类审查，官网未公布统一GPA分数线',
  "japaneseRequirement" = '英语授课本科的材料与语言条件按2027项目要项执行',
  "englishRequirement" = 'FLA/SPSF要求TOEFL或IELTS，并提交SAT、ACT、IB或GCE A-level之一',
  highlights = '2027英语本科包含FLA、SPSF；理工学部Digital Green Technology计划于2027年4月启动',
  "featuresJson" = '["FLA全英文","SPSF全英文","DGTech 2027启动","书类审查"]'::jsonb,
  "programsJson" = '[{"name":"国际教养学部（FLA）","level":"undergraduate","description":"BA in Liberal Arts；比较文化、社会研究、国际商务与经济等领域。","features":["4月/9月入学","英语授课","书类审查"]},{"name":"Sophia Program for Sustainable Futures（SPSF）","level":"undergraduate","description":"Journalism、Education、Sociology、Economics、Management、International Relations、Area Studies。","features":["仅9月入学","英语授课","书类审查"]},{"name":"Digital Green Technology（DGTech）","level":"undergraduate","description":"理工学部英语项目，覆盖应用化学、生命科学、机械、电气电子及跨学科领域，计划2027年4月启动。","features":["2027年4月","英语授课"]}]'::jsonb,
  "examFormat" = 'FLA 2027年4月首轮为2026-09-01至09-09，SPSF 2027年9月首轮为2026-11-11至12-04；均以项目要项为准。',
  "sguNote" = '',
  website = 'https://adm.sophia.ac.jp/eng/admissions/'
WHERE slug = 'sophia';
UPDATE "University" SET
  tuition = '2027英语本科：GS首年1,669,200日元、次年起1,469,200日元；CRPS首年1,561,600日元、次年起1,361,600日元；ISSE首年2,001,600日元、次年起1,801,600日元（首年含入学金）',
  "gpaRequirement" = '各项目要求以2027英文AO入试要项为准',
  "japaneseRequirement" = '本批列出的英语本科项目以英语授课；日语课程要求另行确认',
  "englishRequirement" = '英语成绩或适用的豁免材料按项目2027要项提交',
  highlights = '2027英语本科有5个项目，涵盖全球教养、国际关系、政策科学与信息科学工程',
  "featuresJson" = '["5个英语本科项目","2027英文AO入试","4月/9月入学","项目制收费"]'::jsonb,
  "programsJson" = '[{"name":"全球教养学部（GLA）","level":"undergraduate","description":"与Australian National University的双学位项目。","features":["4月/9月入学","英语授课","双学位"]},{"name":"国际关系学部美利坚大学联合学位（JDP）","level":"undergraduate","description":"American University - Ritsumeikan University Joint Degree Program。","features":["4月入学","英语授课","联合学位"]},{"name":"国际关系学部全球研究（GS）","level":"undergraduate","description":"Global Studies Major。","features":["4月/9月入学","英语授课"]},{"name":"政策科学部（CRPS）","level":"undergraduate","description":"Community and Regional Policy Studies Major。","features":["9月入学","英语授课"]},{"name":"信息理工学部（ISSE）","level":"undergraduate","description":"Information Systems Science and Engineering Course。","features":["4月入学","英语授课"]}]'::jsonb,
  "examFormat" = '2027英语基础AO入试已公布项目说明与申请手册；资格、材料与具体日程按项目分别确认。',
  "sguNote" = '',
  website = 'https://en.ritsumei.ac.jp/e-ug/'
WHERE slug = 'ritsumei';
COMMIT;
