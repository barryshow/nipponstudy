import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { SchoolListSection } from "@/components/shared/SchoolListSection";
import { UndergraduateAdmissionDetail } from "@/components/shared/UndergraduateAdmissionDetail";
import { services } from "@/data/services";
import { nationalUniversities, privateUniversities } from "@/data/schools";

export default function UndergraduatePage() {
  const service = services.find((s) => s.slug === "undergraduate")!;
  const allUniversities = [...nationalUniversities, ...privateUniversities];

  return (
    <>
      <section className="py-12 bg-zinc-50">
        <Container>
          <Breadcrumb
            items={[
              { label: "首页", href: "/" },
              { label: "留学服务", href: "/services" },
              { label: service.title },
            ]}
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

      <SchoolListSection
        title="可申请的日本大学"
        subtitle="含国公立和私立名校，SGU英文项目可无日语申请"
      >
        {allUniversities.filter(u => u.programs.some(p => p.level === "undergraduate")).map((uni) => (
          <div key={uni.id} className="rounded-xl border border-zinc-200 bg-white p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-primary-900">{uni.name}</h3>
                <p className="text-sm text-zinc-500">{uni.nameJa}</p>
              </div>
              <span className="shrink-0 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">
                {uni.type === "national" ? "国立" : "私立"}
              </span>
            </div>
            <p className="mt-1 text-sm text-zinc-500">📍 {uni.location}</p>
            <p className="mt-3 text-sm font-medium text-primary-800">{uni.highlights}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">学费：{uni.tuition}</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">GPA：{uni.gpaRequirement}</span>
              <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">日语：{uni.japaneseRequirement}</span>
            </div>
            <div className="mt-4 space-y-2">
              {uni.programs.filter(p => p.level === "undergraduate").map((p) => (
                <div key={p.name} className="rounded-lg bg-zinc-50 p-3">
                  <div className="text-sm font-semibold text-primary-900">{p.name}</div>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{p.description}</p>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {p.features.map((f) => (
                      <span key={f} className="rounded bg-accent-50 px-1.5 py-0.5 text-xs text-accent-600">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </SchoolListSection>

      <UndergraduateAdmissionDetail />

      <section className="py-16 bg-primary-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">想去日本读本科？</h2>
            <p className="mt-3 text-primary-100">从高中到日本名校，我们帮你走好每一步</p>
            <Button href="/contact" variant="secondary" size="lg" className="mt-6">
              免费规划
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
