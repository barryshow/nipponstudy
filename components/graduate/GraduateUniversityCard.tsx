"use client";

import { type CombinedGraduateUniversity } from "@/lib/graduate-data";

const typeConfig: Record<string, { label: string; className: string }> = {
  national: { label: "国立", className: "bg-blue-100 text-blue-700" },
  public: { label: "公立", className: "bg-emerald-100 text-emerald-700" },
  private: { label: "私立", className: "bg-amber-100 text-amber-700" },
};

interface Props {
  university: CombinedGraduateUniversity;
  expanded?: boolean;
}

export function GraduateUniversityCard({ university: uni, expanded }: Props) {
  const tc = typeConfig[uni.type] ?? typeConfig.national;

  return (
    <details
      id={uni.id}
      open={expanded}
      className="group rounded-xl border border-zinc-200 bg-white hover:border-primary-200 transition-colors scroll-mt-20"
    >
      {/* ======== 摘要行 ======== */}
      <summary className="cursor-pointer flex items-center gap-3 p-4 select-none">
        {/* 类型标签 */}
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${tc.className}`}>
          {tc.label}
        </span>

        {/* 校名 */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-primary-900">{uni.name}</h3>
            <span className="text-xs text-zinc-400">{uni.nameJa}</span>
            {uni.ranking && (
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-500">{uni.ranking}</span>
            )}
            <span className="text-xs text-zinc-300">· {uni.location}</span>
          </div>
          {/* 特征标签（最多4个） */}
          <div className="mt-1 flex flex-wrap gap-1">
            {uni.features.slice(0, 4).map((f) => (
              <span key={f} className="rounded bg-zinc-50 px-1.5 py-0.5 text-[11px] text-zinc-500">{f}</span>
            ))}
          </div>
        </div>

        {/* 右侧信息 */}
        <div className="shrink-0 flex items-center gap-3">
          <span className="text-xs text-zinc-400">
            {uni.gradSchoolCount}个研究科{uni.hasDetail ? " · 教授数据" : ""}
          </span>
          <span className="text-zinc-300 text-sm group-open:hidden">▸</span>
          <span className="text-zinc-300 text-sm hidden group-open:inline">▾</span>
        </div>
      </summary>

      {/* ======== 展开内容 ======== */}
      <div className="px-4 pb-4 border-t border-zinc-100 pt-4 space-y-4">
        {/* 亮点 */}
        <p className="text-sm text-primary-800 font-medium">{uni.highlights}</p>

        {/* 基本条件标签 */}
        <div className="flex flex-wrap gap-2">
          <Tag>学费：{uni.tuition}</Tag>
          <Tag>日语：{uni.japaneseRequirement}</Tag>
          <Tag>英语：{uni.englishRequirement}</Tag>
          <Tag>GPA：{uni.gpaRequirement}</Tag>
        </div>

        {/* 一般入试 + 研究生制度 */}
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-primary-50 p-3">
            <div className="text-xs font-semibold text-primary-800">📝 一般入试</div>
            <p className="mt-1 text-xs text-primary-700 leading-relaxed">{uni.examFormat}</p>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3">
            <div className="text-xs font-semibold text-zinc-700">🔬 研究生（预科）制度</div>
            <p className="mt-1 text-xs text-zinc-600">{uni.researchStudent}</p>
          </div>
        </div>

        {/* SGU备注 */}
        {uni.sguNote && (
          <div className="rounded-lg bg-amber-50 p-2">
            <p className="text-xs text-amber-700">⚠️ {uni.sguNote}</p>
          </div>
        )}

        {/* ======== 研究科详情 ======== */}
        {uni.hasDetail && uni.graduateDetail ? (
          <GraduateSchoolsDetail detail={uni.graduateDetail} />
        ) : (
          <GenericPrograms programs={uni.programs.filter(p => p.level === "graduate")} />
        )}

        {/* 官网链接 */}
        {uni.website && (
          <a href={uni.website} target="_blank" rel="noopener noreferrer" className="inline-block text-xs text-blue-600 hover:underline">
            官网 →
          </a>
        )}
      </div>
    </details>
  );
}

// ============================================================
// 研究科详情（有详细数据时）
// ============================================================

function GraduateSchoolsDetail({ detail }: { detail: import("@/data/university-graduate-programs").UniversityGraduateData }) {
  return (
    <div>
      <div className="text-sm font-bold text-primary-900 mb-3">
        研究科一览（{detail.graduateSchools.length}个）
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {detail.graduateSchools.map((gs) => (
          <div key={gs.name} className="rounded-lg bg-zinc-50 p-3">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h5 className="text-sm font-bold text-primary-900">{gs.name}</h5>
              {gs.hasEnglishProgram && (
                <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] text-blue-700">EN</span>
              )}
            </div>
            <p className="text-xs text-zinc-400 mb-2">{gs.nameJa}{gs.nameEn ? ` / ${gs.nameEn}` : ""}</p>

            {/* 专攻+教授 */}
            <div className="space-y-1.5">
              {gs.programs.map((prog) => (
                <div key={prog.name} className="rounded bg-white border border-zinc-200 p-2">
                  <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                    <span className="text-xs font-semibold text-primary-900">{prog.name}</span>
                    <span className="rounded bg-primary-50 px-1 py-0.5 text-[10px] text-primary-600">{prog.degree}</span>
                  </div>
                  {prog.description && (
                    <p className="text-[11px] text-zinc-500 mb-1.5">{prog.description}</p>
                  )}
                  {prog.professors.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {prog.professors.map((prof) => (
                        <span
                          key={prof.name}
                          className="inline-flex items-center gap-0.5 rounded bg-zinc-100 px-1.5 py-0.5 text-[11px] text-zinc-600"
                          title={`${prof.title} · ${prof.researchArea}`}
                        >
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
            <div className="mt-2 flex items-center gap-3 text-[11px]">
              <span className="text-zinc-400">入学：{gs.intakeMonths.join("/")}</span>
              <a href={gs.facultyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">教员一览 →</a>
              <a href={gs.admissionUrl} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">募集要项 →</a>
            </div>
            {gs.notes && (
              <p className="mt-1.5 text-[11px] text-amber-700 bg-amber-50 rounded p-1.5">{gs.notes}</p>
            )}
          </div>
        ))}
      </div>

      {/* 数据来源 */}
      <div className="mt-3">
        <div className="text-xs font-semibold text-zinc-500 mb-1">数据来源</div>
        <ul className="space-y-0.5">
          {detail.dataSources.map((url) => (
            <li key={url} className="text-[11px] text-zinc-400">
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 hover:underline break-all">{url}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ============================================================
// 通用项目回退（无详细数据时）
// ============================================================

function GenericPrograms({ programs }: { programs: import("@/data/schools/universities").UniversityProgram[] }) {
  if (programs.length === 0) return null;
  return (
    <div>
      <div className="text-sm font-bold text-primary-900 mb-2">大学院项目</div>
      <div className="grid gap-2 sm:grid-cols-2">
        {programs.map((p) => (
          <div key={p.name} className="rounded-lg bg-zinc-50 p-3">
            <div className="text-sm font-semibold text-primary-900">{p.name}</div>
            <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{p.description}</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {p.features.map((f) => (
                <span key={f} className="rounded bg-accent-50 px-1.5 py-0.5 text-xs text-accent-600">{f}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// 辅助组件
// ============================================================

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">{children}</span>;
}