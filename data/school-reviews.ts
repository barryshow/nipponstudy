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
};
