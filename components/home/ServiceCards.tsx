import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { IconCard } from "@/components/shared/IconCard";
import { services } from "@/data/services";

export function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="留学服务"
          subtitle="覆盖日本留学全领域，从选校到赴日，一站式服务让你的留学之路无忧"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group">
              <IconCard
                icon={service.icon}
                title={service.title}
                description={service.subtitle}
                className="h-full group-hover:border-primary-300 group-hover:shadow-md"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
