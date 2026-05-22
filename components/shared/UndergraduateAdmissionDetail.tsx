import { undergraduateAdmissions, undergraduateExamOverview } from "@/data/university-faculties";

export function UndergraduateAdmissionDetail() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-primary-900 text-center">各大学 学部·学科·入试详细情报</h2>
        <p className="mt-3 text-center text-zinc-500">数据来源：各大学官网募集要项（2026年5月采集）· EJU参考分数基于名校志向塾/河合塾等予備校合格者数据</p>

        <div className="mt-10 space-y-4">
          {undergraduateAdmissions.map((uni) => (
            <details key={uni.universityId} className="group rounded-xl border border-zinc-200 bg-white hover:border-primary-200 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 select-none">
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${uni.type === "national" ? "bg-primary-100 text-primary-700" : "bg-accent-100 text-accent-700"}`}>
                    {uni.type === "national" ? "国立" : "私立"}
                  </span>
                  <h3 className="text-lg font-bold text-primary-900">{uni.universityName}</h3>
                  <span className="text-xs text-zinc-400 hidden sm:inline">{uni.faculties.length}个学部</span>
                </div>
                <span className="text-zinc-400 text-sm shrink-0 group-open:hidden">展开 ▼</span>
                <span className="text-zinc-400 text-sm shrink-0 hidden group-open:inline">收起 ▲</span>
              </summary>

              <div className="px-5 pb-5 border-t border-zinc-100 pt-4 space-y-5">
                {/* 入试制度概要 */}
                <div className="rounded-lg bg-zinc-50 p-4">
                  <h4 className="text-sm font-bold text-primary-900 mb-1">入试制度</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">{uni.admissionSystem}</p>
                </div>

                {/* EJU方针 + 参考分数 */}
                <div>
                  <h4 className="text-sm font-bold text-primary-900 mb-1">EJU利用方针</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">{uni.ejuPolicy}</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-4">
                  <h4 className="text-sm font-bold text-amber-800 mb-1">📊 EJU参考合格分数（予備校数据·参考值）</h4>
                  <p className="text-xs text-amber-700 leading-relaxed whitespace-pre-line">{uni.ejuReferenceScores}</p>
                </div>

                {/* 花费 */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-zinc-50 p-4">
                    <h4 className="text-sm font-bold text-primary-900 mb-2">学费</h4>
                    <div className="space-y-1 text-xs text-zinc-600">
                      <div className="flex justify-between"><span>检定料（出愿费）</span><strong>{uni.tuitionInfo.examFee}</strong></div>
                      <div className="flex justify-between"><span>入学料</span><strong>{uni.tuitionInfo.admissionFee}</strong></div>
                      <div className="flex justify-between"><span>年间授业料</span><strong>{uni.tuitionInfo.annualTuition}</strong></div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-zinc-50 p-4">
                    <h4 className="text-sm font-bold text-primary-900 mb-2">月额生活费</h4>
                    <div className="space-y-1 text-xs text-zinc-600">
                      <div className="flex justify-between"><span>住宿</span><strong>{uni.livingCosts.monthlyRent}</strong></div>
                      <div className="flex justify-between"><span>饮食</span><strong>{uni.livingCosts.monthlyFood}</strong></div>
                      <div className="flex justify-between"><span>光热水电</span><strong>{uni.livingCosts.monthlyUtilities}</strong></div>
                      <div className="flex justify-between border-t border-zinc-200 pt-1 mt-1"><span>月合计</span><strong className="text-primary-900">{uni.livingCosts.monthlyTotal}</strong></div>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">{uni.livingCosts.note}</p>
                  </div>
                </div>

                {/* 4年总费用 */}
                <div className="rounded-lg bg-primary-50 p-4">
                  <h4 className="text-sm font-bold text-primary-900 mb-1">💰 本科4年总费用估算</h4>
                  <p className="text-sm text-primary-800 font-semibold">{uni.totalFourYearCost}</p>
                </div>

                {/* 留学生定员 */}
                <div className="rounded-lg bg-zinc-50 p-4">
                  <h4 className="text-sm font-bold text-primary-900 mb-1">留学生定员/合格实绩</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">{uni.internationalStudentQuota}</p>
                </div>

                {/* 出愿书类 */}
                <div className="rounded-lg bg-zinc-50 p-4">
                  <h4 className="text-sm font-bold text-primary-900 mb-1">出愿必要书类</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">{uni.applicationDocuments}</p>
                </div>

                {/* 考试日程 */}
                {uni.examSchedule && (
                  <div className="rounded-lg bg-zinc-50 p-4">
                    <h4 className="text-sm font-bold text-primary-900 mb-1">出愿·考试日程</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">{uni.examSchedule}</p>
                  </div>
                )}

                {/* 学部一览 */}
                <div>
                  <h4 className="text-sm font-bold text-primary-900 mb-3">
                    学部/学科一览（{uni.faculties.length}个学部）
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {uni.faculties.map((f) => (
                      <div key={f.nameJa} className="rounded-lg bg-zinc-50 p-4">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h5 className="text-sm font-bold text-primary-900">{f.nameJa}</h5>
                          {f.hasInternationalAdmission ? (
                            <span className="rounded bg-green-100 px-1.5 py-0.5 text-xs text-green-700 shrink-0">留学生OK</span>
                          ) : (
                            <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-700 shrink-0">一般入試</span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 mb-2">{f.name}</p>

                        {/* 学科 */}
                        <div className="flex flex-wrap gap-1 mb-2">
                          {f.departments.map((d) => (
                            <span key={d} className="rounded bg-white px-1.5 py-0.5 text-xs text-zinc-600 border border-zinc-200">{d}</span>
                          ))}
                        </div>

                        {/* 入试方式 & EJU要求 */}
                        <div className="space-y-1 text-xs text-zinc-600">
                          <div><span className="text-zinc-400">入试：</span>{f.admissionType}</div>
                          {f.ejukRequirements && (
                            <div><span className="text-zinc-400">EJU：</span>{f.ejukRequirements}</div>
                          )}
                          {f.ejuScoreReference && (
                            <div><span className="text-amber-700 font-medium">🎯 目标分数：</span><span className="text-amber-700">{f.ejuScoreReference}</span></div>
                          )}
                          {f.englishRequirements && (
                            <div><span className="text-zinc-400">英语：</span>{f.englishRequirements}</div>
                          )}
                          {f.acceptanceRate && (
                            <div><span className="text-zinc-400">竞争度：</span><span className="text-accent-600">{f.acceptanceRate}</span></div>
                          )}
                        </div>

                        {f.notes && (
                          <p className="mt-2 text-xs text-amber-700 bg-amber-50 rounded p-1.5">{f.notes}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 注意事项 */}
                <div>
                  <h4 className="text-sm font-bold text-primary-900">⚠️ 注意事项</h4>
                  <ul className="mt-1.5 space-y-1">
                    {uni.keyNotes.map((n) => (
                      <li key={n} className="text-xs text-zinc-600 flex gap-2">
                        <span className="text-accent-400 shrink-0">•</span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 数据来源 */}
                <div>
                  <h4 className="text-sm font-bold text-primary-900">数据来源</h4>
                  <ul className="mt-1.5 space-y-0.5">
                    {uni.dataSources.map((url) => (
                      <li key={url} className="text-xs text-zinc-500">
                        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 hover:underline break-all">{url}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* 入试制度总览 */}
        <div className="mt-16 rounded-xl bg-primary-50 p-8">
          <h3 className="text-xl font-bold text-primary-900">{undergraduateExamOverview.title}</h3>
          <p className="mt-2 text-sm text-zinc-600">{undergraduateExamOverview.description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {undergraduateExamOverview.examTypes.map((exam) => (
              <div key={exam.name} className="rounded-lg bg-white p-4 border border-zinc-200">
                <h4 className="text-sm font-bold text-primary-900">{exam.name}</h4>
                <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{exam.description}</p>
                {exam.requirements && (
                  <div className="mt-2 rounded bg-zinc-50 p-2">
                    <p className="text-xs text-zinc-500"><span className="font-semibold">要求：</span>{exam.requirements}</p>
                  </div>
                )}
                {exam.ejuDates && (
                  <p className="mt-1 text-xs text-zinc-400">{exam.ejuDates}</p>
                )}
              </div>
            ))}
          </div>

          {/* 标准时间线 */}
          {undergraduateExamOverview.timeline && (
            <div className="mt-8">
              <h4 className="text-lg font-bold text-primary-900">{undergraduateExamOverview.timeline.title}</h4>
              <div className="mt-4 space-y-3">
                {undergraduateExamOverview.timeline.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">{i + 1}</span>
                    <span className="text-sm text-zinc-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
