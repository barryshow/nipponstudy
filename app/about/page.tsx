import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { StatCard } from "@/components/shared/StatCard";
import { siteConfig } from "@/data/site";

const stats = [
  { value: "多阶段", label: "升学路径覆盖" },
  { value: "多类型", label: "院校信息整理" },
  { value: "1对1", label: "个性化规划" },
  { value: "持续", label: "申请进度跟进" },
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
              {siteConfig.name} · {siteConfig.tagline}
            </p>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              我们专注于日本留学规划与申请咨询，围绕学生的学历背景、语言能力、专业方向和预算情况，提供更匹配的升学路径建议。
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              网站主要提供留学信息、院校检索、费用参考和智能匹配工具。具体咨询以表单提交为入口，顾问会根据学生填写的信息主动联系，进一步确认需求并给出建议。
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              我们持续关注日本入管政策、各校招生动态以及中日两国教育体系差异，帮助学生和家长在申请前更清楚地了解选择、风险和准备重点。
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
