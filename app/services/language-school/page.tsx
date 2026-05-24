import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { languageSchools } from "@/data/schools";
import { LanguageSchoolList } from "@/components/language/LanguageSchoolList";

const regionGroups = [
  { label: "东京圈", emoji: "🗼", keywords: ["东京", "神奈川", "埼玉", "茨城", "千叶", "山梨"] },
  { label: "关西", emoji: "🏯", keywords: ["大阪", "京都", "神户"] },
  { label: "中部", emoji: "🏔️", keywords: ["名古屋", "静冈", "长野"] },
  { label: "九州冲绳", emoji: "🌴", keywords: ["福冈", "熊本", "冲绳"] },
  { label: "北海道东北", emoji: "⛄", keywords: ["北海道", "宫城"] },
  { label: "中国四国", emoji: "🌸", keywords: ["广岛", "冈山", "爱媛", "香川"] },
];

export default function LanguageSchoolPage() {
  const service = services.find((s) => s.slug === "language-school")!;

  return (
    <>
      {/* 标题区 */}
      <section className="py-12 bg-zinc-50">
        <Container>
          <Breadcrumb
            items={[{ label: "首页", href: "/" }, { label: "留学服务", href: "/services" }, { label: service.title }]}
            className="mb-4"
          />
          <div className="max-w-3xl">
            <div className="mb-4 text-5xl">{service.icon}</div>
            <h1 className="text-4xl font-bold text-primary-900">{service.title}</h1>
            <p className="mt-2 text-xl text-zinc-500">{service.subtitle}</p>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">{service.description}</p>
          </div>
        </Container>
      </section>

      {/* 服务亮点 */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle title="服务亮点" centered={false} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feat) => (
              <div key={feat} className="flex items-center gap-3 rounded-lg border border-zinc-200 p-4">
                <span className="text-accent-400 text-xl">✓</span>
                <span className="font-medium text-primary-900">{feat}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 路径说明 */}
      {service.detailSections.map((section, i) => (
        <section key={section.heading} className={`py-12 ${i % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}>
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-primary-900">{section.heading}</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">{section.content}</p>
            </div>
          </Container>
        </section>
      ))}

      {/* 按地域浏览目录 — 与大学院页面对齐 */}
      <section className="py-16 bg-zinc-50">
        <Container>
          <SectionTitle title="按地区浏览语言学校" subtitle={`覆盖日本全国6大地区 · 点击展开查看各校详情`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regionGroups.map((rg) => {
              const schools = languageSchools.filter((s) =>
                rg.keywords.some((kw) => s.region.includes(kw) || s.location.includes(kw))
              );
              return (
                <details key={rg.label} className="group rounded-xl border border-zinc-200 bg-white hover:border-primary-200 transition-colors">
                  <summary className="cursor-pointer p-4 select-none flex items-center gap-2">
                    <span className="text-xl">{rg.emoji}</span>
                    <span className="text-sm font-bold text-primary-900">{rg.label}</span>
                    <span className="text-xs text-zinc-400 ml-auto">{schools.length}所学校</span>
                  </summary>
                  <div className="px-4 pb-4 border-t border-zinc-100 pt-3 space-y-2 max-h-64 overflow-y-auto">
                    {schools.map((school) => (
                      <a
                        key={school.id}
                        href={`#${school.id}`}
                        className="block rounded-lg hover:bg-primary-50 p-2 -mx-2 transition-colors"
                      >
                        <div className="text-xs text-primary-600 font-medium">{school.region} · {school.location}</div>
                        <div className="text-sm font-semibold text-zinc-800">{school.name}</div>
                        <div className="text-xs text-zinc-400 mt-0.5">{school.tuition} · {school.programs.length}个课程</div>
                      </a>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 统一语言学校列表 — 搜索筛选 + 详情 */}
      <LanguageSchoolList />

      {/* CTA */}
      <section className="py-16 bg-primary-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">开始你的日本留学之旅</h2>
            <p className="mt-3 text-primary-100">免费咨询，获取专属语言学校选校建议</p>
            <Button href="/contact" variant="secondary" size="lg" className="mt-6">立即咨询</Button>
          </div>
        </Container>
      </section>
    </>
  );
}