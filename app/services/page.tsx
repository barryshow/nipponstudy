import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <section className="py-12 bg-zinc-50">
        <Container>
          <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "留学服务" }]} className="mb-4" />
          <SectionTitle
            title="留学服务"
            subtitle="覆盖日本留学全领域，从选校到赴日，一站式服务让你的留学之路无忧"
            centered={false}
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.slug} className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-8">
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h2 className="text-2xl font-bold text-primary-900">{service.title}</h2>
                <p className="mt-1 text-zinc-500">{service.subtitle}</p>
                <p className="mt-4 text-zinc-600 leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.slice(0, 3).map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-zinc-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <Button href={`/services/${service.slug}`} size="sm">了解详情</Button>
                  <Button href="/contact" variant="outline" size="sm">咨询</Button>
                </div>
              </div>
            ))}
            <div className="rounded-xl border-2 border-primary-300 bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8">
              <div className="mb-4 text-5xl">📊</div>
              <h2 className="text-2xl font-bold text-primary-900">留学背景测评</h2>
              <p className="mt-1 text-zinc-500">输入背景，智能匹配冲刺 / 稳妥 / 保底学校</p>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                完全本地规则打分，无 AI 黑箱。根据你的学术背景、语言成绩和目标方向，匹配日本大学的冲刺、稳妥、保底三类学校，为早期选校提供参考。
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                  本地规则打分，透明可解释
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                  覆盖本科 / 大学院申请
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                  121 所高度人才加分校全覆盖
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <Button href="/tools/school-match" size="sm">开始测评</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-primary-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">不确定哪个方案适合你？</h2>
            <p className="mt-3 text-primary-100">免费一对一咨询，专业顾问帮你找到最优留学路径</p>
            <Button href="/contact" variant="secondary" size="lg" className="mt-6">
              免费咨询
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
