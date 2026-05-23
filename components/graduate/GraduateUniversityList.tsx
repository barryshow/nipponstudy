"use client";

import { useState, useEffect, useMemo } from "react";
import { getAllGraduateUniversities, searchGraduateUniversities, type CombinedGraduateUniversity } from "@/lib/graduate-data";
import { GraduateSearchFilter, type UniversityTypeFilter } from "./GraduateSearchFilter";
import { GraduateUniversityCard } from "./GraduateUniversityCard";

export function GraduateUniversityList() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<UniversityTypeFilter>("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const allUniversities = useMemo(() => getAllGraduateUniversities(), []);

  // 根据query和typeFilter筛选
  const filteredUniversities = useMemo(() => {
    let list = allUniversities;

    // 类型筛选
    if (typeFilter !== "all") {
      list = list.filter((u) => u.type === typeFilter);
    }

    // 文本搜索
    if (query.trim().length >= 1) {
      list = searchGraduateUniversities(query, list);
    }

    return list;
  }, [query, typeFilter, allUniversities]);

  // 搜索时自动展开匹配项
  useEffect(() => {
    if (query.trim().length >= 1) {
      const ids = new Set(filteredUniversities.map((u) => u.id));
      setExpandedIds(ids);
    } else {
      setExpandedIds(new Set());
    }
  }, [query, filteredUniversities]);

  // 处理来自URL hash的锚点展开
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && allUniversities.some((u) => u.id === hash)) {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        next.add(hash);
        return next;
      });
      // 滚动到锚点
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        // 如果目标在<details>中，手动展开
        const el = document.getElementById(hash);
        if (el?.tagName === "DETAILS") {
          (el as HTMLDetailsElement).open = true;
        }
      }, 100);
    }
  }, [allUniversities]);

  // 无结果时显示数量仍反映筛选后的
  const displayUniversities = filteredUniversities;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-primary-900 text-center">各大学院 研究科·项目·教授</h2>
        <p className="mt-3 text-center text-zinc-500">
          数据来源：各大学官网募集要项（2026年采集）· 点击展开查看研究科、专攻与教授信息
        </p>

        {/* 搜索筛选栏 */}
        <div className="mt-6">
          <GraduateSearchFilter
            query={query}
            typeFilter={typeFilter}
            resultCount={displayUniversities.length}
            totalCount={allUniversities.length}
            onQueryChange={setQuery}
            onTypeFilterChange={setTypeFilter}
          />
        </div>

        {/* 大学列表 */}
        <div className="mt-4 space-y-2">
          {displayUniversities.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-zinc-400">未找到匹配的大学</p>
              <p className="mt-1 text-xs text-zinc-300">试试其他关键词或调整类型筛选</p>
            </div>
          ) : (
            displayUniversities.map((uni) => (
              <GraduateUniversityCard
                key={uni.id}
                university={uni}
                expanded={expandedIds.has(uni.id)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}