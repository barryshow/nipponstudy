"use client";

import { type LanguageSchool } from "@/data/schools";

interface Props {
  school: LanguageSchool;
  expanded?: boolean;
}

export function LanguageSchoolCard({ school, expanded }: Props) {
  return (
    <details
      id={school.id}
      open={expanded}
      className="group rounded-xl border border-zinc-200 bg-white hover:border-primary-200 transition-colors scroll-mt-20"
    >
      {/* ======== 摘要行 ======== */}
      <summary className="cursor-pointer flex items-center gap-3 p-4 select-none">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-primary-900">{school.name}</h3>
            <span className="text-xs text-zinc-400">{school.nameJa}</span>
            <span className="text-xs text-zinc-300">· 📍 {school.location}</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {school.features.slice(0, 3).map((f) => (
              <span key={f} className="rounded bg-zinc-50 px-1.5 py-0.5 text-[11px] text-zinc-500">{f}</span>
            ))}
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-zinc-400">{school.programs.length}个课程</div>
            <div className="text-xs font-medium text-primary-600">{school.tuition}</div>
          </div>
          <span className="text-zinc-300 text-sm group-open:hidden">▸</span>
          <span className="text-zinc-300 text-sm hidden group-open:inline">▾</span>
        </div>
      </summary>

      {/* ======== 展开内容 ======== */}
      <div className="px-4 pb-4 border-t border-zinc-100 pt-4 space-y-4">
        {/* 亮点 */}
        <p className="text-sm text-primary-800 font-medium">{school.highlights}</p>

        {/* 学费详情 */}
        <div className="rounded-lg bg-zinc-50 p-3">
          <div className="text-xs font-semibold text-zinc-700 mb-1.5">💰 学费详情</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            <FeeItem label="入学金" value={school.tuitionBreakdown.enrollmentFee} />
            <FeeItem label="年学费" value={school.tuitionBreakdown.annualTuition} />
            <FeeItem label="教材费" value={school.tuitionBreakdown.materialsFee} />
            <FeeItem label="初年度合计" value={school.tuitionBreakdown.totalFirstYear} highlight />
          </div>
          <p className="mt-1.5 text-[11px] text-zinc-400">学费支付方式：{school.paymentTerm} · 可入学时期：{school.intake}</p>
        </div>

        {/* 课程一览 */}
        <div>
          <div className="text-sm font-bold text-primary-900 mb-2">课程一览</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {school.programs.map((p) => (
              <div key={p.name} className="rounded-lg bg-zinc-50 p-3">
                <div className="text-sm font-semibold text-primary-900">{p.name}</div>
                <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 费用详情 */}
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-primary-50 p-3">
            <div className="text-xs font-semibold text-primary-800">🎯 适合人群</div>
            <div className="mt-1 flex flex-wrap gap-1">
              {school.suitableFor.map((s) => (
                <span key={s} className="rounded bg-white px-1.5 py-0.5 text-[11px] text-primary-700">{s}</span>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3">
            <div className="text-xs font-semibold text-zinc-700">📋 基本信息</div>
            <ul className="mt-1 space-y-1 text-[11px] text-zinc-600">
              <li>签证要求：{school.visaRequirement}</li>
              <li>出勤要求：{school.attendanceRequirement}</li>
              <li>在籍时长：{school.duration}</li>
              <li>升专门学校最短：{school.minimumStudyForVocational}</li>
            </ul>
          </div>
        </div>

        {/* 特征 */}
        <div className="rounded-lg bg-zinc-50 p-3">
          <div className="text-xs font-semibold text-zinc-700 mb-1.5">✨ 学校特色</div>
          <div className="flex flex-wrap gap-1.5">
            {school.features.map((f) => (
              <span key={f} className="rounded bg-white px-2 py-1 text-[11px] text-zinc-600">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </details>
  );
}

function FeeItem({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded px-2 py-1 ${highlight ? "bg-primary-100" : "bg-white"}`}>
      <div className="text-[10px] text-zinc-400">{label}</div>
      <div className={`text-xs ${highlight ? "font-bold text-primary-800" : "text-zinc-700"}`}>{value}</div>
    </div>
  );
}