import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { StatCard } from "@/components/shared/StatCard";
import { siteConfig } from "@/data/site";

const stats = [
  { value: "50+", label: "合作院校" },
  { value: "500+", label: "成功案例" },
  { value: "100%", label: "在留资格通过率" },
  { value: "2023年", label: "创立至今" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-12 bg-zinc-50">
        <Container>
          <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "关于我们" }]} className="mb-4" />
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-primary-900">关于我们</h1>
            <p className="mt-2 text-lg text-zinc-500">
              {siteConfig.companyName} · {siteConfig.tagline}
            </p>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              {siteConfig.companyName}创立于{siteConfig.founded}，是一家专注于国际教育服务的综合性机构。日本留学业务部是{siteConfig.companyName}旗下核心部门，负责所有日本留学相关的咨询中介、信息资讯与赴日前後支持服务。
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              我们致力于为中国学生和家长提供最专业、最全面、最透明的日本留学信息。从语言学校到大学院，从专门学校到本科申请，从签证办理到赴日后的生活支援——我们陪伴每一位学生走好留学路上的每一步。
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              团队成员均具有日本留学或长期在日生活经验，深谙日本入管政策、各校招生动态以及中日两国教育体系差异。我们不仅做申请，更做信息——持续追踪各大学官网数据，整理出最准确、最实时的留学情报。
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-zinc-50">
        <Container>
          <SectionTitle title="我们的理念" centered={false} />
          <div className="grid gap-8 lg:grid-cols-3 max-w-4xl">
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-3">🎯 专业</h3>
              <p className="text-zinc-600 leading-relaxed">
                持续跟踪日本入管政策和各校招生动态，用专业知识和丰富经验为学生提供最准确的留学方案。
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-3">🔍 透明</h3>
              <p className="text-zinc-600 leading-relaxed">
                所有申请流程和费用公开透明，让学生和家长在整个留学准备过程中安心放心。
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-3">🤝 陪伴</h3>
              <p className="text-zinc-600 leading-relaxed">
                留学不只是拿到签证，我们关心每一位学生在日本的成长和发展，提供长期跟踪支持。
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
