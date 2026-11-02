-- Reviewed batch 2 for 2027. Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('titech', 'nagoya-u')) <> 2 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "University" SET
  tuition = '理工学系本科/修士/博士：635,400日元/年；入学金282,000日元（校方注明可能调整）',
  "gpaRequirement" = '按学院与选拔要项核对',
  "japaneseRequirement" = '2027年度理工学系私费外国人留学生特别选拔：EJU日语290/450分以上；GSEP等英语项目另查要项',
  "englishRequirement" = '2027年度理工学系私费外国人留学生特别选拔：TOEFL iBT或IELTS成绩可选提交',
  highlights = '理工学系2027年度私费外国人留学生特别选拔已发布；须以对应学院与项目的官方要项为准',
  "featuresJson" = '["2027留学生特别选拔","EJU日语290/450以上","EJU理科三科310/400以上","TOEFL/IELTS可选提交","六学院招生"]'::jsonb,
  "researchStudent" = '研究生制度、导师联系与收费须向目标学院确认；本轮未将旧年度资料作为2027依据。',
  "examFormat" = '理工学系2027年度私费外国人留学生特别选拔：2026年12月21–23日出愿，2027年1月20日第一阶段、2月10日第二阶段、3月9日公布结果。仅适用于该项学部选拔。',
  website = 'https://admissions.isct.ac.jp'
WHERE slug = 'titech';
UPDATE "University" SET
  tuition = '本科/一般大学院535,800日元/年；入学金282,000日元（校方2026年1月公布，费用改定时以新标准为准）',
  "gpaRequirement" = '按项目要项核对',
  "japaneseRequirement" = 'G30国际项目：入学时不设最低日语要求（2027）；其他选拔按学部/研究科要项确认',
  "englishRequirement" = 'G30项目须依2027项目要项确认可接受的英语资格与分数',
  highlights = 'G30 2027国际项目提供10个本科、19个大学院英语学位项目；入学时无最低日语要求',
  "featuresJson" = '["G30国际项目（2027）","10个本科、19个大学院课程","全英文授课","入学时无最低日语要求","本科两轮申请"]'::jsonb,
  "programsJson" = COALESCE((
    SELECT jsonb_agg(program)
    FROM jsonb_array_elements("programsJson") program
    WHERE program->>'name' NOT IN ('G30汽车工程(学部)', 'G30国际本科', 'G30国际本科项目')
  ), '[]'::jsonb) || '{"name":"G30国际本科项目","level":"undergraduate","description":"2027年招生提供10个全英文本科课程；入学时不设最低日语要求。具体课程与资格以各项目要项为准。","features":["10个本科课程","全英文","无最低日语门槛","两轮申请"]}'::jsonb,
  "researchStudent" = '研究生/大学院研究生：入学料84,600日元，授课料29,700日元/月（校方2026年1月费用页）；具体资格按研究科要项确认。',
  "examFormat" = 'G30本科2027：第一轮2026年11月2日9:00至11月19日12:00（日本时间）；第二轮2027年1月5日9:00至1月21日12:00，部分课程开放。其余项目按官方要项确认。',
  website = 'https://admissions.g30.nagoya-u.ac.jp/admissions/undergraduate/'
WHERE slug = 'nagoya-u';
COMMIT;
