-- Reviewed batch 6 for 2027. Applied to the configured Supabase project on 2026-11-02.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('tus', 'shibaura', 'denki', 'kinki')) <> 4 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "University" SET
  tuition = '2027届学部新生首年费用按学科为1,458,740–2,529,740日元；工学部多数专业为1,914,740日元。具体金额须按志望学科的官方学费表确认。',
  "gpaRequirement" = '2027要项未设全校统一GPA门槛；资格和材料按志望学部确认。',
  "japaneseRequirement" = '2027学部留学生入试全部以日语授课；理工类通常要求EJU日语、数学Course 2及按学科指定的理科科目，具体组合依学部而异。',
  "englishRequirement" = '须提交TOEFL iBT或TOEIC L&R；2027要项未公布全校统一合格分数线。',
  highlights = '2027学部外国留学生选拔分I/II期，以书类、EJU及面试或口头试问综合评定；II期部分学部仅书类审查。',
  "featuresJson" = '["2027学部留学生选拔","I/II期","EJU","日语授课"]'::jsonb,
  "programsJson" = '[{"name":"学部外国留学生入学考试","level":"undergraduate","description":"2027年度I/II期；书类、EJU和面试或口头试问综合评定（II期部分学部为书类审查）。各学部的科目与资格须以官方要项为准。","features":["I/II期","EJU","学部别要求"]}]'::jsonb,
  "examFormat" = '2027学部外国留学生入试分I/II期：书类、EJU及面试或口头试问综合评定；II期部分学部仅书类审查。检定费35,000日元，另收1,380日元手续费。',
  "sguNote" = '',
  website = 'https://www.tus.ac.jp/admissions/university/list/foreignstudents/index.html'
WHERE slug = 'tus';
UPDATE "University" SET
  tuition = 'IGP英语工程学本科2027秋季入学首年标准费用合计1,857,020日元；持“留学”在留资格者可免后援会相关40,000日元。',
  "gpaRequirement" = '2027 IGP要项未设统一GPA门槛；须具备高中数学，以及物理或化学至少一门的学习背景。',
  "japaneseRequirement" = 'IGP为英语授课；申请不要求EJU或日语成绩。',
  "englishRequirement" = 'IELTS 6.0+；或TOEFL iBT 79+（2026-01-20前旧量表）/4.0+（2026-01-21起新1–6量表）。',
  highlights = 'IGP为全英文工程学学士，2027年9月入学预计9名；前两年共同基础，之后选择五个工程方向。',
  "featuresJson" = '["英语授课","2027年9月入学","预计9名","无需EJU或日语成绩"]'::jsonb,
  "programsJson" = '[{"name":"Innovative Global Program（IGP）工程学学士","level":"undergraduate","description":"全英文工程学本科；前两年共同基础，之后选择机械、化学材料、电气电子、计算机通信或土木工程方向。","features":["英语授课","五个工程方向","秋季入学"]}]'::jsonb,
  "examFormat" = 'IGP 2027秋季两轮申请：第一轮2026-10-19至11-02，第二轮2027-02-15至03-06；2027年9月入学。申请费35,000日元。',
  "sguNote" = '',
  website = 'https://www.igp.shibaura-it.ac.jp/'
WHERE slug = 'shibaura';
UPDATE "University" SET
  tuition = '2027届首年：系统设计、工学、未来科学的信息媒体与机器人专业1,775,160日元；未来科学建筑专业1,816,160日元；理工学部1,735,160日元。持“留学”在留资格者另收年度100,000日元。',
  "gpaRequirement" = '2027要项未设统一GPA门槛；须按志望学科满足学历与EJU资格。',
  "japaneseRequirement" = '该特别选拔全部以日语作答；须有足够日语能力，并提交EJU日语及数学Course 2（日语与数学合计370/600以上，数学至少120）。',
  "englishRequirement" = '2027该学部特别选拔以日语EJU与数学为核心，英语成绩要求须按志望学科和官方要项确认。',
  highlights = '2027学部外国人留学生特别选拔涵盖系统设计、未来科学、工学与理工学部；每人仅可报考一个学科/学系。',
  "featuresJson" = '["2027学部特别选拔","日语作答","EJU日语及数学","仅限一个志愿"]'::jsonb,
  "programsJson" = '[{"name":"学部外国人留学生特别选拔","level":"undergraduate","description":"覆盖系统设计、未来科学、工学和理工学部的指定学科/学系；每人仅能报考一个志愿。","features":["EJU日语","数学Course 2","日语作答"]}]'::jsonb,
  "examFormat" = '2027学部外国人留学生特别选拔：2026-08-21至08-24出愿，09-26考试，10-05公布结果；报名时须已持“留学”在留资格。检定费35,000日元。',
  "sguNote" = '',
  website = 'https://www.dendai.ac.jp/about/admission/undergraduate/ryugakusei.html'
WHERE slug = 'denki';
UPDATE "University" SET
  tuition = '2027学费尚未由校方学费页公布；本条不以旧年度“约100–150万日元/年”作为2027报价。',
  "gpaRequirement" = '2027学部留学生要项未设全校统一GPA门槛；资格和材料依学部确认。',
  "japaneseRequirement" = '理工学部留学生入试要求EJU日语、数学Course 2与理科，题目以日语出题；具体科目和条件按志望学部要项确认。',
  "englishRequirement" = '2027学部留学生要项未公布全校统一英语成绩门槛；请按志望学部确认。',
  highlights = '2027学部外国人留学生入试仍实施；理工学部以材料、EJU与口头试问综合判定。',
  "featuresJson" = '["2027学部留学生入试","理工学部","EJU","日语出题"]'::jsonb,
  "programsJson" = '[{"name":"学部外国人留学生入学试验（理工学部）","level":"undergraduate","description":"理工学部涵盖数学、物理、化学、生命科学、应用化学、机械、电气电子通信、社会环境及能源物质等；以材料、EJU和口头试问综合判定。","features":["EJU","口头试问","日语出题"]}]'::jsonb,
  "examFormat" = '2027学部外国人留学生入试：前期考试2026-10-10，后期考试2027-02-20，后期结果2027-03-09。理工学部检定费32,000日元。',
  "sguNote" = '',
  website = 'https://www.kindai.ac.jp/campus-life/international-exchange/exam/'
WHERE slug = 'kinki';
COMMIT;
