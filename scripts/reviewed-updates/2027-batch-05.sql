-- Reviewed batch 5 for 2027. NOT EXECUTED; apply via transaction after pre-checks.
-- Sources and limitations: docs/REDESIGN-AND-DATA.md and data/school-reviews.ts.
-- No INSERT, DELETE, public import endpoint, or contact/assessment changes.
BEGIN;
DO $$ BEGIN
  IF (SELECT count(*) FROM "University" WHERE slug IN ('meiji', 'rikkyo', 'hosei', 'doshisha')) <> 4 THEN
    RAISE EXCEPTION 'Expected school records are missing; no updates applied';
  END IF;
END $$;
UPDATE "University" SET
  tuition = '国际日本学部英文赛道2027年9月入学届：首期（2027学年）893,000日元（含入学金200,000）；2028学年全年度约1,373,500日元，2029学年约1,378,500日元，2030学年约1,413,500日元（末年含校友会费30,000）。本批未核对其余学部学费。',
  "gpaRequirement" = '英文赛道未设统一GPA门槛；须提交高中官方成绩单与评分准则说明。',
  "japaneseRequirement" = '英文赛道入学时不要求日语能力，入学后不可切换至日语赛道；可选修SGJS开设的日语课程。',
  "englishRequirement" = 'TOEFL iBT 80+（2026-01-20前旧制）或4.0+（2026-01-21起新band1-6）；或IELTS Academic（含机考）6.0+；或剑桥英语 B1-C2 综合169+；或纸质SAT阅读27+且写作与语言28+（Digital SAT不受理）；或ACT English 18+（ACT Online可）。考试日期限2025-02-18至2027-01-14的单场；不接受家考、MyBest、Super scoring；全员提交，无豁免。',
  highlights = '国际日本学部英文赛道为明治大学本科全英文学位项目，以英语与日语并用的视角研究日本文化与当代社会。',
  "featuresJson" = '["SGJS英文赛道","仅9月入学","定员10人","入学不需日语","不限国籍"]'::jsonb,
  "programsJson" = '[{"name":"国际日本学部 英文赛道（SGJS English Track）","level":"undergraduate","description":"全英文授课本科，以日本文化与社会为核心，选修课含日语授课课程；2026学年起停止4月入学，仅设9月入学，不接收转学生且学分不可转入。","features":["全英文授课","仅9月入学","定员10人","不支持转学"]}]'::jsonb,
  "examFormat" = '2027年9月入学：资格审查邮件预审截止2027-01-04 23:59（JST）；网申+选拔费2027-02-04 15:00至02-17 14:59；文件与官方成绩2027-02-24 16:59前送达；注册号2027-05-06 15:00起可查；第一轮结果2027-05-13 10:00至05-19公布，第二轮在线面试2027-05-22，最终合格2027-06-08 10:00起公布，入学手续截止2027-06-29。选拔费35,000日元+系统使用费1,045日元（收款不退项见要项）。',
  "sguNote" = 'SGJS英文赛道2026学年起停止4月入学、只设9月入学；2027届定员10名，不接收转学生；选拔为书类审查+在线面试两轮。',
  website = 'https://www.meiji.ac.jp/cip/english/undergraduate/nippon/englishtrack/admissions.html'
