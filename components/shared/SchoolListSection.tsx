import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

interface SchoolListSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function SchoolListSection({ title, subtitle, children }: SchoolListSectionProps) {
  return (
    <section className="py-16 bg-zinc-50">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid gap-6 lg:grid-cols-2">{children}</div>
      </Container>
    </section>
  );
}
