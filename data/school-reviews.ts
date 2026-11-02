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
};