WHERE slug = 'meiji';
UPDATE "University" SET
  tuition = 'PEACE 2027届（校方2027学年学费通知：与2026学年持平，实验实习费部分调整）：入学金200,000日元；年学费为国际商务法Global Program 1,271,000日元、异文化交流（ICC）1,178,000日元、GLAP 1,900,000日元。2027届首年合计（含第一、二期）约为：国际商务法1,474,500日元、ICC 1,391,500日元、GLAP 2,103,500日元（仅含2026学年估算，其他费用按规定另行收取约4%行政费）。ICC海外研修期间学费为939,000日元/年；GLAP所有在校生均参加长期留学，PEACE来源学生为可选（免学费，差旅住宿自付）。本批未核对其余学部学费。',
  "gpaRequirement" = '未设统一GPA门槛；须满足指南第5节指定高中资格条件(a)-(j)之一并提供官方证明。',
  "japaneseRequirement" = '英文项目本身不设日语门槛；入学后语言课必修：法学政治学部与异文化交流学部 languages A/B 均为日语，GLAP为 Language A 英语 + Language B 日语。',
  "englishRequirement" = '按高中资格设最低线（示例：IBDP 28/奖学金35；ATAR 79/85；SAT 1170或ACT 24，奖学金1250/26；A-Level 8分/11；新加坡A-Level 10/12；HKDSE 2024以前18与2024以后14；STPM 10.00；UYEC 18），未能满足英语子项时可用TOEFL iBT 94（新band4.5）或IELTS 6.5替代；不接受家考、MyBest、Superscore。',
  highlights = 'PEACE为异文化交流（ICC）、国际商务法（Global Program）与GLAP的全英文本科学位项目。',
  "featuresJson" = '["PEACE三项目","4月/9月双入学","两轮信审+面试","各项目名额10","官方直送成绩"]'::jsonb,
  "programsJson" = '[{"name":"异文化交流学部 Intercultural Communication for Global Leadership","level":"undergraduate","description":"PEACE项目英语授课；2027年名额10（推荐制与一般申请合计，4月与9月入学合计）。","features":["英语授课","PEACE项目","名额10"]},{"name":"法学政治学部 国际商务法 Global Program","level":"undergraduate","description":"PEACE项目英语授课；2027年名额10（推荐制与一般申请合计，4月与9月入学合计）。","features":["英语授课","PEACE项目","名额10"]},{"name":"GLAP（Global Liberal Arts Program）","level":"undergraduate","description":"英语授课；入学后需要 Language A 英语 + Language B 日语；在校生均参加长期留学（PEACE来源为可选）。","features":["PEACE项目","名额10","留学必修"]},{"name":"NEXUS 项目","level":"undergraduate","description":"第一学期集中强化日语，第二学期起进入专业学部；仅面向与大学有学生接收协议的指定高中，不设开放申请。","features":["指定高中限定","日语强化","非PEACE流程"]}]'::jsonb,
  "examFormat" = 'PEACE一般申请2027：4月入学2026-11-06起申请、11-20 15:00截止（含申请费缴纳），12-08发申请编号、2027-01-15 10:00发表；9月入学2027-01-18起申请、02-01 15:00截止，02-16编号、03-05 10:00发表；录取通知后一期学杂费缴纳分别于2027-01-22与03-12 15:00截止。申请费15,000日元+620日元手续费（仅供令和WEB系统信用卡缴费，不退还）。每项目名额为推荐制、一般申请、4月与9月入学四者的合计10人。',
  "sguNote" = 'B.A.英文项目为PEACE（ICC、国际商务法、GLAP3个专攻）；NEXUS需指定高中协议，不开放一般申请。中国内地学生申请COE另行适用入国前结核筛查(JPETS)。',
  website = 'https://english.rikkyo.ac.jp/admission/peace-and-nexus.html'
WHERE slug = 'rikkyo';
UPDATE "University" SET
  tuition = '2027届入学者学费（校方2027年度学费页，另有诸会费）：GIS首年1,632,000日元（含入学金240,000；第二学年及其后1,392,000日元/年）；IGESS、GBP、SCOPE首年各1,494,000日元（含入学金240,000；第二学年及其后1,254,000日元/年）。',
  "gpaRequirement" = '未设统一GPA门槛；资格按各项目最新指南要求。',
  "japaneseRequirement" = '全英文授课；无需日语成绩。',
  "englishRequirement" = 'GIS：TOEFL iBT 90+（2026-01-20前旧制）或5.0+（2026-01-21起新band）/IELTS 7.0+，或以英语为 IB Language A 并取得文凭；GBP、SCOPE：TOEFL iBT 80+（旧制）或4.0+（新band）/IELTS 6.0+；IGESS：必须提交TOEFL或IELTS（不设最低分数线）。家考、MyBest、IELTS Online/Indicator均不受理。',
  highlights = '四项全英文学位（GIS、GBP、SCOPE、IGESS）2027年秋季统一申请；一次书类审查加全员在线面试的两阶段选拔。',
  "featuresJson" = '["GIS/GBP/SCOPE/IGESS","2027年单一申请期","两阶段选拔","DAC低收入国可免选拔费"]'::jsonb,
  "programsJson" = '[{"name":"GIS（Global and Interdisciplinary Studies）","level":"undergraduate","description":"文理与商学教养课程，含4月与9月入学；2027年秋季定员10名。","features":["4月/9月入学","同次书审","秋季定员10"]},{"name":"GBP（Global Business Program）","level":"undergraduate","description":"2027年9月入学，工商管理方向；共20名：面向持留学签证者10名+其他在留资格10名。","features":["9月入学","20名","改革后单一期"]},{"name":"SCOPE（Sustainability Co-creation Programme）","level":"undergraduate","description":"2027年9月入学，可持续发展方向（人类环境学部）；共20名：面向持留学签证者10名+其他在留资格10名。","features":["9月入学","20名","可持续领域"]},{"name":"IGESS（全球经济与社会科学研究所）","level":"undergraduate","description":"2027年9月入学，经济学方向（经济学部），一至三年级城市校区（Ichigaya）+后期多摩校区；30名。","features":["9月入学","30名","经济方向"]}]'::jsonb,
  "examFormat" = '2027年秋季（四项目统一日程）：申请期2027-02-22至03-05（网申首日10:00开始，书类须在截止日送达或（国内）邮戳）；第一轮结果2027-04-23，面试细节2027-05-07，Zoom连接测试05-12或05-13，在线面试05-16（SCOPE为05-15），结果2027-05-25，入学手续2027-05-25至06-15，入学日2027-09-16。选拔费35,000日元+1,100日元手续费，卡缴费不退；DAC低收入国可免（需在期首日前联系 ebdp-i@ml.hosei.ac.jp）。标准化成绩仅认 SAT（直送码3686）、ACT（0607）、IB文凭、或GCE A-Level（3科或2A+2AS合计4科）。',
  "sguNote" = '2027年度起此前 Period I/II 合并为单一申请期，且第一轮通过者一律参加在线面试。',
  website = 'https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/'
