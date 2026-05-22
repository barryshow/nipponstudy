import type { ScoreBreakdown, MatchedSchool } from "@/lib/assessment/types";
import { SchoolMatchCard } from "./SchoolMatchCard";
import { DISCLAIMER, FEW_RESULTS_HINT, NO_RESULTS_HINT, NEXT_STEPS } from "@/lib/assessment/labels";

interface Props {
  breakdown: ScoreBreakdown;
  reach: MatchedSchool[];
  match: MatchedSchool[];
  safety: MatchedSchool[];
}

export function AssessmentResult({ breakdown, reach, match, safety }: Props) {
  return (
    <div className="mt-8 space-y-8">
      {/* 总分 */}
      <div className="rounded-xl bg-gradient-to-r from-primary-700 to-primary-800 p-6 text-white text-center">
        <p className="text-sm text-primary-200">综合评分</p>
        <p className="mt-1 text-4xl font-bold">{breakdown.total}<span className="text-lg font-normal text-primary-200"> / {breakdown.maxTotal}</span></p>
        <p className="mt-1 text-sm text-primary-200">仅供参考，不代表录取概率</p>
      </div>

      {/* 得分详情 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">得分明细</h3>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left font-medium text-gray-600">评分项</th>
                <th className="px-4 py-2 text-center font-medium text-gray-600 w-20">得分</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600 hidden sm:table-cell">说明</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {breakdown.items.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-4 py-2 text-gray-800">{item.label}</td>
                  <td className="px-4 py-2 text-center">
                    <span className="font-semibold text-primary-700">{item.score}</span>
                    <span className="text-gray-400">/{item.maxScore}</span>
                  </td>
                  <td className="px-4 py-2 text-gray-500 text-xs hidden sm:table-cell">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* 移动端说明 */}
        <div className="mt-2 space-y-1 sm:hidden">
          {breakdown.items.map((item, i) => (
            <p key={i} className="text-xs text-gray-500">
              <span className="font-medium text-gray-700">{item.label}</span>：{item.detail}
            </p>
          ))}
        </div>
      </div>

      {/* 冲刺 */}
      <SchoolCategorySection title="冲刺学校" subtitle="难度高于当前背景，建议作为冲刺目标" schools={reach} />

      {/* 稳妥 */}
      <SchoolCategorySection title="稳妥学校" subtitle="难度与当前背景接近，可作为主要申请对象" schools={match} />

      {/* 保底 */}
      <SchoolCategorySection title="保底学校" subtitle="难度低于当前背景，可作为保底选择" schools={safety} />

      {/* 下一步建议 */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <h3 className="font-semibold text-gray-900 mb-2">下一步建议</h3>
        <ul className="space-y-1.5">
          {NEXT_STEPS.map((step, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-600">
              <span className="text-primary-600 flex-shrink-0">{i + 1}.</span> {step}
            </li>
          ))}
        </ul>
      </div>

      {/* 免责声明 */}
      <div className="rounded-lg bg-orange-50 border border-orange-200 p-4">
        <p className="text-xs text-orange-700 leading-relaxed">{DISCLAIMER}</p>
      </div>
    </div>
  );
}

function SchoolCategorySection({ title, subtitle, schools }: { title: string; subtitle: string; schools: MatchedSchool[] }) {
  if (schools.length === 0) {
    return (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
        <p className="text-sm text-gray-400 italic">{NO_RESULTS_HINT}</p>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '0px' }}>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map(s => (
          <SchoolMatchCard key={s.id} school={s} />
        ))}
      </div>
      {schools.length < 3 && (
        <p className="mt-2 text-xs text-gray-400">{FEW_RESULTS_HINT}</p>
      )}
    </div>
  );
}