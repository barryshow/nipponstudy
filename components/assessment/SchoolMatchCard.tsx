import type { MatchedSchool } from "@/lib/assessment/types";
import { categoryDisplay, typeLabels } from "@/lib/assessment/labels";

interface Props {
  school: MatchedSchool;
}

export function SchoolMatchCard({ school }: Props) {
  const cat = categoryDisplay[school.category];

  return (
    <div className={`rounded-xl border-2 p-4 ${cat.className}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{school.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{school.nameJa}</p>
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold flex-shrink-0 ${
          school.category === "reach" ? "bg-red-100 text-red-700" :
          school.category === "match" ? "bg-yellow-100 text-yellow-700" :
          "bg-green-100 text-green-700"
        }`}>
          {cat.emoji} {cat.label}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
        <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-600">{school.region}</span>
        <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-600">{typeLabels[school.type]}</span>
        {school.isHighlySkilled && (
          <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-700">高度人才加分校</span>
        )}
        <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-500">难度 {school.difficultyScore}</span>
      </div>

      <div className="mt-3 space-y-1.5">
        {school.reasons.length > 0 && (
          <div>
            <p className="text-xs font-medium text-gray-600">匹配理由</p>
            <ul className="mt-0.5 space-y-0.5">
              {school.reasons.map((r, i) => (
                <li key={i} className="text-xs text-gray-600 flex gap-1">
                  <span className="text-primary-600 flex-shrink-0">+</span> {r}
                </li>
              ))}
            </ul>
          </div>
        )}
        {school.risks.length > 0 && (
          <div>
            <p className="text-xs font-medium text-orange-700">注意事项</p>
            <ul className="mt-0.5 space-y-0.5">
              {school.risks.map((r, i) => (
                <li key={i} className="text-xs text-orange-600 flex gap-1">
                  <span className="flex-shrink-0">!</span> {r}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {school.website && (
        <a href={school.website} target="_blank" rel="noopener noreferrer"
          className="mt-3 inline-block text-xs text-primary-600 hover:text-primary-800 underline">
          官网 →
        </a>
      )}
    </div>
  );
}