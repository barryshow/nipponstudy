import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { applicationProcess } from "@/data/process";

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="申请流程"
          subtitle="从咨询到入学，清晰的6步流程，每一步都有我们陪伴"
        />
        <div className="relative">
          {/* Vertical line on mobile, horizontal on desktop */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-primary-200 lg:left-1/2 lg:-ml-px" />
          <div className="space-y-10 lg:space-y-0">
            {applicationProcess.map((step, i) => (
              <div key={step.step} className={`relative flex items-start gap-6 lg:flex lg:items-center lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                {/* Content */}
                <div className={`flex-1 pl-12 lg:pl-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                  <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                    <div className={`inline-flex items-center gap-2 text-sm font-semibold text-accent-400 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <span>步骤 {step.step}</span>
                      <span className="text-xs text-zinc-400">| {step.duration}</span>
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-primary-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {/* Circle on the line */}
                <div className="absolute left-[21px] flex h-3 w-3 shrink-0 rounded-full border-2 border-primary-700 bg-white lg:relative lg:left-0 lg:z-10 lg:h-4 lg:w-4" />
                {/* Empty spacer for desktop */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
