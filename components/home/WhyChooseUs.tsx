import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { IconCard } from "@/components/shared/IconCard";
import { whyChooseUs } from "@/data/process";

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-zinc-50">
      <Container>
        <SectionTitle
          title="为什么选择我们"
          subtitle="六大优势，让你的留学之路更有保障"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <IconCard
              key={item.title}
              icon=""
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
