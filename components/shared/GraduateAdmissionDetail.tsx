import { universitiesGraduateData, universityResearcherDatabases, nationalDatabases } from "@/data/university-graduate-programs";
import { professorSearchGuide } from "@/data/university-admissions";

export function GraduateAdmissionDetail() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-primary-900 text-center">各大学院 研究科·修士/博士项目·教授</h2>
        <p className="mt-3 text-center text-zinc-500">数据来源：各大学官网募集要项（2026年5月采集）· 教授为代表性举例，完整名单请访问各校教员页面</p>

        <div className="mt-10 space-y-4">
          {universitiesGraduateData.map((uni) => (
            <details key={uni.universityId} className="group rounded-xl border border-zinc-200 bg-white hover:border-primary-200 transition-colors">
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 select-none">
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${uni.type === "national" ? "bg-primary-100 text-primary-700" : "bg-accent-100 text-accent-700"}`}>
                    {uni.type === "national" ? "国立" : "私立"}
                  </span>
                  <h3 className="text-lg font-bold text-primary-900">{uni.universityName}</h3>
                  <span className="text-xs text-zinc-400 hidden sm:inline">{uni.tier}</span>
                  <span className="text-xs text-zinc-400 hidden sm:inline">{uni.graduateSchools.length}个研究科</span>
                </div>
                <span className="text-zinc-400 text-sm shrink-0 group-open:hidden">展开 ▼</span>
                <span className="text-zinc-400 text-sm shrink-0 hidden group-open:inline">收起 ▲</span>
              </summary>

              <div className="px-5 pb-5 border-t border-zinc-100 pt-4 space-y-5">
                {/* 基本信息 */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <InfoCard label="入试总入口" value={uni.portalUrl} isLink />
                  <InfoCard label="教授检索" value={uni.professorSearchUrl} isLink />
                  <InfoCard label="检定料" value={uni.tuitionInfo.examFee} />
                  <InfoCard label="年间授业料" value={uni.tuitionInfo.annualTuition} />
                </div>

                {/* AAO/AAD */}
                {uni.aaoSystem && (
                  <div className="rounded-lg bg-amber-50 p-3">
                    <span className="text-xs font-semibold text-amber-800">
                      {uni.universityName === "京都大学" ? "⚠️ AAO事前审查制度" : "⚠️ AAD事前审查制度"}
                    </span>
                    <p className="mt-1 text-xs text-amber-700 leading-relaxed">{uni.aaoSystem}</p>
                  </div>
                )}

                {/* 学费详情 */}
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-600 bg-zinc-50 rounded-lg p-3">
                  <span>检定料：<strong>{uni.tuitionInfo.examFee}</strong></span>
                  <span>入学料：<strong>{uni.tuitionInfo.admissionFee}</strong></span>
                  <span>年间授业料：<strong>{uni.tuitionInfo.annualTuition}</strong></span>
                </div>

                {/* 研究科一览 */}
                <div>
                  <h4 className="text-sm font-bold text-primary-900 mb-3">
                    研究科一览（{uni.graduateSchools.length}个）
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {uni.graduateSchools.map((gs) => (
                      <div key={gs.name} className="rounded-lg bg-zinc-50 p-4">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="text-sm font-bold text-primary-900">{gs.name}</h5>
                          <div className="flex gap-1 shrink-0">
                            {gs.hasEnglishProgram && (
                              <span className="rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-700">EN</span>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-zinc-400 mb-2">{gs.nameJa}{gs.nameEn ? ` / ${gs.nameEn}` : ""}</p>

                        {/* 项目与教授 */}
                        <div className="space-y-2">
                          {gs.programs.map((p) => (
                            <div key={p.name} className="rounded bg-white border border-zinc-200 p-2.5">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-primary-900">{p.name}</span>
                                <span className="rounded bg-primary-50 px-1 py-0.5 text-xs text-primary-600 shrink-0">{p.degree}</span>
                                {p.nameEn && <span className="text-xs text-zinc-400 hidden sm:inline">{p.nameEn}</span>}
                              </div>
                              {p.description && (
                                <p className="text-xs text-zinc-500 mb-1.5">{p.description}</p>
                              )}
                              {p.professors.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {p.professors.map((prof) => (
                                    <span key={prof.name} className="inline-flex items-center gap-1 rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-600" title={`${prof.title} · ${prof.researchArea}`}>
                                      <span className="text-zinc-400">{prof.title}</span>
                                      <span>{prof.name}</span>
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* 入试/教员链接 */}
                        <div className="mt-3 flex items-center gap-3 text-xs">
                          <span className="text-zinc-400">入学：{gs.intakeMonths.join("/")}</span>
                          <a href={gs.facultyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">教员一览 →</a>
                          <a href={gs.admissionUrl} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline font-medium">募集要项 →</a>
                        </div>
                        {gs.notes && (
                          <p className="mt-2 text-xs text-amber-700 bg-amber-50 rounded p-1.5">{gs.notes}</p>
                        )}
                      </div>
                    ))}
                  </div>
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

        {/* 全研究者数据库索引 */}
        <div className="mt-16 rounded-xl bg-primary-50 p-8">
          <h3 className="text-xl font-bold text-primary-900">各大学研究者检索入口</h3>
          <p className="mt-2 text-sm text-zinc-600">教授名单为动态数据，每年变动。通过各校官方研究者数据库确认教授在籍状态、研究方向及是否招生。</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {universityResearcherDatabases.map((db) => (
              <a key={db.university} href={db.url} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white p-3 border border-zinc-200 hover:border-primary-200 transition-colors">
                <span className="text-xs font-bold text-primary-800">{db.university}</span>
                <p className="mt-0.5 text-xs text-zinc-500">{db.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* 全国研究者数据库 */}
        <div className="mt-6 rounded-xl bg-white p-8 border border-zinc-200">
          <h3 className="text-xl font-bold text-primary-900">全国研究者数据库</h3>
          <p className="mt-2 text-sm text-zinc-600">教授可能在不同年度调任、退休或不再招生。通过以下数据库交叉查询最新情况。</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {nationalDatabases.map((db) => (
              <a key={db.name} href={db.url} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-zinc-50 p-4 hover:bg-zinc-100 transition-colors">
                <span className="text-sm font-bold text-primary-900">{db.name}</span>
                <p className="mt-1 text-xs text-zinc-500">{db.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* 教授检索指南 */}
        <div className="mt-6 rounded-xl bg-primary-50 p-8">
          <h3 className="text-xl font-bold text-primary-900">{professorSearchGuide.title}</h3>
          <p className="mt-2 text-sm text-zinc-600">{professorSearchGuide.description}</p>

          <div className="mt-6">
            <h4 className="text-sm font-bold text-primary-900">检索技巧</h4>
            <ul className="mt-2 space-y-1.5">
              {professorSearchGuide.tips.map((tip) => (
                <li key={tip} className="text-sm text-zinc-600 flex gap-2">
                  <span className="text-accent-400 shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {professorSearchGuide.acceptanceCheckMethods && (
            <div className="mt-6">
              <h4 className="text-sm font-bold text-primary-900">各大学 教授受入状况确认方法</h4>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {professorSearchGuide.acceptanceCheckMethods.map((m) => (
                  <div key={m.university} className="rounded-lg bg-white p-3 border border-zinc-200">
                    <span className="text-xs font-bold text-primary-800">{m.university}</span>
                    <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{m.method}</p>
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

function InfoCard({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) {
  return (
    <div className="rounded-lg bg-zinc-50 p-2.5 min-w-0">
      <div className="text-xs text-zinc-400">{label}</div>
      {isLink ? (
        <a href={value} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-600 hover:underline break-all line-clamp-1">{value}</a>
      ) : (
        <div className="text-xs text-zinc-700 line-clamp-2">{value}</div>
      )}
    </div>
  );
}
