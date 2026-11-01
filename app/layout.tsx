import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "日本留学咨询 | 专业日本留学咨询服务",
    template: "%s | 日本留学咨询",
  },
  description:
    "专业日本留学咨询，覆盖语言学校、大学院、本科、专门学校申请，提供签证指导与费用评估。",
  keywords: "日本留学,日本语言学校,日本大学院,日本本科,专门学校,签证,费用评估",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col">
        <a className="skip-link" href="#main-content">跳到主要内容</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
