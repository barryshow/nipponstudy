import Link from "next/link";
import { siteConfig } from "@/data/site";

const footerLinks = {
  快速链接: [
    { label: "语言学校", href: "/services/language-school" },
    { label: "大学院留学", href: "/services/graduate" },
    { label: "本科留学", href: "/services/undergraduate" },
    { label: "专门学校", href: "/services/vocational" },
  ],
  关于我们: [
    { label: "机构介绍", href: "/about" },
    { label: "联系咨询", href: "/contact" },
    { label: "服务总览", href: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎌</span>
              <span className="text-xl font-bold text-primary-900">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm text-zinc-600 leading-relaxed">{siteConfig.description}</p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-primary-900">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-zinc-600 hover:text-primary-700 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-primary-900">联系方式</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>电话：{siteConfig.phone}</li>
              <li>微信：{siteConfig.wechat}</li>
              <li>邮箱：{siteConfig.email}</li>
              <li>地址：{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. {siteConfig.beian}</p>
        </div>
      </div>
    </footer>
  );
}
