"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { searchAll, type SearchResult } from "@/lib/search";

const typeStyles: Record<SearchResult["type"], string> = {
  vocational: "bg-blue-50 text-blue-700",
  language: "bg-green-50 text-green-700",
  university: "bg-purple-50 text-purple-700",
  service: "bg-amber-50 text-amber-700",
};

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Debounced search
  useEffect(() => {
    if (query.trim().length < 1) {
      setResults([]);
      return;
    }
    const timer = setTimeout(() => {
      setResults(searchAll(query));
    }, 150);
    return () => clearTimeout(timer);
  }, [query]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const grouped = results.reduce(
    (acc, r) => {
      if (!acc[r.type]) acc[r.type] = [];
      acc[r.type].push(r);
      return acc;
    },
    {} as Record<string, SearchResult[]>,
  );

  const typeOrder: SearchResult["type"][] = ["vocational", "language", "university", "service"];
  const typeLabels: Record<SearchResult["type"], string> = {
    vocational: "专门学校",
    language: "语言学校",
    university: "大学",
    service: "留学服务",
  };

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
  }, []);

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-400 hover:border-zinc-300 hover:text-zinc-500 transition-colors"
        aria-label="搜索"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">搜索</span>
        <kbd className="hidden rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-zinc-400 md:inline-block">
          ⌘K
        </kbd>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-[15vh]">
          <div
            ref={panelRef}
            className="w-full max-w-xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden"
          >
            {/* Input */}
            <div className="flex items-center gap-3 border-b border-zinc-200 px-5 py-3">
              <svg className="h-5 w-5 shrink-0 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜索学校、专业、关键词…（支持中日文）"
                className="flex-1 border-0 bg-transparent text-base text-zinc-900 outline-none placeholder:text-zinc-400"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-zinc-300 hover:text-zinc-500" aria-label="清除">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={close}
                className="hidden sm:inline rounded-lg border border-zinc-200 px-2 py-1 text-xs text-zinc-400 hover:text-zinc-600"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            {query.trim().length > 0 && (
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {results.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="text-zinc-400">未找到相关结果</p>
                    <p className="mt-1 text-xs text-zinc-300">试试其他关键词，或使用中日文搜索</p>
                  </div>
                ) : (
                  typeOrder.map((type) => {
                    const items = grouped[type];
                    if (!items || items.length === 0) return null;
                    return (
                      <div key={type} className="mb-2">
                        <div className="flex items-center gap-2 px-3 py-2">
                          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                            {typeLabels[type]}
                          </span>
                          <span className="text-[10px] text-zinc-300">{items.length}</span>
                        </div>
                        {items.map((r) => (
                          <Link
                            key={`${r.type}-${r.id}`}
                            href={r.href}
                            onClick={close}
                            className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-zinc-50 transition-colors group"
                          >
                            <span
                              className={`mt-0.5 shrink-0 rounded-md px-2 py-0.5 text-[10px] font-medium ${typeStyles[r.type]}`}
                            >
                              {r.typeLabel}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-semibold text-zinc-900 group-hover:text-primary-700 transition-colors">
                                {r.title}
                              </div>
                              <div className="mt-0.5 text-xs text-zinc-500">{r.subtitle}</div>
                              {r.snippet && (
                                <div className="mt-1 text-xs text-zinc-400 line-clamp-1">{r.snippet}</div>
                              )}
                            </div>
                            <svg
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-zinc-300 group-hover:text-zinc-500 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    );
                  })
                )}
              </div>
            )}

            {/* Footer hint */}
            {query.trim().length === 0 && (
              <div className="px-5 py-3 text-xs text-zinc-400 flex items-center gap-4 border-t border-zinc-100">
                <span>支持中文 / 日文搜索</span>
                <span className="text-zinc-200">·</span>
                <span>可搜索学校名、专业、特色等</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
