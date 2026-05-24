"use client";

import { useState, useEffect } from "react";

interface Props {
  query: string;
  regionFilter: string;
  resultCount: number;
  totalCount: number;
  regions: { key: string; label: string; count: number }[];
  onQueryChange: (query: string) => void;
  onRegionFilterChange: (filter: string) => void;
}

export function LanguageSchoolSearchFilter({
  query,
  regionFilter,
  resultCount,
  totalCount,
  regions,
  onQueryChange,
  onRegionFilterChange,
}: Props) {
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => { setLocalQuery(query); }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localQuery !== query) onQueryChange(localQuery);
    }, 150);
    return () => clearTimeout(timer);
  }, [localQuery, query, onQueryChange]);

  return (
    <div className="space-y-3">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="搜索语言学校名、地区、课程..."
          className="w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-10 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-colors"
        />
        {localQuery && (
          <button onClick={() => setLocalQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-zinc-500">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        <button
          onClick={() => onRegionFilterChange("all")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            regionFilter === "all"
              ? "bg-primary-600 text-white"
              : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
          }`}
        >
          全部（{totalCount}）
        </button>
        {regions.map((r) => (
          <button
            key={r.key}
            onClick={() => onRegionFilterChange(r.key)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              regionFilter === r.key
                ? "bg-primary-600 text-white"
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
            }`}
          >
            {r.label}（{r.count}）
          </button>
        ))}
        {regionFilter !== "all" && (
          <span className="ml-auto text-xs text-zinc-400">
            显示 {resultCount}/{totalCount} 所学校
          </span>
        )}
      </div>
    </div>
  );
}