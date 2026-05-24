"use client";

import { useState, useEffect, useMemo } from "react";
import { languageSchools, type LanguageSchool } from "@/data/schools";
import { LanguageSchoolSearchFilter } from "./LanguageSchoolSearchFilter";
import { LanguageSchoolCard } from "./LanguageSchoolCard";

// 地域分组
const regionGroups = [
  { key: "东京", label: "东京" },
  { key: "神奈川", label: "神奈川" },
  { key: "关东他", label: "关东他" },
  { key: "东京/大阪", label: "东京/大阪" },
  { key: "东京/山梨", label: "东京/山梨" },
  { key: "东京/京都/大阪/名古屋/福冈/神户", label: "全国多校区" },
  { key: "东京/大阪/京都", label: "东京/大阪/京都" },
  { key: "大阪", label: "大阪" },
  { key: "京都", label: "京都" },
  { key: "神户", label: "神户" },
  { key: "名古屋", label: "名古屋" },
  { key: "静冈", label: "静冈" },
  { key: "山梨", label: "山梨" },
  { key: "长野", label: "长野" },
  { key: "福冈", label: "福冈" },
  { key: "熊本", label: "熊本" },
  { key: "宫城", label: "宫城" },
  { key: "北海道", label: "北海道" },
  { key: "广岛", label: "广岛" },
  { key: "冈山", label: "冈山" },
  { key: "爱媛", label: "爱媛" },
  { key: "香川", label: "香川" },
  { key: "冲绳", label: "冲绳" },
  { key: "埼玉", label: "埼玉" },
  { key: "茨城", label: "茨城" },
  { key: "千叶", label: "千叶" },
];

function normalize(text: string): string {
  return text.toLowerCase().replace(/[()（）・/／,，\s-]+/g, "");
}

function getRegionBucket(region: string): string {
  if (region === "东京") return "东京";
  if (region === "神奈川") return "神奈川";
  if (region.includes("埼玉") || region.includes("茨城") || region.includes("千叶")) return "东京圈";
  if (region.includes("大阪") || region.includes("京都") || region.includes("神户")) return "关西";
  if (region.includes("名古屋") || region.includes("静冈") || region.includes("山梨") || region.includes("长野")) return "中部";
  if (region.includes("福冈") || region.includes("熊本") || region.includes("冲绳")) return "九州冲绳";
  if (region.includes("北海道") || region.includes("宫城")) return "北海道东北";
  if (region.includes("广岛") || region.includes("冈山") || region.includes("爱媛") || region.includes("香川")) return "中国四国";
  return region;
}

export function LanguageSchoolList() {
  const [query, setQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // 地域统计 — 用大区
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of languageSchools) {
      const bucket = getRegionBucket(s.region);
      counts[bucket] = (counts[bucket] || 0) + 1;
    }
    return counts;
  }, []);

  const regionOptions = useMemo(() =>
    Object.entries(regionCounts).map(([key, count]) => ({ key, label: key, count })),
  [regionCounts]);

  // 筛选
  const filteredSchools = useMemo(() => {
    let list = languageSchools;

    if (regionFilter !== "all") {
      list = list.filter((s) => getRegionBucket(s.region) === regionFilter);
    }

    if (query.trim().length >= 1) {
      const q = normalize(query);
      list = list.filter((s) => {
        const target = normalize(
          s.name + s.nameJa + s.location + s.highlights + s.region +
          s.programs.map((p) => p.name + p.description).join(" ") +
          s.features.join(" ") + s.suitableFor.join(" ")
        );
        return target.includes(q);
      });
    }

    return list;
  }, [query, regionFilter]);

  useEffect(() => {
    if (query.trim().length >= 1) {
      setExpandedIds(new Set(filteredSchools.map((s) => s.id)));
    } else {
      setExpandedIds(new Set());
    }
  }, [query, filteredSchools]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && languageSchools.some((s) => s.id === hash)) {
      setExpandedIds((prev) => new Set(prev).add(hash));
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        const el = document.getElementById(hash);
        if (el?.tagName === "DETAILS") (el as HTMLDetailsElement).open = true;
      }, 100);
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-primary-900 text-center">日本语言学校一览</h2>
        <p className="mt-3 text-center text-zinc-500">
          覆盖日本全国{languageSchools.length}所优良校 · 点击展开查看学费、课程、签证等详细信息
        </p>

        <div className="mt-6">
          <LanguageSchoolSearchFilter
            query={query}
            regionFilter={regionFilter}
            resultCount={filteredSchools.length}
            totalCount={languageSchools.length}
            regions={regionOptions}
            onQueryChange={setQuery}
            onRegionFilterChange={setRegionFilter}
          />
        </div>

        <div className="mt-4 space-y-2">
          {filteredSchools.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-zinc-400">未找到匹配的语言学校</p>
              <p className="mt-1 text-xs text-zinc-300">试试其他关键词或调整地区筛选</p>
            </div>
          ) : (
            filteredSchools.map((school) => (
              <LanguageSchoolCard
                key={school.id}
                school={school}
                expanded={expandedIds.has(school.id)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}