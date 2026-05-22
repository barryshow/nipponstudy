"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SearchDialog } from "@/components/shared/SearchDialog";

const navLinks = [
  { label: "首页", href: "/" },
  { label: "留学服务", href: "/services" },
  { label: "语言学校", href: "/services/language-school" },
  { label: "大学院", href: "/services/graduate" },
  { label: "本科留学", href: "/services/undergraduate" },
  { label: "专门学校", href: "/services/vocational" },
  { label: "留学测评", href: "/tools/school-match" },
  { label: "关于我们", href: "/about" },
  { label: "联系咨询", href: "/contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center rounded-lg p-2 text-primary-900 hover:bg-primary-50"
        aria-label={open ? "关闭菜单" : "打开菜单"}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-zinc-200 bg-white shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-zinc-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-zinc-100">
              <Button href="/contact" size="sm" className="w-full">
                免费咨询
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="text-xl font-bold text-primary-900">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(1, 7).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SearchDialog />
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 hover:text-primary-700 transition-colors"
          >
            关于我们
          </Link>
          <Button href="/contact" size="sm">
            免费咨询
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <SearchDialog />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
