"use client";

import { useState, useEffect } from "react";

export type UniversityTypeFilter = "all" | "national" | "public" | "private";

interface Props {
  query: string;
  typeFilter: UniversityTypeFilter;
  resultCount: number;
  totalCount: number;
  onQueryChange: (query: string) => void;
  onTypeFilterChange: (filter: UniversityTypeFilter) => void;
}

const filterOptions: { value: UniversityTypeFilter; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "national", label: "国立" },
  { value: "public", label: "公立" },
  { value: "private", label: "私立" },
];

export function GraduateSearchFilter({
  query,
  typeFilter,
  resultCount,
  totalCount,
  onQueryChange,
  onTypeFilterChange,
}: Props) {
  // 本地输入值用于即时UI响应，防抖后调用onQueryChange
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localQuery !== query) {
        onQueryChange(localQuery);
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [localQuery]);

  return (
    <div className="space-y-3">
      {/* 搜索输入框 */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="搜索大学名、研究科、专攻、教授…"
          className="w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-10 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-colors"
        />
        {localQuery && (
          <button
            onClick={() => setLocalQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-zinc-500"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* 类型筛选 + 结果计数 */}
      <div className="flex items-center gap-2 flex-wrap">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onTypeFilterChange(opt.value)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              typeFilter === opt.value
                ? "bg-primary-600 text-white"
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
        <span className="ml-auto text-xs text-zinc-400">
          {query || typeFilter !== "all"
            ? `显示 ${resultCount}/${totalCount} 所大学`
            : `共 ${totalCount} 所大学`}
        </span>
      </div>
    </div>
  );
}