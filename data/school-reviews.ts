export interface SchoolReview {
  checkedAt: string;
  scope: string;
  sources: { label: string; url: string }[];
}

// Only reviewed fields are covered. A record here does not certify all admissions data.
export const schoolReviews: Record<string, SchoolReview> = {
  utokyo: {
    checkedAt: "2026-11-02",
    scope: "已核对现行学费与 PEAK 停招公告。本科年学费 642,960 日元，修士现行年学费 535,800 日元（法科大学院除外）；PEAK 不再招收 2027 新生。其余专业与 2027 出愿条件仍待逐项核对。",
    sources: [
      { label: "东京大学学费", url: "https://www.u-tokyo.ac.jp/en/prospective-students/tuition_fees.html" },
      { label: "PEAK 招生公告", url: "https://www.peak.c.u-tokyo.ac.jp/" },
    ],
  },
  "kyoto-u": {
    checkedAt: "2026-11-02",
    scope: "已核对现行收费：本科与一般大学院年学费 535,800 日元，入学金 282,000 日元；法科大学院另计。另核对 iUP 2027 要项：计划40名，9个学部参与；高年级主要以日语授课，并非全英文。出愿为2026-11-02至12-03 17:00（日本时间）。其他专业条件待核对。",
    sources: [{ label: "京都大学学费", url: "https://www.kyoto-u.ac.jp/en/current/how-to/tuition/tuition-and-fees" }, { label: "iUP 2027募集要项", url: "https://www.iup.kyoto-u.ac.jp/Application_Guidelines_for_October_2027_Enrollment.pdf" }],
  },
  tohoku: {
    checkedAt: "2026-11-02",
    scope: "已核对2027学费调整：2027年4月起入学、持留学在留资格的本科与修士新生年学费900,000日元；此前在籍学生本课程期间不变，博士及专业职学位课程不在本次调整范围。专业与出愿条件仍待核对。",
    sources: [{ label: "东北大学官方调整公告", url: "https://www.tohoku.ac.jp/japanese/newimg/newsimg/news20251201_info.pdf" }],
  },
  titech: {
    checkedAt: "2026-11-02",
    scope: "已核对理工学系费用页及2027年度私费外国人留学生特别选拔要项：本科/修士/博士年学费635,400日元、入学金282,000日元（费用可能调整）；该项学部选拔要求EJU日语290/450以上、理科三科310/400以上，TOEFL/IELTS可选提交。其余项目与研究生资料待核对。",
    sources: [
      { label: "东京科学大学理工学系费用", url: "https://admissions.isct.ac.jp/ja/013/student-life-and-careers/tuition" },
      { label: "东京科学大学2027私费外国人留学生特别选拔要项", url: "https://admissions.isct.ac.jp/plugins/cms/component_download_file.php?contentsDataId=&contentsId=&fileName=r9-guidelines-shihi&key=70c4d184bd628fd72ea51dfb40ef847e.pdf&pageId=3088&prevId=&type=1" },
    ],
  },
  "nagoya-u": {
    checkedAt: "2026-11-02",
    scope: "已核对G30 2027本科招生：10个本科、19个大学院全英文项目，入学时无最低日语要求；本科两轮申请为2026-11-02至11-19及2027-01-05至01-21（日本时间）。并核对现行本科/一般大学院年学费535,800日元、入学金282,000日元，以及研究生月费29,700日元。其余专业条件待核对。",
    sources: [
      { label: "名古屋大学G30 2027招生公告", url: "https://en.nagoya-u.ac.jp/news/articles/admissions-requirements-released-for-g30-undergraduate-programs-2027/" },
      { label: "名古屋大学G30本科2027日程", url: "https://admissions.g30.nagoya-u.ac.jp/admissions/undergraduate/" },
      { label: "名古屋大学学费", url: "https://life.gmc.nagoya-u.ac.jp/en/life-at-nu/tuition/" },
    ],
  },
  "osaka-u": {
    checkedAt: "2026-11-02",
    scope: "已核对大阪大学工学研究科2027年4月/10月国际生招生页：有英语硕士/博士与研究生申请要项；工学研究生须获得拟指导教员及学科/专攻负责人的批准。现行本科/一般大学院年学费535,800日元、入学金282,000日元，但校方说明2027年度金额将在入学手续前确定。旧的AAD与全校通用语言门槛表述不再作为2027依据。",
    sources: [
      { label: "大阪大学工学研究科国际生招生（2027）", url: "https://www.eng.osaka-u.ac.jp/en/entrance/f_admissions/" },
      { label: "大阪大学学费", url: "https://www.osaka-u.ac.jp/en/campus/tuition/tuition.html" },
    ],
  },
  "hokkaido-u": {
    checkedAt: "2026-11-02",
    scope: "已核对北海道大学生物医学科学工程研究科2027年硕士要项：医疗物理与医疗器械开发两项目，费用为入学金282,000日元、年学费535,800日元（均标为估算）。这些资料不代表北海道大学所有学院的2027条件；其余项目仍待核对。",
    sources: [{ label: "北海道大学生物医学科学工程研究科2027硕士要项", url: "https://www.med.hokudai.ac.jp/en/bme/admissions/doc/en_application_guidelines_MC_2027.04.pdf" }],
  },
  "kyushu-u": {
    checkedAt: "2026-11-02",
    scope: "已核对九州大学2027英语本科与IGSES国际修士的部分资料：英语本科包括共创学部、工学部四方向及农业资源环境项目，申请期为2026-12-07至12-11；IGSES国际修士为英语授课，2027年4月入学日程已公布。设计学府2027大学院费用为年535,800日元、入学金282,000日元（可能调整）。其他学院和项目待核对。",
    sources: [
      { label: "九州大学英语本科2027招生", url: "https://www.kyushu-u.ac.jp/en/admission/faculty/foreign/foreign10" },
      { label: "IGSES国际修士2027日程", url: "https://www.tj.kyushu-u.ac.jp/en/exam/master/master_apr.php" },
      { label: "九州大学设计学府2027要项", url: "https://www.design.kyushu-u.ac.jp/_cms_dir/wp-content/uploads/2026/03/01-Application-Guidelines-for-2027-Masters-Program-General-Entrance-ExaminationApril-or-October-2027-Admission.pdf" },
    ],
  },
  tsukuba: {
    checkedAt: "2026-11-02",
    scope: "已核对筑波大学2027入学留学生学费：2027年4月1日以后入学、持留学在留资格者年学费608,800日元（304,400日元/学期），入学金282,000日元。并核对TISS和TILES英语本科2027年9月入学：申请为2026-10-21至11-19 17:00（日本时间）。其他课程条件待核对。",
    sources: [
      { label: "筑波大学留学生学费调整", url: "https://www.tsukuba.ac.jp/news/20260324160000.html" },
      { label: "筑波大学TISS/TILES 2027要项与日程", url: "https://ac.tsukuba.ac.jp/en/examinations/application-guidelines/" },
      { label: "筑波大学2027留学生学费详情", url: "https://eng.ap-graduate.tsukuba.ac.jp/archive2026_sigma/course/sie/tlsi_doctor/announcement/" },
    ],
  },
  isi: {
    checkedAt: "2026-11-02",
    scope: "已核对 2027–2028 官方长期课程收费与校区课程。此条展示东京校区：首年总费用 101.5–111.5 万日元，包含选考料、入学金、授课费、教材与设施管理费。其他申请资格与名额仍须按校区确认。",
    sources: [{ label: "ISI 2027 长期课程募集要项", url: "https://sm.isi-education.com/en/long/" }],
  },
  waseda: {
    checkedAt: "2026-11-02",
    scope: "已核对2027英语本科的6个学部与专业：SPSE、TAISI、SILS、JCulP、基础理工、创造理工。英语本科在申请时不要求日语，材料随学部和教育体系而异；除SILS春季入学外，9月入学项目通常在1—2月申请。研究生、日语授课项目、费用与其他旧字段仍待逐项核对。",
    sources: [
      { label: "早稻田大学英语本科项目", url: "https://www.waseda.jp/inst/admission/en/undergraduate/english/" },
      { label: "早稻田大学国际招生FAQ", url: "https://www.waseda.jp/inst/admission/en/undergraduate/faq/" },
    ],
  },
  keio: {
    checkedAt: "2026-11-02",
    scope: "已核对经济学部PEARL 2027年9月入学：英语授课BA、4年制、约100人、仅书面材料审查且不设面试；须提交IB或SAT及TOEFL iBT或IELTS。三期申请为2026-10-21至12-02、2026-12-04至2027-01-27、2027-02-24至04-07。GIGA确为英语本科，但本批未核定其2027日程与费用；其余项目待核对。",
    sources: [
      { label: "庆应PEARL 2027招生要项", url: "https://www.keio.ac.jp/en/admissions/faculty/examinations/pearl/" },
      { label: "庆应国际生本科英语项目", url: "https://www.keio.ac.jp/en/admissions/international-student/" },
    ],
  },
  sophia: {
    checkedAt: "2026-11-02",
    scope: "已核对2027英语本科：FLA、SPSF，以及计划2027年4月启动的DGTech。FLA首年约1,669,000日元、SPSF首年约1,645,000日元；均自第二年起约1,442,000日元。FLA与SPSF均为书类审查，材料包括TOEFL/IELTS及指定标准化成绩；其他本科、大学院和旧字段待核对。",
    sources: [
      { label: "上智大学2027英语项目公告", url: "https://adm.sophia.ac.jp/eng/news/english-taught/2027-intake-admission-inform-all-english-taught-programs-now-available/" },
      { label: "上智大学2027英语本科快速指南", url: "https://adm.sophia.ac.jp/assets/uploads/sites/2/2026/04/SophiaUni_Japan_AdmissionsInformation2027-1.pdf" },
    ],
  },
  ritsumei: {
    checkedAt: "2026-11-02",
    scope: "已核对2027英语本科的GLA、JDP、GS、CRPS、ISSE五个项目及其项目制费用。GS首年1,669,200日元、CRPS首年1,561,600日元、ISSE首年2,001,600日元（均含入学金）；资格、材料、语言证明和日期按项目申请手册确认。日语授课项目与大学院待核对。",
    sources: [
      { label: "立命馆英语本科项目FAQ", url: "https://en.ritsumei.ac.jp/e-ug/faq_contact/" },
      { label: "立命馆2027英语本科费用", url: "https://en.ritsumei.ac.jp/e-ug/financial_info/fees.html/" },
      { label: "立命馆2027申请文件", url: "https://en.ritsumei.ac.jp/e-ug/apply/download/download.html/" },
    ],
  },
  meiji: {
    checkedAt: "2026-11-02",
    scope: "已核对2027年9月入学SGJS英文赛道（明治本科唯一全英文项目）：定员10名、不要求日语、不限国籍；2026学年起停止4月入学。日程（预审2027-01-04、网申02-04至02-17、文件02-24、面试05-22、结果06-08）、选拔费35,000+1,045日元、2027届学费（首期893,000日元，2028-2030学年年额1,373,500/1,378,500/1,413,500日元）与英语成绩门槛（TOEFL iBT 80/4.0、IELTS 6.0、剑桥169+、SAT R27+W28、ACT 18）均按官方要项。其余学部与大学院待核对。",
    sources: [
      { label: "明治英文赛道招生页", url: "https://www.meiji.ac.jp/cip/english/undergraduate/nippon/englishtrack/admissions.html" },
      { label: "明治2027年9月入学要项PDF", url: "https://www.meiji.ac.jp/cip/english/undergraduate/nippon/englishtrack/glqts00000002hta-att/a1793259032270.pdf" },
    ],
  },
  rikkyo: {
    checkedAt: "2026-11-02",
    scope: "已核对PEACE 2027一般申请（ICC、国际商务法Global Program、GLAP各10名，4月与9月入学合计）：APR期2026-11-06至11-20、SEP期2027-01-18至02-01，申请费15,000+620日元；校方2027学年学费与2026持平（IBL 1,271,000/ICC 1,178,000/GLAP 1,900,000日元/年），首年合计按官方表估算（1,474,500/1,391,500/2,103,500日元）。资格线(a)-(j)与英语替代线（TOEFL 94/IELTS 6.5）按2027指南。NEXUS为指定高中限定。其余学部与大学院待核对。",
    sources: [
      { label: "立教PEACE与NEXUS页面", url: "https://english.rikkyo.ac.jp/admission/peace-and-nexus.html" },
      { label: "立教PEACE 2027申请指南PDF", url: "https://www.rikkyo.ac.jp/admissions/undergraduate/guidelines/mknpps000001yiyx-att/mknpps000001zh6g.pdf" },
      { label: "立教2027学年学费PDF", url: "https://english.rikkyo.ac.jp/admission/dn4ddm0000000868-att/academicfees_2027.pdf" },
    ],
  },
  hosei: {
    checkedAt: "2026-11-02",
    scope: "已核对EBDP四项目2027年秋季统一申请：申请期2027-02-22至03-05（原Period I/II合并），两阶段选拔（书审+全员在线面试，SCOPE面试05-15、GBP/IGESS 05-16），选拔费35,000+1,100日元，名额GBP 20/SCOPE 20/IGESS 30/GIS-秋季10；2027年度学费GIS首年1,632,000日元、IGESS/GBP/SCOPE首年各1,494,000日元。各项目英语门槛按指南（GIS 90/7.0、GBP与SCOPE 80/6.0、IGESS须提交但不设线）。其余学部与大学院待核对。",
    sources: [
      { label: "法政EBDP页面", url: "https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/" },
      { label: "法政GBP 2027秋季申请指南PDF（校方指定申请门户）", url: "https://www.guide.52school.com/export/sites/default/guidance/net-hosei-ebdp/gid/pdf/2027_GBP_0_Application-Guidelines_20261030.pdf" },
      { label: "法政2027年度入学者学费PDF", url: "https://www.hosei.ac.jp/application/files/8617/7932/3595/2027.pdf" },
      { label: "法政GBP 2027指南公告", url: "https://gbp.hosei.ac.jp/2026/08/10/application-guidelines2025-2-2/" },
    ],
  },
  doshisha: {
    checkedAt: "2026-11-02",
    scope: "已核对ILA国际教养BA 2027：4月入学申请2026-08-03至09-01、9月入学2027-01-12至02-09（17:00 JST截止），申请费15,000日元，发表2026-11-04/2027-04-21；年额1,194,000日元（首年含入学金200,000+学费824,000+设施费170,000）；英语门槛TOEFL iBT 85/4.5、IELTS 6.5、Duolingo 120、ACT English 22、Digital SAT EBRW 560；每年约50名、三个concentration入学后不可变更。其余学部与大学院待核对。",
    sources: [
      { label: "同志社ILA招生页", url: "https://ila.doshisha.ac.jp/ila/en/admissions/" },
      { label: "同志社ILA 2027申请指南PDF", url: "https://ila.doshisha.ac.jp/files/ila/page/application%20guide.pdf" },
      { label: "同志社ILA学费与奖学金页", url: "https://ila.doshisha.ac.jp/ila/en/admissions/fees_scholarships.html" },
    ],
  },
  tus: {
    checkedAt: "2026-11-02",
    scope: "已核对2027学部外国留学生入试：分I/II期、书类/EJU/面试或口头试问综合评定（II期部分学部仅书类审查）；全部日语授课，理工类通常要求EJU日语、数学Course 2及指定理科。英语须交TOEFL iBT或TOEIC L&R但无统一合格线；检定费35,000+1,380日元。2027学部首年费用按学科为1,458,740–2,529,740日元。大学院与研究生制度待核对。",
    sources: [
      { label: "东京理科大学外国留学生入试", url: "https://www.tus.ac.jp/admissions/university/list/foreignstudents/index.html" },
      { label: "东京理科大学2027外国留学生募集要项PDF", url: "https://www.tus.ac.jp/admissions/uploads/2026/2027_foreign_student.pdf" },
      { label: "东京理科大学2027学部学费PDF", url: "https://www.tus.ac.jp/admissions/university/guideline/expense/pdf/2027_faculty.pdf" },
    ],
  },
  shibaura: {
    checkedAt: "2026-11-02",
    scope: "已核对IGP英语工程学学士2027秋季入学：预计9名、前两年共同基础后选机械/化学材料/电气电子/计算机通信/土木五方向；两轮申请2026-10-19至11-02、2027-02-15至03-06，2027年9月入学。须具高中数学和物理或化学背景；IELTS 6.0或TOEFL iBT 79（新量表4.0）以上，无EJU或日语要求。首年标准费用1,857,020日元。其他项目与大学院待核对。",
    sources: [
      { label: "芝浦工业大学IGP官网", url: "https://www.igp.shibaura-it.ac.jp/" },
      { label: "芝浦工业大学IGP 2027申请要项PDF", url: "https://files.microcms-assets.io/assets/428fc56e161c4c359fde62f62b13f659/cfb660d430384555bbcc57f49dfcb3c6/ApplicationGuidelines.pdf" },
      { label: "芝浦工业大学IGP学费PDF", url: "https://files.microcms-assets.io/assets/428fc56e161c4c359fde62f62b13f659/fd12e647417349cbb914398f8a17e76d/The_IGP_tuition_fee.pdf" },
    ],
  },
  denki: {
    checkedAt: "2026-11-02",
    scope: "已核对2027学部外国人留学生特别选拔：覆盖系统设计、未来科学、工学与理工学部，限报一个志愿；2026-08-21至08-24出愿、09-26考试、10-05放榜。报名时须持留学在留资格；日语作答，EJU日语和数学Course 2合计370/600以上且数学至少120。首年费用按学部为1,735,160–1,816,160日元，留学在留资格者另收年度100,000日元。大学院与研究生制度待核对。",
    sources: [
      { label: "东京电机大学外国人留学生特别选拔", url: "https://www.dendai.ac.jp/about/admission/undergraduate/ryugakusei.html" },
      { label: "东京电机大学2027外国人留学生募集要项PDF", url: "https://www.dendai.ac.jp/about/admission/undergraduate/e5vdec0000008k51-att/R9_gaikokujin_youkou_0723.pdf" },
    ],
  },
  kinki: {
    checkedAt: "2026-11-02",
    scope: "已核对2027学部外国人留学生入试：理工学部以材料、EJU与口头试问综合判定，须提交EJU日语、数学Course 2和理科，日语出题；前期考试2026-10-10、后期2027-02-20、后期结果2027-03-09，检定费32,000日元。2027学费尚未由校方学费页公布，未沿用旧费用区间；2027起大学院无单独外国留学生入试。其他学院和大学院条件待核对。",
    sources: [
      { label: "近畿大学2027留学生入试页面", url: "https://www.kindai.ac.jp/campus-life/international-exchange/exam/" },
      { label: "近畿大学2027学部留学生募集要项PDF", url: "https://www.kindai.ac.jp/files/campus-life/international-exchange/exam/department/entrance-exam-a.pdf" },
      { label: "近畿大学学费发布页", url: "https://www.kindai.ac.jp/campus-life/tuition-scholarships/tuition/" },
    ],
  },
  aoyama: {
    checkedAt: "2026-11-02",
    scope: "已核对2027学部外国留学生选拔：面向完成海外12年教育者，涵盖文学、教育人间科学、经济、法、经营、国际政治经济、综合文化政策、理工、社会信息等。理工以外资格咨询截至2026-07-21，理工截至09-02。2027学部入学金统一80,000日元、设施费并入学费、在籍基本料120,000日元/年；首年总额依学部/学科确认。全校统一GPA、JLPT、TOEFL/IELTS门槛均未获官方要项支持。大学院待核对。",
    sources: [
      { label: "青山学院大学外国留学生选拔", url: "https://www.aoyama.ac.jp/admission/undergraduate/examination/exam_foreign_student.html" },
      { label: "青山学院大学2027学费调整说明", url: "https://www.aoyama.ac.jp/life/expenses/tuition_revision/" },
      { label: "青山学院大学2027学部学费表PDF", url: "https://www.aoyama.ac.jp/wp-content/uploads/2026/05/2027%E5%AD%A6%E8%B2%BB%E3%80%80%E5%AD%A6%E9%83%A8%EF%BC%88Web%E6%8E%B2%E8%BC%89%EF%BC%89.pdf" },
    ],
  },
  chuo: {
    checkedAt: "2026-11-02",
    scope: "已核对2027外国留学生本科选拔：覆盖法、经济、商、三理工、文、综合政策、国际经营、国际信息、体育信息等；一般资格为外国国籍、境外12年教育及指定期次EJU，外语/EJU依学部和方式而异。检定费35,000+系统费1,350日元。首年费用：法1,413,700、经济1,375,700、商1,378,700、三理工各1,927,800、文1,360,700、综合政策1,680,900、国际经营1,538,300、国际信息1,631,200日元。全校统一JLPT、英语线与GPA均未获官方依据。大学院待核对。",
    sources: [
      { label: "中央大学2027外国留学生选拔要项PDF", url: "https://www.chuo-u.ac.jp/common_d/connect/admission/2027/special/12_1_6.pdf" },
      { label: "中央大学2027学部学费", url: "https://www.chuo-u.ac.jp/academics/fees/admission/faculties_new_student/" },
      { label: "中央大学特别入试入口", url: "https://www.chuo-u.ac.jp/connect/admission/special/guide/" },
    ],
  },
  nihon: {
    checkedAt: "2026-11-02",
    scope: "已核对2027年4月学部外国留学生统一要项：覆盖法、文理、经济、商、艺术、国际关系、体育科学、理工、生産工、工、牙、生物资源等；部分采用EJU，艺术/牙/生物资源等采用本校考试。首年费用按学部/学科制，例如法1,260,000、经济/商各1,240,000、理工1,690,000–1,730,000、艺术1,750,000–1,950,000日元。法与国际关系要求JLPT N2+；艺术可用JLPT N2+或指定EJU日语240+且记述35+。全校统一GPA和英语线未获官方依据。大学院待核对。",
    sources: [
      { label: "日本大学2027外国留学生选拔总要项PDF", url: "https://www.nihon-u.ac.jp/assets/202606080135418.pdf" },
      { label: "日本大学2027入试资料入口", url: "https://www.nihon-u.ac.jp/admission_info/guideline/digital_pamphlet/" },
    ],
  },
  toyo: {
    checkedAt: "2026-11-02",
    scope: "已核对2027年4月外国留学生在线入试：分Type A英语轨道和Type B日语轨道，可在境外线上流程报考。Type A英语线为TOEFL iBT 79（新量表4.5）/IELTS 6.0/TOEIC L&R 780；申请2026-09-22至09-25、2026-11-22公布、12-11截止手续，申请费10,000日元。2027首年纳付金为校方“予定”，按学部为1,265,000–1,730,000日元等。Global Track仍含日语科目，未表述为全程纯英语。全校统一JLPT、英语线与GPA未获官方依据。大学院待核对。",
    sources: [
      { label: "东洋大学2027外国留学生入试入口", url: "https://www.toyo.ac.jp/nyushi/international-student/" },
      { label: "东洋大学2027在线入试要项PDF", url: "https://www.toyo.ac.jp/nyushi/content/dam/toyowebstyle/admission/admission-data/international-student/requirements-online/apr/online-entry-exam_2027_apr_ja.pdf" },
      { label: "东洋大学2027学费概览", url: "https://teachers.nyushi.toyo.ac.jp/about/" },
    ],
  },
  human: {
    checkedAt: "2026-11-02",
    scope: "已核对官网长课页：2年/1年9月/1年6月/1年3月/1年课程首年均907,500日元，另收选考料27,500日元，官网另列9个月课程701,250日元；各课程总额1,732,500/1,526,250/1,320,000/1,113,750/907,500日元，首年费用含入学金、授课费与教材费（选修课教材另购）。入学期1/4/7/10月并对应不同课程，各期受理期与适用校区不同；页面注明按入学期日语水平条件可能不同。课程注明文部科学省认定申请中，可能调整。未将出勤阈值、企业内推或EJU辅导写为已核实事实。",
    sources: [{ label: "修曼日本语学校长课招生与费用", url: "https://hajl.athuman.com/long/admission/?code=110531" }],
  },
  arc: {
    checkedAt: "2026-11-02",
    scope: "仅核对ARC东京日本语学校（文京区后乐）2027年4月起含税费用：进学（含2年アドバンス）/就职课程各年限总额1,324,000–1,732,000日元；选考30,000、入学70,000、初回授课费816,000、第二回按残余年限缴纳，经校方认可可按6个月分纳。进学2年/1年9月/1年6月总额1,732,000/1,528,000/1,324,000，就职课程同额。教材费按教育课程在各学期开始时校内另购。该来源不支持大阪、京都或新宿等校外校区资料，亦未确认具体入学月和出勤率。",
    sources: [{ label: "ARC东京日本语学校2027年4月起费用", url: "https://arc.ac.jp/Tokyo/admission/schoolexpense202704/" }],
  },
  kyoshin: {
    checkedAt: "2026-11-02",
    scope: "已核对2027年4月入学期以后要项：全年含税979,000日元（检定3万、入学7万、学费68万、设施5万、活动/教材5万、保险/体检1万、消费税10%即8.9万）；半年首缴544,500、半年后434,500。官网列东京新宿/OLJ/DBC、名古屋北、びわこ、京都中央、大阪中央/なにわ、神户九校；课程一览列大学/大学院/专门学校、美术及短期方向，开设校区需另确认。1/4/7/10月入学，びわこ仅4/10月且1月无初级班。未将福冈、上野、宿舍或私塾等旧宣传写作已核实事实。",
    sources: [
      { label: "京进语言学院2027年4月以后招生要项PDF", url: "https://www.kla.ac/wp-content/uploads/2026/09/KLA%E5%8B%9F%E9%9B%86%E8%A6%81%E9%A0%852026%E5%B9%B48%E6%9C%88%EF%BC%88%E6%97%A5%E6%9C%AC%E8%AA%9E%EF%BC%89.pdf" },
      { label: "京进语言学院学费", url: "https://www.kla.ac/ja/admissions/tuition/" },
    ],
  },
  "shinjuku-gyoen": {
    checkedAt: "2026-11-02",
    scope: "已核对2027年4月以后进学课程最初12个月873,000日元（含选考22,000、入学80,000、授课685,000、教材64,000、保险12,000、健康管理10,000）；课程总额进学2年1,644,000/1年9月1,473,000/1年6月1,288,000/1年3月1,091,000。当前募集4月2年、7月1年9月、10月1年6月、1月1年3月课程，出愿期限依次为前年10月/2月/5月中旬/8月中旬。官网列十种考试的日语目安：进学2年A1相当、1年9月与1年6月A2相当、1年3月B1相当，无证书可面试确认。校址为公开资料页的新宿通り大橋ビル3F。未核实出勤率要求。",
    sources: [
      { label: "新宿御苑学院课程与招生", url: "https://gyoen.co.jp/attendcourses/" },
      { label: "新宿御苑学院学校信息", url: "https://gyoen.co.jp/school-information/" },
    ],
  },
  sendagaya: {
    checkedAt: "2026-11-02",
    scope: "已核对千驮谷集团当前Academic Japanese Course：4月2年或10月1年6月入学、文部科学省认定准备教育课程，并可配合EJU/JLPT及基础科目学习。官网现行费用页明确仅适用于2025年4月起入学者，首年896,000日元、2年全程1,666,000日元、1年6月全程1,281,000日元；2027费用未见单独公布，故不把该现行表当作2027承诺。校方说明10或11年学校教育背景者可通过准备教育课程取得大学报考资格。",
    sources: [{ label: "千驮谷Academic Japanese Course与现行费用", url: "https://group.jp-sji.org/en/sjs-2/" }],
  },
  kudanjapan: {
    checkedAt: "2026-11-02",
    scope: "已核对九段日本语学院2027年4月留学签长课：学习期1—2年、全年1/4/7/10月入学、每周20课时，可选上午日语会话或下午综合日语。申请资格为年满18岁、高中或以上毕业、JLPT N5相当以上；N5以下初学者当前不受理留学签申请。官网仅列注册、授课、设施维持和课外活动等缴费项目及流程，未公开2027长课金额，移除旧的约85万日元报价和具体出勤率断言。",
    sources: [{ label: "九段2027年4月留学签长课", url: "https://www.kudan-japanese-school.com/jp/visa/precollege.php" }],
  },
  unitus: {
    checkedAt: "2026-11-02",
    scope: "已核对优尼塔斯当前留学课程：东京与甲府两校均有升学/一般课程，4/7/10/1月分别对应2年（或1年）/1年9月/1年6月/1年3月。官网当前含税全年费用为甲府800,000、东京860,000日元，半年付款分别为465,000+375,000与495,000+405,000日元，但部分国籍可能不适用分期。费用页未标注为2027，故2027金额仍须等校方要项；申请资格为12年以上学校教育。",
    sources: [
      { label: "优尼塔斯课程、费用与付款说明", url: "https://www.unitas-ej.com/course/" },
      { label: "优尼塔斯入学期、校区与流程", url: "https://www.unitas-ej.com/admission/" },
    ],
  },
  meros: {
    checkedAt: "2026-11-02",
    scope: "已核对美罗斯现官网与2026费用图表：日本语综合课程全程总额为2年1,706,000、1年9月1,501,500、1年6月1,297,000、1年3月1,092,500、1年888,000日元；表中明确教材和外部考试费不含。官网尚未单列2027费用，故不将2026图表包装为2027报价。日本语综合课程为1/4/7/10月入学；准备教育课程为4/10月入学，面向本国教育年限不足12年的高中毕业者。旧的无来源美大合格宣传、统一出勤率与日语门槛已移除。",
    sources: [
      { label: "美罗斯课程费用（2026表）", url: "https://meros.ac.jp/course_info_menu/tuitionfee/" },
      { label: "美罗斯入学案内", url: "https://meros.ac.jp/admission/" },
      { label: "美罗斯准备教育课程", url: "https://meros.ac.jp/course_info_menu/pre_curriculum/" },
    ],
  },
  yoshida: {
    checkedAt: "2026-11-02",
    scope: "已核对吉田日本语学院留学签长课：进学课程为1年、1年3月、1年6月、1年9月或2年；一般课程为6个月至2年，均可1/4/7/10月入学。申请人须完成12年以上教育，进学课程1月入学须JLPT N3。官网当前费用为首年843,000日元（选考25,000、入学98,000、授课684,000、教育运营36,000），此后每6个月360,000日元；费用页未标注2027年度，故不作为2027报价承诺。",
    sources: [
      { label: "吉田日本语学院长课与申请条件", url: "https://yosida.com/japanese/intensive-japanese/long-term-study" },
      { label: "吉田日本语学院长课费用", url: "https://yosida.com/japanese/intensive-japanese/long-term-fees" },
    ],
  },
  toa: {
    checkedAt: "2026-11-02",
    scope: "已核对东亚学院留学生进学课程与现行费用：4/10月首年学业费用830,000日元（选考20,000、入学50,000、学费660,000、其他100,000），另列来日初期3个月宿舍及入寮费后，4/10月来日前纳总额1,050,000日元；次年度按半年380,000日元扣款。课程有4月2年、7月1年9月、10月1年6月、1月1年3月，官网提供升学材料和面试准备、中文支持及定期向经费支付人报告学习情况。页面未单列2027价格，也未公开统一出勤率门槛。",
    sources: [
      { label: "东亚学院留学生进学课程", url: "https://www.kazankai.org/toagakuin_jp/liuxue.html" },
      { label: "东亚学院入学金与学费", url: "https://www.kazankai.org/toagakuin_jp/liuxue/xuefei.html" },
    ],
  },
  "shinjuku-jls": {
    checkedAt: "2026-11-02",
    scope: "已核对新宿日本语学校（SNG）留学签平日课程：4月入学为1年或2年、10月入学为1年6月；现行合计分别为990,000、1,415,800、1,840,000日元。留学签原则上须完成中等教育、满足日语学习能力条件并证明经费支付能力；未将其简化为统一N5门槛。短期/其他在留资格课程每年1/4/7/10月开课，官网已发布2027年1/4/7月短期要项。长课费用页未标注为2027定价，出勤率具体门槛未核实。",
    sources: [
      { label: "新宿日本语学校申请、课程与费用", url: "https://www.sng.ac.jp/jp/admission/" },
      { label: "新宿日本语学校交通与校址", url: "https://www.sng.ac.jp/jp/contact/access/" },
      { label: "新宿日本语学校2027短期课程要项PDF", url: "https://www.sng.ac.jp/jp/download/short-term-program-application-guide.pdf" },
    ],
  },
  "osaka-ymca": {
    checkedAt: "2026-11-02",
    scope: "已核对大阪YMCA学院官网当前（2025年4月起）招生资料：进学日语科仅4月（1/2年）和10月（1年6月）入学，职业发展实用日语科为1/4/7/10月入学；两类课程均有1年、1年6月、2年，并各有不同费用与学时。进学科现行1年总额915,000日元，职业发展实用科875,000日元；1年以上课程可在手续前申请半年分纳。公开资料未标为2027费用，故不把现行价格当作2027承诺；统一N5与统一出勤率断言已移除。",
    sources: [
      { label: "大阪YMCA学院现行招生要项PDF", url: "https://osakaymca.ac.jp/nihongo/_src/22241913/obj20250729172258338177.pdf?v=1753777386265" },
      { label: "大阪YMCA学院学费与付款页", url: "https://osakaymca.ac.jp/nihongo/tuition/" },
      { label: "大阪YMCA学院常见问题", url: "https://osakaymca.ac.jp/nihongo/pg1430220.html" },
    ],
  },
  "kyoto-minsai": {
    checkedAt: "2026-11-02",
    scope: "已核对京都民际日语学校官网长课、申请流程与公开校规：进学课程（1年3月至2年）、就职课程（2年）、日语文化课程（2年）的入学月份和课程目的已更新；申请要求A1或150小时日语学习经历，升学还须12年正规教育。公开校规首年总额982,000日元，但未标为2027定价；第二年才可选择3/6/12个月分纳并加收手续费。95%出勤率只适用于神田静奖学金遴选，不再冒充通用签证底线。",
    sources: [
      { label: "京都民际日语学校长课", url: "https://kyotominsai.co.jp/ja/long-term-program" },
      { label: "京都民际日语学校申请与费用FAQ", url: "https://kyotominsai.co.jp/ja/long-term-program-faqs" },
      { label: "京都民际日语学校公开校规PDF", url: "https://www.kyotominsai.co.jp/cms/wp-content/uploads/2024/12/kisoku_ja.pdf" },
    ],
  },
  "kobe-commu": {
    checkedAt: "2026-11-02",
    scope: "已核对神户コミュニカ学院总合日语课程2027–2028官方资料：4/7/10/1月均可入学、学习期6至24个月，学校代办COE申请。首年按半年分列462,500与452,500日元，连同选考30,000和入学70,000的计划缴费为1,015,000日元；教材（每3个月约7,000–10,000）和保险另缴。校址为神户市中央区东町116-2、三宫站步行约7分钟。未核实统一日语或出勤率门槛。",
    sources: [
      { label: "神户コミュニカ学院2027–2028长课与费用", url: "https://www.communica-institute.org/longterm.html" },
      { label: "神户コミュニカ学院交通与校址", url: "https://www.communica-institute.org/access.html" },
    ],
  },
  "fukuoka-ymca": {
    checkedAt: "2026-11-02",
    scope: "已核对福冈YMCA天神校与七隈校的课程页：生活/就业日语为3个月至2年，进学日语为1年6月或2年，均可申请留学签；官网已公告受理2027年4月入学的进学日语课程。校方未在本批取得的官网页面公开2027长课费用表，故移除旧的约80万日元报价和统一出勤率断言。",
    sources: [{ label: "福冈YMCA日语课程与2027年4月公告", url: "https://fukuoka-ymca.sakura.ne.jp/japanese/" }],
  },
  "kumamoto-ymca": {
    checkedAt: "2026-11-02",
    scope: "已核对熊本YMCA学院全日制日语科：留学签为4月2年或10月1年6月，申请人须完成12年教育、原则具N5/A1相当证明，并保障留学费用。官网现行全程费用为2年1,500,000日元、1年6月1,150,000日元，留学签另有约13,000日元/年的24小时共济；费用页未标为2027，故2027金额待校方公布。",
    sources: [
      { label: "熊本YMCA学院日语科费用", url: "https://www.kumamoto-ymca.or.jp/nihongo-e/32672.html" },
      { label: "熊本YMCA学院日语科申请条件", url: "https://www.kumamoto-ymca.or.jp/nihongo-e/357.html" },
    ],
  },
  "hiroshima-ymca": {
    checkedAt: "2026-11-02",
    scope: "已核对广岛YMCA专门学校言语沟通科日语课程及其2026留学签要项：4月1年/2年、10月1年6月；要项要求12年教育、150小时日语学习与N5/J-TEST F级等，另有经费和保证人条件。2026年4月首年817,500日元、2027年度第二年697,500日元，但该表不等同于2027年新入学报价，故明确待校方发布。统一出勤率和“和平课程”宣传已移除。",
    sources: [
      { label: "广岛YMCA留学签日语课程2026要项PDF", url: "https://www.hymca.jp/jp/files/ryugaku_visa.pdf?v=202407" },
      { label: "广岛YMCA日语课程与校址", url: "https://www.hymca.jp/m/institution/result.php?ca=1" },
    ],
  },
  "yokohama-design": {
    checkedAt: "2026-11-03",
    scope: "已核对横滨设计学院的独立日本语学科，而非旧条目虚构的“日语+设计捆绑课程”。长期预备课程现行1年/1年6月/2年总额895,000/1,259,000/1,623,000日元，但官网标注自2024年4月适用，未将其冒充为2027价格；设计专门课须另行申请。",
    sources: [
      { label: "横滨设计学院日本语学科", url: "https://www.ydc.ac.jp/jpn/" },
      { label: "横滨设计学院日本语学科募集要项PDF", url: "https://www.ydc.ac.jp/wp-content/uploads/2026/03/%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%AD%A6%E7%A7%91%E5%8B%9F%E9%9B%86%E8%A6%81%E9%A0%85%EF%BC%88%E6%97%A5%E6%9C%AC%E8%AA%9E.pdf" },
    ],
  },
  "kyoto-genki": {
    checkedAt: "2026-11-03",
    scope: "旧称“京都GENKO日本语学校”无法核实，已按官网更正为GenkiJACS京都校。其公开课程为可自选周数的现场日语课程；官网未将其表述为可担保留学签的2年进学学校，因此删除了旧的年度学费、升学与签证承诺。",
    sources: [{ label: "GenkiJACS京都校课程介绍", url: "https://www.genkijacs.com/kyoto-school-intro.php" }],
  },
  "osaka-ecc": {
    checkedAt: "2026-11-03",
    scope: "已核对ECC国际外语专门学校日本语学科的2027资料下载页与校址。其为专门学校内的日本语学科，公开长课/短课与2027募集要项；官网说明正准备自2027年度起作为认定日本语教育机构运营。未以未逐项读取的PDF金额替代为虚构年费。",
    sources: [{ label: "ECC日本语学科2027资料下载", url: "https://japan.ecc.ac.jp/admission/download/" }],
  },
  "nagoya-international": {
    checkedAt: "2026-11-03",
    scope: "已核对名古屋国际日本语学校升学课程：公开当前首年747,000日元，含选考、入学、授课、社会学习、保险医疗和教材；页面未标为2027费用。删除旧的制造业就业、半年付款和统一日语门槛说法。",
    sources: [{ label: "名古屋国际日本语学校升学课程", url: "https://nagoyais.com/application-advancement-course/" }],
  },
  "nagoya-jls": {
    checkedAt: "2026-11-03",
    scope: "原名称无法与本地地址对应；按官网和地址更正为NSA日本语学校（名古屋市千种区萱场）。公开站点有募集要项入口，但本批未取得可核对的2027费用与具体课程表，故移除旧的80万报价、优良校和国籍比例等断言。",
    sources: [{ label: "NSA日本语学校官网", url: "https://japan-nsa.jp/" }],
  },
  "shizuoka-slis": {
    checkedAt: "2026-11-03",
    scope: "已核对学校法人静冈国际语言学院（袋井市）：进学2年课程4月入学、一般2年课程10月入学；官网当前进学2年首年1,246,000日元，教材另计，未标为2027费用。校方申请页同时列出毕业后约4年内等条件，旧校名、地址和78万报价均已纠正。",
    sources: [
      { label: "静冈国际语言学院课程与费用", url: "https://sils-japanese.com/course-fee/" },
      { label: "静冈国际语言学院入学案内", url: "https://sils-japanese.com/requirements-application/" },
    ],
  },
  "fukuoka-jls": {
    checkedAt: "2026-11-03",
    scope: "已核对福冈日本语学校：校址为福冈市南区清水，不在旧条目所称博多站步行圈；官网2026修订费用表按4/7/10/1月入学列出全程1,555,000至1,058,000日元，未标为2027费用。已删除九州大学目标班等无来源内容。",
    sources: [
      { label: "福冈日本语学校学校介绍", url: "https://www.fukuokaschool.com/fjls/profile/" },
      { label: "福冈日本语学校费用表PDF", url: "https://www.fukuokaschool.com/fjls/doc/dl/Fjls2025_Fee.pdf" },
    ],
  },
  "fukuoka-gaigo": {
    checkedAt: "2026-11-03",
    scope: "已按官网更正为福冈国际外语学院。公开首年示例987,700日元包含学费、设施、体检、保险与首6个月双人宿舍等项目，页面未标为2027费用；旧的推荐入学、就职方向及统一语言门槛无官方依据，均已移除。",
    sources: [{ label: "福冈国际外语学院概要与费用", url: "https://fukuoka-ifls.com/overview/" }],
  },
  "kumamoto-gaigo": {
    checkedAt: "2026-11-03",
    scope: "已更正为熊本外语专门学校日本语科：设进学2年和1年6月课程；2027资料显示首年分别865,000和830,000日元。旧的IT就职课程、统一N5和出勤率均未获证实，不再保留。",
    sources: [
      { label: "熊本外语专门学校日本语科", url: "https://www.kfla-nihongo.com/course-nihongo/" },
      { label: "熊本外语专门学校日本语科入学案内", url: "https://www.kfla-nihongo.com/course-nihongo/admissions/" },
    ],
  },
  "nagano-jls": {
    checkedAt: "2026-11-03",
    scope: "原条目更正为长野21日本语学院。官网当前首年674,000日元，2年/1年9月/1年6月课程分别于4/7/10月入学；申请要求12年教育、JLPT4级相当及150小时可证明日语学习经历。费用页未标为2027定价。",
    sources: [{ label: "长野21日本语学院募集要项", url: "https://www.nagano21jp.com/admission-guidelines/" }],
  },
  nishinihon: {
    checkedAt: "2026-11-03",
    scope: "已核对西日本国际教育学院的当前费用：首年843,000日元，2年4月课程全程1,581,000日元，4/7/10/1月均有对应课程。校址已从错误的博多区修正为福冈市东区香椎；全体学生最初6个月须入住指定宿舍。公开费用未标为2027。",
    sources: [{ label: "西日本国际教育学院学费", url: "https://www.miyatagakuen.ac.jp/%E5%AD%A6%E8%B2%BB%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" }],
  },
  "sendai-jls": {
    checkedAt: "2026-11-04",
    scope: "已按官网更正为仙台ランゲージスクール：正規コース定员440名，4月24个月、7月21个月、10月18个月、1月15个月四个入学期，分别须在前一年11/15、当年2/15、当年5/15、前一年9/15前准备材料；上课时段按分级测试分上午或下午。课程页未公开费用，旧的80万日元年费已删除。",
    sources: [
      { label: "仙台ランゲージスクール正規コース（英语）", url: "https://sendai-lang.com/english/japanese/regular/" },
    ],
  },
  "hokkaido-ir": {
    checkedAt: "2026-11-04",
    scope: "已按官网更正为北海道日本語学院札幌本校：升学课程1年6月/1年9月/2年，一般长课1年；现行首年909,000日元（选考30,000、入学66,000、设施等120,000、授课693,000），第二年依剩余学习期406,500—813,000日元。页面未标注为2027费用，旧地址与北海道大学目标班表述已移除。",
    sources: [
      { label: "北海道日本語学院 课程与费用（英语）", url: "https://h-nihongo.org/en/course-no-have-visa.html" },
    ],
  },
  "saitama-jls": {
    checkedAt: "2026-11-04",
    scope: "已按官网更正为埼玉日本語学校（学校法人東栄国際学園）：教育课程为進学2年課程（4月）与進学1年6か月課程（10月），学生定员278名；公开学生纳付金为入学金70,000、授课费600,000（1年）、设施费80,000、保险10,000、健康诊断10,000日元，教材与课外活动费含在授课费内。页面未标注2027年度金额。",
    sources: [
      { label: "埼玉日本語学校（学費・教育課程）", url: "https://www.s-jls.ac.jp/" },
    ],
  },
  "tsukuba-jls": {
    checkedAt: "2026-11-04",
    scope: "已按官网更正为日本つくば国際語学院：2年课程4月入学、1年6月课程10月入学，各定员108名；首年全缴665,000日元（选考20,000、入学金50,000全缴免除、授课600,000、其他45,000），分纳时为715,000日元；第二年2年课程645,000日元、1年6月课程322,500日元。公开页未标为2027费用。",
    sources: [
      { label: "日本つくば国際語学院 海外在住者课程与费用", url: "https://www.tlc.ac.jp/course-international" },
    ],
  },
  "hiroshima-jls": {
    checkedAt: "2026-11-04",
    scope: "原名“広島日本語学院”在法务省告示名录、日语教育振兴协会与学校官网均无法对应，已更正为东广岛市的HLA日本語学校：进学2年课程（4月，定员300名，需CEFR A1/N5）与进学1年6月课程（10月，定员200名，需CEFR A2/N4），须12年教育、18岁以上、150小时日语学习经历。募集要项现行首年798,400日元，要项未标为2027金额。",
    sources: [
      { label: "HLA日本語学校 官网", url: "https://www.hla201904.com/" },
      { label: "HLA日本語学校 入学案内", url: "https://www.hla201904.com/%E5%85%A5%E5%AD%A6%E6%A1%88%E5%86%85" },
      { label: "HLA日本語学校 学生募集要項PDF", url: "https://www.hla201904.com/_files/ugd/33bc59_5b21a9c1925a4f558651ccf2672d7a7f.pdf" },
      { label: "日语教育振兴协会 HLA日本語学校", url: "https://www.nisshinkyo.org/search/college.php?id=548" },
    ],
  },
  "okayama-jls": {
    checkedAt: "2026-11-04",
    scope: "原名“岡山日本語学院”无法对应官方实体，已更正为冈山市北区的岡山外語学院（学校法人アジアの風，文部科学省认定日语教育机构）：设进学2年（4月）、1年6月（10月）、1年课程。振兴协会公开全程纳付金2年1,555,000、1年6月1,196,500、1年838,000日元；入学需N5相当，选拔含书类、面试与适性测试。金额未标为2027。",
    sources: [
      { label: "岡山外語学院 官网", url: "https://okg-jp.com/" },
      { label: "日语教育振兴协会 岡山外語学院", url: "https://www.nisshinkyo.org/search/college.php?id=393" },
    ],
  },
  "kawasaki-jls": {
    checkedAt: "2026-11-04",
    scope: "川崎日本語学院确实列于法务省告示的日语教育机构名录，但本批未找到可访问的该校官网或公开课程与费用页；因此仅确认学校存在，旧的“约88万日元/年”、1/4/7/10月入学、统一出勤率与“品川/涩谷10分钟”等未获证实的表述已全部删除，改标“待校方公布”。",
    sources: [
      { label: "法务省告示 日语教育机构名录（川崎日本語学院在列）", url: "https://www.moj.go.jp/isa/content/001461992.pdf" },
    ],
  },
};
