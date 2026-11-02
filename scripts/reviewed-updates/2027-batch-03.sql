-- Reviewed batch 3 for 2027. Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('osaka-u', 'hokkaido-u', 'kyushu-u', 'tsukuba')) <> 4 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "University" SET
  tuition = '现行本科/一般大学院：535,800日元/年；入学金282,000日元（学校说明2027年度金额将在入学手续前确定）',
  "gpaRequirement" = '按研究科与项目要项核对',
  "japaneseRequirement" = '按课程与选拔要项确认',
  "englishRequirement" = '英语学位项目须按2027项目要项确认',
  highlights = '工学研究科已公布2027年4月/10月国际生与英语学位项目要项；部分机械工程英语硕士选拔已停止',
  "featuresJson" = '["2027工学研究科要项","英语硕士/博士项目","研究生导师与学科批准","2027学费待最终公布"]'::jsonb,
  "programsJson" = '[{"name":"工学研究科英语学位项目","level":"graduate","description":"2027年4月及10月入学均有面向国际生的英语硕士/博士项目；须按具体课程要项确认。","features":["英语项目","2027年4月/10月入学","课程要项优先"]},{"name":"工学研究科研究生","level":"graduate","description":"2027研究生申请须取得拟指导教员及学科/专攻负责人的受入批准。","features":["导师批准","学科/专攻批准","2027申请要项"]}]'::jsonb,
  "researchStudent" = '工学研究科研究生须取得拟指导教员及学科/专攻负责人的受入批准；其他研究科的要求应分别核对。',
  "examFormat" = '已核对工学研究科2027年4月/10月国际生与英语项目要项；具体考试方式和日程依课程而异。',
  website = 'https://www.eng.osaka-u.ac.jp/en/entrance/f_admissions/'
WHERE slug = 'osaka-u';
UPDATE "University" SET
  tuition = '已核对生物医学科学工程研究科2027年硕士：年学费估算535,800日元、入学金估算282,000日元；其他学院须分别确认',
  "gpaRequirement" = '按学院与课程要项核对',
  "japaneseRequirement" = '按课程要项确认',
  "englishRequirement" = '生物医学科学工程研究科2027要项要求按指定方式提交TOEFL；其他课程另查',
  highlights = '已核对生物医学科学工程研究科2027年硕士要项与费用估算，不将其外推为全校所有项目条件',
  "featuresJson" = '["2027生物医学科学工程","医疗物理/医疗器械开发","费用为估算","学院要项优先"]'::jsonb,
  "programsJson" = '[{"name":"生物医学科学工程研究科（2027硕士）","level":"graduate","description":"医疗物理教育项目与医疗器械开发项目；2027第一轮考试为2026年8月25日，第二轮为2027年1月26日。","features":["医疗物理","医疗器械开发","两轮选拔"]}]'::jsonb,
  "researchStudent" = '研究生制度与导师联系要求须按目标学院重新核对；本轮未采用旧年度概括性说明。',
  "examFormat" = '生物医学科学工程研究科2027硕士：书类、主题论文与专业考试（口试；可能要求笔试）；其他学院另查要项。',
  website = 'https://www.med.hokudai.ac.jp/en/bme/admissions/doc/en_application_guidelines_MC_2027.04.pdf'
WHERE slug = 'hokkaido-u';
UPDATE "University" SET
  tuition = '已核对设计学府2027年大学院：535,800日元/年、入学金282,000日元（均可能调整）；其他学院另查',
  "gpaRequirement" = '按项目要项核对',
  "japaneseRequirement" = '英语本科项目除日语课外以英语授课；其他课程按要项确认',
  "englishRequirement" = '2027英语本科仅接受要项列出的标准化考试成绩',
  highlights = '2027英语本科覆盖共创学部、工学部四个方向与农业资源环境项目；IGSES国际修士已发布2027日程',
  "featuresJson" = '["2027英语本科","工程四方向","农业资源环境","IGSES国际修士","费用以学院要项为准"]'::jsonb,
  "programsJson" = '[{"name":"IGSES国际修士（2027年4月）","level":"graduate","description":"英语授课；2026年10月15日至22日受理材料，11月7日口试、12月5日笔试。","features":["英语授课","2027年4月入学","工学/科学/哲学硕士"]},{"name":"英语本科项目（2027年10月）","level":"undergraduate","description":"共创学部；工学部的电气电子与计算机、应用化学、机械、土木；农业资源环境项目。","features":["全英文（除日语课）","2026年12月7日至11日申请","四年制"]}]'::jsonb,
  "researchStudent" = '本轮未将旧研究生费用或导师流程作为2027通用条件；请按学院要项确认。',
  "examFormat" = '英语本科2027在线申请为2026年12月7日至11日，仍须邮寄指定材料；IGSES国际修士有独立的书类、口试和笔试日程。',
  website = 'https://www.kyushu-u.ac.jp/en/admission/faculty/foreign/foreign10'
WHERE slug = 'kyushu-u';
UPDATE "University" SET
  tuition = '2027年4月1日起入学、持留学在留资格者：608,800日元/年（304,400日元/学期）；入学金282,000日元',
  "gpaRequirement" = '按项目要项核对',
  "japaneseRequirement" = 'TISS/TILES为英语学位项目；其他课程按要项确认',
  "englishRequirement" = 'TISS/TILES英语项目的具体资格按2027要项确认',
  highlights = '2027年起留学生学费调整；TISS与TILES均有2027年9月英语学位本科招生',
  "featuresJson" = '["2027留学生学费608,800日元","TISS英语社会科学","TILES英语生命环境科学","2027年9月入学"]'::jsonb,
  "programsJson" = '[{"name":"TISS国际社会科学本科（2027年9月）","level":"undergraduate","description":"英语授课的社会科学学士项目；2026年10月21日至11月19日17:00（日本时间）在线申请。","features":["全英文","社会科学","2027年9月入学"]},{"name":"TILES生命与环境科学本科（2027年9月）","level":"undergraduate","description":"英语授课的生命与环境科学学士项目；申请日程与TISS相同。","features":["全英文","生命环境科学","2027年9月入学"]}]'::jsonb,
  "researchStudent" = '研究生的导师联系、入学资格与费用须按研究科重新核对；本轮不使用旧年度概括性说明。',
  "examFormat" = 'TISS/TILES 2027年9月入学：2026年10月21日至11月19日17:00申请，2027年2月10日一审结果、2月26日至3月8日面试、3月25日公布。',
  website = 'https://ac.tsukuba.ac.jp/en/examinations/application-guidelines/'
WHERE slug = 'tsukuba';
COMMIT;