WHERE slug = 'hosei';
UPDATE "University" SET
  tuition = 'ILA 2027届（校方公布）：四年学年总均为1,194,000日元。首年含入学金200,000、学费824,000、设施费170,000；第二学年起学费1,024,000、设施费170,000；第四年另收校友会费，按学期分两期缴。第三年插入学首期合计774,000日元，第三学年1,348,000日元、第四学年1,148,000日元。申请费15,000日元（海外电子汇款需含2,500日元手续费，共17,500日元），缴后不退。',
  "gpaRequirement" = '官方未设统一硬性分数线；招生政策说明获批学生通常为IB 32+、Digital SAT 1300+、ACT 25+或三科GCE A-Level（视为参考而非硬线）。',
  "japaneseRequirement" = '全英文授课；不要求JLPT成绩。',
  "englishRequirement" = 'TOEFL iBT 85+（测试在2026-01-20前）或4.5+（2026-01-21起新band，code D680）；或IELTS Academic 6.5+（可UKVI/机考；Online与One Skill Retake不受理）；或Duolingo 120+；或ACT English 22+（code 9078，不收Superscore）；或Digital SAT EBRW 560+（code 7231，不收Superscore）；Home Edition与MyBest不受理。成绩限两年内；英语母语或接受12年英语授课者可豁免。',
  highlights = '所设面向约50名/年的国际教养课程（三方向集中），小规模、讨论型课堂，京都双校区。',
  "featuresJson" = '["全英文LLM BA","每年约50名","三方向集中","视频面试","4月/9月双模式"]'::jsonb,
  "programsJson" = '[{"name":"Institute for the Liberal Arts（ILA）国际教养 BA","level":"undergraduate","description":"全部以英语授课的文理学位；分三个反思会集中（Japanese Society and Global Culture、Japanese Business and the Global Economy、Japanese Politics and Global Studies），各集中挂靠六个学部，以成绩优先分派，入学后不可变更。","features":["英语授课","每年约50名","三方向集中","入学后不改集中"]}]'::jsonb,
  "examFormat" = '2027年度：4月入学申请期2026-08-03起至09-01 17:00（JST），发表2026-11-04，首期缴费截止2026-12-02；9月入学申请期2027-01-12起至02-09 17:00，发表2027-04-21，首期缴费截止2027-05-20。申请期内全程在线上传，补交材料与线上推荐信须在截止前由推荐人提交；审查后发送视频面试录音邀请，在指定时期内完成。一名学生每轮只能选择第一年入学或第三年插班其中之一。',
  "sguNote" = 'ILA每年招约50名新生；4月与9月入学两轮受理中；转学名额有限需先邮件确认。',
  website = 'https://ila.doshisha.ac.jp/ila/en/admissions/'
WHERE slug = 'doshisha';
COMMIT;
