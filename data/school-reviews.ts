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
  isi: {
    checkedAt: "2026-11-02",
    scope: "已核对 2027–2028 官方长期课程收费与校区课程。此条展示东京校区：首年总费用 101.5–111.5 万日元，包含选考料、入学金、授课费、教材与设施管理费。其他申请资格与名额仍须按校区确认。",
    sources: [{ label: "ISI 2027 长期课程募集要项", url: "https://sm.isi-education.com/en/long/" }],
  },
};
